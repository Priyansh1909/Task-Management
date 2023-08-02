import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';



export const  fetchTask = createAsyncThunk("fetchTask", async ()=>{
    const result = await axios.get("http://localhost:4000/getTask")

    return result.data
   
})



export const task_slice = createSlice({
    name:"Tasks",
    initialState:{
        isLoading:false,
         data: null,
         isError: false,

    },
    extraReducers: (builder)=>{

        builder.addCase(fetchTask.pending,(state,action)=>{
            state.isLoading = true
            
        })


        builder.addCase(fetchTask.fulfilled,(state,action)=>{
            console.log(action)
            state.isLoading = false
            state.data =  action.payload
        })

        builder.addCase(fetchTask.rejected,(state,action)=>{
            console.log("Error", action.payload)
            state.isError = true
        })
    },
    reducers:{

        add_task : (state,action)=>{
            state.data.push(action.payload )

        },

        delete_task : (state,action)=>{
            state.data = state.data.filter((task)=>task._id !== action.payload._id )
            axios.post('http://localhost:4000/delete_task',{
                id:action.payload._id
            })
        },

            edit_task : (state,action)=>{

                const task_update = (state.data).find(task => task._id == action.payload._id)

                console.log(task_update)

                if (task_update){
                    task_update.Title = action.payload.Title
                    task_update.Description =  action.payload.Description
                }
          
                    axios.post('http://localhost:4000/edit_task',{
                        id: action.payload._id,
                        Title: action.payload.Title,
                        Description: action.payload.Description,
                        Status: true
                    })
                   
              
        },

        complete_task : (state,action)=>{
            const task_update = (state.data).find(task => task._id == action.payload._id)

            if (task_update){
                task_update.Status = false

                axios.post('http://localhost:4000/completed_task',{
                        id: action.payload._id,
                    })


            }




    }
}
})

export const {delete_task,edit_task,complete_task,add_task} = task_slice.actions
export default task_slice.reducer;