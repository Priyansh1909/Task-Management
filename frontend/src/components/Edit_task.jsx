import withRouter from '../helper/With_router';
import React, { useEffect } from 'react'
import "../Css/Add_task.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useFormik} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux' 
import { edit_task } from '../features/Task';
import { useParams,useNavigate } from 'react-router-dom';




function Edit_task() {

    const {id} = useParams()
    const navigate = useNavigate()

    const Dispatch = useDispatch()

    const state = useSelector((state) => state)

    let all_task = state.Task.data


    if(!state.Task.data){
        return (
            <h1>Loading...</h1>
        )
    }

    const existing_task = all_task.filter(task => task._id == id) 



    



    const formik = useFormik({
        initialValues:{
            Title: existing_task[0].Title,
            Description: existing_task[0].Description
        },
        validationSchema: Yup.object({
            Title: Yup.string()
            .max(100,"Must be 100 Characters or less")
            .required("Required"),
            Description: Yup.string()
            .required("Required")
        }),
        onSubmit: (values)=>{
                Dispatch(edit_task({_id:id, Title: values.Title, Description:values.Description}))
                navigate("/")

        }
    });


  return (
    <>
    <div className='add_task_container'>

            <Form onSubmit={formik.handleSubmit}>
                <Form.Label className='add_task_header'>Edit Task</Form.Label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" 
                        name='Title'  
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Title}  />
                        {formik.touched.Title && formik.errors.Title? <p>{formik.errors.Title}</p>:null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3}  name='Description'  
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Description} />
                        {formik.touched.Description && formik.errors.Description? <p>{formik.errors.Description}</p>:null}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                </Form>


        </div>

</>
  )
}

export default Edit_task