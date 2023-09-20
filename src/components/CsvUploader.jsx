import React from 'react'
import { useTask } from '../context/ContextProvider';
import {toast} from "react-toastify"

const CsvUploader = () => {
  const {setData} = useTask()
  
  const toCamelCase = (inputString)  => {
    const words = inputString.split(" ");
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    const camelCaseString = camelCaseWords.join('');
    return camelCaseString;
  }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          if (file.type === "text/csv" || file.name.endsWith(".csv")) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const text = event.target.result;
              parseCSVData(text);
            };
            reader.readAsText(file);
          } else {
            toast.error("Selected file is not CSV file")
          }
        }
      };
    
      const parseCSVData = (csvText) => {
        let lines = csvText.split("\n");
        lines = lines.map(row => row.replace(/"/g, ""));
        lines = lines.map(line => line.replace("\r", "")).filter(row =>  row.trim() !== '')
        console.log(lines)
        const data = [];
        let headers = lines[0].split(",");
        headers = headers.map(header => toCamelCase(header));
        console.log(headers)
        
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(",");
          const rowData = {};
          for (let j = 0; j < headers.length; j++) {
            rowData[headers[j]] = values[j];
          }
          data.push(rowData);
        }
        setData(data);
        toast.success('File Uploaded Successfully')
      };

  return (
    <div className="flex flex-col gap-3 w-fit mx-auto absolute top-[30%] left-[50%] -translate-x-[50%]">
      <h1 className="text-gray-100 text-4xl">Select Csv File</h1>
      <div className="text-center mt-2">
        <label
          htmlFor="csvInput"
          className="cursor-pointer py-2 px-4 text-lg font-medium text-gray-200 bg-blue-700 hover:bg-blue-800 rounded"
        >
          Choose File
        </label>
        <input
          id="csvInput"
          name="file"
          type="File"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  )
}

export default CsvUploader