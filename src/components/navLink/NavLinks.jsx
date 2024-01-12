import "./navLink.css"
import React from 'react';
import Typewriter from "typewriter-effect";


export function NavLinks({ links }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("This site is ")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("4Ne1")
                  .start();
              }}
            />
          </h1>
        </div>
        <div className="navbar-links">
          {links.map(link => (
            <a key={link.id} href={link.url}>
              {link.title}
            </a>
          ))}
        </div>
      </nav>

    </>
  );
}