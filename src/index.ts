import express from 'express';
import startMongoDb from './database';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import googleStrategy from './passport/googleStrategy';
import routes from './routes';

dotenv.config();
const app = express();

// Conexion MongoDB
// startMongoDb();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(
	session({
		secret: 'catserver',
		resave: true,
		saveUninitialized: true
	})
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, done) => {
	done(null, user);
});
passport.deserializeUser(async (user: any, done) => {
	done(null, user);
});

passport.use(googleStrategy());

app.use('/', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log('Cat server en puerto:', PORT);
});
