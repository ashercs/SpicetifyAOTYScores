import cheerio from "cheerio";
const {Player} = Spicetify;
let prevTrack: string;
let prevRequest: number;
const RATE_LIMIT = 10 * 5000;

let ratingContainer: HTMLAnchorElement;
let songRating: HTMLAnchorElement;
let songTitleBox: HTMLAnchorElement | null;
let infoContainer: HTMLElement | null;
function clearRating() {
  if (infoContainer && ratingContainer) {
    try {
      if (songTitleBox){
        songTitleBox.removeChild(songRating);
      }
        infoContainer.removeChild(ratingContainer);
          for (let i = 0; i < document.getElementsByClassName('scoreElement').length; i++) {
            document.getElementsByClassName('scoreElement')[i].remove()
          }
          for (let i = 0; i < document.getElementsByClassName('songScore').length; i++) {
            document.getElementsByClassName('songScore')[i].remove()
          }
    } catch (e) { }
  }
}

function isNumeric(value: any) {
  return /^-?\d+$/.test(value);
}

export async function fetch(url: string) {
  const cosmosReq = () =>
    new Promise<string>((resolve, reject) => {
      const request = JSON.stringify({
        method: "GET",
        uri: url,
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246",
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

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class ApiError extends Error {
  constructor(message: string) {
    super(message);
  }
}

async function getPageLink(song: string) {
  const url = `https://duckduckgo.com/?q=%5Csite%3Aalbumoftheyear.org%2Falbum%20${encodeURIComponent(
    song
  )}`;
  console.log(url)
  const res = await fetch(url);
  const reg = /\?uddg=(.*?)&rut=/;
  console.log(res);
  const aotyUrl = decodeURIComponent(res.body.match(reg)[1]);
  console.log(aotyUrl);
  let res2 = await fetch(aotyUrl);
  const $ = cheerio.load(res2.body);
  let ratingcount = $(
    "#centerContent > div.fullWidth > div:nth-child(4) > div.albumUserScoreBox > div.text.numReviews > a > strong"
  ).text()!;
  let checkIfTrackRatings = $("#tracklist > div.trackList > table > tbody > tr:nth-child(1) > td.trackRating > span").text()
  let tracklist = $('#tracklist > div.trackList > table > tbody')
  let tracks = tracklist.children()
  let trackCount = tracks.length
  console.log(trackCount)
  let trackCount2 = trackCount - 1
  let hasRatings = 'False'
  let JSONSongUrls = ''
  let JSONTrackRatings = ''
  let JSONRatingCount = ''
  let songRatingsJSON = "{\n"
  let songUrlJSON = "{\n"
  let songRatingCountJSON = "{\n"
  if (isNumeric(checkIfTrackRatings) == true) {
    hasRatings = "True"
    for (let i = 1; i < trackCount; i++){
      let trackratingbydisc = ''
      let trackurlbydisc = ''
      let trackratingcountbydisc = ''
      let ratingElement = $(`#tracklist > div.trackList > table > tbody > tr:nth-child(${i}) > td.trackRating > span`)
      let urlElement = $(`#tracklist > div.trackList > table > tbody > tr:nth-child(${i}) > td.trackTitle > a`)
      for (let h = 0; h < ratingElement.length; h++){
        //if (i != trackCount) {
        let trackratingbydisc1 = $(ratingElement[h])
        trackratingbydisc += trackratingbydisc1.text()
        let trackurlbydisc1 = $(urlElement[h])
        trackurlbydisc += trackurlbydisc1.attr("href")
        trackratingcountbydisc += trackratingbydisc1.attr("title")
      }
      songRatingsJSON += `"${i}": "` + trackratingbydisc + '",\n'
      songUrlJSON += `"${i}": "` + trackurlbydisc + '",\n'
      songRatingCountJSON += `"${i}": "` + trackratingcountbydisc + '",\n'
      console.log(trackratingbydisc)
  }
  // let discNumber = ratingElement.length
  songRatingsJSON += `"${trackCount}": "` + $(`#tracklist > div.trackList > table > tbody > tr:nth-child(${trackCount}) > td.trackRating > span`).text() + '"\n}'
  songUrlJSON += `"${trackCount}": "` + $(`#tracklist > div.trackList > table > tbody > tr:nth-child(${trackCount}) > td.trackTitle`).attr('href') + '"\n}'
  songRatingCountJSON += `"${trackCount}": "` + $(`#tracklist > div.trackList > table > tbody > tr:nth-child(${trackCount}) > td.trackRating > span`).attr('title') + '"\n}'
  console.log(songRatingsJSON)
  JSONSongUrls = JSON.parse(songUrlJSON)
  JSONTrackRatings = JSON.parse(songRatingsJSON)
  JSONRatingCount = JSON.parse(songRatingCountJSON)
  console.log(songRatingCountJSON)
}
  let ratingcountint = ratingcount.replace(",", "");
  let score = $(
    "#centerContent > div.fullWidth > div:nth-child(4) > div.albumUserScoreBox > div.albumUserScore > a"
  ).attr("title")!;
  let intscore = parseFloat(score);
  let finalintscore = intscore.toFixed(2);
  let roundedscore = parseFloat(finalintscore);
  return [roundedscore, ratingcount, aotyUrl, ratingcountint, JSONTrackRatings, hasRatings, JSONSongUrls, JSONRatingCount];
}

async function update() {
  if (!Player.data.playback_id || !Player.data?.track?.metadata) return;
  const id = Player.data.playback_id;
  if (id == prevTrack) return;
  infoContainer = document.querySelector(
    "#main > div > div.Root__top-container.Root__top-container--right-sidebar-visible > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container"
    );
  if (!infoContainer) return;
  clearRating();
  if (document.getElementsByClassName("scoreElement").length > 1) {
    clearRating
  }
  if (document.getElementsByClassName("songScore").length > 1) {
    clearRating
  }
  let { title, album_title, artist_name, album_track_number, album_disc_count, album_disc_number } = Player.data.track.metadata;
  if (!title || !album_title || !artist_name) return;
  const now = Date.now();
  if (prevRequest && now - prevRequest < RATE_LIMIT) return;
  prevTrack = id;
  try {
    album_title = album_title.split(' -')[0];
    album_title = album_title.split(' (')[0];
    let thing = artist_name + " " + album_title;
    console.log(thing)
    const rating: any = await getPageLink(thing);
    if (document.getElementsByClassName('scoreElement').length >= 1) {
      for (let i = 0; i < document.getElementsByClassName('scoreElement').length; i++) {
        document.getElementsByClassName('scoreElement')[i].remove()
      }
    }
    console.log(Player.data?.track?.metadata)
    console.log(rating[4])
    console.log(rating[6])
    if (rating[5] === "True"){
    songTitleBox = document.querySelector('#main > div > div.Root__top-container.Root__top-container--right-sidebar-visible > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container > div.main-trackInfo-name > div > div > div > div > span')
    if (songTitleBox){
      songRating = document.createElement("a")
      let songscorefirst = rating[4][Number(album_track_number)]
      let songscoresecond = songscorefirst.match(/.{1,2}/g) ?? [];
      let songScore = songscoresecond[Number(album_disc_number) - 1]
      songRating.className = "songScore";
      if (songScore >= 69.5) {
        songRating.style.color = "#85ce73";
      }
      if (songScore >= 49.5 && rating[0] < 69.5) {
        songRating.style.color = "#f0e68c";
      }
      if (songScore < 49.5) {
        songRating.style.color = "#d76666";
      }
      songRating.innerText = `       [${songScore}]`
      console.log(rating[7])
      console.log(rating[7][Number(album_track_number)])
      let partUrl = String(rating[6][Number(album_track_number)]).split("/song")
      songRating.href = "https://www.albumoftheyear.org/song" + partUrl[Number(album_disc_number)];
      songRating.style.fontSize = "10px";
      songRating.style.fontWeight = 'bold'
      let partTitle = rating[7][Number(album_track_number)].split("Ratings")
      console.log(partTitle)
      songRating.title = partTitle[Number(album_disc_number) - 1] + " Ratings"

      songTitleBox.appendChild(songRating)
    }
    }
    ratingContainer = document.createElement("a");
    ratingContainer.className = "scoreElement";
    if (rating[0] >= 69.5) {
      ratingContainer.style.color = "#85ce73";
    }
    if (rating[0] >= 49.5 && rating[0] < 69.5) {
      ratingContainer.style.color = "#f0e68c";
    }
    if (rating[0] < 49.5) {
      ratingContainer.style.color = "#d76666";
    }
    if (rating[3] > 0) {
      ratingContainer.innerText = `${rating[0]} (${rating[1]} ratings)`;
    }
    if (rating[3] == 0) {
      ratingContainer.style.color = "var(--spice-extratext)";
      ratingContainer.innerText = `No Ratings.`;
    }
    ratingContainer.href = String(rating[2]);
    ratingContainer.style.fontSize = "11px";
    ratingContainer.style.fontWeight = 'bold'
    infoContainer.appendChild(ratingContainer);
  } catch (e: any) {
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
  Player.addEventListener('onprogress', update);
  Player.addEventListener("songchange", update);
}
