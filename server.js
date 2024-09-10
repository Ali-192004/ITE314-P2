    const express = require('express');
    const app = express();

    // Data to be served
    const myData = {
    subject: 'ITE314',
    exam: 'P2',
    node: 'NODEJS'
    };

    
    app.get('/', (req, res) => {
    res.send("Welcome to my server, visitor! To know more please try adding any of these in the URL: ('/subject', '/exam', '/node', '/mydata')");
    });


    app.get('/subject', (req, res) => {
    res.send(myData.subject.toUpperCase());
    });

    // Route to return exam details
    app.get('/exam', (req, res) => {
    res.send(myData.exam.toUpperCase());
    });

    // Route to return 'NODEJS'
    app.get('/node', (req, res) => {
    res.send(myData.node.toUpperCase());
    });

    // Route to return a JSON object with /subject, /exam, and /node
    app.get('/mydata', (req, res) => {
    res.json(myData);
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
