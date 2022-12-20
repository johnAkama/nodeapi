const express  = require('express');
const  app = express();
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello World");
})


router.get('/about',(req,res)=>{
    res.send('about');
})


app.use(router);

module.exports = app;