import React,{useState} from "react";
import notey from "../dribbbleNotey2.png"
import { delay, motion } from 'framer-motion';
import "../Hero.css"
import { Link } from 'react-router-dom';

export default function Hero(){

    const modeVariant = {
        hidden : {
            rotate : 0,
            opacity : 0
        },
        visible : {
            rotate : '360deg',
            opacity : 1,
            transition : {
                duration : 1
            }
        }
    }

    const imageVariant = {
        hidden:  {
            x:'700px',
            opacity : 0
        },
        visible : {
            x : 0,
            opacity : 1,
            transition : {
                duration:1,
                type : 'spring',
                stiffness : 30
            }
        }
    }

    const navVariant = {
        hidden : {
            y : '-100px',
            opacity:0
        },
        visible:  {
            y:0,
            opacity:1,
            transition:{
                delay : 1,
                type : 'spring',
                stiffness : 200
            }
        }
    }

    const textVariant1 = {
        hidden : {
            y:'50px',
            opacity : 0 
        },
        visible : {
            y:0,
            opacity : 1,
            transition : {
                duration : 0.5,
                delay : 2
            }
        }
    }

    const textVariant2 = {
        hidden : {
            y:'50px',
            opacity : 0 
        },
        visible : {
            y:0,
            opacity : 1,
            transition : {
                duration : 0.5,
                delay : 2.5
            }
        }
    }

    const textVariant3 = {
        hidden : {
            y:'50px',
            opacity : 0 
        },
        visible : {
            y:0,
            opacity : 1,
            transition : {
                duration : 0.5,
                delay : 3
            }
        }
    }

    const buttonVariant = {
        hidden : { 
            opacity : 0,
            x:'-200px'
        },
        visible : {
            opacity : 1,
            x:0,
            transition : {
                type : 'spring',
                duration: 1,
                delay : 6
            }
        }
    }

    const hrVariants = {
        hidden : {
            opacity : 0
        },
        visible :{ 
            opacity : 1,
            transition : {
                duration : 1,
                delay : 4
            }
        }
    }

    const infoVariant={
        hidden : {
            opacity : 0
        },
        visible : {
            opacity : 1,
            transition : {
                duration : 0.2,
                delay:5
            }
        }
    }

    const [darkMode,setDarkMode] = useState(true);

    function toggleDarkMode(){
        setDarkMode(!darkMode);
    }


//Think about Local Storage here : 
    const notes = [];
    
    localStorage.setItem("notes",JSON.stringify(notes))
    const allNotes = JSON.parse(localStorage.getItem("notes"))
    
    let size = allNotes.length;
    
    
    return(
        <div className={darkMode ? "hero" : "anti--hero"}>
            <div className={darkMode ? "hero--section--1" : "anti--hero--section--1"}>
                <motion.nav variants={navVariant} initial="hidden" animate="visible">
                    <motion.svg xmlns="http://www.w3.org/2000/svg" className="logo" viewBox="0 0 100 100">
                        <motion.path 
                        d="M10 10 L10 90 L70 90 L90 10 Z" 
                        stroke={darkMode?"white":"black"} 
                        stroke-width="20" 
                        fill="none" 
                        pathLength={0}
                        animate={{pathLength:1.0}}
                        transition={{duration:2,delay:1.5}}
                        />
                    </motion.svg>
                <h1 className={darkMode ? "logo--name":"anti--logo--name"}>Notey.</h1>
                {darkMode
                 ? 
                <motion.i class='bx bxs-sun'
                    variants={modeVariant}
                    initial="hidden"
                    animate="visible"
                    onClick={toggleDarkMode}
                ></motion.i> 
                : 
                <i class='bx bxs-moon' 
                    onClick={toggleDarkMode}
                ></i>}
                
                </motion.nav>
                <motion.div variants={navVariant} initial="hidden" animate="visible" className="horizontal--div">
                    <div className={darkMode ? "horizontal" : "anti--horizontal"}></div>
                </motion.div> 
                <div className={darkMode ? "title" : "anti--title"}>
                    <motion.p variants={textVariant1} initial="hidden" animate="visible">All your Notes.</motion.p>
                    <motion.p variants={textVariant2} initial="hidden" animate="visible">Organized.</motion.p>
                    <motion.p variants={textVariant3} initial="hidden" animate="visible">Effortless.</motion.p>
                </div>
                <motion.div variants={hrVariants} initial="hidden" animate="visible" className={darkMode ? "horizontal-rule" : "anti--hr"}></motion.div>
                <div className={darkMode ? "info--div" : "anti--info--div"}>
                    <motion.p variants={infoVariant} initial="hidden" animate = "visible" className={darkMode ? "info" : "anti--info"}>
                        Inspiration strikes anywhere.
                        Notey lets you capture,organize
                        and share your ideas across any 
                        device.
                    </motion.p>
                </div>
                <motion.div variants={buttonVariant} initial="hidden" animate="visible"  className="button--div">
                    <Link to="/main">
                        <motion.button className={darkMode ? "createButton" : "anti--createButton"}>
                            {size>0 ? "Go to your Notes":"Create a New Note"}
                            {size>0 
                            ? 
                            <i class='bx bx-right-arrow-alt' 
                                id="right-arrow" 
                            ></i> 
                            : 
                            <i class='bx bx-edit-alt' 
                                id="pen-icon" 
                            ></i>}
                        </motion.button>
                    </Link>
                </motion.div>
                
            </div>  
            <div className={darkMode ? "hero--section--2" : "anti--hero--section--2"}>
                <motion.img variants={imageVariant} initial='hidden' animate = 'visible' src={notey} draggable="false" alt="catseye" className={darkMode ? "catseye":"anti--catseye"}/>
            </div>
        </div>
    )
}

{/* <div className="footer">
                    <ul>
                        <li><i class='bx bxl-instagram'></i></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> */}