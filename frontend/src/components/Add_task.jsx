import React, { useEffect } from 'react'
import "../Css/Add_task.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useFormik} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { add_task } from '../features/Task';
import { useDispatch  } from 'react-redux' 
import { useNavigate } from 'react-router-dom';



function Add_task() {

    const navigate = useNavigate()
    const Dispatch = useDispatch()



    const formik = useFormik({
        initialValues:{
            Title:"",
            Description: ""
        },
        validationSchema: Yup.object({
            Title: Yup.string()
            .max(100,"Must be 100 Characters or less")
            .required("Required"),
            Description: Yup.string()
            .required("Required")
        }),
        onSubmit: (values)=>{
            console.log(values)
            axios.post('http://localhost:4000/addtask',{
                Title: values.Title,
                Description: values.Description,
                Status: true
            }).then((result)=>{
                Dispatch(add_task({_id:result.data.id, Title: values.Title, Description:values.Description,Status:true}))
                navigate("/")
            })
        }
    });


//  console.log(formik.values)


  return (
    <>
        <div className='add_task_container'>

                <Form onSubmit={formik.handleSubmit}>
                    <Form.Label className='add_task_header'>Add New Task</Form.Label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" 
                            name='Title'  
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Title} />
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

export default Add_task