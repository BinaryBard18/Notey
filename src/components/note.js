import React, { useState } from "react";
import "../note.css"
import message from "../message.png"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion";


export default function Note({darkMode,allNotes,setAllNotes,deletedNotes,setDeletedNotes,archiveNotes,setArchiveNotes,setShowNoteEditor,setShowNotes,setShowTrashNotes,setShowArchiveNotes}){
    

    const noteVariant = {
        hidden:{
            y:'100px',
            opacity:0
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                duration : 0.2,
                delay:1.2
            }
        }
    }

    const bannerVariant = {
        hidden : {
            x:'1000px',
            opacity:0
        },
        visible : {
            x:0,
            opacity:1,
            transition:{
                duration:1,
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

    function truncate(string, n){    
        return string?.length > n ?string.substr(0,n-1) + "..." : string;
    }

    const [isVisible,setIsVisible] = useState(true);
    function setVisible(){
        setIsVisible(!isVisible);
        setTimeout(2000);
    }
    
    function showNoteEditorfunction(){
        setVisible();
        setShowNoteEditor(true);
        setShowNotes(false);
        setShowTrashNotes(false);
        setShowArchiveNotes(false);
    }

    const Delete = (id) => {
        const deletedItem =  allNotes.find((item) => item.id === id);
        setDeletedNotes([...deletedNotes,deletedItem]);
        console.log(deletedNotes);

        const newNotes = allNotes.filter((item) => item.id !== id);
        setAllNotes(newNotes)
        console.log(newNotes)
    }

    function Archive(id){
        console.log("helllo",archiveNotes)
        const archiveItem =  allNotes.find((item) => item.id === id);
        setArchiveNotes([...archiveNotes,archiveItem]);
        const newNotes = allNotes.filter((item) => item.id !== id);
        setAllNotes(newNotes);
    }

    function Unarchive(){
        console.log("Unarchive")
    }

    

    return(
        <AnimatePresence >        
                {isVisible &&
                (<motion.div variants={bannerVariant} initial="hidden" animate="visible" exit="exit" className={darkMode ? "note" : "anti--note"}>
                    {allNotes?.length > 0 ? (
                allNotes.map((item) => (
                <motion.div variants={noteVariant} initial="hidden" animate="visible" className="main--note" key={item.id}>
                    <div className="note--title">{truncate(`${item.head}`, 17)}</div>
                    <div className="note--content">
                    <span dangerouslySetInnerHTML={{ __html: truncate(`${item.note}`, 150) }} />
                    </div>
                    <div className="horizontal-line-div">
                    <div className="horizontal-line"></div>
                    </div>
                    <div className="archive-delete-edit">
                    <i className="bx bx-edit-alt" id="plus"></i>
                    <i className="bx bx-archive-in" id="plus" onClick={() => Archive(item.id)}></i>
                    <i className="bx bxs-trash" id="plus" onClick={() => Delete(item.id)}></i>
                    <i className="bx bx-palette" id="plus" onClick={Unarchive}></i>
                    </div>
                </motion.div>
                ))
                ) 
                : 
                (
                <div className={darkMode ? "message--div" : "anti--message--div"}>
                <motion.img initial={{opacity:0,y:'70px'}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="message" draggable="false" src={message} alt="Broken Image" />
                <motion.button initial={{opacity:0,x:'-100px'}} animate={{opacity:1,x:0}} transition={{duration:0.7}} type="button" className="addNotesButton" onClick={showNoteEditorfunction}>Create Note</motion.button>
                </div>
            )}
                </motion.div>)}
    </AnimatePresence>
    )
}