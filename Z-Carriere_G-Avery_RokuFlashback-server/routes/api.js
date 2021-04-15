const express = require('express');
const { createPool } = require('mysql');

const router = express.Router();

const connect = require("../config/sqlConfig");


router.get("/", (req, res) => {
    
    res.json({message: "you hit the api route"});
})


router.get("/users", (req, res) => {
    
    res.json({message: "all users route"});
})

router.get("/movies", (req, res) => {
    

    connect.getConnection(function(err, connection) {
        if (err) throw err; 
       
        
        connection.query('SELECT * FROM tbl_movies', function (error, results) {
          
          connection.release();
       
          
          if (error) throw error;
          res.json(results);
       
          
        });
      });
})

router.get("/music", (req, res) => {
    

  connect.getConnection(function(err, connection) {
      if (err) throw err; 
     
      
      connection.query('SELECT * FROM tbl_music', function (error, results) {
        
        connection.release();
     
        
        if (error) throw error;
        res.json(results);
     
        
      });
    });
})

router.get("/tv", (req, res) => {
    

  connect.getConnection(function(err, connection) {
      if (err) throw err; 
     
      
      connection.query('SELECT * FROM tbl_tv', function (error, results) {
        
        connection.release();
     
        
        if (error) throw error;
        res.json(results);
     
        
      });
    });
})

router.get("/kidsmovies", (req, res) => {
    

  connect.getConnection(function(err, connection) {
      if (err) throw err; 
     
      
      connection.query('SELECT * FROM tbl_kidsmovies', function (error, results) {
        
        connection.release();
     
        
        if (error) throw error;
        res.json(results);
     
        
      });
    });
})

router.get("/kidsmusic", (req, res) => {
  

connect.getConnection(function(err, connection) {
    if (err) throw err; 
   
    
    connection.query('SELECT * FROM tbl_kidsmusic', function (error, results) {
      
      connection.release();
   
      
      if (error) throw error;
      res.json(results);
   
      
    });
  });
})

router.get("/kidstv", (req, res) => {
  

connect.getConnection(function(err, connection) {
    if (err) throw err; 
   
    
    connection.query('SELECT * FROM tbl_kidstv', function (error, results) {
      
      connection.release();
   
      
      if (error) throw error;
      res.json(results);
   
      
    });
  });
})


router.get("/movies/:id", (req, res) => {
    
    connect.query(`SELECT * FROM tbl_movies WHERE movies_id=${req.params.id}`, function (error, results) {
        if (error) throw error;
        res.json(results);
      });
})

router.get("/music/:id", (req, res) => {
    
  connect.query(`SELECT * FROM tbl_music WHERE music_id=${req.params.id}`, function (error, results) {
      if (error) throw error;
      res.json(results);
    });
})

router.get("/tv/:id", (req, res) => {
    
  connect.query(`SELECT * FROM tbl_tv WHERE tv_id=${req.params.id}`, function (error, results) {
      if (error) throw error;
      res.json(results);
    });
})

router.get("/kidsmovies/:id", (req, res) => {
    
  connect.query(`SELECT * FROM tbl_kidsmovies WHERE kidsmovies_id=${req.params.id}`, function (error, results) {
      if (error) throw error;
      res.json(results);
    });
})

router.get("/kidsmusic/:id", (req, res) => {
  
connect.query(`SELECT * FROM tbl_kidsmusic WHERE kidsmusic_id=${req.params.id}`, function (error, results) {
    if (error) throw error;
    res.json(results);
  });
})

router.get("/kidstv/:id", (req, res) => {
  
connect.query(`SELECT * FROM tbl_kidstv WHERE kidstv_id=${req.params.id}`, function (error, results) {
    if (error) throw error;
    res.json(results);
  });
})


module.exports = router;