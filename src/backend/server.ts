import express from "express";
import { NextFunction } from "connect";
import path from "path";

const router: express.Router = express.Router();

export const app: express.Express = express();

router.get("/", (req: express.Request, res: express.Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get("/test", (req: express.Request, res: express.Response, next: NextFunction) => {
    res.json({ message: "test dirname = " + __dirname });
});

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/scripts'));

app.use('/', router);