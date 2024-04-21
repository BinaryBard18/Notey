import React from "react";
import "../ArchivedNotes.css"
import archiveMessage from "../archiveMessages.png"
import { AnimatePresence,motion } from "framer-motion";
export default function ArchivedNotes({deletedNotes,setDeletedNotes,archiveNotes,setArchiveNotes,darkMode,allNotes,setAllNotes}){


  const noteVariant = {
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

  function unArchive(id){
      const unArchiveItem = archiveNotes.find((item) => item.id === id);
      setAllNotes([...allNotes,unArchiveItem]);
      const newNotes = archiveNotes.filter((item) => item.id !== id);
      setArchiveNotes(newNotes)
  }
  
  const Delete = (id) => {
    const deletedItem =  archiveNotes.find((item) => item.id === id);
    setDeletedNotes([...deletedNotes,deletedItem]);
    const newNotes = archiveNotes.filter((item) => item.id !== id);
    setArchiveNotes(newNotes)
  }

    return (
      <AnimatePresence>
          <motion.div variants={bannerVariant} initial="hidden" animate="visible" className="note">
            {archiveNotes?.length > 0 ? (
              archiveNotes.map((item) => (
                  <div className="main--note">
                      <div className="note--title">{item.head}</div>
                      <div className="note--content">
                        <span dangerouslySetInnerHTML={{ __html: item.note }} />
                      </div>
                      <div className="horizontal-line-div">
                          <div className="horizontal-line"></div>
                      </div>
                      <div className="archive-delete-edit">
                          <i class='bx bx-edit-alt' id="plus"></i>
                          <i class='bx bx-archive-out' id="plus" onClick={() => unArchive(item.id)}></i>
                          <i class='bx bxs-trash' id="plus"onClick={() => Delete(item.id)} ></i>
                          <i class='bx bx-palette' id="plus"></i>
                      </div>
                  </div>
              ))
            ) : (
              <div className={darkMode ? "message--div" : "anti--message--div"}>
                <motion.img initial={{opacity:0,y:'10px'}} animate={{opacity:1,y:0}} transition={{duration:1}} className="archiveMessage" draggable="false" src={archiveMessage} alt="Broken Image" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      );
    }
