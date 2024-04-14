import Fastify, { FastifyRequest } from "fastify";
import tiktok from "./lib/tiktok";

const fastify = Fastify({ logger: true });

fastify.get("/api/tiktok", async function handler(request: FastifyRequest<{ Querystring?: { url: string; download: string } }>, reply) {
	const url = request.query?.url;
	const download = request.query?.download;
	if (!url) return "_";
	const res = await tiktok(url);
	if (download) return res.stream;
	return { desc: res.desc };
});

fastify.listen({ port: 3000 });
