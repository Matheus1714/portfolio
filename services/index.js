const express = require('express');
const app = express();
const port = 8080 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`server runnig on http://localhost:${port}`);
});