export const __signup = {
    rules: {
        firstname: 'required|string',
        lastname: 'required|string',
        email: 'required|email',
        password: 'required|confirmed|min:6',
        username: 'required|string|between:3,12'
    },

    attributes: {
        firstname: 'First Name',
        lastname: 'Last Name',
        email: 'Email Address',
        password: 'Password',
        phone: 'Phone Number'
    }
}

export const __login = {
    rules: {
        email: 'required|email',
        password: 'required'
    },

    attributes: {
        email: 'Email Address',
        password: 'Password'
    }
}


export const __reset_password = {
    rules: {
        token: 'required|numeric|digits:5',
        email: 'required|email',
        password: 'required|min:6',
        type: 'required'
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

    attributes: {
        email: 'Email Address',
        type: 'User Type'
    }
}