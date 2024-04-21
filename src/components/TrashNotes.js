import React from "react"
import "../TrashNotes.css";
import notFound from "../nothingFound.png"
import { AnimatePresence,motion } from "framer-motion";

export default function TrashNotes({darkMode,deletedNotes,setDeletedNotes,setAllNotes,allNotes}){


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


    const Delete = (id) => {
        const newNotes = deletedNotes.filter((item) => item.id !== id);
        setDeletedNotes(newNotes);
      }

    function Restore(id){
        const RestoredItem =  deletedNotes.find((item) => item.id === id);
        setAllNotes([...allNotes,RestoredItem]);

        const newNotes = deletedNotes.filter((item) => item.id !== id);
        setDeletedNotes(newNotes)
    }

    return (
      <AnimatePresence>
        <motion.div variants={bannerVariant} initial="hidden" animate="visible" className={darkMode ? "outer--cover" : "anti--outer--cover"}>
          {deletedNotes?.length > 0 ? (
            deletedNotes.map((item) => (
              <div className={darkMode ? "deleted--note" : "anti--deleted--note"}>
                <div className={darkMode ? "heading" : "anti--heading"}>
                  <p>{item.head}</p>
                </div>
                <div className="content">
                  <span dangerouslySetInnerHTML={{ __html: item.note }} />
                </div>
                <div className="icons">
                  <abbr title="Delete Permanently"><i className="bx bxs-trash" id="icon" onClick={() => Delete(item.id)}></i></abbr> 
                  <abbr title="Restore"><i className="bx bx-refresh" id="icon" onClick={() => Restore(item.id)}></i></abbr>
                </div>
              </div>
            ))
          ) : (
            <div className={darkMode ? "message--div" : "anti--message--div"}>
              <motion.img initial={{opacity:0,y:'10px'}} animate={{opacity:1,y:0}} transition={{duration:1}} className="deleteMessage" draggable="false" src={notFound} alt="Deleted Notes Not Found" />
            </div>
          )}
        </motion.div>
  </AnimatePresence>
);

}