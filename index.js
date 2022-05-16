const express = require("express");
const { engine }  = require('express-handlebars');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set("views", "./views");

app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});