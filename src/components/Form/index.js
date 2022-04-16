import myForm from "./component";
import { withFormik } from "formik";

const handleSubmit = (props) => {
    console.log("form submitted", props);
}

const validate = (values) => {
    let errors = {};

    if (!values.searchbook) {
      errors.searchbook = "Required";
    } else if (!/^[A-Za-z]+$/i.test(values.searchbook)) {
      errors.searchbook = "Invalid Characters";
    } else if (values.searchbook.length < 3) {
      errors.searchbook = "Please Enter min 3 Characters";
    }

    return errors;
  }

export default withFormik({
    displayName: 'BookSearchForm',
    handleSubmit,
    validate,
    initialValues: {
        searchbook: "",
      },
})(myForm);