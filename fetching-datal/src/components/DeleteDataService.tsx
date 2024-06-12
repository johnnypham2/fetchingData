import apiClient from "../Services/apiClient";
import { useEffect, useState } from "react";
import axios from "axios";
import userService, { User } from "../Services/userService";


const DeleteDataService = () => {
    //we need a useState to help us hold the state of our users
    const [users, setUsers] = useState<User[]>([]);
    //useState to help use handle errors
    const [error, setError] = useState('')

    //useState for loading indicator
    const [isLoading, setIsLoading] = useState(false);
    //create a function to help us fetch our data w/ axios
    const FetchData = () => {
        setIsLoading(true);

        //added x before users to create an error
        apiClient
        const {request} = userService.getAll<User>();
        request
        .then(response => {
        setUsers(response.data)
        setIsLoading(false);
        })
        .catch(error => {
            setError(error.message)
            setIsLoading(false)
        } )
    } 
    //useEffect to help us with our FetchData 
    useEffect(() => {
        FetchData();
     
    }, [])   

//create a helper function to help us delete our users
const userDelete = (user: User) => {
    const orginalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id));
    userService.delete(user.id)
    .catch(error => {
        setError(error.message);
        setUsers(orginalUsers);
        setIsLoading(false);
    })
}

  return (
    <>
    <h1 className="text-center">CRUD Delete with apiClient</h1>
    <ul className="list-group">
        {users.map(user => <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name} <button onClick={() => userDelete(user)} className="btn btn-outline-danger">Delete</button></li>)}
        
        {error && <p className="text-danger">{error}</p>}
        { isLoading && <div className="spinner-border"></div>}
    </ul>
    </>
  )
}

export default DeleteDataService