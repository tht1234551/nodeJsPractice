import express from "express";
import path from "path";

export default function () {
    app.use(
        express.static(path.join(absolutePath, "../node_modules/bootstrap/dist/"))
    );

}