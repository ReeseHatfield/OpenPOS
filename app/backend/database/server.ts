import { Request, Response } from 'express';
import luhnsCheck from "../hashing/LuhnsAlgo";
const express = require('express');
const cors = require('cors');
const DataBase = require('./DataBase.ts');

const app = express();

app.use(cors());
app.use(express.json());

let db = new DataBase();

app.post('/addUser', (req: Request, res: Response) => {
    const { name, plainTextPassword } = req.body;

    try {
        db.addUser(name, plainTextPassword);
        res.status(200).send('User added successfully');
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});


app.post('/checkout', (req: Request, res: Response) =>{
    const { creditCardNum } = req.body;

    const checkResult: boolean = luhnsCheck(creditCardNum);

    if(checkResult){
        res.status(200).send('Card Verified');
    }
    else {
        res.status(401).send('Incorrect Card Number');
    }
});

app.post('/verifyUser', (req: Request, res: Response) => {
    const { user, plainTextPassword } = req.body;

    if (db.verifyUser(user, plainTextPassword)) {
        res.status(200).send('User verified');
    } else {
        res.status(401).send('Incorrect username or password');
    }
});



app.listen(3001, () => {
    console.log('Server listening on port 3001');
});