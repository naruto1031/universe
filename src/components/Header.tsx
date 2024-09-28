import React from 'react';
import styles from './style.module.css'

export const Header = () => {
    return <nav className="banner" style={{position: "sticky", top: "0", zIndex: "1", transition: "1s", maxWidth:"1100px", margin:"0 auto", textAlign: "center", height: "70px", display:"flex", alignItems:"center"}}>
                <a href="index.html" className="a" style={{fontSize: "32px", height: "auto", marginRight: "auto", marginLeft: "0", color:"#000", textDecoration:"none", letterSpacing:".1em", fontFamily: "serif", fontWeight: "400", fontStyle: "normal", transition: "all 0.5s ease-out;"}}>宇宙</a>
                <a href="#" className="a" style={{margin:"0 20px", color:"#000", textDecoration:"none", letterSpacing:".1em", fontFamily: "serif", fontWeight: "400", fontStyle: "normal", transition: "all 0.5s ease-out;"}}>天体</a>
                <a href="#" className="a" style={{margin:"0 20px", color:"#000", textDecoration:"none", letterSpacing:".1em", fontFamily: "serif", fontWeight: "400", fontStyle: "normal", transition: "all 0.5s ease-out;"}}>会社情報</a>
                <a href="#" className="contact" style={{marginLeft:"auto", marginRight:"0", color:"#000", textDecoration:"none", letterSpacing:".1em", fontFamily: "serif", fontWeight: "400", fontStyle: "normal", transition: "all 0.5s ease-out;"}}></a>
            </nav>
}