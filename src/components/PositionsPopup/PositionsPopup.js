import { Formik } from "formik";
import { reduce } from "lodash";
import React from "react";
import { Col, Button } from "react-bootstrap";
import Select from "react-select";
import "./stylesPopup.css";

const positionsOptions = [
  { value: "UI/UX", label: "UI/UX Designer" },
  { value: "Project Manager", label: "Project Manager" },
  { value: "Copy Writer", label: "CopyWriter" },
  { value: "Creative Director", label: "Creative Director" },
  { value: "Business Analytics", label: "Business Analytics" },
];
const salaryOptions = [
  { value: "10", label: "$10,000" },
  { value: "20", label: "$20,000" },
  { value: "30", label: "$30,000" },
  { value: "40", label: "$40,000" },
];
const PositionsPopup = () => {
  return (
    <div className="formContainer">
      <div>
        <p className="title-form">Apply.</p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            website: "",
            linkedIn: "",
            applying: "",
            salary: "",
            resume: "",
            message: "",
          }}
          validate={(values) => {
            if (!values.firstName) {
              errors.firstName = "Required";
            }
            if (!values.lastName) {
              errors.lastName = "Required";
            }
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.website) {
              errors.website = "Required";
            }
            if (!values.linkedIn) {
              errors.linkedIn = "Required";
            }

            if (!values.applying) {
              errors.applying = "Required";
            }
            if (!values.salary) {
              errors.salary = "Required";
            }
            if (!values.resume) {
              errors.resume = "Required";
            }
            if (!values.message) {
              errors.message = "Required";
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
                <Col xs={12} sm={6} className="mt-2 mb-2">
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
                <Col xs={12} sm={6} className="mt-2">
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
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  className="form-control form-control-lg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.website}
                />
                {errors.website && touched.website && errors.website}
              </div>
              <div className="form-row mt-4">
                <input
                  type="text"
                  name="linkedIn"
                  placeholder="LinkedIn URL"
                  className="form-control form-control-lg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.linkedIn}
                />
                {errors.linkedIn && touched.linkedIn && errors.linkedIn}
              </div>
              <div className="form-row mt-4">
                <Col xs={12} sm={6} className="mb-4">
                  <Select
                    styles={customStyles}
                    //className="formMessage"
                    placeholder="Applying For..."
                    options={positionsOptions}
                    name="applying"
                    onChange={(selectedOption) => {
                      handleChange("applying")(selectedOption.value);
                    }}
                  />
                </Col>
                <Col xs={12} sm={6} >
                  <Select
                    styles={customStyles}
                    placeholder="Salary Needs"
                    options={salaryOptions}
                    name="salary"
                    onChange={(selectedOption) => {
                      handleChange("salary")(selectedOption.value);
                    }}
                  />
                </Col>
              </div>
              <div className="form-row mt-4">
                <input
                  type="text"
                  name="resume"
                  placeholder="Resume"
                  className="form-control form-control-lg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.resume}
                />
                {errors.resume && touched.resume && errors.resume}
              </div>
              <div className="form-row mt-4">
                <input
                  style={{ height: "104px" }}
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="form-control form-control-lg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                {errors.message && touched.message && errors.message}
              </div>

              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                  name="customCheck1"
                />
              </div>
              <Col sm="12" md="12" lg="12">
                <Button
                  style={{
                    borderRadius: "34px",
                    backgroundColor: "#3333FF",
                    borderColor: "#3333FF",
                    width: "100%",
                    color: "#FFFFFF",
                    fontFamily: "Open Sans",
                    fontSize: "18px",
                    fontWeight: "bold",
                    lineHeight: "24px",
                    textAlign: "center",
                    padding: "15px",
                  }}
                  disabled={isSubmitting}
                >
                  SUBMIT
                </Button>
              </Col>
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
  // placeholder:()=>({
  //   color:"red !important",
  // })
};

export default PositionsPopup;
