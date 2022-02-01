import { UserInterface } from './interfaces/user';
import UserModel from './models/user';
import express from 'express';
import startMongoDb from './database';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import googleStrategy from './passport/googleStrategy';
import gitHubStrategy from './passport/gitHubStrategy';
import routes from './routes';
import { StoreCatFromApi } from './Controller/CatController';

dotenv.config();
const app = express();
// Conexion MongoDB
startMongoDb();

// Intervalo de 30min
const timeStoreCat = 30 * 60 * 1000;
setInterval(() => {
	StoreCatFromApi();
}, timeStoreCat);

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.URL_CLIENT }));
app.use(
	session({
		secret: 'catserver',
		resave: true,
		saveUninitialized: true
	})
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, done: any) => {
	return done(null, user._id);
});
passport.deserializeUser((id: string, done: any) => {
	UserModel.findById(id, (err: Error, doc: UserInterface) => {
		return done(null, doc);
	});
});

passport.use(googleStrategy());
passport.use(gitHubStrategy());

// Routes
app.use('/', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log('Cat server en puerto:', PORT);
});
