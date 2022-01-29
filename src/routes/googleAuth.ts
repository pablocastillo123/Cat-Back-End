import { Router } from 'express';
import passport from 'passport';
const router = Router();

// Ruta para registrarse
router.get(
	'/google/callback',
	passport.authenticate('google', {
		failureRedirect: 'http://localhost:3000/login',
		successRedirect: 'http://localhost:3000'
	})
);

// Ruta para iniciar sesion
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

export default router;
