const express = require('express');
const app = express();
const newsRouter = require('./Routers/news.router')
const mongoose = require('mongoose');

const PORT = 8080;

app.use(express.json());

const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://myBBCApp:chioma@cluster0.ih7ry.mongodb.net/julius?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database is connected");
    } catch (error) {
        console.log('DataBase not connected');
    }
}

connectDb();
// console.log(app)


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/api/v1',newsRouter)


app.listen(PORT, ()=>{
    console.log(`App is listening to port ${PORT}`)
})


