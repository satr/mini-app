const http = require('http');

const requestListener = function (req, res) {
    console.log(`Received ${req.method} request to ${req.url}`);

    const routes = {
        // ✅ Matching OAUTH2_PROXY_SKIP_AUTH_ROUTE
        "GET:/api/v1/resource,1234/": "✅ MATCHED SKIP-AUTH: GET /api/v1/resource,1234/",
        "POST:/login": "✅ MATCHED SKIP-AUTH: POST /login",

        // ❌ Not Matching (Should Require Authentication)
        "GET:/api/v1/resource/test/": "❌ AUTH REQUIRED: GET /api/v1/resource/test/",
        "POST:/register": "❌ AUTH REQUIRED: POST /register",
    };

    const routeKey = `${req.method}:${req.url}`;
    if (routes[routeKey]) {
        res.writeHead(routeKey.startsWith("✅") ? 200 : 401);
        res.end(routes[routeKey]);
    } else {
        res.writeHead(404);
        res.end(`❌ NOT FOUND: ${req.method} ${req.url}`);
    }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
    console.log('✅ Server is running on port 8080');
    console.log(`
              // ✅ Matching OAUTH2_PROXY_SKIP_AUTH_ROUTE
        "GET:/api/v1/resource,1234/": "✅ MATCHED SKIP-AUTH: GET /api/v1/resource,1234/",
        "POST:/login": "✅ MATCHED SKIP-AUTH: POST /login",

        // ❌ Not Matching (Should Require Authentication)
        "GET:/api/v1/resource/test/": "❌ AUTH REQUIRED: GET /api/v1/resource/test/",
        "POST:/register": "❌ AUTH REQUIRED: POST /register",`)
});
