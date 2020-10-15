import express, { response } from "express";
import { PythonShell } from "python-shell";
import request from "request-promise";
import fetch from "node-fetch";

const app = express();

const apiURL = "https://api.lyrics.ovh";

async function searchSongs(searchValue: string) {
	const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);
	const data = await searchResult.json();
	return data;
}

async function getLyrics(data: any) {
    let lyric =""
    let i = 0
    // while (lyric == "") {
    //     const res = await fetch(
	// 		`${apiURL}/v1/${data[i].artist.name}/${data[i].title_short}`
    //     );
    //     const aux = await res.json();
    //     lyric = aux.lyrics;
    //     i++
    // }
	
	
	// lyric = lyric.replace(/\\n\\n\\n/i, " ");
	// lyric = lyric.replace(/\\n\\n/i, " ");
	// lyric = lyric.replace(/\\r\\n/i, " ");
	// lyric = lyric.replace("\r", "");
	// lyric = lyric.replace("\n", "");
	return data;
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
    const data = await searchSongs("back in black");
	const lyric = await getLyrics(data.data);
	return response.json(lyric);
});

app.listen(3333);
