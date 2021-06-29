const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, response) => {
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
    );
    const ext = path.extname(filePath);
    let contentType;

    switch (ext) {
        case ".css":
            contentType = "text/css";
            break;
        case ".js":
            contentType = "text/javascript";
            break;

        default:
            contentType = "text/html";
            break;
    }

    if (!ext) {
        filePath += ".html";
    }

    fs.readFile(filePath, (error, data) => {
        if (error) {
            fs.readFile(
                path.join(__dirname, "public", "404.html"),
                (error, data) => {
                    if (error) {
                        response.writeHead(500);
                        response.end("Error");
                    } else {
                        response.writeHead(200, {
                            "Content-Type": "text/html",
                        });
                        response.end(data);
                    }
                }
            );
        } else {
            response.writeHead(200, {
                "Content-Type": contentType,
            });
            response.end(data);
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
