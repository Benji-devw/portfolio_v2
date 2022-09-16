import React from "react";
import { Link } from "react-scroll";
import { NavLinks } from "./NavLinks";
import Image from "next/image";

const NavItem = () => {
  return (
    <>
      <div className="navigation__logo">
      <Link 
          to='home_page'
          smooth={true}
          offset={0}
          duration={500}
        >
        <Image src='/images/VirtuelGraph_Logo.svg' alt='Logo' height={150} width={150} />
        </Link>
      </div>
      
      <div className='navigation__Items'>
      {NavLinks.map((link, id) => 
        <Link 
          key={id}
          className='navigation__Item'
          activeClass="navigationItem__active"
          to={link.id}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <span>{link.name}</span>
        </Link>
      )}
      </div>
      </>
  )
};

export default NavItem;
