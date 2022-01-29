const GoogleStrategy = require('passport-google-oauth20').Strategy;

const googleStrategy = () => {
	return new GoogleStrategy(
		{
			clientID:
				'5633124774-m8dr2ouui1504i5rdqlkd22bkortml3h.apps.googleusercontent.com',
			clientSecret: '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',
			callbackURL: '/auth/google/callback'
		},
		async (accessToken: any, refreshToken: any, profile: any, done: any) => {
			done(null, profile);
		}
	);
};

export default googleStrategy;
