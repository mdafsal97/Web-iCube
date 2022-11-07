import React, { FormEventHandler, useEffect, useState } from 'react';
import UserList, { User } from './UserLIst';
import UserForm from './UserForm';
import { addUser, deleteUser, fetchUser, updateUser } from '../redux/reducers/userReducers';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

const UserManagement:React.FC=()=> {
    const dispatch = useDispatch<AppDispatch>();
  const [userList,setUserList]=useState<User[]>([])
  const initialValue = {name:"",username:"",email:"",phone:"",website:""} as User
  const [user,setUser] = useState<User>(initialValue);

  useEffect(()=>
  {
    dispatch(fetchUser())
  },[fetchUser])

  const onSubmitHandler:FormEventHandler<HTMLFormElement> = (e) =>
  {
      e.preventDefault();
      if(user.id)
    {
        dispatch((updateUser(user))).then(()=>
        {
            setUser(initialValue)
        })
    }
      else
    {
        dispatch((addUser(user))).then(()=>
        {
            setUser(initialValue)
        })
    }
  }
  const deleteHandler = (id: number) =>
  {
        dispatch(deleteUser(id))
  }
  return(
    <React.Fragment>
        <UserForm user={user} setUser={setUser} onSubmitHandler={onSubmitHandler}/>
        <UserList setUser={setUser} deleteHandler={deleteHandler}/>
    </React.Fragment>
  )
}
export default UserManagement;