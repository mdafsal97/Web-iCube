import React, { ChangeEventHandler, FormEventHandler } from "react";
import { User } from "./UserLIst";
// import './App.css';


interface Props
{
    setUser:React.Dispatch<React.SetStateAction<User>>,
    user:User
    onSubmitHandler:FormEventHandler<HTMLFormElement>
}
const UserForm:React.FC<Props>=(props:Props)=>
{
    const {setUser,user,onSubmitHandler} = props;

    const onChangeHandler:ChangeEventHandler<HTMLInputElement> = (e) =>
    {
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }
  
    return(
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <div className="border shadow m-3 p-3">
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label className="form-label">Name:</label>
                                <input type="text" className="form-control" onChange={onChangeHandler} name="name" value={user.name} placeholder="Enter Name"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">User Name:</label>
                                <input type="text" className="form-control" onChange={onChangeHandler} name="username" value={user.username} placeholder="Enter User Name"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone:</label>
                                <input type="text" className="form-control" onChange={onChangeHandler} name="phone" value={user.phone} placeholder="Enter Phone Number"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input type="text" className="form-control" onChange={onChangeHandler} name="email" value={user.email} placeholder="Enter Email"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Website:</label>
                                <input type="text" className="form-control" onChange={onChangeHandler} name="website" value={user.website} placeholder="Enter Website"/>
                            </div>
                            <div className="mb-3">
                            <button type="submit" className="btn btn-info">{user.id?'Update User':'Add User'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default UserForm;