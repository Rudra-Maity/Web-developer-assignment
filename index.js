const express = require('express');
const path = require('path');
const app = express();

// Define a route to render HTML
app.get('/', (req, res) => {
    // Send the HTML file named 'index.html' located in the 'public' directory
    res.sendFile(path.join(__dirname,'index.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
