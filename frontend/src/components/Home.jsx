import React, { useEffect } from 'react'
import "../Css/Home.css"
import { useDispatch , useSelector } from 'react-redux'    
import { Link } from 'react-router-dom'
import { complete_task, delete_task } from '../features/Task'

function Home() {

   

    const dispatch = useDispatch()
    const State = useSelector((state)=> {return (state)}) 

    console.log("STAATE : ", State)

    const all_task = State.Task.data

    console.log(all_task)

    
    if(!State.Task.data){
        return (
            <h1>Loading...</h1>
        )
    }

  return (
    < >
        <div id='Home_Contianer'>
            <div className='Home_Header'>
                Task Management
            </div>
            <div  className='all_task'>

               
                {all_task.map((task)=>{
                    return(

                    <div className='task card'>
                        <div className='task_section1'>
                            <div className='task_title'>
                                {task.Title}
                            </div>
                            <div className='task_buttons'>
                                
                                {task.Status ?  <div>
                                <Link className='task_btn' id={`${task._id}`} to={`/Edit/${task._id}`}>
                                    <img src='./src/Images/editing.png' height='22px'/>
                                </Link>
                            </div>
                            
                            :null}
                           
                            <div>
                                <button className='task_btn' id={`${task._id}`} 
                                    onClick={()=>{
                                        dispatch(delete_task({_id: task._id}))
                                        
                                    }}
                                    >
                                    <img src='./src/Images/delete.png' height='22px'/>
                                </button>
                            </div>
                            <div>
                                Status :  {task.Status ? "Ongoing": "Completed"}
                            </div>
                        </div>
                    </div>
                    <div className='task_section2'>
                        {task.Description}
                    </div>

                    {task.Status ? 
                        <div className='completed_button'>
                            <button   onClick={()=>{
                                        dispatch(complete_task({_id: task._id}))
                                        
                                    }}>
                                Mark as Completed
                            </button>
                        </div>
                        : null}
                    </div>


                    )
                })}

                
            

                


            </div>

        </div>
    </>
  )
}

export default Home