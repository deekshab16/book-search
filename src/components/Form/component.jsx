import "./style.css";
import PropTypes from "prop-types";

const Form = (props) => {
  const { handleBlur, handleChange, handleSubmit, errors, isValid, values } =
    props;

  return (
    <>
      <div className="leftFromWrapper">
        <label htmlFor="searchbox">Search Book</label>
        <input
          className={isValid ? "normal-input" : "error-input"}
          autoFocus
          type="text"
          name="searchbook"
          value={values.searchbook}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors && errors.searchbook && (
          <span className="error-message">{errors.searchbook}</span>
        )}
      </div>
      <div className="rightFormWrapper">
        <input
          type="button"
          className="input-button"
          value="Search"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

Form.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isValid: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
};

export default Form;
