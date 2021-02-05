import { Formik } from "formik";
import React from "react";
import { Col } from "react-bootstrap";
import Select from "react-select";
import "../../theme/index.module.css";
import "./GetStarted.css";

const options = [
  { value: "México", label: "México" },
  { value: "USA", label: "USA" },
];
const Form = () => {
  return (
    <div className="formContainer">
      <div>
        <h1 className="title-form">Make the first move. Don’t be shy.</h1>
        <Formik
          initialValues={{
            email: "",
            tel: "",
            company: "",
            firstName: "",
            lastName: "",
            role: "",
            country: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.tel) {
              errors.tel = "Required";
            }
            if (!values.company) {
              errors.company = "Required";
            }
            if (!values.firstName) {
              errors.firstName = "Required";
            }
            if (!values.lastName) {
              errors.lastName = "Required";
            }
            if (!values.role) {
              errors.role = "Required";
            }

            console.log(errors);
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
              <div className="form-row mt-4">
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
              <div className="form-row mt-4">
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
                  {errors.tel && touched.tel && errors.tel}
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
                  {errors.company && touched.company && errors.company}
                </Col>
              </div>
              <div className="form-row mt-4">
                <Col xs={12}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  {errors.firstName && touched.firstName && errors.firstName}
                </Col>
              </div>
              <div className="form-row mt-4">
                <Col xs={12}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  {errors.lastName && touched.lastName && errors.lastName}
                </Col>
              </div>
              <div className="form-row mt-4">
                <Col xs={6} className="mr-0">
                  <input
                    type="text"
                    name="role"
                    placeholder="Job role"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.role}
                  />
                  {errors.role && touched.role && errors.role}
                </Col>
                <Col xs={6}>
                  <Select
                    styles={customStyles}
                    placeholder="Country"
                    options={options}
                    name="country"
                    //value={values.country}
                    onChange={(selectedOption) => {
                      // This inline function can now completely be reaplce by handleChange("year")
                      handleChange("country")(selectedOption.value);
                    }}
                  />
                </Col>
              </div>

              <div className="custom-control my-5 custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                  name="customCheck1"
                />
              </div>

              <button
                type="submit"
                style={{
                  borderRadius: "34px",
                  backgroundColor: "#3333FF",
                  borderColor: "#3333FF",
                  height: "56px",
                  width: "117px",
                  color: "#FFFFFF",
                  fontFamily: "Open Sans",
                  fontSize: "18px",
                  fontWeight: "bold",
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
