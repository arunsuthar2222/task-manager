import { createContext, useContext, useState } from "react"
import { toast } from 'react-toastify';
const TaskContext = createContext();

export const TaskProvider = ({children}) =>{
  const [data, setData] = useState(null);
  const [updateState, setUpdateState] = useState(false);
  const [user, setUser] = useState({firstName:"", lastName:"", age:"", email:""})

    const handleChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (updateState) {
          const updatedData = [...data];
          updatedData.splice(user.index, 1, {firstName:user.firstName, lastName:user.lastName, age:user.age, email:user.email});
          setData(updatedData);
          setUpdateState(false);
          toast.success('Task Updated Successfully')
        } else {
          setData([...data, user]);
          toast.success('Task Added Successfully')
        }
        setUser({ firstName: "", lastName: "", age: "", email: "" });
      };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1)
    setData(newData);
    toast.success('Task Deleted Successfully')
  };



  const handleUpdate = (user, index) => {
    setUpdateState(true);
    setUser({...user, index})
  };

    return (
      <TaskContext.Provider value={{data, setData, handleDelete, handleUpdate, updateState, setUpdateState, user, handleChange, handleSubmit}}>
      {children}
    </TaskContext.Provider>
    )
}

export const useTask = () => {
    return useContext(TaskContext);
  };