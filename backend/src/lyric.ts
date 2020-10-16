import Lyricist from "lyricist";

const lyricist = new Lyricist(
	"RDH4LAPsVqv2BIl2SMge1vx3smzx0p6IZSHBeJZWXv7EO5wMOcP0ont0LiaJ3osO"
);

export async function search(string: any) {
	const hits = await lyricist.search(string);
	const song = await lyricist.song(hits[0].id, { fetchLyrics: true });
	return song.lyrics;
}
