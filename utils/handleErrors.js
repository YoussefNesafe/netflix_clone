export const handleErrorMsg = (msg) => {
	console.log(msg);
	const errors = ["wrong-password", "user-not-found", "too-many-requests"];
	const errorsObject = {
		"wrong-password": "Wrong Password",
		"user-not-found": "User Not Found",
		"too-many-requests":
			"Too Many Requests, Access to this account has been temporarily disabled due to many failed login attempts.",
	};
	if (msg.includes("too-many-requests")) return errorsObject["too-many-requests"];
	if (msg.includes("user-not-found")) return errorsObject["user-not-found"];
	if (msg.includes("wrong-password")) return errorsObject["wrong-password"];
	return "Somtheng Wrong";
};
