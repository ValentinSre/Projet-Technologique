#! /usr/bin/env python
from appBDD import app

if __name__ == "__main__":
    run()

def run():
    os.chdir("./")
    port = 8080
    http.server.SimpleHTTPRequestHandler.extensions_map[".wasm"] = "application/wasm"
    httpd = http.server.HTTPServer(("localhost", port), http.server.SimpleHTTPRequestHandler)
    pri nt("Running on port %d" % port)
    httpd.serve_forever()

