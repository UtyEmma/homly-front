export const __tenantsignup = {
    rules: {
        firstname: 'required|string',
        lastname: 'required|string',
        email: 'required|email',
        password: 'required|confirmed|min:6',
        username: 'required|string|between:3,12'
    },

    messages: {
        // "required.firstname" : "Your Firstname is Required",
        // "string;firstname"
    },

    attributes: {
        firstname: 'First Name',
        lastname: 'Last Name',
        email: 'Email Address',
        password: 'Password',
        phone: 'Phone Number'
    }
}

export const __tenantlogin = {
    rules: {
        email: 'required|email',
        password: 'required'
    },

    messages: {},

    attributes: {
        email: 'Email Address',
        password: 'Password'
    }
}

export const __update_tenant_profile = {
    rules: {
        firstname: 'required|string',
        lastname: 'required|string',
        email: 'required|email',
        phone: 'numeric'
    },

    attributes: {
        firstname: 'First Name',
        lastname: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number'
    }
}
