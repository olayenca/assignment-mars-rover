import express, {Request, Response, Express} from 'express';
import path from 'path';

const app: Express = express();
const port: number = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/rover', (req: Request, res: Response) => {
    try {
        if (!req.query.plateau || !req.query.route || !req.query.position) {
            res.status(400).send('Invalid query parameters');
            return;
        }

        res.sendFile(path.join(__dirname, '../public', '/index.html'));
    } catch (error) {
        res.status(500).sendFile(path.join(__dirname, '../public', '/error.html'));
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
