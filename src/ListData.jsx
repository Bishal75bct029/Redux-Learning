import React from 'react'

const ListData = ({users,deleteAll,DeleteSingle}) => {
  return (
    <div>
        {users?.map((index,key) =>{
            return (
                <div key={key} className='w-52 mx-auto flex'>
                    <p className='text-blue-500 m-2'>{index}</p>
                    <button onClick = {key=>DeleteSingle(key)} className='text-red-500'>Delete</button>
                </div>
            )
        })}
        <div className='flex justify-center'>
            <button onClick={deleteAll} className='bg-red-500 rounded-md p-2 text-white font-medium'>
                Delete All
            </button>
        </div>
    </div>
  )
}

export default ListData