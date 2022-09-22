export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","manifest.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-4a533137.js","imports":["_app/immutable/start-4a533137.js","_app/immutable/chunks/index-76207ca0.js","_app/immutable/chunks/singletons-eca981c1.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				path: "/login",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "link/new",
				pattern: /^\/link\/new\/?$/,
				names: [],
				types: [],
				path: "/link/new",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "link/edit/[id]",
				pattern: /^\/link\/edit\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "link/[id]",
				pattern: /^\/link\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,6],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
