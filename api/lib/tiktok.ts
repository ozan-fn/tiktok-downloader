import axios from "axios";
import * as cheerio from "cheerio";

const headers = {
	referer: "https://www.tiktok.com/",
	cookie: "ttwid=1%7CMFI6Ao7u_StCwikvZn5eoJBxpO-whyKuPbDPWwkxSAU%7C1713101483%7C54382499dd6b9863af41c8adfa33aa55e4724e5b31f8f8928e01cc45e2de4db6; tt_chain_token=zMnYKtC4gy4DzkR2WH/nHQ==; passport_csrf_token=be572c5139ac241ea370e8e2e24f2a75; store-idc=maliva; store-country-code=id; store-country-code-src=uid; tt-target-idc=alisg; tt-target-idc-sign=WjGlUrGoI1vnO-j_uBWA_BIaxyeCAKirMbp_9WI7JU7aYlNlxng451yX7VT1phwnWiHd5YI-OOP69aUogAkIIbgQAI2waFueoukXcmntJc3lZ8claxUAsLhbapDjShjpgPhyaSFW55jC4DWw4pWHbe-oRu1tnZJnlh1e2lLmbnhDP97oqLJj5faoE7kiE2jz3VvzZ48swvRE999MNNFvoW8fkmSFeDQbCyPpSeGxRi_OlLasRRrx6AI8upwBVSSXfAzgLWexH4BoVUSdOpAzSCg41412Sw-kKUFzwQTd_wmP_3eivZUhQ4wLwQHc4gfv7nZXUkPs8QxXGtD2yohg7x2CyDGq20NY6YR6eX86ZaJOdk5MRjHWeW50aX-CgCa1VsL59c8G9gI8bnd9Kvb_gqLt-3w73CmoVXv7EnxYYAJL79LUB5mJeDpUioD3XoGtwX1MGkYB_jL7Y-eoR1jyred5Lv-L4sDyvdBNMTKW8Hb-rgacrr9if4Sj5ol_6rSu; last_login_method=google; tiktok_webapp_theme=dark; ak_bmsc=F4D9FC7DB10D4BC908BF017BD1D66710~000000000000000000000000000000~YAAQnL4vF57M1seOAQAAmk8z3heOL3CewvsHOjIrYQBvSG1UqPXOh7/j95PHiH7J9xMMBgSESM40s7OGwJaERR57SgDFJ2RjbQjfGSV9IPDgNy+dF4GLVkamzVtQRS5EDj9eie/e5hDNIzsc4ZNk5TxXJCr16oLM610EMCgYc/uDwD9JiRePMDKzyPpbX+pQNgvZMsEjmvNqRnpvnxh++VL/mILFEKI1IDJd1vHH+VaX52iZR/M1VIw/pwZL99WdbAeqnU5n7blm2XyCMUGOaHKzMQfEQqvtdR8Ka41RMdPYBka70hLNuvLK7cfZqazy3cihsQ8ZNqcRisU4rLENZj6de604RejpoWFG5uyXM6YxzqNRecc9JJpiRue+DbMgqnceymv7kL4q; odin_tt=a83e1708b2361b84341ce8b38a9f228c3fa213a9d4e938869a82db9e577d889f611a64b1a5d2a2b32113c8434b285a08272380bb0afb097d0632fc001fb29999e203665295367fee5b24a03e6fe767a0; perf_feed_cache={%22expireTimestamp%22:1713297600000%2C%22itemIds%22:[%227357561294364380421%22%2C%227338970624611716360%22%2C%227331344630379793669%22]}; bm_sv=8CC8F98D872872C0FBB7BBCC5A4425D0~YAAQnL4vF8jM1seOAQAAMmYz3hfgJD50F/OA2aeEBy1o+WxStgfR3A5jyFiGa3L/9VqNMl3ISacPUPyMRnTye9hsl/HQzoLBbIhFXAwxTruyLEMklvhWIvB6srTsI4VvlfwHug23EZGy6aTMX0qrND0VaVOrhcVjnmeM0tZfCgwLcUr1rDBrAvb6qCg9c684+nS4fOiGV+ZhfB3+f2HWXUba0ccxAzLMJA59jKqqhOiMoScH/tQ44DIfCD15UomY~1; msToken=VqEmFOuxG92BQ73JZYFRGJswugCb8tmDyOJhKiwG3371EZMyj8XUFI5a8IBLhMCOWsO5Tl7UpIvtRG7bz8nKTrWpRO9kbcLJl_A38oumSD_urkjWyUO6YNYUq7xBZsk9RmDmjMZt4WaTfV8=; msToken=VqEmFOuxG92BQ73JZYFRGJswugCb8tmDyOJhKiwG3371EZMyj8XUFI5a8IBLhMCOWsO5Tl7UpIvtRG7bz8nKTrWpRO9kbcLJl_A38oumSD_urkjWyUO6YNYUq7xBZsk9RmDmjMZt4WaTfV8=; passport_fe_beating_status=false; tt_chain_token=s3dKMJ3glyrdXOrDlrT/kQ==; ttwid=1%7Cel9r53pDd-SxKnet-5EZci9RD237ayyTmzI_86sXYz0%7C1712243215%7C5f0f1afaa3b9ac8d86b93c2c8203b18a48025450f29ce4f041b8039407b7a84b",
	"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0",
};

export default async function tiktok(url: string) {
	const req = await axios.get(url, { headers });

	const $ = cheerio.load(req.data);
	const data = JSON.parse($("#__UNIVERSAL_DATA_FOR_REHYDRATION__").html()!);

	const link = data["__DEFAULT_SCOPE__"]["webapp.video-detail"]["itemInfo"]["itemStruct"]["video"]["playAddr"];
	const desc = data["__DEFAULT_SCOPE__"]["webapp.video-detail"]["itemInfo"]["itemStruct"]["desc"];

	const stream = (await axios.get(link, { headers, responseType: "stream" })).data;

	return { desc, stream };
}
