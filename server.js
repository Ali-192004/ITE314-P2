    const express = require('express');
    const app = express();

    
    const myData = {
    subject: 'ITE314',
    exam: 'P2',
    node: 'NODEJS'
    };

    
    app.get('/', (req, res) => {
    res.send("ITE 314 - Aldrin Amantillo");
    });


    app.get('/subject', (req, res) => {
    res.send(myData.subject.toUpperCase());
    });

    app.get('/exam', (req, res) => {
    res.send(myData.exam.toUpperCase());
    });

    
    app.get('/node', (req, res) => {
    res.send(myData.node.toUpperCase());
    });

    
    app.get('/mydata', (req, res) => {
    res.json(myData);
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
