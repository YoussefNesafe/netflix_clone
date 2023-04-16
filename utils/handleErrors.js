export const handleErrorMsg = (msg) => {
	console.log(msg);
	const errors = ["wrong-password", "user-not-found", "too-many-requests", "email-already-in-use"];
	const errorsObject = {
		"wrong-password": "Wrong password",
		"user-not-found": "User not found",
		"email-already-in-use": "Email already in use",
		"too-many-requests":
			"Too many requests, Access to this account has been temporarily disabled due to many failed login attempts.",
	};
	if (msg.includes("too-many-requests")) return errorsObject["too-many-requests"];
	if (msg.includes("user-not-found")) return errorsObject["user-not-found"];
	if (msg.includes("wrong-password")) return errorsObject["wrong-password"];
	if (msg.includes("email-already-in-use")) return errorsObject["email-already-in-use"];
	return "Somtheng Wrong";
};
