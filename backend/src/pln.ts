import { PythonShell } from "python-shell";

export async function pln(lyrics: any) {
	const pythonShell = new PythonShell("main.py", {
		mode: "json",
		scriptPath:
			"/home/hoffman/Documents/code/GitHub/Suricator/backend/src/scripts",
		args: [lyrics],
	});

	let promise = new Promise((resolve, reject) => {
		pythonShell.on("message", function (message) {
			resolve(message);
		});
	});

	let result = await promise;
	return result;
}
