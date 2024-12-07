var express = require('express');
var router = express.Router();

//게시판 목록
router.get('/', function(req, res, next) {
  res.render('index', { title: '게시판', pageName:'bbs/list.ejs' });
});

//글쓰기
router.get('/insert', function(req, res, next) {
    res.render('index', { title: '글쓰기', pageName:'bbs/insert.ejs' });
});

//게시글정보
router.get('/:id', function(req, res, next) {
  const id=req.params.id;
  res.render('index', { title: '게시글정보', pageName:'bbs/read.ejs', id});
});

//게시글수정
router.get('/update/:id', function(req, res, next) {
  const id=req.params.id;
  res.render('index', { title: '게시글수정', pageName:'bbs/update.ejs', id});
});

module.exports = router;