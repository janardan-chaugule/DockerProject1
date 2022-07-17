import express ,{Request,Response} from 'express';
require('dotenv').config();
const app  = express();
import db from './db';

const PORT = process.env.PORT || 3001;
app.get('/',(req:Request,res:Response) =>{
    res.send('Hello Word Janardan');
});

app.listen(PORT,()=>{
    console.log(`app running on ${PORT}`);
    db.runMigrations();
})