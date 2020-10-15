import express, { response } from "express";
import {search} from"./lyric"

const app = express();

app.get("/", async (request, response) => {
	// const pythonShell = new PythonShell("main.py", {
	// 	mode: "text",
	// 	scriptPath:
	// 		"/home/hoffman/Documents/code/GitHub/Suricator/backend/src/scripts",
	// 	args: [song],
	// });

	// pythonShell.on("message", function (message) {
    // 	console.log(message);
    
    let lyrics = await search("the trooper iron maiden")

    lyrics = lyrics.replace(/\[Verse\s\d\]\n/g,"")
    lyrics = lyrics.replace(/\[Verse\s\d\]/g,"")
    lyrics = lyrics.replace(/\[Refrain\]/g,"")
    lyrics = lyrics.replace(/\[Guitar solo\]/g,"")
    lyrics = lyrics.replace(/\n\n\n/g,".")
    lyrics = lyrics.replace(/\n\n/g,".")
    lyrics = lyrics.replace(/\n/g, ".")

    lyrics = lyrics.trim()
	return response.json(lyrics);
});

app.listen(3333);
