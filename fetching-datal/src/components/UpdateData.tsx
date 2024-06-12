import { useEffect, useState } from "react";
import apiClient, {CanceledError} from "../Services/apiClient";
import axios from "axios";

interface User {
    id: number
    name: string
}
const UpdateData = () => {
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
        axios.get("https://jsonplaceholder.typicode.com/users")
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

//create a helper function to help us update our users
const updateUser = (user:User) => {
    const originalUsers = [...users]
    const updatedUser = {...user, name: user.name + "!"}
    setUsers(users.map(u => u.id === user.id ? updatedUser : u))
    axios.put('https://jsonplaceholder.typicode.com/users' + user.id,updatedUser)
    .catch(error => {
        setError(error.message)
        setUsers(originalUsers)
    })
}

  return (
    <>
    <h1 className="text-center">CRUD Update with Axios</h1>
   

    <ul className="list-group">
        {users.map(user => <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name} <button className="btn btn-outline-secondary" onClick={() => updateUser(user)}>Update</button></li>)}
        
        {error && <p className="text-danger">{error}</p>}
        { isLoading && <div className="spinner-border"></div>}
    </ul>
    </>
  )
}

export default UpdateData