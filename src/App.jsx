import React from "react";
import { useTask } from "./context/ContextProvider";
import CsvUploader from "./components/CsvUploader";
import Form from "./components/Form";
import Table from "./components/Table";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CsvDownload } from "./components/CsvDownload";

function App() {
const {data} = useTask();
return (
  <>
  <ToastContainer />
  {
    data ? <>
    <Form />
    <Table />
    <CsvDownload />
    </> 
    : <CsvUploader />
  }
  </>
)

  
}

export default App;
