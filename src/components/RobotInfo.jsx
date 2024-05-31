import { useFormik } from "formik";
import * as yup from "yup";
import Textfield from "./atom/Textfield.atom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./RobotInfo.css"

function RobotInfo({data, type, isDisabled, setOpen, setEditRobot, onSave, onSubmit, handleBack}) {

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required.")
      .min(3, "Minimum 3 characters required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email('Invalid email').required('Email is required'),
    address: yup.object().shape({
      street: yup.string().required("Address Street is required"),
      suite: yup.string().required("Address Suite is required"),
      city: yup.string().required("Address City is required"),
      zipcode: yup.string().required("Address Zip Code is required"),
    }),
    phone: yup.string().required("Phone number is required"),
    website: yup.string().required("Website is required"),
    company: yup.object().shape({
      name: yup.string().required("Company Name is required"),
    }),
  });

  const initialValues = {
    name: "",
    username: "",
    email: '',
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    website: "",
    company: {
      name: "",
    },
  };

  const navigate = useNavigate();

  useEffect(() => {
    data && formik.setValues(data);  
  }, 
    [data]);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      onSubmit(values)
      setOpen(false);
    },
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
        <div className={type === 'popup' ? 'popup-information' : type === 'create' ? 'information create-information' : 'information view-information'}>
        {handleBack && (
      <div className="return-icon">
      <img className="return-icon-img" src="https://www.svgrepo.com/show/500472/back.svg" alt="return button" onClick={() => navigate('/')}></img>
    </div> )}
    <div className="wrapper">
        <Textfield
          label="Name:"
          name="name"
          id="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.name}
          placeholder="Name"
          errorMessage={formik.errors?.name}
          touched={formik.touched?.name}
          isDisabled={isDisabled}
        />
        <Textfield
          label="Username:"
          name="username"
          id="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.username}
          placeholder="Username"
          errorMessage={formik.errors?.username}
          touched={formik.touched?.username}
          isDisabled={isDisabled}
        />
        <Textfield
          label="Email:"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.email}
          placeholder="Email"
          errorMessage={formik.errors?.email}
          touched={formik.touched?.email}
          isDisabled={isDisabled}
        />
        <Textfield
          label="Address Street:"
          name="address.street"
          id="street"
          placeholder="Street"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.address?.street}
          errorMessage={formik.errors.address?.street}
          touched={formik.touched.address?.street}
          isDisabled={isDisabled}
        />
        <Textfield
          label="Address Suite:"
          name="address.suite"
          id="suite"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.address?.suite}
          placeholder="Suite"
          errorMessage={formik.errors.address?.suite}
          touched={formik.touched.address?.suite}
          isDisabled={isDisabled}
        />
        <Textfield
          label="Address City:"
          name="address.city"
          id="city"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.address?.city}
          placeholder="City"
          errorMessage={formik.errors.address?.city}
          touched={formik.touched.address?.city}
          isDisabled={isDisabled}
        />
        <Textfield
          label="Address Zip Code:"
          name="address.zipcode"
          id="zipcode"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.address?.zipcode}
          placeholder="Zip Code"
          errorMessage={formik.errors.address?.zipcode}
          touched={formik.touched.address?.zipcode}
          isDisabled={isDisabled}
        />
       
        <Textfield
          label="Phone:"
          name="phone"
          id="phone"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.phone}
          placeholder="Phone"
          errorMessage={formik.errors?.phone}
          touched={formik.touched?.phone}
          isDisabled={isDisabled}
        />
        <Textfield
          label="Website:"
          name="website"
          id="website"
          onBlur={formik.handleBlur}
          onChange={type && formik.handleChange}
          value={formik.values?.website}
          placeholder="Website"
          errorMessage={formik.errors?.website}
          touched={formik.touched?.website}
          isDisabled={isDisabled}
        />
        <Textfield
          label="Company Name:"
          name="company.name"
          id="company"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.company?.name}
          placeholder="Company Name"
          errorMessage={formik.errors?.company?.name}
          touched={formik.touched?.company?.name}
          isDisabled={isDisabled}
        />
        
        {type && (
        <div className="input">
          <button id="button" type="submit">
            Submit
          </button>
        </div>
        )}
      </div>
      </div>
    </form>
  );
}

export default RobotInfo;