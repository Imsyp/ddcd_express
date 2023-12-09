const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');  
app.set('views', 'views');  


const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'index.ejs');
app.set('layout extractStyles', true); 
app.set("layout extractScripts", true);
app.use(express.static('public'));  

const cors = require('cors');
app.use(cors());

const homeController = require('./controllers/homeController.js');

app.get('/', homeController.getTopics);

//Routers
const topicRouter = require('./routers/topicRouter.js');
const commentRouter = require('./routers/commentRouter.js');
app.use('/topic', topicRouter); 
app.use('/comment', commentRouter); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});