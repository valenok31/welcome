import React from "react";
import {useFormik} from "formik";

function SearchTicketmaster(props) {

    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            search: props.getSettings.search,
            classificationName: props.getSettings.classificationName,
        },
        onSubmit: values => {

            props.setSettings(values);
            //alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Search</label>
            <input
                id="search"
                name="search"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.search}
            />
            <br/>
            <label htmlFor="firstName">classificationName</label>
            <input
                id="classificationName"
                name="classificationName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.classificationName}
            />

            <button type="submit">Search</button>
        </form>
    );
}

export default SearchTicketmaster;