import myForm from "./component";
import { withFormik } from "formik";

const handleSubmit = (values, { props }) => {
  const { setHomescreen, fetchSearchData } = props;
  const { searchbook } = values;
  setHomescreen();

  const newValues = searchbook.trim().replaceAll(" ", "+");
  fetchSearchData(newValues);
};

const validate = (values) => {
  let errors = {};

  if (!values.searchbook) {
    errors.searchbook = "Required";
  } else if (values.searchbook.length < 3) {
    errors.searchbook = "Please Enter min 3 Characters";
  }

  return errors;
};

export default withFormik({
  displayName: "BookSearchForm",
  handleSubmit,
  validate,
  mapPropsToValues: (props) => {
    const initialValues = {
      searchbook: "",
    };
    return initialValues;
  },
})(myForm);
