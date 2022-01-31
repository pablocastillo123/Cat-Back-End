import UserModel from './../models/user';
import { UserInterface } from '../interfaces/user';
const GitHubStrategy = require('passport-github').Strategy;

const gitHubStrategy = () => {
	return new GitHubStrategy(
		{
			clientID: '2e527bedb001896b3d35',
			clientSecret: '9996d0d4238cc3062b46ea8f544b4f7f3a2d1698',
			callbackURL: '/auth/github/callback'
		},
		async (accessToken: any, refreshToken: any, profile: any, done: any) => {
			UserModel.findOne(
				{ githubId: profile.id },
				async (err: Error, doc: UserInterface) => {
					if (err) {
						return done(err, null);
					}
					if (!doc) {
						const newUser = new UserModel({
							githubId: profile.id,
							username: profile.username
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

export default gitHubStrategy;
