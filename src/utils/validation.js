const validator = require("validator");

const validateSignupData = (req) => {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName || firstName.trim() === "") {
        throw new Error("First name is required");
    }
    if (!lastName || lastName.trim() === "") {
        throw new Error("Last name is required");
    }
    if (!validator.isEmail(emailId)) {
        throw new Error("Email not valid");
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error("Please enter a strong password");
    }
};

module.exports = { validateSignupData };
