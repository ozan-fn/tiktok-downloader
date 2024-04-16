import Fastify, { FastifyRequest } from "fastify";
import tiktok from "./lib/tiktok";
import fastifyStatic from "@fastify/static";
import path from "path";

const fastify = Fastify({ logger: true });
const port = (process.env.PORT as unknown as number) || 3000;
const host = "RENDER" in process.env ? `0.0.0.0` : `localhost`;

fastify.register(fastifyStatic, {
    root: path.join(__dirname, "../dist"),
});

fastify.get("/api/tiktok", async function handler(request: FastifyRequest<{ Querystring?: { url: string; download: string } }>, reply) {
    const url = request.query?.url;
    const download = request.query?.download;
    if (!url) return "_";
    const res = await tiktok(url);
    if (download) {
        reply.header("Content-Disposition", "attachment; filename=video.mp4");
        return res.stream;
    }
    delete res.stream;
    return res;
});

fastify.listen({ host: host, port: port });
