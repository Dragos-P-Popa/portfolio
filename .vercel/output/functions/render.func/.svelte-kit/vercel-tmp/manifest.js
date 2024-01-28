export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["2sway.webp","book-square.svg","direct-inbox.svg","dragos.webp","favicon.svg","github.svg","linkedin.svg","resume.svg","vhnet.webp","wave-animated.gif","wave-animated.png"]),
	mimeTypes: {".webp":"image/webp",".svg":"image/svg+xml",".gif":"image/gif",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.7699c1ae.js","imports":["_app/immutable/entry/start.7699c1ae.js","_app/immutable/chunks/index.bdbb148d.js","_app/immutable/chunks/singletons.e95eba96.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0184c455.js","imports":["_app/immutable/entry/app.0184c455.js","_app/immutable/chunks/index.bdbb148d.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
