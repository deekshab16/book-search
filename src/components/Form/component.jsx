import "./style.css";
import PropTypes from "prop-types";

const Form = (props) => {
  const {
    dirty,
    data,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    isValid,
    values,
  } = props;

  const { isLoading } = data;

  const disableButton = isLoading || !dirty;
  return (
    <>
      <div className="leftFromWrapper">
        <label for="searchbox">Search Book</label>
        <input
          className={isValid ? "normal-input" : "error-input"}
          autoFocus
          placeholder="enter book title"
          type="text"
          name="searchbook"
          id="search-book"
          aria-label="search-book"
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
          className={disableButton ? "disable-button" : "input-button"}
          value={isLoading ? "Searching..." : "Search"}
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

Form.propTypes = {
  dirty: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isValid: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
};

export default Form;
