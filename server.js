const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controller/register');
const signin = require('./controller/signin');
const profile = require('./controller/profile');
const image = require('./controller/image')


const db = knex ({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'test',
    database: 'smart-face'
  },
});
db.select('*').from('users').then(data => {
    console.log(data);
})

const app = express()
app.use(bodyParser.json());
app.use(cors())


app.get('/', (req,res)=> {
    res.json(database.users)
})

app.post('/register',register.handleRegister(db,bcrypt))// this is an advance way since req and res are declerate automatically
app.post('/signin',(req,res)=> {signin.handleSignin(req,res,db,bcrypt)})
app.get('/profile/:id',(req,res) => {profile.handleProfile(req,res,db)})
app.put('/image',(req,res) => {image.handleImage(req,res,db)})

app.listen(3005, ()=> {
    console.log('hi there')
})
