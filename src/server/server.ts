import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/rover', (req, res) => {
    try {
        if (!req.query.plateau || !req.query.route || !req.query.position) {
            throw new Error('Invalid query parameters');
        }

        res.sendFile(path.join(__dirname, '../public', '/index.html'));
    } catch (error) {
        res.status(404)
        res.sendFile(path.join(__dirname, '../public', '/error.html'))
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/\n`);
});
