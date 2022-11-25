import { DBConnection} from './db.js';
import { PORT } from './config.js';
import app from './app.js';



DBConnection();


app.listen(PORT);
console.log("Server lisening on port", PORT)