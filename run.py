#! /usr/bin/env python
from appBDD import app

if __name__ == "__main__":
    app.debug = True
    app.run(port=7000)



