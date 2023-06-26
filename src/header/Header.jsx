import "./header.css";
import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Welcome To My Blog</span>
            </div>
                <img className="headerImg" src="https://wallpapers.com/images/hd/green-forest-park-nature-t4knqkdiwz6b3hmp.webp" 
                alt="img"
                />
        </div>
    )
}

