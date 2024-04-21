import React,{useState} from "react"
import "../Sidebar.css"
import {motion} from "framer-motion"
import Note from "./note"
import Navbar from "./Nav"
import TrashNotes from "./TrashNotes"
import NoteEditor from "./NoteEditor"
import ArchivedNotes from "./ArchivedNotes"

export default function Sidebar() { 

    const [isVariable,setIsVisible] = useState(true);

    const menuVariant = {
        hidden : {
            x:'-500px'
        },
        visible : {
            x:0,
            transition : {
                duration : 1,
                delay : 0.5
            }
        }
    }

    const [allNotes,setAllNotes] = useState([]);
    const [archiveNotes,setArchiveNotes] = useState([]);
    const [deletedNotes,setDeletedNotes] = useState([]);

    const [showMenu,setShowMenu] = useState(false);
    const [darkMode,setDarkMode] = useState(true);
    
    const [showNotes,setShowNotes] = useState(true);
    const [showNoteEditor,setShowNoteEditor] = useState(false);
    const [showTrashNotes,setShowTrashNotes] = useState(false);
    const [showArchiveNotes,setShowArchiveNotes] = useState(false);


    function showAllNotes(){
        setShowNoteEditor(false);
        setShowTrashNotes(false);
        setShowArchiveNotes(false);
        setShowNotes(true);
    }

    function showNoteEditorfunction(){
        setShowNotes(false);
        setShowTrashNotes(false);
        setShowArchiveNotes(false);
        setShowNoteEditor(true);
    }
    function showTrashedNotes(){
        setShowNoteEditor(false);
        setShowNotes(false);
        setShowArchiveNotes(false);
        setShowTrashNotes(true);
    }
    function showArchivedNotes(){
        setShowTrashNotes(false);
        setShowNoteEditor(false);
        setShowNotes(false);
        setShowArchiveNotes(true);
    }

    function HandleClick(){
        setShowMenu(!showMenu);
    }

    return (
            <div className={darkMode ? "main--Div" : "anti--main--Div"}>
                    <Navbar
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                <section  className={showMenu ?"sidebar--open" : "sidebar--close"}>
                    <motion.div variants={menuVariant} initial="hidden" animate="visible"  className="sidebar--div">
                        <div>
                            <div className="logo-hamburger-cancel">
                                <div 
                                    className="hamburger"
                                    
                                >
                                    {
                                        showMenu &&
                                            (<i class='bx bx-arrow-back' id="back" onClick={HandleClick} ></i>)       
                                    }
                                    
                                </div>
                            </div>
                            {showMenu && (<div className="list" >
                                    <ul className="ul--list" >
                                        <li className="createNote" onClick={showNoteEditorfunction}><i class='bx bx-plus' id="plus" ></i>New Note</li>
                                        <li className="createNote" onClick={showAllNotes}><i class='bx bx-edit-alt' id="plus" ></i>My Notes</li>
                                        <li className="createNote" onClick={showTrashedNotes}><i class='bx bxs-trash' id="plus" ></i>Trash</li>
                                        <li className="createNote" onClick={showArchivedNotes}><i class='bx bx-archive-in' id="plus" ></i>Archived</li>
                                    </ul>
                            </div>)}   
                        </div> 

                        {!showMenu && (<div className="list2" >
                                    <ul className="ul--list2"  >
                                        <li className="createNote1" onClick={HandleClick}><abbr title="Menu"><i class='bx bx-menu' id="allIcons" ></i></abbr></li>
                                        <li className="createNote1" onClick={showNoteEditorfunction}><abbr title="Create a Note"><i class='bx bx-plus' id="allIcons" ></i></abbr></li>
                                        <li className="createNote1" onClick={showAllNotes}><abbr title="My Notes"><i class='bx bx-edit-alt' id="allIcons" ></i></abbr></li>
                                        <li className="createNote1" onClick={showTrashedNotes}><abbr title="Trash"><i class='bx bxs-trash' id="allIcons" ></i></abbr></li>
                                        <li className="createNote1" onClick={showArchivedNotes}><abbr title="Archive"><i class='bx bx-archive-in' id="allIcons" ></i></abbr></li>
                                    </ul>
                            </div>)}    

                    </motion.div>

                        {
                            showNotes && 
                            <Note 
                                darkMode={darkMode} 
                                setShowArchiveNotes={setArchiveNotes}
                                setShowNoteEditor={setShowNoteEditor}
                                setShowTrashNotes={setShowTrashNotes}
                                setShowNotes={setShowNotes}
                                allNotes={allNotes} 
                                setAllNotes={setAllNotes}
                                deletedNotes={deletedNotes} 
                                setDeletedNotes={setDeletedNotes}
                                archiveNotes={archiveNotes} 
                                setArchiveNotes={setArchiveNotes}
                            />
                        }
                        {
                            showNoteEditor && 
                            <NoteEditor 
                                showNotes={showNotes} 
                                setShowNotes={setShowNotes} 
                                allNotes={allNotes} 
                                setAllNotes={setAllNotes} 
                                showNoteEditor={showNoteEditor} 
                                setShowNoteEditor = {setShowNoteEditor} 
                            />
                        }
                        {
                            showTrashNotes && 
                            
                            <TrashNotes 
                                deletedNotes={deletedNotes} 
                                setDeletedNotes={setDeletedNotes} 
                                darkMode={darkMode} 
                                setDarkMode={setDarkMode}
                                setAllNotes={setAllNotes}
                                allNotes = {allNotes}
                            />
                        }
                        {
                            showArchiveNotes && 
                            <ArchivedNotes 
                                deletedNotes={deletedNotes}
                                setDeletedNotes={setDeletedNotes}
                                archiveNotes={archiveNotes} 
                                setArchiveNotes={setArchiveNotes} 
                                darkMode={darkMode} 
                                setDarkMode={setDarkMode}
                                allNotes={allNotes}
                                setAllNotes={setAllNotes}
                            />
                        }                       
                </section>
            </div>
    )
}
