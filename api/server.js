const express = require("express");
const app = express();

// Define the API endpoint
app.get("/", (req, res) => {
    const response = {
        message: "My name is Sergio Martinez Barajas",
        timestamp: Date.now()
    };
    res.json(response);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
