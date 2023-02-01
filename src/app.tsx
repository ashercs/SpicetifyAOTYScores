import cheerio from "cheerio";
const {Player} = Spicetify;
let prevTrack: string;
let prevRequest: number;
const RATE_LIMIT = 10 * 1000;

let ratingContainer: HTMLAnchorElement;
let infoContainer: HTMLElement | null;
function clearRating() {
  if (infoContainer && ratingContainer) {
    try {
      infoContainer.removeChild(ratingContainer);
    } catch (e) { }
  }
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
  const url = `https://duckduckgo.com/?q=%5Csite%3Aalbumoftheyear.org%20${encodeURIComponent(
    song
  )}`;
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
  let ratingcountint = ratingcount.replace(",", "");
  let score = $(
    "#centerContent > div.fullWidth > div:nth-child(4) > div.albumUserScoreBox > div.albumUserScore > a"
  ).attr("title")!;
  console.log(score);
  let intscore = parseFloat(score);
  let finalintscore = intscore.toFixed(2);
  let roundedscore = parseFloat(finalintscore);
  return [roundedscore, ratingcount, aotyUrl, ratingcountint];
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
  let { title, album_title, artist_name } = Player.data.track.metadata;
  if (!title || !album_title || !artist_name) return;
  const now = Date.now();
  if (prevRequest && now - prevRequest < RATE_LIMIT) return;
  prevTrack = id;

  try {
    album_title = album_title.split(' -')[0];
    album_title = album_title.split(' (')[0];

    console.log(album_title)
    let thing = artist_name + " " + album_title;
    const rating = await getPageLink(thing);
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
