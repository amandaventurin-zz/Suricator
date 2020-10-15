import express, { response } from "express";
import { PythonShell } from "python-shell";
import request from "request-promise";
import fetch from "node-fetch";

const app = express();

let songs: any;
let song: any;
let lyric: any;

// async function geral() {
// 	songs = await fetch(
// 		`https://api.lyrics.ovh/suggest/${"three little birds"}`
// 	);
//     await console.log(songs)
// 	let song = await songs.json();
// 	song = await song.data[1];
// 	// console.log(song)
// 	let lyric = await fetch(
// 		`https://api.lyrics.ovh/v1/${song.artist.name}/${song.title}`
// 	);
// 	// await console.log(lyric.json());

// 	lyric = await lyric.json();

//     let lyric_string = await lyric.lyrics;

// 	lyric_string = lyric_string.replace(/\r\n/g, " ");
// 	lyric_string = lyric_string.replace(/\r/g, " ");
// 	lyric_string = lyric_string.replace(/\n\n\n\n/g, " ");
// 	lyric_string = lyric_string.replace(/\n\n\n/g, " ");
//     lyric_string = lyric_string.replace(/\n/g, " ");

// 	// console.log("Lyric");
// 	// console.log(lyric_string);
// 	return lyric_string;
// }

// geral();

// const func2 = request(
// 	`https://api.lyrics.ovh/v1/${song.artist.name}/${song.title}`,
// 	function (error, response, body) {
// 		console.log(song.artist.name);
// 		console.log(song.title);
// 		lyric = JSON.parse(body).lyrics;
// 		lyric = lyric.replace("\n", "");
// 		lyric = lyric.replace("\r", "");
// 		lyric = lyric.replace(/\\r\\n/i, " ");
// 		lyric = lyric.replace(/\\n\\n/i, " ");
// 		lyric = lyric.replace(/\\n\\n\\n/i, " ");
// 		console.log(lyric);
// 	}
// );
const apiURL = "https://api.lyrics.ovh";

async function searchSong(searchValue: string) {
	const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);
	const data = await searchResult.json();

	// console.log(data.data[0]);
	// showData(data);
	return data;
}

// interface Data{
//     id: number;
//     title_short: string;
//     rank: number;
//     artist_name: string;
// }

async function getLyrics(data: any) {
    let lyric =""
    
    let i = 0
    while (lyric == "") {
        const res = await fetch(
			`${apiURL}/v1/${data[i].artist.name}/${data[i].title_short}`
        );
        const aux = await res.json();
        lyric = aux.lyrics;
        i++
    }
	
	
	lyric = lyric.replace("\n", "");
	lyric = lyric.replace("\r", "");
	lyric = lyric.replace(/\\r\\n/i, " ");
	lyric = lyric.replace(/\\n\\n/i, " ");
	lyric = lyric.replace(/\\n\\n\\n/i, " ");
	return lyric;

	// const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

	// result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
	// <p>${lyrics}</p>`;
}

app.get("/", async (request, response) => {
	// const pythonShell = new PythonShell("main.py", {
	// 	mode: "text",
	// 	scriptPath:
	// 		"/home/hoffman/Documents/code/GitHub/Suricator/backend/src/scripts",
	// 	args: [song],
	// });

	// pythonShell.on("message", function (message) {
	// 	console.log(message);
    const data = await searchSong("viva la vida coldplay");
	const lyric = await getLyrics(data.data);
	return response.json(lyric);
});

app.listen(3333);
