import { useEffect, useState } from "react"

interface User {
id: number
name: string
}

const FetchingWFetch = () => {

    const [users, setUsers] = useState<User[]>([])

    //create function to help fetch data
    const fetchUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    }

//useEffect for rendering our data once our fetchingFetch comp loads
useEffect(() => {
 fetchUserData()
}, [])


  return (


    <>
        <h1 className="text-center">Fetching Data using fetch</h1>
        <div>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    </>
  )
}

export default FetchingWFetch