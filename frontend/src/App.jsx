import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Home from './components/Home'
import Add_task from './components/Add_task'
import Edit_task from './components/Edit_task'
import { useDispatch , useSelector } from 'react-redux' 
import {fetchTask} from "./features/Task"  
import { useEffect } from 'react'

function App() {

  const dispatch = useDispatch()


  useEffect(()=>{
  dispatch(fetchTask())

  },[])


  return (
    <>

    <BrowserRouter>

    <Header/>

    <Routes>

      <Route exact path='/' Component={Home}></Route>
      <Route exact path='/Add' Component={Add_task}></Route>
      <Route exact path='/Edit/:id' Component={Edit_task} ></Route>


    </Routes>

    
    </BrowserRouter>
    </>
  )
}

export default App
