// Requiring module
const express = require('express');
const path=require('path')
const sql = require('mssql');
// Creating express object
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const dbConfig = {
  user: 'bootcamp',
  password: 'Pass@123',
  server: 'bootcampaug5server.database.windows.net',
  database: 'bootcampaug5db',
  options: {
      encrypt: true, // Use this if you're on Windows Azure
      enableArithAbort: true
  }
};

// Connect to SQL Server
sql.connect(dbConfig, err => {
  if (err) {
      console.error('Database connection failed:', err);
      return;
  }
  console.log('Connected to SQL Server');
});
// Handling GET request
app.get('/', async (req, res) => { 
  console.log("hi")
  res.sendFile(__dirname+'index.html') 
}) 

app.get('/task2', async (req,res)=>{
      res.sendFile(__dirname+'/public/task2.html')
    })

app.get('/task2data',async(req,res)=>{
  try {
    const result=await sql.query`SELECT top 20 * FROM salesLT.Customer`
    res.json(result)
  } catch (error) {
    console.log(error)
  }
})
app.get('/task3', async (req,res)=>{
  res.sendFile(__dirname+'/public/task3.html')})
app.get('/task3data',async(req,res)=>{
try {
  console.table(sql)
const result=await sql.query`SELECT
                p.Name AS ProductName,
                p.Color,
                p.Size,
                p.Weight
            FROM
                SalesLT.Product p
            INNER JOIN
                SalesLT.ProductCategory pc ON p.ProductCategoryID = pc.ProductCategoryID`
res.json(result)
} catch (error) {
console.log(error)
}
})


// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
