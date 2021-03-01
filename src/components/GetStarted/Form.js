import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { store } from "react-notifications-component";
import Select from "react-select";
import * as Yup from "yup";
import "../../theme/index.module.css";
import "./GetStarted.css";
const options = [
  { value: "México", label: "México" },
  { value: "USA", label: "USA" },
];

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  tel: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),

  lastName: Yup.string().required("Required"),
  role: Yup.string().required("Required"),
});

const FormGetStarted = () => {
  return (
    <div className="formContainer">
      <div>
        <p className="title-form">Make the first move. Don’t be shy.</p>
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
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting })  => {
            axios
              .post(
                "https://us-central1-advanced-global-site.cloudfunctions.net/app/sendForm",
                values
              )
              .then(function (response) {
                if (response.status === 201) {
                  store.addNotification({
                    title: "Success!",
                    message: "information sent correctly",
                    type: "success",
                    insert: "top",
                    container: "center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true,
                    },
                  });
                } else {
                }

                setSubmitting(false);
              })
              .catch(function (error) {
                console.log(error);

                setSubmitting(false);
              });
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
            handleReset
            /* and other goodies */
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} xs="12" sm="6">
                  <Form.Control
                    size="lg"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xs="12" sm="6">
                  <Form.Control
                    size="lg"
                    type="tel"
                    name="tel"
                    placeholder="Phone Number"
                    value={values.tel}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.tel && !errors.tel}
                    isInvalid={!!errors.tel}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.tel}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xs="12" className="mt-3">
                  <Form.Control
                    type="text"
                    size="lg"
                    name="company"
                    placeholder="Company Name"
                    value={values.company}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.company && !errors.company}
                    isInvalid={!!errors.company}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.company}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xs="12" sm="6" className="mt-3">
                  <Form.Control
                    type="text"
                    size="lg"
                    name="firstName"
                    placeholder="First Name"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xs="12" sm="6" className="mt-3">
                  <Form.Control
                    size="lg"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onBlur={handleBlur}
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={!!errors.lastName}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xs="12" sm="8" className="mt-3">
                  <Form.Control
                    size="lg"
                    type="text"
                    name="role"
                    placeholder="Job role"
                    onBlur={handleBlur}
                    value={values.role}
                    onChange={handleChange}
                    isValid={touched.role && !errors.role}
                    isInvalid={!!errors.role}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.role}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xs="12" sm="4" className="mt-3">
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
                  <Form.Control.Feedback type="invalid">
                    {errors.country}
                  </Form.Control.Feedback>
                </Form.Group>
                <Col sm="12" md="3" lg="4" className="ml-0">
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
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Spinner animation="border" variant="primary" />
                  ) : (
                    "SUBMIT"
                  )}
                </Button>
              </Col>
              </Form.Row>
            
            </Form>
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

export default FormGetStarted;
