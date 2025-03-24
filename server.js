const express = require("express");
const app = express();

// Define the API endpoint
app.get("/", (req, res) => {
    const response = {
        message: "My name is Sergio Martinez Barajas",
        timestamp: Date.now(),
	gradYear: 2026,
	company: "Liatrio"
    };
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
});

// Start the server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
