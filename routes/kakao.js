var express = require('express');
var router = express.Router();

/* GET kakao page. */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서 검색', pageName:'kakao/book.ejs' });
});

//지역검색 /local에는 앞에 kakao가 생략됨.
router.get('/local', function(req, res, next) {
  res.render('index', { title: '지역 검색', pageName:'kakao/local.ejs' });
});

router.get('/blog', function(req, res, next) {
  res.render('index', { title: '블로그 검색', pageName:'kakao/blog.ejs' });
});

//도서 정보 페이지
router.get('/book/info', function(req, res, next) {
  const title = req.query.title; //사진을 눌렀을 때 title을 라우터를 통해 전달
  const thumbnail = req.query.thumbnail;
  const price = req.query.price;
  const authors = req.query.authors;
  const publisher = req.query.publisher;
  const isbn = req.query.isbn;
  const contents = req.query.contents;
  console.log("title", title);
  const info = {title, thumbnail,price,authors,publisher,isbn, contents};
  res.render('index', { title: '도서정보', pageName:'kakao/info.ejs', info});
});

module.exports = router;
