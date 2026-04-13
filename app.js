const express = require("express"); // Importando express
const port = 3000; // Elegir puerto HTTP
const app = express(); // Crear el objeto servidor
const books = require("./data/books.json")

// Parsear el "body" entrante a JSON
// Habilitar recepción de JSON por mi Backend //
// Middleware --> Operación intermedia
app.use(express.json());

app.get('/all', (req, res) => {
  res.json(books);
});

app.get('/first', (req, res) => {
  res.json(books[0])
})

app.get('/last', (req, res) => {
  res.json(books[books.length-1]);
})

app.get("/middle",(req,res)=>{
    res.json(books[50]);
});

app.get("/author/dante-alighieri",(req,res)=>{
    const book = books.find(b => b.author === "Dante Alighieri");
    res.json(book.title);
});

app.get("/country/charles-dickens",(req,res)=>{
    const book = books.find(p => p.author === "Charles Dickens");
    res.json(book.country);
});

app.get("/year&pages/cervantes",(req,res)=>{
    const book = books.find(l => l.author === "Miguel de Cervantes");
    res.json({pages: book.pages, year: book.year});
});

app.get("/country/count/spain",(req,res)=>{
    const book = books.filter(b => b.country === "Spain");
    res.json(book.length);
});

app.get("/country/at-least/germany",(req,res)=>{
    const e = books.some(l => l.country === "Germany");
    res.json(e);
});

app.get("/pages/all-greater/200",(req,res)=> {
    const all = books.every(t => t.pages >= 200);
    res.json(all);
});

// http://localhost:3000
app.listen(port, () => {
  // activar servidor en puerto 3000
  console.log(`Example app listening on port ${port}`);
});