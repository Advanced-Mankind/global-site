import { Formik } from "formik";
import React from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDropzone } from "react-dropzone";
import { store } from "react-notifications-component";
import Select from "react-select";
import * as Yup from "yup";
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

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  website: Yup.string().required("Required"),
  linkedIn: Yup.string().required("Required"),
  applying: Yup.string().required("Required"),
  salary: Yup.string().required("Required"),

  message: Yup.string().required("Required"),
});

const PositionsPopup = (props) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*,.pdf",
  });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const style = React.useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  return (
    <div className="w-100">
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
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          values.resume = acceptedFiles[0];
          console.dir(values);
          props.setShow(false);
          store.addNotification({
            title: "Success!",
            message: "information sent correctly",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
          setSubmitting(false);
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
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} xs="12" sm="6">
                <Form.Control
                  type="text"
                  size="lg"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs="12" sm="6">
                <Form.Control
                  type="text"
                  size="lg"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs="12" className="mt-3">
                <Form.Control
                  type="email"
                  size="lg"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs="12" className="mt-3">
                <Form.Control
                  type="text"
                  size="lg"
                  name="website"
                  placeholder="Website"
                  value={values.website}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.website && !errors.website}
                  isInvalid={!!errors.website}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.website}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs="12" className="mt-3">
                <Form.Control
                  size="lg"
                  type="text"
                  name="linkedIn"
                  placeholder="LinkedIn URL"
                  onBlur={handleBlur}
                  value={values.linkedIn}
                  onChange={handleChange}
                  isValid={touched.linkedIn && !errors.linkedIn}
                  isInvalid={!!errors.linkedIn}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.linkedIn}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs="12" sm="6" className="mt-3">
                <Select
                  styles={customStyles}
                  placeholder="Applying For..."
                  options={positionsOptions}
                  name="applying"
                  onChange={(selectedOption) => {
                    handleChange("applying")(selectedOption.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.applying}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs="12" sm="6" className="mt-3">
                <Form.Control
                  size="lg"
                  type="number"
                  name="salary"
                  min="1"
                  onBlur={handleBlur}
                  step="any"
                  placeholder="Salary Need"
                  value={values.salary}
                  onChange={handleChange}
                  isValid={touched.salary && !errors.salary}
                  isInvalid={!!errors.salary}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.salary}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs="12" className="mt-3">
                <div {...getRootProps({ style })}>
                  <input {...getInputProps()} />

                  <p className="mb-0">Resume</p>
                  <p
                    style={{
                      color: "black",
                      fontFamily: "Open Sans",
                      fontSize: "12px",
                      letterSpacing: "0",
                      lineHeight: "16px",
                    }}
                  >
                    Dop File here or{" "}
                    <span
                      style={{
                        color: "#3366FF",
                        fontFamily: "Open Sans",
                        fontSize: "12px",
                        letterSpacing: "0",
                        lineHeight: "16px",
                      }}
                    >
                      Select Files
                    </span>
                  </p>
                  <aside>
                    <ul>{files}</ul>
                  </aside>
                </div>
                <Form.Control.Feedback type="invalid">
                  {errors.salary}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xs="12" className="mt-3">
                <Form.Control
                  as="textarea"
                  style={{ height: "104px" }}
                  name="message"
                  onBlur={handleBlur}
                  placeholder="Message"
                  value={values.message}
                  onChange={handleChange}
                  isValid={touched.message && !errors.message}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button
              className="mt-4"
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
              type="submit"
            >
              SUBMIT
            </Button>
          </Form>
        )}
      </Formik>
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
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",

  padding: "11px 16px",
  border: "1px solid #ced4da",
  borderRadius: 4,
  backgroundColor: "#F7F9FC",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default PositionsPopup;
