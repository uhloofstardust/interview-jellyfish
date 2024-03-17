import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import {io} from 'socket.io-client'
let socket = io.connect("http://localhost:5000");
socket.on("connect",()=>{
  console.log("connected")
  socket.emit("message","kdjfkdjfkdjfkd");
})
socket.on("message",(msg)=>{
  console.log(msg);
})
function sendData(value){
  socket.emit("data",value); 
  socket.on("data", (data) => { 
    setValue(data);
}); 
}

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");
  useEffect(()=>{
    socket.emit("data",value)
  },[value])
  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
    sendData(value);
    socket.emit("data",value);
  };
  function handleOnclick(){
    socket.emit("data","dkjfkdjfkdfkjdfkjdfk");
  }
  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;
