const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello/get', (req, res) => {
    res.send('Hello, World!');
});

app.post('/hello', (req, res) => {
    res.send('Created item');
});

app.put('/hello/:id', (req, res) => {
    res.send('Updated item');
});

app.delete('/hello/:id', (req, res) => {
    res.send(`Deleted item with id: ${req.params.id}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
