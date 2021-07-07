import * as Validator from 'validatorjs'

const Validate = {
    make: (data, rules) => {
        const Validation = new Validator(data, rules)
        if(Validation.fails()){
            return handleErrors(Validation.errors());
        } 
        return true;        
    },
    handleErrors: (errors) => {
        
    }
}

export default Validate;