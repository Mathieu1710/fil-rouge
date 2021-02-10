/*_______________________________*
|    Déclaration des framework    |
*________________________________*/
const express = require('express');           //  J'appelle le package express grâce à require
const path = require('path');              //  J'appelle le package path
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//constantes importantes
const distDir= "../dist/";

const uri = "mongodb+srv://Soma:1234@cluster0.j2ovy.mongodb.net/Cyberpunk?retryWrites=true&w=majority";
const Film = require('./model/film.model');
// déclaration d'instance et connexion BdD
const app = express(); 
var promise = mongoose.connect(uri, {useNewUrlParser: true});

promise.then(() => {
console.log('DB connected');
app.listen('3000',()=>{
    console.log('Server Launch');
});
});

/*___________________________*
|       Configuration        |
*____________________________*/
app.use(express.static(path.join(__dirname, distDir)));
app.use(/^((?!(api)).)*/,(req,res)=>{
    res.sendFile(path.join(__dirname,distDir + '/index.html'));
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

//Routes
app.post('/api/movies', (req, res) => {
    var newFilm = new Film(req.body);
  
    newFilm.save((err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
  
      res.send(obj);
    });
  });
  
  app.get('/api/movies', (req, res) => {
    Film.find({}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
      return res.send(obj);
    });
  });
  
  // Le :id sera autimatiquement transofrmé par l'identifiant envoyé apr la requête xhttp
  app.get('/api/movies/:id', (req, res) => {
    // Pour effectuer une recherche on va utiliser le modèle
    // BodyParser permet de conserver l'id dans req.params.id
    Film.findOne({_id: req.params.id}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
  
      return res.send(obj);
    })
  });
  
  app.put('/api/movies/:id', (req, res) => {
    Film.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
  
      return res.send(obj);
    });
  });
  
  app.delete('/api/movies/:id', (req, res) => {
    Film.deleteOne({_id: req.params.id}, (err, obj) => {
      if(err) {
        console.log(err);
        return res.send(500);
      }
      res.Status(204).end();
    });
  });
  
