import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";
import axios from "axios";

interface User {
    id: number
    name: string
}
const CreateData = () => {
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

//create a helper function to help us delete our users
const addUser = () => {
    const originalUsers = [...users]
    //new object with an id and a name:
    const newUser = {id: 0, name: 'Aaron'}
    //set our users and spread all users and add our new users
    setUsers([newUser,...users])
    //we need to send this updated data to our back-end
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
    .then(response => setUsers([response.data,...users]))
    .catch(error => {
        setError(error.message);
        setUsers(originalUsers);
    })
}

  return (
    <>
    <h1 className="text-center">CRUD Create with Axios</h1>
    <button className="btn btn-primary mx-3 mb-3" onClick={addUser}>Add</button>

    <ul className="list-group">
        {users.map(user => <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name} <button className="btn btn-outline-danger">Delete</button></li>)}
        
        {error && <p className="text-danger">{error}</p>}
        { isLoading && <div className="spinner-border"></div>}
    </ul>
    </>
  )
}

export default CreateData