import express from 'express'
import pool from "./db.js";
    const app = express();


const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Mobile", price: 50000 },
    {"id": 3,name: "Headphones",price: 5000},
];
app.use(express.json());

app.get('/products',(req,res) => {
    res.json("Hello products ")
}) 
app.get('/',(req,res) => {
    res.json("Server is running on port 5000 ")
}) 
app.get('/contacts',(req,res) => {
    res.json("Hello contacts")
})
 app.get('/about',(req,res) => {
    res.json("Hello about")
})

 pool.query("SELECT Now()", (error, result) => {
if (error)  {
    console.log("Database Failed " , error) 
}
    else {
        console.log("Database is connected" , result.rows) 
    }
})
app.listen(5000,() => {
  console.log('Server is running on port 5000');
});
app.post('/products', (req, res) => {
    const newProduct = req.body;

    products.push(newProduct);

    res.json(newProduct);
});