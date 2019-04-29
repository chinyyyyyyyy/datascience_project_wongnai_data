var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  id  = req.params.id;
  fs.readFile("./public/project2_data/top_best_of_"+id,'utf8', function(err, data) {
    if (err) throw err;
    fs.readFile("./public/project2_data/top_worst_of_"+id+".dms", 'utf8', function(err, data2) {
      if (err) throw err;
      console.log(data.split("\n"));
      res.render('index',{top_best:data.split("\n"),top_worst:data2.split("\n"),name:id});
    });
  });
});

router.get('/', function(req, res, next) {
  res.render("<h1>hotelling's model of spatial competition in Wongnai Data</h1>");
});

module.exports = router;
