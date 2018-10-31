const User = require('../../models/api/user');

exports.user_login = (req, res) => {
	const { body } = req;
	const { username } = body;
	const { password } = body;

	User.find({ username: username }, (err, users) => {
		if (err)
			res.send({
				status: 404,
				message: 'There was an issue finding the user.'
			})
		else if (users.length != 1)
			return res.send({
				status: 403,
				message: 'Invalid username!'
			});

		const user = users[0];

		if (user.password != password)
			return res.send({
				status: 403,
				message: 'Invalid password!',
			});
		else
			res.send({
				status: 200,
				user,
			});
	});

};

exports.user_signup = (req, res) => {
	const { body } = req;
	const { username, password, email } = body;

	User.find({ username: username }, (err, previousUsers) => {
		if (err) {
			return res.send({
				status: 400,
				message: 'There was an issue signing up.',
			});
		} else if (previousUsers.length > 0) {
			return res.send({
				status: 400,
				message: 'This username is taken. Choose another username',
			});
		}

		const newUser = new User({
			username: username,
			password: password,
			email: email,
		});

		newUser.save((err, user) => {
			if (err)
				res.send({
					status: 400,
					message: 'There was an issue saving the user. Nothing has been saved.',
				});
			else
				res.send({
					status: 200,
					user,
				});
		});
	});
};

exports.user_update = (req, res) => {
	const { params, body } = req;
	const { userid } = params;

	User.findByIdAndUpdate({ _id: userid }, body, {new: true}, (err, user) => {
		if (err)
			res.send({
				status: 404,
				message: 'There was an issue finding and updating the user on the server.',
			});
		else
			res.send({
				status: 200,
				user,
			});
	});
};

//MAKE SURE TO WARN BEFORE REMOVING USER ACCOUNT!!!! NOT REVERSIBLE!!
exports.user_remove = (req, res) => {
	const { params } = req;
	const { userid } = params;

	User.deleteOne({ _id: userid }, (err) => {
		if (err)
			res.send({
				status: 404,
				message: 'There was an issue finding and removing the user.',
			})
        else
			res.send({
				status: 200,
				message: `User ${userid} has been removed from the database!`,
			})
	});

};