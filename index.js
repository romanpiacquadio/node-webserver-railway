import express from 'express';
import { __dirname } from './fileURLToPath.js';
import hbs from 'hbs';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.PORT;

//HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', function(err) {} )

app.use( express.static('public') )

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Roman Piacquadio',
    titulo: 'Curso Node'
  });
})


app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Roman Piacquadio',
    titulo: 'Curso Node'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Roman Piacquadio',
    titulo: 'Curso Node'
  });
})

app.listen(PORT, ( ) => {
  console.log('App running')
})