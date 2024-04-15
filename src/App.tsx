import React, { useState } from "react";
// import axios from "axios";

export default function App() {
    const [url, setUrl] = useState("");
    // const [result, setResult] = useState<{ thumb: string; desc: string }>();

    const handleInputUrl = (e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value);

    return (
        <div className="h-screen w-screen items-center bg-zinc-900 flex flex-col text-zinc-300 p-8">
            <p className="text-3xl font-bold">Fastest TikTok Downloader</p>
            <div className="max-w-sm md:max-w-md w-full h-10 mt-8 flex flex-row gap-2">
                <input type="text" onChange={handleInputUrl} className="outline-none w-full rounded-md text-zinc-900 px-3 flex flex-row items-center" />
                {/* <button onClick={handleGo} className="bg-zinc-700 border border-zinc-600 px-4 rounded-md ">
                    GO
                </button> */}
            </div>

            <a href={"/api/tiktok?download=true&url=" + url} className="mt-4 px-4 bg-zinc-700 rounded-md h-8 flex items-center border-zinc-600 border">
                DOWNLOAD
            </a>

            <div className="mt-4 w-full overflow-auto flex justify-center">
                <video src={"/api/tiktok?download=true&url=" + url} controls loop className="rounded-md w-fit"></video>
            </div>
        </div>
    );
}
