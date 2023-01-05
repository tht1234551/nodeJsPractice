import express from "express";
import path from "path";

export default function () {
    const moduleFolder = "../node_modules/";
    const staticModules = [
        moduleFolder + "bootstrap/dist/",
        moduleFolder + "axios/dist/",
        "../static/"
    ]

    staticModules.forEach((module) => {
        const fullPath = path.join(absolutePath, module)
        console.log(fullPath)
        app.use(express.static(fullPath));
    });
}