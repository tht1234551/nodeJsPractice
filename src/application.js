import express from "express"
import path from 'path';
import {fileURLToPath} from 'url';
import config from "./configs/config.js";
import {init as databaseInit} from "./configs/database.js"
import mybatisSetting from './configs/mybatisSetting.js'
import viewEngine from "./configs/viewEngine.js"
import routerSetting from "./configs/routerSetting.js"
import staticFileSetting from "./configs/staticFileSetting.js"

export default function () {
    global.app = express();
    global.absolutePath = path.dirname(fileURLToPath(import.meta.url));

    databaseInit();
    mybatisSetting();
    viewEngine();
    routerSetting();
    staticFileSetting();

    app.get("/", (req, res) => {
        res.render('index')
    });

    app.listen(config.serverPort, () => {
        console.log(`[${new Date().toLocaleString()}] app is running on PORT ${config.serverPort}`);
    });
};