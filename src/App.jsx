import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fakeData from './fakedata'
import { addUser } from './store/slices/userSlices'
import { useDispatch, useSelector } from 'react-redux'
import ListData from './ListData'
import { deleteAll,deleteSingle } from './store/slices/userSlices'

function App() {
  
  const [users,setUsers] = useState(null);
  const dispatch = useDispatch();
  let usersData = useSelector(state => state.users)
  // console.log(usersData)
  console.log("Bishal",usersData)
  const addNewUser = (payload) =>{
    dispatch(addUser(payload))
    // console.log(fakeData());
    
  }
  
  const DeleteAll = ()=>{
    dispatch(deleteAll([]))
    console.log("hello")
    setUsers([])
    usersData = []

  }

  const DeleteSingle = (id)=>{
    dispatch(deleteSingle(id))
  }
  
  let userData = useSelector(state => state.users)
  console.log(userData,'Gandu')

  useEffect(()=>
  {
    setUsers(usersData)
    console.log(usersData,'Game')
  },[usersData])
  console.log("I am modified",users) 

  return (
    <>
      <div className=' flex justify-center h-auto my-2'>
        <h1 className='text-4xl text-gray-500 mx-4'>
          Adding Data
        </h1>


      <button onClick={()=>{addNewUser(fakeData())}} className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700'>Add New User</button>
      </div>
      <ListData users={users} deleteAll = {DeleteAll} DeleteSingle = {DeleteSingle}/>
    </>
  )
}

export default App
