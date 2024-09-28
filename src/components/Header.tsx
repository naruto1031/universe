import Link from 'next/link';
import React from 'react';
export const Header = () => {
    return <nav className="banner" style={{ position: "sticky", top: "0", zIndex: "1", transition: "1s", maxWidth: "1100px", margin: "0 auto", textAlign: "center", height: "70px", display: "flex", alignItems: "center" }}>
        <Link href="/" className="a" style={{ fontSize: "32px", height: "auto", marginRight: "auto", marginLeft: "0", color: "#000", textDecoration: "none", letterSpacing: ".1em", fontWeight: "400", fontStyle: "normal", transition: "all 0.5s ease-out;" }}>宇宙</Link>
        <Link href="/list" className="a" style={{ margin: "0 20px", color: "#000", textDecoration: "none", letterSpacing: ".1em", fontWeight: "400", fontStyle: "normal", transition: "all 0.5s ease-out;" }}>太陽系</Link>
        <Link href="/" className="a" style={{ margin: "0 20px", color: "#000", textDecoration: "none", letterSpacing: ".1em", fontWeight: "400", fontStyle: "normal", transition: "all 0.5s ease-out;" }}>何でもチャット</Link>
        <Link href="#" className="contact" style={{ marginLeft: "auto", marginRight: "0", color: "#000", textDecoration: "none", letterSpacing: ".1em", fontWeight: "400", fontStyle: "normal", transition: "all 0.5s ease-out;" }}></Link>
    </nav>
}