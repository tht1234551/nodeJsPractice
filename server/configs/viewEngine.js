import tl from "express-tl";
import path from "path";

export default function () {
    // 템플릿 엔진 세팅
    app.engine("tl", tl);
    app.set("views", path.join(absolutePath, "./views"));
    app.set("view engine", "tl");
}