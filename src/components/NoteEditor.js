import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../NoteEditor.css"
import { nanoid } from 'nanoid';
import { AnimatePresence,motion } from 'framer-motion';

export default function NoteEditor({darkMode,showNotes,setShowNotes,allNotes,setAllNotes,setShowNoteEditor,showNoteEditor}) {

  // function truncate(string, n){    
  //   return string?.length > n ?string.substr(0,n-1) + "..." : string;
  // }

  const quillVariant = {
    hidden:{
        y:'100px',
        opacity:0
    },
    visible:{
        y:0,
        opacity:1,
        transition:{
            duration : 1,
            delay:1.2
        }
    }
}

const bannerVariant = {
    hidden : {
        y:'1000px',
        opacity:0
    },
    visible : {
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            delay:0.5
        }
    },
    exit : {
        x:'-1000px',
        opacity:0,
        transition:{
            duration : 0.5,
            delay : 0.5
        }
    }
}

  const [value, setValue] = useState('');
  // console.log(value);
  const [title,setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  function saveClicked(){
    if(value.length>10&&title.length>0){
      let element = {
        id : nanoid(),
        head : title,
        note : value
      }
      setAllNotes([...allNotes,element]);
      setShowNotes(true);
      setShowNoteEditor(false);
      console.log(allNotes)
      
    }else{
      alert("Please write a note");
    }
  }

  useEffect(() => {
    localStorage.setItem("allNotes",JSON.stringify(allNotes));
    const helo = JSON.parse(localStorage.getItem("allNotes"))
    console.log(helo);  

  },[allNotes])



  function Cancel(){
      setShowNotes(true);
      setShowNoteEditor(false);
  }

  // ['blockquote',  
  let toolbarOptions = [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['code-block'],
  ['link'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent                     // text direction

  [{ 'size': ['small', false, 'large'] }],  // custom dropdown

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'align': [] }],
 ]

  const module = {
    toolbar : toolbarOptions,
  };
  return (
    <>
    <AnimatePresence>
      <motion.div variants={bannerVariant} initial="hidden" animate="visible" exit="exit" className={darkMode ? "abcd" : "anti--abcd"}>
        <div className='buttons'>
          <button className='cancel' onClick={Cancel}>Cancel</button>
          <button className='save' onClick={saveClicked}>Save</button>
        </div>
        <div style={{fontSize:'2rem',color:'whitesmoke',marginBottom:'1rem'}} className='input--div'>
          <input placeholder='Title' className='input--field' value={title} onChange={handleChange}></input>
        </div>
        <ReactQuill 
            className='ed'
            theme="snow" 
            value={value} 
            onChange={setValue} 
            modules = {module}
            placeholder='Write a note...'
            style={{height : '50vh',color:'white',fontSize : '40px',width:'80%',}}
        />
      </motion.div>
      </AnimatePresence>
    </>
  );
}