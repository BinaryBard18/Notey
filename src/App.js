import React from "react"
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Editor from "./components/Editor"
import Hero from "./components/Hero"


export default function App() {
    
    
    return (
        <BrowserRouter>
            {/* <Editor/>
            <Sidebar/> */}
            <Routes>
                <Route path="/" element ={<Hero/>} />
                <Route path="/main" element ={<Editor/>} />
            </Routes>
        </BrowserRouter>
    )
}
