import mybatisMapper from "mybatis-mapper";
import path from "path";
import fs from "fs";

export default function () {
    const folderPath = path.join(absolutePath + '/mappers/');

    fs.readdir(folderPath, (err, files) => {
        if (err) throw err;

        const xmls = files
            .filter(file => file.endsWith('.xml'))
            .map((file) => path.join(folderPath + file))

        mybatisMapper.createMapper(xmls);
    });
}


