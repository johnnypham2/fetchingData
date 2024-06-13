import { useEffect, useState } from "react";
import userService, { User } from "../../Services/userService";

const useUsers = () => {
  //we need a useState to help us hold the state of our users
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  //UseState for our isLoading indicator
  const [isLoading, setIsLoading] = useState(false);
  ///Create a function to helps us fetch our data with axios
  const FetchData = () => {
    setIsLoading(true);
    const {request} = userService.getAll<User>()
    request
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };
  //UseEffect to help us with our FetchingData
  useEffect(() => {
    FetchData();
  }, []);

  return {users,setUsers,error,setError,isLoading,setIsLoading}

}

export default useUsers;