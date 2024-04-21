import React, { useState } from "react";
import "../nav.css"
import {motion} from "framer-motion"

export default function Navbar({darkMode,setDarkMode}){
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
                stiffness : 80
            }
        }
    }

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

    const hrVariant = {
        hidden : {
           width:'0%',
           opacity:0
        },
        visible : {
            width:'100%',
            opacity:1,
            transition :{
                duration : 2 
            }
        }
    }

    function toggleDarkMode(){
        setDarkMode(!darkMode)
    }

    return(
        <>
            <motion.div variants={navVariant} initial="hidden" animate="visible"  className={darkMode ? "navbar" : "anti--navbar"}>
                <div className="logo--name">
                    <motion.svg xmlns="http://www.w3.org/2000/svg" className="logo" viewBox="0 0 100 100">
                        <motion.path 
                        d="M10 10 L10 90 L70 90 L90 10 Z" 
                        stroke={darkMode ? "white" : "black"} 
                        stroke-width="20" 
                        fill="none" 
                        pathLength={0}
                        animate={{pathLength:1.0}}
                        transition={{duration:2}}
                        />
                    </motion.svg>  
                    <h1 className={darkMode ? "name" : "anti-name"}>Notey.</h1>  
                </div>
                {darkMode
                    ? 
                    <motion.i class='bx bxs-sun'
                    style={{color:'#158CFF'}}
                        variants={modeVariant}
                        onClick={toggleDarkMode}
                    ></motion.i> 
                    : 
                    <i class='bx bxs-moon' 
                        onClick={toggleDarkMode}
                    ></i>}
            </motion.div>
                <motion.div variants={hrVariant} initial="hidden" animate="visible" className="horizontal--line">
                    <div className={darkMode ? "rule" : "anti--rule"}></div>
                </motion.div>
        </>
    )
}