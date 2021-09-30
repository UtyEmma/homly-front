
export const __agent_updateProfile = {
    rules: {    
        firstname : 'required|string',
        lastname : 'required|string',
        email : 'required|email',
        phone_number : 'numeric',
        whatsapp_no : 'numeric',
        title : 'required|string',
        bio : 'string',
        state : 'string',
        city : 'string',
        facebook : 'url',
        instagram : 'url',
        twitter : 'url',
        website : 'url',
    },

    messages: {

    },

    attributes: {
        firstname: "First Name",
        lastname: "Last Name",
        email: "Email Address",
        phone_number: "Phone Number",
        whatsapp_no: "WhatsApp Number",
        title: "Title",
        bio: "Bio",
        state: "State",
        city: "City",
        facebook: "Facebook Username",
        instagram: "Instagram Handle",
        twitter: "Twitter Handle",
        website: "Website URL" 
    }
} 


export const __agent_signup = {
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
    }
 
}


export const __agent_login = {
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

export const __agent_updateUsername = {
    rules: {
        username: 'required',
    },

    attributes: {
        username: 'Username'
    }
}