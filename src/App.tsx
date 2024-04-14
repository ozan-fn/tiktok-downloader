import React, { useState } from "react";
import axios from "axios";

export default function App() {
	const [url, setUrl] = useState("");

	const handleInputUrl = (e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value);

	const handleGo = async () => {
		const res = await fetch("/api");
		console.log(res);
	};

	return (
		<div className="h-screen w-screen bg-zinc-900 flex flex-col items-center text-zinc-300 p-8">
			<p className="text-3xl font-bold">Fastest TikTok Downloader</p>
			<div className="max-w-sm w-full mt-8 flex flex-row gap-2">
				<input type="text" onChange={handleInputUrl} className="outline-none w-full rounded-sm text-zinc-900 px-2 flex flex-row items-center" />
				<button onClick={handleGo} className="bg-zinc-700 border border-zinc-600 px-2 rounded-sm ">
					GO
				</button>
			</div>
		</div>
	);
}
