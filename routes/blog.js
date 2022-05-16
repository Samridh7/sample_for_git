const express = require("express");
const path = require("path");
const blogs = require("../data/blogs")
const router = express.Router();

router.get("/", (req,res) => {
    //  res.sendFile(path.join(__dirname, "../templates/index.html"));
    res.render("./home");
})

router.get("/blog", (req,res) => {
    // blogs.forEach(e => {
    //     console.log(e.title);   
    // });
    // res.sendFile(path.join(__dirname, "../templates/BlogHome.html"));
    console.log(blogs);
      res.render("blogHome", {
          blogs: blogs
      });
})

router.get("/blogpost/:slug", (req,res) => {
    myblog = blogs.filter((e) => {
        return e.slug == req.params.slug;
    });
    // console.log(myblog);
    // res.sendFile(path.join(__dirname, "../templates/blogPage.html"));
    res.render("blogPage", {
        title: myblog[0].title,
        content: myblog[0].content
    })
})

module.exports = router;