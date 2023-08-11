const express = require('express');
const app = express();
const User = require('./models/User');
app.use(express.json());


app.use('/static', express.static('public'));

// CREATE
app.post('/', async (req, res, next) => {
    try{
        const user = await User.create(req.body);
        if(!user){
            throw new Error('No user created!');
        }
        res.send(user.username);
    }catch(error){
        next(error);
    }
});

// READ
app.get('/', async (req, res, next) => {
    try{
        const users = await User.findAll();
        if(!user){
            throw new Error('No users found!')
        }
        res.send(users);
    }catch(error){
        next(eror);
    }
});

// READ BY 1
app.get('/:username', async (req, res, next) => {
    try{
        const user = await User.findOne({where:{username: req.params.username}});
        if(!username){
            throw new Error('No username found!');
        }
        res.send(user);
    }catch(error){
        next(error);
    }
});

// UPDATE / PUT
app.put('/:username', async (req, res, next) => {
    try{
        const updated = await User.update(req.body, {where:{username: req.params.username}});
        console.log(updated);
        if(updated[0] === 0){
            throw new Error('No update made!')
        }
        res.sendStatus(200);
    }catch(error){
        next(error);
    }
});

// DELETE
app.delete('/:username', async (req, res, next) => {
    try{
        const deleted = await User.destroy({where:{username: req.params.username}});
        if(deleted === 0){
            throw new Error('No user deleted!');
        }
        res.sendStatus(200);
    }catch(error){
        next(error);
    }
});





module.exports = app;