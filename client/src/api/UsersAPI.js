import React ,{useEffect , useState} from 'react'
import axios from 'axios'

function UsersAPI() {
    const [Users , setUsers] = useState([])
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_URL})

    useEffect(()=>{
        const getAllUser =  async()=>{
         const res= await axiosInstance.get('/user/users');
         setUsers(res.data.response);
        }
       getAllUser();
        
      },[])
  return {
    Users : [Users , setUsers]
  }
}

export default UsersAPI