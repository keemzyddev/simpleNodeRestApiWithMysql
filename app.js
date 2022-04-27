const express = require('express')
const mysql = require('mysql')
const connection = require('./db')
const app = express()

// app.get('/createdb', (req, res) => {
//     let sql ='CREATE DATABASE mydb'
//     connection.query(sql, (err, result) => {
//         if(err) throw err
//         console.log('Database created...')
//         res.send('Database created...')
//     })
// })

app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE data(id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), PRIMARY KEY (id))'
    connection.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Data table created...')
    })
})
//add fist data
app.get('/adddata', (req, res) => {
    let data = {firstName: 'Hakeem', lastName: 'Durogbola'}
    let sql = 'INSERT INTO data SET ?'
    let query = connection.query(sql, data, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('first data added...')
    })
    connection.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Data table created...')
    })
})
// add second data
app.get('/adddata2', (req, res) => {
    let data = {firstName: 'Ahmad', lastName: 'Hussein'}
    let sql = 'INSERT INTO data SET ?'
    let query = connection.query(sql, data, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('second data added...')
    })
    connection.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Data table created...')
    })
}) 
// add third data
app.get('/adddata3', (req, res) => {
    let data = {firstName: 'Aminu', lastName: 'Abdullahi'}
    let sql = 'INSERT INTO data SET ?'
    let query = connection.query(sql, data, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('third data added...')
    })
    connection.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Data table created...')
    })
})
// SELECT data
app.get('/selectdata', ( req, res ) => {
    let sql = 'SELECT * FROM data'
    let query = connection.query(sql, (err, result) => {
        if(err) throw err 
        console.log(result)
        res.send('data fetched')
    })
})
// SELECT single data
app.get('/getdata/:id', ( req, res ) => {
    let sql = `SELECT * FROM data WHERE id = ${req.params.id}` 
    let query = connection.query(sql, (err, result) => {
        if(err) throw err 
        console.log(result)
        res.send('data fetched')
    })
})

//update data
app.get('/updatedata/:id', ( req, res ) => {
    let newFirstName = 'Oluwafemi'
    let sql = `UPDATE data SET firstName = '${newFirstName}' WHERE id = ${req.params.id}` 
    let query = connection.query(sql, (err, result) => {
        if(err) throw err 
        console.log(result)
        res.send('data updated')
    })
})

//delete data
app.get('/deletedata/:id', ( req, res ) => { 
    let sql = `DELETE FROM data WHERE id = ${req.params.id}` 
    let query = connection.query(sql, (err, result) => {
        if(err) throw err 
        console.log(result)
        res.send('data deleted')
    })
})

app.listen(5000, () => {
    console.log(`Server started on port 5000`)
})