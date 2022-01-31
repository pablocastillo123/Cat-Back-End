import { Router } from 'express';
import passport from 'passport';
const router = Router();

const URL_FAILURE_REDIRECT = 'http://localhost:3000/login';
const URL_SUCCESS_REDIRECT = 'http://localhost:3000';

// Ruta para registrarse
router.get(
	'/google/callback',
	passport.authenticate('google', {
		failureRedirect: URL_FAILURE_REDIRECT,
		successRedirect: URL_SUCCESS_REDIRECT
	})
);
router.get(
	'/github/callback',
	passport.authenticate('github', {
		failureRedirect: URL_FAILURE_REDIRECT,
		successRedirect: URL_SUCCESS_REDIRECT
	})
);

// Ruta para iniciar sesión
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/github', passport.authenticate('github', { scope: ['profile'] }));

// Cerrar sesión
router.get('/logout', (req, res) => {
	req.logout();
	res.send({ message: 'Cierre de sesión exitoso' });
});

export default router;
