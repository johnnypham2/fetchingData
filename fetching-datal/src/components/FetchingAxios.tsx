import axios from "axios"
import { useEffect, useState } from "react";

interface User {
    id: number
    name: string
}


const FetchingAxios = () => {

    //we need a useState to help us hold the state of our users
    const [users, setUsers] = useState<User[]>([]);

    //create a function to help us fetch our data w/ axios
    const FetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
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
    </ul>
    </>
  )
}

export default FetchingAxios