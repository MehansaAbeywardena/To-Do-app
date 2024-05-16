import axios from 'axios'

const baseURL = "http://localhost:5000"

const getAllTasks = (setTask) => {
    axios.get(baseURL)
    .then(({data}) =>{
        console.log('data: ',data)
        setTask(data)
    })
}


const addTask = (value,setValue,setTask) => {
    
    axios.post('${baseURL}/save', {value})
    .then((data) => {
        console.log(data)
        setValue('')
        getAllTasks(setTask)
    })
}

export { getAllTasks, addTask}