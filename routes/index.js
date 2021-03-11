const express = require('express');
const router = express.Router();

const {createProxyMiddleware} = require ('http-proxy-middleware');

router.use('/api', createProxyMiddleware ({
    target: 'http://localhost:5050',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.get('/', (req, res) => {
    res.render('index', {message: "You have arrived"});
})

router.use((req,res) => {
    res.status(404);
    res.render("error", {layout: "errorlayout.hbs", errormessage: `How did you even get here? "${req.url}" doesnt exist`});
})

module.exports = router;