import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../redux/store";

export interface User
{
    id?:number,
    name:string,
    username:string,
    phone:string,
    email:string,
    website:string
}

interface Props
{
    user:User,
    key:number,
    setUser:React.Dispatch<React.SetStateAction<User>>,
    deleteHandler:(id: number) => void
}

const UserListItem:React.FC<Props>=(props:Props)=>
{
    const {user,key,setUser,deleteHandler} = props;

    return(
        <React.Fragment>
            <div className="col-4 col-md-4 col-sm-12" key={key}>
                <div className="border shadow rounded-4 p-3 m-3">
                    <p>Name:{user.name}</p>
                    <p>User Name:{user.username}</p>
                    <p>Phone:{user.phone}</p>
                    <p>Email:{user.email}</p>
                    <p>Website:{user.website}</p>
                    <div className="d-flex justify-content-between">
                    <button className="btn btn-danger m-3" onClick={()=>deleteHandler(user.id as number)}>Delete</button>
                    <button className="btn btn-warning m-3" onClick={()=>{setUser(user)}}>Edit</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

interface Props2
{
    setUser:React.Dispatch<React.SetStateAction<User>>,
    deleteHandler:(id: number) => void
}
const UserList:React.FC<Props2>=(props:Props2)=>
{
    const {setUser,deleteHandler} = props;
    const userList = useSelector<StoreState,User[]>(state=>state.users)

    return(
        <React.Fragment>
            <div className="row">
                {
                userList.map((user,index)=>
                {
                    return(
                        <UserListItem user={user} key={index} setUser={setUser} deleteHandler={deleteHandler}/>
                    )
                })
            }
            </div>
        </React.Fragment>
    )
}
export default UserList;