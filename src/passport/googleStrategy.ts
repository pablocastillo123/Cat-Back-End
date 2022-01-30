import UserModel from './../models/user';
import { UserInterface } from '../interfaces/user';
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
			UserModel.findOne(
				{ googleId: profile.id },
				async (err: Error, doc: UserInterface) => {
					if (err) {
						return done(err, null);
					}
					if (!doc) {
						const newUser = new UserModel({
							googleId: profile.id,
							username: profile.name.givenName
						});
						await newUser.save();
						done(null, newUser);
					}
					done(null, doc);
				}
			);
		}
	);
};

export default googleStrategy;
