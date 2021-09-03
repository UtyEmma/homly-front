export const MapFormErrors = (errors) =>  {
    let object = {}
    if (errors) {
        for (const [key, value] of Object.entries(errors)) {
            object = {...object, [key]: {message: value[0]}}
        }
    }
    return object;
}