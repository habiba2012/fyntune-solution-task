import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from './FormikControl'
import { connect } from 'react-redux';
import { addToShop } from '../../actions'
import "./AddShop.scss";

const mapStateToProps = (state) => {
    return {
        addshops: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addToShop(obj)),
    };
};

const validationSchema = Yup.object().shape({
    shopName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required("Shop name is required"),
    shopCategory: Yup.string()
        .required('*category value is required.'),
    shopArea: Yup.string()
        .required('*Area value is required.'),
    openingDate: Yup.date()
        .required('*Date is required.'),
    // .nullable(),
    closingDate: Yup.date()
        .required('Required')
    // .nullable()
});

const categoryOptions = [
    { key: 'Select shop category', value: '' },
    { key: 'Grocery', value: 'Grocery' },
    { key: 'Butcher', value: 'Butcher' },
    { key: 'Baker', value: 'Baker' },
    { key: 'Chemist', value: 'Chemist' },
    { key: 'Stationary shop', value: 'Stationary shop' }
]
const areaOptions = [
    { key: 'Select area', value: '' },
    { key: 'Thane', value: 'Thane' },
    { key: 'Pune', value: 'Pune' },
    { key: 'Mumbai Suburban', value: 'Mumbai Suburban' },
    { key: 'Nashik', value: 'Nashik' },
    { key: 'Nagpur', value: 'Nagpur' },
    { key: 'Ahmednagar', value: 'Ahmednagar' },
    { key: 'Solapur', value: 'Solapur' }
]

const initialValues = {
    shopName: "",
    password: "",
    shopCategory: '',
    shopArea: '',
    openingDate: null,
    closingDate: null
};


const AddShop = (props) => {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (

                <div className="container">
                    <h1 className="my-4 font-weight-bold-display-4">Add shops</h1>
                    {console.log(formik)}
                    <Form>
                        <div className="form-group mt-3">

                            <FormikControl
                                control="input"
                                label="Shop Name"
                                name="shopName"

                            />
                        </div>
                        <div className="form-group mt-3">
                            <FormikControl
                                control='select'
                                label='Category'
                                name='shopCategory'
                                options={categoryOptions}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <FormikControl
                                control='select'
                                label='Area'
                                name='shopArea'
                                options={areaOptions}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <FormikControl
                                control='date'
                                label='Opening date'
                                name='openDate'
                            />

                        </div>
                        <div className="form-group mt-3">
                            <FormikControl
                                control='date'
                                label='Closing date'
                                name='closeDate'
                            />
                        </div>



                        <button className='btn btn-dark mt-3'
                            type='submit'
                        // disabled={!formik.isValid || formik.isSubmitting}
                        >
                            Submit
                        </button>
                        <button className='btn btn-danger mt-3 ml-3' type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default connect()(AddShop);
