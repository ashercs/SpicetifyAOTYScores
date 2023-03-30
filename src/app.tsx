// If anyone is reading this on the Github the reason his file has over 270 lines of comments
// is because I don't remember a lot of stuff that I code so I just wrote things to explain it to myself
// if I cannot remember. So if you are reading the comments to actually find out what some of the code
// does don't expect the best explanations, they are basically just poorly written reminders for myself

// Importing module to use for parsing HTML
import cheerio from "cheerio";

// Setup.
const { Player } = Spicetify;
let prevTrack: string;
let prevRequest: number;
let isRefreshing = "False";

// Button cooldown is set to 5 seconds just to avoid hitting the rate limit.
const RATE_LIMIT = 5000;

// Refresh icon
const REFRESH_ICON = `
<?xml version="1.0" ?><svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></svg>`;
new Spicetify.Topbar.Button(
  "RefreshScore",
  REFRESH_ICON,
  refreshrequest,
  false
);

// Clear icon
const CLEAR_ICON = `
<?xml version="1.0" ?><svg fill="white" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M 8.386719 1.800781 L 7.785156 2.398438 L 3.601562 2.398438 L 3.601562 4.800781 L 20.398438 4.800781 L 20.398438 2.398438 L 16.214844 2.398438 L 15.613281 1.800781 L 15.015625 1.199219 L 8.984375 1.199219 Z M 8.386719 1.800781 M 4.804688 13.402344 C 4.816406 20.230469 4.816406 20.816406 4.867188 20.96875 C 4.964844 21.300781 5.046875 21.480469 5.191406 21.699219 C 5.527344 22.222656 5.996094 22.554688 6.644531 22.734375 C 6.808594 22.78125 7.261719 22.785156 12 22.785156 C 16.738281 22.785156 17.191406 22.78125 17.355469 22.734375 C 18.003906 22.554688 18.472656 22.222656 18.808594 21.699219 C 18.953125 21.480469 19.035156 21.300781 19.132812 20.96875 C 19.183594 20.816406 19.183594 20.230469 19.195312 13.402344 L 19.199219 6 L 4.800781 6 Z M 4.804688 13.402344 "/></svg>`;
new Spicetify.Topbar.Button("ClearScore", CLEAR_ICON, clearRating, false);

// Setting up HTML elements.
let ratingContainer: HTMLAnchorElement;
let songRating: HTMLAnchorElement;
let songTitleBox: HTMLAnchorElement | null;
let songTitle: HTMLAnchorElement;
let infoContainer: HTMLElement | null;

// Function to determine how many times a certain string appears in another string.
// Used in part of a fix to more accurately get releases.
function countInstances(string: string, word: string) {
  return string.split(word).length - 1;
}

// Clearing the displayed ratings.
function clearRating() {
  if (infoContainer && ratingContainer) {
    try {
      if (songTitleBox) {
        songTitleBox.removeChild(songRating);
        songTitleBox.children[0].style.fontWeight = 400;
      }
      infoContainer.removeChild(ratingContainer);

      // Fix for duplicate scores.
      for (
        let i = 0;
        i < document.getElementsByClassName("scoreElement").length;
        i++
      ) {
        document.getElementsByClassName("scoreElement")[i].remove();
      }
      if (document.getElementsByClassName("songScore")[0]) {
        for (
          let i = 0;
          i < document.getElementsByClassName("songScore").length;
          i++
        ) {
          document.getElementsByClassName("songScore")[i].remove();
        }
      }
    } catch (e) {}
  }
}

// Function that returns an integer showing the percent of how similar two strings are.
// Used later on for if an artist's name is not the same on AOTY and Spotify it will get the closest one.
function similarity(s1: any, s2: any) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

function editDistance(s1: any, s2: any) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

// Checking if something is a number or not.
function isNumeric(value: any) {
  return /^-?\d+$/.test(value);
}

// Fetch function.
export async function fetch(url: string) {
  const cosmosReq = () =>
    new Promise<string>((resolve, reject) => {
      const request = JSON.stringify({
        method: "GET",
        uri: url,
        headers: {
          "user-agent": "Mozilla/5.0",
          "User-Agent": "Mozilla/5.0",
        },
      });

      (window as any).sendCosmosRequest({
        request,
        persistent: false,
        onSuccess: resolve,
        onFailure: reject,
      });
    });

  const data = await cosmosReq();

  return JSON.parse(data);
}

// Sleep function
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Returning Api error.
export class ApiError extends Error {
  constructor(message: string) {
    super(message);
  }
}

// Function for fetching aoty URL from album/artist name then parsing the data.
async function getPageLink(artist: string, album: string) {
  let song = artist + " " + album;
  // This was changed to just AOTY's search due to duckduckgo being quite inaccurate.
  const url = `https://www.albumoftheyear.org/search/albums/?q=${encodeURIComponent(
    song
  )}`;
  console.log(url);
  //
  // Getting the AOTY url from the DuckDuckGo search.
  const res = await fetch(url);
  // const reg = /\?uddg=(.*?)&rut=/;
  console.log(res); // Adding soon: retry if status code != 200
  // const aotyUrl = decodeURIComponent(res.body.match(reg)[1]);

  let $$ = cheerio.load(res.body);

  // If this URL is not changed it will know there has been an error
  let aotyUrl = "https://www.albumoftheyear.orgundefined";

  // A lot of JSONS. All used for finding the album most similar to what it is searching for if the exact cannot be found.
  // For example one Rüfüs Du Sol album was released just under "Rüfüs" on AOTY
  // This means the normal search prompt would return nothing.
  // This is fixed by searching only the album title and getting the album with the most similar artist name
  // Only gets it if it is more than 30% similar.
  let SimToArtistJSON = "{\n";
  let ArtistToUrlJSON = "{\n";
  let ArtistToSimJSON = "{\n";
  let ArtistToAlbumJSON = "{\n";
  let SimToAlbumJSON = "{\n";
  let AlbumToUrlJSON = "{\n";

  // Arrays
  let ArtistList = [];
  let AlbumList = [];

  // Loop for the amount of albums there are on the page, adds all artist and album names on the page to an array.
  for (let i = 0; i < $$(".artistTitle").length; i++) {
    ArtistList.push($$(".artistTitle")[i].children[0].data);
    AlbumList.push($$(".albumTitle")[i].children[0].data);
  }

  // If there is just one result it will just pick that and ignore the other steps.
  if (ArtistList.length == 1) {
    if (
      $$(".artistTitle")[0].parentNode.parentNode.children[2]["attribs"]["href"]
    ) {
      aotyUrl =
        "https://www.albumoftheyear.org" +
        $$(".artistTitle")[0].parentNode.parentNode.children[2]["attribs"][
          "href"
        ];
    }
  }
  // If there is more than one result.
  if (ArtistList.length > 1) {
    // Array that will have all the similarity numbers.
    let ArtistSimArray = [];

    // Loop for the amount of releases there are.
    for (let h = 0; h < ArtistList.length; h++) {
      // Changed i to go down from 60 to 0 instead of up from 0 to 60 because
      // in JSONs if there are duplicate values it will just pick the last one of it in
      // the list, and since AOTY search results are sorted by popularity it would pick the
      // least popular one, now if there are duplicate values it prioritizes the most popular one.
      let i = ArtistList.length - (h + 1);

      // If it isn't the last iteration.
      if (i !== 0) {
        // JSON that has similarities and artist names. Example:
        // "0.43": "Frank Ocean"
        SimToArtistJSON += `"${similarity(ArtistList[i], artist)}": "${
          ArtistList[i]
        }",\n`;

        // JSON that has artist names and album URLs. Example:
        // "King Crimson": "https://www.albumoftheyear.org/album/5929-king-crimson-in-the-court-of-the-crimson-king.php"
        ArtistToUrlJSON += `"${ArtistList[i]}": "${
          $$(".artistTitle")[i].parentNode.parentNode.children[2]["attribs"][
            "href"
          ]
        }",\n`;

        // JSON that has artist names and similarities. Example:
        // "Frank Ocean": "0.43"
        ArtistToSimJSON += `"${ArtistList[i]}": "${similarity(
          ArtistList[i],
          artist
        )}",\n`;

        // JSON that has artist names and album names. Example:
        // "Stevie Wonder": "Songs In The Key Of Life"
        // (This one actually isn't a JSON, not gonna change it though so the names are more consistent.)
        ArtistToAlbumJSON += `"${ArtistList[i]}": ${AlbumList[i]}\n`;

        // Array that will contain all artist similarity numbers.
        ArtistSimArray.push(similarity(ArtistList[i], artist));

        // JSON that has album names and album URLs. Example:
        // "Songs In The Key Of Life": "https://www.albumoftheyear.org/album/5600-stevie-wonder-songs-in-the-key-of-life.php"
        AlbumToUrlJSON += `"${AlbumList[i].replaceAll('"', '\\"')}": "${
          $$(".artistTitle")[i].parentNode.parentNode.children[2]["attribs"][
            "href"
          ]
        }",\n`;
      }

      // If it is the last iteration.
      if (i == 0) {
        // All JSONs are the same as the previously mentioned ones, only difference is they don't end in
        // commas and there is a } at the end to make it a valid JSON.
        SimToArtistJSON += `"${similarity(ArtistList[i], artist)}": "${
          ArtistList[i]
        }"\n}`;
        ArtistToUrlJSON += `"${ArtistList[i]}": "${
          $$(".artistTitle")[i].parentNode.parentNode.children[2]["attribs"][
            "href"
          ]
        }"\n}`;
        ArtistToSimJSON += `"${ArtistList[i]}": "${similarity(
          ArtistList[i],
          artist
        )}"\n}`;
        ArtistToAlbumJSON += `"${ArtistList[i]}": ${AlbumList[i]}`;
        AlbumToUrlJSON += `"${AlbumList[i].replaceAll('"', '\\"')}": "${
          $$(".artistTitle")[i].parentNode.parentNode.children[2]["attribs"][
            "href"
          ]
        }"\n}`;
        ArtistSimArray.push(similarity(ArtistList[i], artist));
      }
    }
    // Arrays for in the case of dupe artists.
    let DupeAristArray = [];
    let DupeArtistSimArr = [];

    // Gets the highest value of similarity from the list then uses that to get the artist name
    // for example if the highest similarity is "0.76" and the most similar name is Marvin Gaye
    // the JSON would look like this "0.76": "Marvin Gaye" and then using the highest similarity it outputs the artist name.
    let MostSimArtist =
      JSON.parse(SimToArtistJSON)[
        ArtistSimArray.reduce((a, b) => Math.max(a, b), -Infinity)
      ];

    // Splits the artist & album "JSON" by lines so it is easier to work with and to know how many times to loop.
    var lines = ArtistToAlbumJSON.split("\n");

    // If the most similar artist name shows up more than once in the artist & album JSON.
    if (countInstances(ArtistToUrlJSON, MostSimArtist) > 1) {
      // Loop for the amount of lines.
      for (let h = 0; h < lines.length; h++) {
        let line = lines[h];

        // Checks if that line contains the most similar artist.
        if (line.indexOf(`"${MostSimArtist}":`) != -1) {
          // If it does it adds the album name to an array.
          DupeAristArray.push(line.split(`"${MostSimArtist}": `)[1]);
        }
      }
    }

    // If a singular artist has more than 1 song on the page.
    if (DupeAristArray.length > 1) {
      // Loop for the amount of albums that artist has on the page.
      for (let a = 0; a < DupeAristArray.length; a++) {
        // If it is not the last iteration
        if (a !== DupeAristArray.length - 1) {
          SimToAlbumJSON += `"${similarity(DupeAristArray[a], album)}": "${
            // Replace quotation marks in album titles since this messes with the JSON.
            DupeAristArray[a].replaceAll('"', '\\"')
          }",\n`;
        }
        // If it is the last iteration.
        if (a == DupeAristArray.length - 1) {
          SimToAlbumJSON += `"${similarity(DupeAristArray[a], album)}": "${
            // Replace quotation marks in album titles since this messes with the JSON.
            DupeAristArray[a].replaceAll('"', '\\"')
          }"\n}`;
        }

        // Add similarity of duplicate artist albums and album.
        DupeArtistSimArr.push(similarity(DupeAristArray[a], album));
      }
    }

    if (DupeAristArray.length >= 1) {
      // Most similar album of the multiple albums from one artist.
      let MostSimAlbum =
        JSON.parse(SimToAlbumJSON)[
          DupeArtistSimArr.reduce((a, b) => Math.max(a, b), -Infinity)
        ];

      // Changes the URL.
      aotyUrl =
        "https://www.albumoftheyear.org" +
        JSON.parse(AlbumToUrlJSON)[MostSimAlbum];
    }

    // If the artist has only 1 album on the page.
    if (DupeAristArray.length < 1) {
      // If the artist name is at least 30% similar.
      if (JSON.parse(ArtistToSimJSON)[MostSimArtist] > 0.3) {
        aotyUrl =
          "https://www.albumoftheyear.org" +
          JSON.parse(ArtistToUrlJSON)[MostSimArtist];
      }
    }
  }
  // Old method to get the URL:
  // let aotyUrl: any =
  //   "https://www.albumoftheyear.org" +
  //   $$(
  //     "#centerContent > div > div:nth-child(3) > div:nth-child(2) > a:nth-child(3)"
  //   ).attr("href");

  // If no URL was able to be obtained.
  if (aotyUrl == "https://www.albumoftheyear.orgundefined") {
    // If page did not load.
    if (res.status == 500) {
      // Wait 3 seconds and resend request.
      sleep(3000);
      Spicetify.showNotification(`Request failed, retrying.`);
      getPageLink(artist, album);
    }
    if (res.status == 200) {
      // If the server did send a response but URL was still not able to be obtained.
      // Try searching again but only for the album and then get the artist name most similar in the case
      // the artist has a different name on AOTY.
      Spicetify.showNotification(
        `No release found on AOTY, searching just the album title without artist name (may return inaccurate results)`
      );
      const url2 = `https://www.albumoftheyear.org/search/albums/?q=${encodeURIComponent(
        album
      )}`;
      let res2 = await fetch(url2);

      $$ = cheerio.load(res2.body);

      // A lot of JSONS. All used for finding the album most similar to what it is searching for if the exact cannot be found.
      // For example one Rüfüs Du Sol album was released just under "Rüfüs" on AOTY
      // This means the normal search prompt would return nothing.
      // This is fixed by searching only the album title and getting the album with the most similar artist name
      // Only gets it if it is more than 30% similar.
      let SimToArtistJSON = "{\n";
      let ArtistToUrlJSON = "{\n";
      let ArtistToSimJSON = "{\n";
      let ArtistToAlbumJSON = "{\n";
      let SimToAlbumJSON = "{\n";
      let AlbumToUrlJSON = "{\n";

      // Arrays
      let ArtistList = [];
      let AlbumList = [];

      // Loop for the amount of albums there are on the page, adds all artist and album names on the page to an array.
      for (let i = 0; i < $$(".artistTitle").length; i++) {
        ArtistList.push($$(".artistTitle")[i].children[0].data);
        AlbumList.push($$(".albumTitle")[i].children[0].data);
      }

      // If there is just one result it will just pick that and ignore the other steps.
      if (ArtistList.length == 1) {
        if (
          $$(".artistTitle")[0].parentNode.parentNode.children[2]["attribs"][
            "href"
          ]
        ) {
          aotyUrl =
            "https://www.albumoftheyear.org" +
            $$(".artistTitle")[0].parentNode.parentNode.children[2]["attribs"][
              "href"
            ];
        }
      }
      // If there is more than one result.
      if (ArtistList.length > 1) {
        // Array that will have all the similarity numbers.
        let ArtistSimArray = [];

        // Loop for the amount of releases there are.
        for (let h = 0; h < ArtistList.length; h++) {
          // Changed i to go down from 60 to 0 instead of up from 0 to 60 because
          // in JSONs if there are duplicate values it will just pick the last one of it in
          // the list, and since AOTY search results are sorted by popularity it would pick the
          // least popular one, now if there are duplicate values it prioritizes the most popular one.
          let i = ArtistList.length - (h + 1);

          // If it isn't the last iteration.
          if (i !== 0) {
            // JSON that has similarities and artist names. Example:
            // "0.43": "Frank Ocean"
            SimToArtistJSON += `"${similarity(ArtistList[i], artist)}": "${
              ArtistList[i]
            }",\n`;

            // JSON that has artist names and album URLs. Example:
            // "King Crimson": "https://www.albumoftheyear.org/album/5929-king-crimson-in-the-court-of-the-crimson-king.php"
            ArtistToUrlJSON += `"${ArtistList[i]}": "${
              $$(".artistTitle")[i].parentNode.parentNode.children[2][
                "attribs"
              ]["href"]
            }",\n`;

            // JSON that has artist names and similarities. Example:
            // "Frank Ocean": "0.43"
            ArtistToSimJSON += `"${ArtistList[i]}": "${similarity(
              ArtistList[i],
              artist
            )}",\n`;

            // JSON that has artist names and album names. Example:
            // "Stevie Wonder": "Songs In The Key Of Life"
            // (This one actually isn't a JSON, not gonna change it though so the names are more consistent.)
            ArtistToAlbumJSON += `"${ArtistList[i]}": ${AlbumList[i]}\n`;

            // Array that will contain all artist similarity numbers.
            ArtistSimArray.push(similarity(ArtistList[i], artist));

            // JSON that has album names and album URLs. Example:
            // "Songs In The Key Of Life": "https://www.albumoftheyear.org/album/5600-stevie-wonder-songs-in-the-key-of-life.php"
            AlbumToUrlJSON += `"${AlbumList[i].replaceAll('"', '\\"')}": "${
              $$(".artistTitle")[i].parentNode.parentNode.children[2][
                "attribs"
              ]["href"]
            }",\n`;
          }

          // If it is the last iteration.
          if (i == 0) {
            // All JSONs are the same as the previously mentioned ones, only difference is they don't end in
            // commas and there is a } at the end to make it a valid JSON.
            SimToArtistJSON += `"${similarity(ArtistList[i], artist)}": "${
              ArtistList[i]
            }"\n}`;
            ArtistToUrlJSON += `"${ArtistList[i]}": "${
              $$(".artistTitle")[i].parentNode.parentNode.children[2][
                "attribs"
              ]["href"]
            }"\n}`;
            ArtistToSimJSON += `"${ArtistList[i]}": "${similarity(
              ArtistList[i],
              artist
            )}"\n}`;
            ArtistToAlbumJSON += `"${ArtistList[i]}": ${AlbumList[i]}`;
            AlbumToUrlJSON += `"${AlbumList[i].replaceAll('"', '\\"')}": "${
              $$(".artistTitle")[i].parentNode.parentNode.children[2][
                "attribs"
              ]["href"]
            }"\n}`;
            ArtistSimArray.push(similarity(ArtistList[i], artist));
          }
        }
        // Arrays for in the case of dupe artists.
        let DupeAristArray = [];
        let DupeArtistSimArr = [];

        // Gets the highest value of similarity from the list then uses that to get the artist name
        // for example if the highest similarity is "0.76" and the most similar name is Marvin Gaye
        // the JSON would look like this "0.76": "Marvin Gaye" and then using the highest similarity it outputs the artist name.
        let MostSimArtist =
          JSON.parse(SimToArtistJSON)[
            ArtistSimArray.reduce((a, b) => Math.max(a, b), -Infinity)
          ];

        // Splits the artist & album "JSON" by lines so it is easier to work with and to know how many times to loop.
        var lines = ArtistToAlbumJSON.split("\n");

        // If the most similar artist name shows up more than once in the artist & album JSON.
        if (countInstances(ArtistToUrlJSON, MostSimArtist) > 1) {
          // Loop for the amount of lines.
          for (let h = 0; h < lines.length; h++) {
            let line = lines[h];

            // Checks if that line contains the most similar artist.
            if (line.indexOf(`"${MostSimArtist}":`) != -1) {
              // If it does it adds the album name to an array.
              DupeAristArray.push(line.split(`"${MostSimArtist}": `)[1]);
            }
          }
        }

        // If a singular artist has more than 1 song on the page.
        if (DupeAristArray.length > 1) {
          // Loop for the amount of albums that artist has on the page.
          for (let a = 0; a < DupeAristArray.length; a++) {
            // If it is not the last iteration
            if (a !== DupeAristArray.length - 1) {
              SimToAlbumJSON += `"${similarity(DupeAristArray[a], album)}": "${
                // Replace quotation marks in album titles since this messes with the JSON.
                DupeAristArray[a].replaceAll('"', '\\"')
              }",\n`;
            }
            // If it is the last iteration.
            if (a == DupeAristArray.length - 1) {
              SimToAlbumJSON += `"${similarity(DupeAristArray[a], album)}": "${
                // Replace quotation marks in album titles since this messes with the JSON.
                DupeAristArray[a].replaceAll('"', '\\"')
              }"\n}`;
            }

            // Add similarity of duplicate artist albums and album.
            DupeArtistSimArr.push(similarity(DupeAristArray[a], album));
          }
        }

        if (DupeAristArray.length >= 1) {
          // Most similar album of the multiple albums from one artist.
          let MostSimAlbum =
            JSON.parse(SimToAlbumJSON)[
              DupeArtistSimArr.reduce((a, b) => Math.max(a, b), -Infinity)
            ];

          // Changes the URL.
          aotyUrl =
            "https://www.albumoftheyear.org" +
            JSON.parse(AlbumToUrlJSON)[MostSimAlbum];
        }

        // If the artist has only 1 album on the page.
        if (DupeAristArray.length < 1) {
          // If the artist name is at least 30% similar.
          if (JSON.parse(ArtistToSimJSON)[MostSimArtist] > 0.3) {
            aotyUrl =
              "https://www.albumoftheyear.org" +
              JSON.parse(ArtistToUrlJSON)[MostSimArtist];
          }
        }
      }
      if (
        aotyUrl == "https://www.albumoftheyear.orgundefined" &&
        res.status == 200
      ) {
        sleep(2000);
        Spicetify.showNotification(`No release found.`);
        //   Spicetify.showNotification(`No release found on AOTY, searching with DuckDuckGo (may return inaccurate results)`);
        //   const ddgurl = `https://duckduckgo.com/?q=%5Csite%3Aalbumoftheyear.org%2Falbum%2F%20${encodeURIComponent(album)}%20%2B-reviews`;
        //   const ddgres = await fetch(ddgurl);
        //   const reg = /\?uddg=(.*?)&rut=/;
        //   console.log(decodeURIComponent(ddgres.body.match(reg)[1]))
        //   aotyUrl = decodeURIComponent(ddgres.body.match(reg)[1]);
        //   console.log('hello')
      }
    }
  }
  console.log(aotyUrl);
  let res2 = await fetch(aotyUrl);

  // Parsing the HTML to find data to be used.
  const $ = cheerio.load(res2.body);

  // Seeing the number of reviews an album has via CSS selector.
  let ratingcount = $(
    "#centerContent > div.fullWidth > div:nth-child(4) > div.albumUserScoreBox > div.text.numReviews > a > strong"
  ).text()!;

  // Seeing if the tracklist has track rating enabled via checking if any tracks have a number rating next to them
  // This has to be done because not every release has track rating enabled.
  let checkIfTrackRatings = $(
    "#tracklist > div.trackList > table > tbody > tr:nth-child(1) > td.trackRating > span"
  ).text();

  // hasRatings is False by default and changes to True if a track score is detected.
  let hasRatings = "False";

  // Setting up JSONs to be parsed to return information.
  let JSONSongUrls = "";
  let JSONTrackRatings = "";
  let JSONRatingCount = "";
  let songRatingsJSON = "{\n";
  let songUrlJSON = "{\n";
  let songRatingCountJSON = "{\n";

  // If tracklist has ratings this will run.
  let tracklistcount;
  let longestdisc = 0;
  let testing;
  if (isNumeric(checkIfTrackRatings) == true) {
    // Set hasRatings to true because a tracklist has ratings
    hasRatings = "True";
    let h = 1;
    let numofdiscs = $(".discNumber");

    // Finding the amount of tracks the longest disc in an album has.
    // This was a fix for albums that have longer second or third discs than first discs.
    var arr = [];
    if (numofdiscs.length > 0) {
      for (let i = 0; i < numofdiscs.length; i++) {
        testing = $(".rightBox").find(".trackListTable").get(i);
        tracklistcount = $(testing).children("tbody").children("tr").length;
        arr.push(tracklistcount);
      }
      longestdisc = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    }

    // If the album is just one disc it will not check for the longest.
    if (numofdiscs.length <= 0) {
      testing = $(".rightBox").find(".trackListTable").get(0);
      tracklistcount = $(testing).children("tbody").children("tr").length;
      longestdisc = tracklistcount;
    }
    // This will loop for the amount of tracks in the tracklist.
    // Or in the case of multiple discs it will loop the amount of times of the longest disc.
    let ii;
    let dc;
    let i = 0;
    if (numofdiscs.length == 0) {
      ii = 0;
      dc = 0;
    }
    if (numofdiscs.length > 0) {
      ii = 1;
    }
    for (i = Number(ii); i <= numofdiscs.length; i++) {
      let trackcounter = 0;
      if (numofdiscs.length > 0) {
        dc = i - 1;
      }
      // Getting the amount of tracks in a disc.
      testing = $(".rightBox").find(".trackListTable").get(Number(dc));
      tracklistcount = $(testing).children("tbody").children("tr").length;

      // Setting up the JSON for data
      let trackratingbydisc = "";
      let trackurlbydisc = "";
      let trackratingcountbydisc = "";

      // Run the amount of times as the longest disc has tracks
      for (h = 0; h < longestdisc; h++) {
        trackcounter++;

        // Element where track ratings and rating counts are obtained.
        let ratingElement = $(
          `#tracklist > div.trackList > table > tbody > tr:nth-child(${trackcounter}) > td.trackRating > span`
        );
        // Element where the track URL is obtained.
        let urlElement = $(
          `#tracklist > div.trackList > table > tbody > tr:nth-child(${trackcounter}) > td.trackTitle > a`
        );
        let trbd1;
        let tubd1;

        // If there isn't the same amount of elements as the amount of discs
        // and it is not on the longest disc. (When first disc is longer than the second)
        if (
          ratingElement.length !== numofdiscs.length &&
          tracklistcount !== longestdisc
        ) {
          trackratingbydisc += "00&";
          trackurlbydisc += "/song/undefined";
          trackratingcountbydisc += "0 Ratings&";
        }

        // If there isn't the same amount of elements as the amount of discs
        // and you are on the longest disc. (When second disc is longer than the first)
        if (
          ratingElement.length !== numofdiscs.length &&
          tracklistcount == longestdisc
        ) {
          // The number it would normally be has to be subtracted by 1 if the second disc is longer
          // this is because there would only be 1 element instead of 2, without this the output would be undefined
          trbd1 = $(ratingElement[ratingElement.length - 1]);

          // Each bit of data is split up with a & symbol for easier parsing.
          trackratingbydisc += trbd1.text() + "&";
          tubd1 = $(urlElement[ratingElement.length - 1]);
          trackurlbydisc += tubd1.attr("href");
          trackratingcountbydisc += trbd1.attr("title") + "&";
        }

        // If there is the same amount of elements as the amount of discs.
        if (ratingElement.length == numofdiscs.length) {
          trbd1 = $(ratingElement[Number(dc)]);

          // Each bit of data is split up with a & symbol for easier parsing.
          trackratingbydisc += trbd1.text() + "&";
          tubd1 = $(urlElement[Number(dc)]);
          trackurlbydisc += tubd1.attr("href");
          trackratingcountbydisc += trbd1.attr("title") + "&";
        }
      }

      // If it is the last iteration OR there is only 1 disc
      // it will not add a comma to the end, without this in place there would be
      // an error parsing the JSON.
      if (dc === numofdiscs.length - 1 || numofdiscs.length == 0) {
        songRatingsJSON += `"${dc}": "` + trackratingbydisc + '"\n';
        songUrlJSON += `"${dc}": "` + trackurlbydisc + '"\n';
        songRatingCountJSON += `"${dc}": "` + trackratingcountbydisc + '"\n';
      }

      // If it isn't the last iteration it will add a comma to the end
      // without this in place there would be an error parsing the JSON.
      if (dc !== numofdiscs.length - 1 && numofdiscs.length > 0) {
        songRatingsJSON += `"${dc}": "` + trackratingbydisc + '",\n';
        songUrlJSON += `"${dc}": "` + trackurlbydisc + '",\n';
        songRatingCountJSON += `"${dc}": "` + trackratingcountbydisc + '",\n';
      }
    }

    // Adding } to the end of the JSON so it can be parsed without error.
    songRatingsJSON += "}";
    songUrlJSON += "}";
    songRatingCountJSON += "}";

    // Parsing the JSONs.
    JSONSongUrls = JSON.parse(songUrlJSON);
    JSONTrackRatings = JSON.parse(songRatingsJSON);
    JSONRatingCount = JSON.parse(songRatingCountJSON);
  }

  // Removing the comma from the rating count to later check if this equals 0 or not.
  let ratingcountint = ratingcount.replace(",", "");

  // Getting and rounding score to 2 decimals.
  let score = $(
    "#centerContent > div.fullWidth > div:nth-child(4) > div.albumUserScoreBox > div.albumUserScore > a"
  ).attr("title")!;
  let intscore = parseFloat(score);
  let finalintscore = intscore.toFixed(2);
  let roundedscore = parseFloat(finalintscore);

  // Returning all data obtained.
  return [
    roundedscore,
    ratingcount,
    aotyUrl,
    ratingcountint,
    JSONTrackRatings,
    hasRatings,
    JSONSongUrls,
    JSONRatingCount,
  ];
}

// Function that the refresh button runs.
async function refreshrequest() {
  // Get the current time.
  let now = Date.now();
  // If it has been less than 5 seconds since the last attempt at running this send notification and don't run the main function.
  if (now - prevRequest < RATE_LIMIT) {
    Spicetify.showNotification(
      `You are on cooldown. Please wait ${
        (RATE_LIMIT - (now - prevRequest)) / 1000
      } seconds to avoid hitting the rate limit.`
    );
    return;
  }

  // Fix to make it not spam.
  isRefreshing = "True";

  // Start the 5 second count.
  prevRequest = Date.now();

  // Run the main script.
  update;
}

async function update() {
  // Check if there is a track playing
  if (!Player.data.playback_id || !Player.data?.track?.metadata) return;

  // Check to see if you are replaying the same track.
  const id = Player.data.playback_id;

  // Fix to make it not spam #2.
  if (id == prevTrack && isRefreshing == "False") return;
  isRefreshing = "False";

  // Check #2 if there is a track playing, infoContainer is also used later to add the album rating text.
  // Also fix for extension not working if friends tab is closed.
  if (
    document.querySelector(
      "#main > div > div.Root__top-container.Root__top-container--right-sidebar-visible > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container"
    )
  ) {
    infoContainer = document.querySelector(
      "#main > div > div.Root__top-container.Root__top-container--right-sidebar-visible > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container"
    );
  }
  if (
    document.querySelector(
      "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container"
    )
  ) {
    infoContainer = document.querySelector(
      "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container"
    );
  }
  if (!infoContainer) return;
  clearRating();

  // Making sure the duplicate score glitch doesn't happen.
  // The cause of it was a request finishing while you have already skipped to another song.
  // This fix just makes sure there is not more than 1 score element.
  if (document.getElementsByClassName("scoreElement").length > 1) {
    clearRating;
  }
  if (document.getElementsByClassName("songScore").length > 1) {
    clearRating;
  }

  // Getting the track info from Spotify.
  let {
    title,
    album_title,
    artist_name,
    album_track_number,
    album_disc_number,
  } = Player.data.track.metadata;

  // In case the track has missing metadata.
  if (!title || !album_title || !artist_name) return;

  // Making sure to not hit AOTY's rate limit.
  // let now = Date.now();
  // if (prevRequest && now - prevRequest < RATE_LIMIT) return;
  prevTrack = id;

  try {
    // Removing any deluxes or remasters from album titles.

    // Made it so it would not remove the () for Weezer due to a request since almost all of
    // Weezer's albums are just named Weezer followed by (insertcolorhere album)
    if (artist_name !== "Weezer") {
      album_title = album_title.split(" -")[0];
      album_title = album_title.split(" (")[0];
      album_title = album_title.replace('"', "");
    }

    // Some artists have different names on Spotify than on AOTY
    // I haven't seen many examples but this is the main one I have noticed
    // If there are any more create an issue on the github.
    if (artist_name == "Ms. Lauryn Hill") {
      artist_name = "Lauryn Hill";
    }
    if (artist_name == "RÜFÜS DU SOL") {
      artist_name = "RÜFÜS";
    }

    // Getting the information to search, the format is Artist Album.
    // Example would be "Marvin Gaye What's Going On"
    // Running the function to get the URL and parse it for information with the release.
    const rating: any = await getPageLink(artist_name, album_title);

    // Making sure no duplicate rating glitch.
    if (document.getElementsByClassName("scoreElement").length >= 1) {
      for (
        let i = 0;
        i < document.getElementsByClassName("scoreElement").length;
        i++
      ) {
        document.getElementsByClassName("scoreElement")[i].remove();
      }
    }

    // rating[5] is the "hasRatings", it checks if this is True before adding track ratings.
    // This is so it does not just say "undefined" on tracks that do not have it.
    if (rating[5] === "True") {
      // Song title box element so the track rating can be added to it.
      // There is currently an issue where if a track title is too long it won't show.
      // Working on a fix, I will not put the score before the track title since it looks weird.
      // Also fix #2 for glitch causing extension to not work with friends tab open.
      if (
        document.querySelector(
          "#main > div > div.Root__top-container.Root__top-container--right-sidebar-visible > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container > div.main-trackInfo-name > div > div > div > div > span"
        )
      ) {
        songTitleBox = document.querySelector(
          "#main > div > div.Root__top-container.Root__top-container--right-sidebar-visible > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container > div.main-trackInfo-name > div > div > div > div > span"
        );
      }
      if (
        document.querySelector(
          "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container > div.main-trackInfo-name > div > div > div > div > span"
        )
      ) {
        songTitleBox = document.querySelector(
          "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container > div.main-trackInfo-name > div > div > div > div > span"
        );
      }
      // If the song has a title.
      if (songTitleBox) {
        // Creating the element that will be added.
        songRating = document.createElement("a");

        // Example JSON for rating[4] (song score JSON) would be:
        // 0: "92&83&95&94&98&90&94&"
        // 1: "78&73&82&94&94&95&"
        // This is an example for an album with two discs.
        // The data is split using the & symbol.
        // Since the first one is 0 and the first album_disc_number would be 1
        // 1 has to be subtracted.
        let songScoreList = rating[4][Number(album_disc_number) - 1].split("&");
        let songScore = songScoreList[Number(album_track_number) - 1];
        songRating.className = "songScore";

        // Depending on the score of a song the color will change.
        // If the score is above 69.5 it is green.
        // If the score is above 49.5 but below 69.5 it is yellow.
        // If the score is below 49.5 it is red.
        if (songScore >= 69.5) {
          songRating.style.color = "#85ce73";
        }
        if (songScore >= 49.5 && songScore < 69.5) {
          songRating.style.color = "#f0e68c";
        }
        if (songScore < 49.5) {
          songRating.style.color = "#d76666";
        }

        // If the song score isn't undefined it will set the elements text to the song score surrounded by brackets.
        // Example would be "[94]" in front of a track that has a score of 94
        if (songScore != "undefined") {
          songRating.innerText = `    [${songScore}]`;
        }

        // Adding the URL to the text to lead to the song link.
        let trackUrl = String(rating[6][Number(album_disc_number) - 1]).split(
          "/song"
        )[Number(album_track_number)];
        songRating.href = "https://albumoftheyear.org/song" + trackUrl;
        // Styling.
        songRating.style.fontSize = "10px";
        songRating.style.fontWeight = "bold";

        // Adding hover text that displays the amount of users that have rated the track.
        // Works the same way as the songScoreList talked about earlier.
        // Example for rating[7] (Track rating count) would be:
        //
        let ratingTitle =
          rating[7][Number(album_disc_number) - 1].split("&")[
            Number(album_track_number) - 1
          ];
        songRating.title = ratingTitle;

        songTitle = songTitleBox.children[0];

        if (songScore >= 90 && ratingTitle.split("Ratings")[0] >= 25) {
          songTitle.style.fontWeight = "bold";
        }

        // Adding this element to the same area the track title is.
        songTitleBox.appendChild(songRating);
      }
    }

    // Creating the element with the album score that goes under the artist name.
    ratingContainer = document.createElement("a");
    ratingContainer.className = "scoreElement";

    // Album score just like track score changes color based on the rating.
    if (rating[0] >= 69.5) {
      ratingContainer.style.color = "#85ce73";
    }
    if (rating[0] >= 49.5 && rating[0] < 69.5) {
      ratingContainer.style.color = "#f0e68c";
    }
    if (rating[0] < 49.5) {
      ratingContainer.style.color = "#d76666";
    }

    // If at least 1 person has rated this album it will display how many ratings it has.
    if (rating[3] > 0) {
      ratingContainer.innerText = `${rating[0]} (${rating[1]} ratings)`;
    }

    // If no one has rated this album it will display "No Ratings".
    if (rating[3] == 0) {
      ratingContainer.style.color = "var(--spice-extratext)";
      ratingContainer.innerText = `No Ratings.`;
    }

    // URL to the album on AOTY.
    ratingContainer.href = String(rating[2]);

    // Styling.
    ratingContainer.style.fontSize = "11px";
    ratingContainer.style.fontWeight = "bold";

    // Adding the element to the track info area.
    infoContainer.appendChild(ratingContainer);
  } catch (e: any) {
    // Checking for errors.
    if (e instanceof ApiError) {
      console.log("Failed to get AOTY rating:", e.message);
      console.log(e);
    } else {
      console.log("Unknown error", e);
    }
  }
}

export default async function main() {
  while (!Spicetify.CosmosAsync || !Spicetify.showNotification)
    await sleep(500);
  // Run the main function if the song has changed or progress on a song is made.
  Player.addEventListener("onprogress", update);
  Player.addEventListener("songchange", update);
}
