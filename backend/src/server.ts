import express, { response } from "express";
import { PythonShell } from "python-shell";
import request from "request";
import fetch from "node-fetch";

const app = express();

let song: any;
let lyric: any;

async function geral() {
	const songs: any = await fetch(
		`https://api.lyrics.ovh/suggest/${"three little birds"}`
	);

	let song = await songs.json();
	song = await song.data[1];
	// console.log(song)
	let lyric = await fetch(
		`https://api.lyrics.ovh/v1/${song.artist.name}/${song.title}`
	);
	// await console.log(lyric.json());

	lyric = await lyric.json();

    let lyric_string = await lyric.lyrics;
    
	lyric_string = lyric_string.replace(/\r\n/g, " ");
	lyric_string = lyric_string.replace(/\r/g, " ");
	lyric_string = lyric_string.replace(/\n\n\n\n/g, " ");
	lyric_string = lyric_string.replace(/\n\n\n/g, " ");
    lyric_string = lyric_string.replace(/\n/g, " ");
    
	// console.log("Lyric");
	console.log(lyric_string);
	return lyric_string;
}

geral();

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

app.get("/", async (request, response) => {
	// const pythonShell = new PythonShell("main.py", {
	// 	mode: "text",
	// 	scriptPath:
	// 		"/home/hoffman/Documents/code/GitHub/Suricator/backend/src/scripts",
	// 	args: [song],
	// });

	// pythonShell.on("message", function (message) {
	// 	console.log(message);
	// });
	geral();

	return response.json(response);
});

app.listen(3333);
