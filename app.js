const express = require('express');
const app = express();
const pool = require('./db');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));

// Home page route
app.get('/', (req, res) => {
    res.render('home');
});


app.post('/post-form', async (req, res) => {
    personname = req.body.personname;
    email = req.body.email;
    pno = req.body.pno;
    console.log(personname, email, pno);
    const sqlQuery = "INSERT INTO contacts (name, email, phone) VALUES ('"+ personname+ "', '"+ email + "', '" + pno + "')";
    await pool.query(sqlQuery, (err, result) => {
        // console.log(result);
        if(err) console.log(err);
    })
    const Query = "Select * from contacts";
    await pool.query(Query, (err, result) => {
        // console.log(result);
        if(err) res.send(err);
        var s = JSON.stringify(result);
        const userData = JSON.parse(s);
        res.render('home', { userData });
    })
    
});

app.get('/contact', (req, res) => {
    const sqlQuery = "Select * from contacts";
    pool.query(sqlQuery, (err, result) => {
        // console.log(result);
        if(err) res.send(err);
        var s = JSON.stringify(result);
        const userData = JSON.parse(s);
        res.render('table', { userData });
    })
})

// Login form submission route

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
