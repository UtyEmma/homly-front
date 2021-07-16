import * as yup from "yup";

export const __createwishlist = yup.object().shape({
    category : yup.string().required('Category is Required'),
    no_rooms : yup.number("Number of Rooms must be a number"),
    features: yup.string().required('Features are Required'),
    amenities: yup.number().required("Amenities are Required"),
    budget: yup.string().required('Budget is Required'),
    state: yup.string().required("State is Required"),
    lga: yup.string().required("Local Government is Required"),
    area: yup.string().required("Area is Required"),
    landmark: yup.string().required("Landmark is Required"),
    additional: yup.string().required("Additional Information is Required")
});