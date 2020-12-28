import { Formik } from "formik";
import React from "react";
import { Col } from "react-bootstrap";
import Select from "react-select";
import "../../theme/index.module.css";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Form = () => {
  return (
    <div className="formContainer">
      <div>
        <h1>Make the first move. Don’t be shy.</h1>
        <Formik
          initialValues={{ email: "", tel: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div class="form-row mt-4">
                <Col xs={12}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </Col>
              </div>
              <div class="form-row mt-4">
                <Col xs={6}>
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone Number"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tel}
                  />
                </Col>
                <Col xs={6}>
                  <input
                    type="text"
                    name="company"
                    placeholder="Compnay Name"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company}
                  />
                </Col>
              </div>
              <div class="form-row mt-4">
                <Col xs={12}>
                  <input
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.FirstName}
                  />
                </Col>
              </div>
              <div class="form-row mt-4">
                <Col xs={12}>
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="Last Name"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.LastName}
                  />
                </Col>
              </div>
              <div class="form-row mt-4">
                <Col xs={6} className="mr-0">
                  <input
                    type="text"
                    name="Job Role"
                    placeholder="Job Role"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Role}
                  />
                </Col>
                <Col xs={6}>
                  <Select
                    styles={customStyles}
                    placeholder="Country"
                    options={options}
                    value={values.country}
                  />
                </Col>
              </div>

              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                  name="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1">
                  Yes. I’d like to receive occasional marketing emails from
                  Advanced Mankind. I have the right to opt out at any time.
                  View privacy policy.
                </label>
              </div>

              <button
                type="submit"
                style={{
                  borderRadius: "34px",
                  backgroundColor: "#3333FF",

                  height: "56px",
                  width: "117px",
                  color: "#FFFFFF",
                  fontFamily: "Open Sans",
                  fontSize: "18px",
                  fontWeight: "bold",
                  letterSpacing: 0,
                  lineHeight: "24px",
                  textAlign: "center",
                }}
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const customStyles = {
  valueContainer: () => ({
    // none of react-select's styles are passed to <Control />
    height: 48,
    backgroundColor: "#f7f9fc",

    paddingLeft: 15,
  }),
  control: () => ({
    backgroundColor: "#f7f9fc",
    alignItems: "center",

    borderColor: "hsl(0,0%,80%)",
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: "38px",
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms",
    boxSizing: " border-box",
  }),
};

export default Form;
