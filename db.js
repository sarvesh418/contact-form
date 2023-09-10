const express = require("express")
const app = express()

const mysql = require('mysql')
const pool = mysql.createPool({
    host: "bjtrypq1rsdssxscmfqb-mysql.services.clever-cloud.com",
    user: "uppi6vyizhswrj60",
    password: "nFWnDfe3a0MqVLC1niLv",
    database: "bjtrypq1rsdssxscmfqb"
});

// pool.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL:', err);
//       return;
//     }
//     console.log('Connected to MySQL database');
// });

module.exports = pool;