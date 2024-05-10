import React from "react";
import "./Info.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Textfield from "./atom/Textfield.atom";
import { useEffect } from "react";

function RobotInfo({data, type}) {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required.")
      .min(3, "Minimum 3 characters required"),
    robotname: yup.string(),
    email: yup.string().required('Email is required'),
    address: yup.object().shape({
      street: yup.string().required("Address Street is required"),
      suite: yup.string().required("Address Suite is required"),
      city: yup.string().required("Address City is required"),
      zipcode: yup.string().required("Address Zip Code is required"),
      geo: yup.object().shape({
        lat: yup.string().required("Latitude is required"),
        lng: yup.string().required("Longitude is required"),
      }),
    }),
    phone: yup.string().required("Phone number is required"),
    website: yup.string().required("Website is required"),
    company: yup.object().shape({
      name: yup.string().required("Company Name is required"),
      catchPhrase: yup.string().required("Company Catch Phrase is required"),
      bs: yup.string().required("Company BS is required"),
    }),
  });

  const initialValues = {
    name: "",
    robotname: "",
    email: '',
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };

  useEffect(() => {
    formik.setValues(data);  
  }, 
    [data]);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      alert(
        "Registration Form Submitted \n " + JSON.stringify(values, null, 2)
      );
      console.log(values);
    },
    validationSchema: validationSchema,
  });

  

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={`information $(type === 'popup' ? 'popup-information' : 'view-information')`}>
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
        />
        <Textfield
          label="Robot Name:"
          name="robotname"
          id="robotname"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.robotname}
          placeholder="Robot Name"
          errorMessage={formik.errors?.robotname}
          touched={formik.touched?.robotname}
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
        />
        <Textfield
          label="Address Street:"
          name="address.street"
          id="street"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.address?.street}
          placeholder="Street"
          errorMessage={formik.errors.address?.street}
          touched={formik.touched.address?.street}
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
        />
        <Textfield
          label="Latitude:"
          name="address.geo.lat"
          id="lat"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.address?.geo?.lat}
          placeholder="Latitude"
          errorMessage={formik.errors.address?.geo?.lat}
          touched={formik.touched.address?.geo?.lat}
        />
        <Textfield
          label="Longitude:"
          name="address.geo.lng"
          id="lng"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.address?.geo?.lng}
          placeholder="Longitude"
          errorMessage={formik.errors.address?.geo?.lng}
          touched={formik.touched.address?.geo?.lng}
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
        />
        <Textfield
          label="Website:"
          name="website"
          id="website"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.website}
          placeholder="Website"
          errorMessage={formik.errors?.website}
          touched={formik.touched?.website}
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
        />
        <Textfield
          label="Company Catch Phrase:"
          name="company.catchPhrase"
          id="company"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.company?.catchPhrase}
          placeholder="Catch Phrase"
          errorMessage={formik.errors?.company?.catchPhrase}
          touched={formik.touched?.company?.catchPhrase}
        />
        <Textfield
          label="Company BS:"
          name="company.bs"
          id="bs"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values?.company?.bs}
          placeholder="Company BS"
          errorMessage={formik.errors?.company?.bs}
          touched={formik.touched?.company?.bs}
        />
        <div className="input">
          <button id="button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default RobotInfo;