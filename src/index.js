const express = require('express');
require('./db/mongoose');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/users', async (req, res)=> {

    try {
        const users = await User.find({});
        res.send(users);
    } catch(e){
        res.status(500).send();
    }
})

app.get('/users/:id',async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if(!user) {return res.status(404).send()}

        res.send(user)

    } catch (error) {
        res.status(500).send();
    }
})

app.post('/users', async (req, res) => {
  const user = new User(req.body);

  try{
    await user.save()
    res.status(201).send(user);
  } catch(e){
    res.status(400).send(e);
  }

})


app.listen(port, () => {
    console.log('Server is connected ' + port);
})