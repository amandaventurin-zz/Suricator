import express from "express";
import { search } from "./lyric";
import querystring from "querystring";
import { pln } from "./pln";

const app = express();

app.get("/lyric", async (request, response) => {
	let lyrics = "";

	const url = request.url.replace("/lyric?", "");
	const parameters = querystring.parse(url);
	lyrics = await search(parameters.search);

	lyrics = lyrics.replace(/[(?<=\[)](.*?)[(?=\])]/g, "");
	lyrics = lyrics.replace(/[(?=\n)][\n]{1,9}[?<=\n]/g, "");
    lyrics = lyrics.replace(/\n/g, ". ");
    lyrics = lyrics.replace(/(?<=\s)[(\.)]/g, "");
    lyrics = lyrics.replace(/^\./g, "");
    lyrics = lyrics.replace(/(?<=\?)\./g, "");
    lyrics = lyrics.trim()

    let count: any = await pln(lyrics);

    return response.json({
        lyrics: lyrics,
        sentence_count: count.sentences
    });
});

app.listen(3333);
