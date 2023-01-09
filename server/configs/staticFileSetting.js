import express from "express";
import path from "path";

export default function () {
    const modulePath = "../node_modules/";
    const staticFolders = [
        modulePath + "bootstrap/dist/",
        modulePath + "axios/dist/",
        "../static/"
    ]

    staticFolders.forEach((folder) => {
        const fullPath = path.join(absolutePath, folder)
        app.use(express.static(fullPath));
    });
}