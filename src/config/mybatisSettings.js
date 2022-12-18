const mybatisMapper = require("mybatis-mapper");
const path = require("path");
const fs = require("fs");

const folderPath = "../mapper/";

fs.readdir(path.join(__dirname, folderPath), (err, files) => {
  if (err) throw err;
  files.forEach((file) =>
      mybatisMapper.createMapper([path.join(__dirname, folderPath + file)])
  );
});
