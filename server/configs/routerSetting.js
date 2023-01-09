import fs from "fs";
import path from "path";

export default function () {
    const routersPath = path.join(absolutePath + '/routers/');

    fs.readdir(routersPath, (err, files) => {
        if (err) throw err;

        files
            .map(file => ({
                name: file,
                fullPath: routersPath + file
            }))
            .filter(({fullPath}) => fs.lstatSync(fullPath).isFile())
            .forEach(async ({name, fullPath}) => {
                const {default: router} = await import("file:///" + fullPath)

                if (!router.path || !router.router) {
                    console.log(`${name} is not router`);
                    return;
                }

                app.use(router.path, router.router);
            });
    })
}
