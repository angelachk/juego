require ( dotenv ).config;

import ...

let app = express();

app.use(cookieParser ( secret :'secret'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

configViewEngine(app);

initWebRoutes(App);
initAPIRoutes(App);


let port = process.env.PORT || 8080;
app.listen(port, () => console.log ('Listening on port ${port}'));
