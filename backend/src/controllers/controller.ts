import { Request, Response } from "express";
import {search} from "../lyric";
import {pln} from "../pln";

export default {
	async lyrics(request: Request, response: Response) {
        let lyrics = "";
        const { search_string } = request.body;
		lyrics = await search(search_string);

		lyrics = lyrics.replace(/[(?<=\[)](.*?)[(?=\])]/g, " ");
		lyrics = lyrics.replace(/[(?=\n)][\n]{1,9}[?<=\n]/g, "");
		lyrics = lyrics.replace(/\n/g, ". ");
		lyrics = lyrics.replace(/(?<=\s)[(\.)]/g, "");
		lyrics = lyrics.replace(/^\./g, "");
		lyrics = lyrics.replace(/(?<=\?)\./g, "");
		lyrics = lyrics.replace(/\s{1,9}/g, " ");
		lyrics = lyrics.replace(/\"/g, "");
		lyrics = lyrics.replace(/\.{1,9}/g, ".");
		lyrics = lyrics.replace(/\!\./g, "!");
		lyrics = lyrics.replace(/\?\./g, "?");
		lyrics = lyrics.trim();

		let count: any = await pln(lyrics);

		return response.json({
			lyrics: lyrics,
			sentence_count: count.sentences,
		});
	},
};
