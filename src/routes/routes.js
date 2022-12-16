const express = require('express');
const router = express.Router();
const fs = require('fs');
const formidable = require('formidable');

router.get("/", (req, res) => {
    res.send("hello");
});

router.get("/cat", (req, res) => {
    res.json({sound: "야옹"});
});

router.get("/dog", (req, res) => {
    res.send("멍멍");
});

router.get("/user/:id", (req, res) => {
    const {id} = req.params;
    res.send(id);
});

router.get("/write1", (req, res) => {
    // 파일을 만들고 기존 데이터에 추가함
    fs.appendFile('./src/routes/mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});

router.get("/write2", (req, res) => {
    // 파일만 만듬
    fs.open('./src/routes/mynewfile2.txt', 'w', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});

router.get("/write3", (req, res) => {
    // 파일을 만들고 기존 데이터를 덮어 씌움
    fs.writeFile('./src/routes/mynewfile3.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});

router.get("/delete", (req, res) => {
    // 파일을 삭제함
    fs.unlink('./src/routes/mynewfile2.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });
});

router.get("/rename", (req, res) => {
    // 파일을 삭제함
    fs.rename('./src/routes/mynewfile3.txt', './src/routes/renamed.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
});


router.get("/fileuploadPage", (req, res) => {
    // 파일 업로드 페이지
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
});
router.post("/fileupload", (req, res) => {
    // 파일 업로드
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        const oldPath = files.filetoupload.filepath;
        const newPath = './src/routes/' + files.filetoupload.originalFilename;

        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
});

router.get("/admin", (req, res) => {
    res.redirect(process.env.DB_ADMIN);
});

router.get('/template', function(req, res) {
	res.render('index', {
		eat: ['apple', 'orange', 'carot'],
		sport: true
	})
})

module.exports = router
