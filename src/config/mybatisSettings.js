const mybatisMapper = require("mybatis-mapper");
const path = require("path");
const fs = require("fs");

const folderPath = "../mapper/";

fs.readdir(path.join(__dirname, folderPath), (err, files) => {
    if (err) throw err;
    const xmls = files
        .filter(file => file.endsWith('.xml'))
        .map((file) => path.join(__dirname, folderPath + file))

    mybatisMapper.createMapper(xmls);
});



