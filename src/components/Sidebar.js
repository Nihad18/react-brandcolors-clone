import React from "react";
import Popup from "reactjs-popup";
import logo from "../logo.png";
import {AiOutlineClose,AiOutlineInstagram,AiOutlineGithub,AiOutlineLinkedin} from "react-icons/ai";

function Sidebar() {
  return (
    <div>
      <aside className='sidebar'>
        <div className='logo'>
            <img src={logo} alt='logo' />
          <p>
              Brand<b>Colors</b>
          </p>
        </div>
        <div className='description'>
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>

    <div style={{display:"flex"}}>
      {/*-------POP UP----------*/}
      <Popup
          trigger={<p className='button'> About BrandColors </p>}
          modal
          overlayStyle={{ background: "rgba(255,255, 255, 0.9)" }}
        >
          {(close) => (
            <div className='modal'>
              <button className='close' onClick={close}>
                <AiOutlineClose className="close__icon"/>
              </button>
              <div className='header-text'> About BrandColors </div>
              <div className='content'>
                <p className='modal-p'>
                  BrandColors was created by <b>DesignBombs</b>. The goal was to
                  create a helpful reference for the brand color codes that are
                  needed most often.{" "}
                </p>
                <p className='modal-p'>
                  It's been featured by Smashing Magazine, CSS-Tricks, Web
                  Design Depot, Tuts+, and over <b>2 million pageviews</b>.
                  There are now over <b>600 brands</b> with <b>1600 colors</b>{" "}
                  and the collection is always growing.
                </p>
              </div>
            </div>
          )}
        </Popup>
        {/*--------------------------------------------------*/}
        {/*****SOCIAL MEDIA BAR********/}
        <div className='socialMediaBar'>
          <ul>
            <li>
              <a className='instagram'
                href='https://www.instagram.com/nihad19_19/'
                target={"_blank"}
                rel='noopener noreferrer'>
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a className='github'
                href='https://github.com/Nihad18'
                target={"_blank"}
                rel='noopener noreferrer'>
                <AiOutlineGithub />
              </a>
            </li>
            <li>
              <a className='linkedin'
                href='https://www.linkedin.com/in/nihad-balaki%C5%9Fiyev-544441213/'
                target={"_blank"}
                rel='noopener noreferrer'>
                <AiOutlineLinkedin />
              </a>
            </li>
          </ul>
        </div>
        {/*****END OF SOCIAL MEDIA BAR********/}
    </div>
      </aside>
    </div>
  );
}

export default React.memo(Sidebar);
