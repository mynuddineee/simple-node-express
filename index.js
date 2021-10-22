const express = require('express')
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Hello World new one two three four five!')
  })


const users =[

    {id:0, name:'xavie', email:'xavier@gamil.com'},
    {id:1, name:'salvi', email:'salvi@gamil.com'},
    {id:2, name:'tom', email:'tom@gamil.com'},
    {id:3, name:'jerry', email:'jerry@gamil.com'}

]  


app.get('/users', (req, res) => {

    console.log(req.query);
    res.send(users)
})


app.get('/users/:id', (req, res) => {

    const id = req.params.id;
    const user = users[id]
    res.send(user);

    
})

app.get('/fruits', (req, res)=>{

    res.send('fruits');

})

app.get('/fruits/mango/fazli', (req, res)=>{

    res.send('fruits/mango/fazli');
})


// post method

app.post('/users', (req, res)=>{

    const newUser = req.body;
    newUser.id =users.length;
    users.push(newUser);
    console.log('hiiting the post')
    //res.send(JSON.stringify(newUser));
    res.json(newUser);
})

  app.listen(port, () => {
    console.log('listening to port', port)
  });