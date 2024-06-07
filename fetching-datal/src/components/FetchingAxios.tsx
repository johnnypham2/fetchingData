import axios from "axios"
import { useEffect, useState } from "react";

interface User {
    id: number
    name: string
}


const FetchingAxios = () => {

    //we need a useState to help us hold the state of our users
    const [users, setUsers] = useState<User[]>([]);

    //useState to help use handle errors
    const [error, setError] = useState('')

    //create a function to help us fetch our data w/ axios
    const FetchData = () => {
        //added x before users to create an error
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .catch(error => setError(error.message))
    }

    
    //useEffect to help us with our FetchData
    
    useEffect(() => {
        FetchData();
     
    }, [])
    

  return (
    <>
    <h1 className="text-center">Fetching Data with Axios</h1>
    <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
        {error && <p className="text-danger">{error}</p>}
    </ul>
    </>
  )
}

export default FetchingAxios