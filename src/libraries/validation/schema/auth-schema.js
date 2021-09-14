export const __reset_password = {
    rules: {
        token: 'required|numeric|digits:5',
        email: 'required|email',
        password: 'required|min:6',
        type: 'required'
    },

    messages: {
        // "required.firstname" : "Your Firstname is Required",
        // "string;firstname"
    },

    attributes: {
        token: 'Token',
        email: 'Email Address',
        password: 'Password',
        type: 'User Type'
    }
}

export const __recover_password = {
    rules: {
        email: 'required|email',
        type: 'required'
    },

    messages: {
        // "required.firstname" : "Your Firstname is Required",
        // "string;firstname"
    },

    attributes: {
        email: 'Email Address',
        type: 'User Type'
    }
}