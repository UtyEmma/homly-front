import HttpError from "./http-error";
import ValidatorError from "./validation-errors";

const Errors = (err, type) => {
    switch (type) {
        case 'http':
            return HttpError(err.response)
        case 'form':
            return ValidatorError(err)
        default:
            break;
    }
}

export default Errors;