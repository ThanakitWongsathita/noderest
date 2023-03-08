const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(
    "mongodb://admin:SBFsqal14913@node40731-noderest.proen.app.ruk-com.cloud:11344",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const Book = mongoose.model("Book",
{
    id: Number,
    title: String,
    author: String,
});

const app = express();
app.use(bodyParser.json());

app.post("/books",async(req,res)=>
{
    try
    {
        const book=new Book(req.body);
        book.id=(await Book.countDocuments())+1;
        await book.save();
        res.send(book);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
});

app.get("/books",async(req,res)=>
{
    try
    {
        const books=await Book.find();
        res.send(books);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
});