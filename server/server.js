import { config } from 'dotenv';
config();
import { createServer } from 'http';
import app from './src/app.js';
import connect from './src/db/connect.js';


const PORT = process.env.PORT || 8080;


(async () => {
await connect(process.env.MONGO_URI);
const server = createServer(app);
server.listen(PORT, () => console.log(`API running on :${PORT}`));
})();