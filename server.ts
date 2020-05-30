import { listenAndServe } from "https://deno.land/std/http/server.ts";

listenAndServe({port: 8000}, async(req) => {

	if(req.method == "GET" && req.url == "/")
		req.respond({ body: await Deno.open('index.html') });

});

console.log("Running server in port 8000");