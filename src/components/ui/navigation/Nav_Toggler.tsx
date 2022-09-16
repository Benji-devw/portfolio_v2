import { Link } from "react-scroll";
import { createRef, useEffect, useState } from "react";


const NavToggler = () => {
  
  const togglerRef = createRef<HTMLDivElement>()
  const [toggler, setToggler] = useState(false)
  const [test, setTest] = useState('')

  const handleToggler = (e: any) => {
    if (!toggler) {setTest('blurOut'), setToggler(!toggler)}
    if (toggler) setTest('slideOutRight')
    setTimeout(() => { setToggler(!toggler), setTest('')}, 500);
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (togglerRef.current && !togglerRef.current.contains(event.target)) handleToggler('close');
    }
    if (toggler) document.addEventListener("mousedown", handleClickOutside);
  }, [togglerRef, toggler]);
  

  console.log(toggler);
  
  return (
    <>
      <div className="NavToggler_Btn" onClick={() => handleToggler('close')} aria-label="Toggle navigation">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
            <g fill={"#F5F5F5"} stroke='#000000' strokeMiterlimit="10"
              >
              <path className="st0" d="M255-1C113.6-1-1,113.6-1,255s114.6,256,256,256s256-114.6,256-256S396.4-1,255-1z M255,491.4
                C124.4,491.4,18.6,385.6,18.6,255S124.4,18.6,255,18.6S491.4,124.4,491.4,255S385.6,491.4,255,491.4z"/>
              <path className="st1" d="M361.7,148.3H148.3c-11.8,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3h213.3c11.8,0,21.3-9.6,21.3-21.3
                C383,157.9,373.4,148.3,361.7,148.3z"/>
              <path className="st2" d="M361.7,233.7H148.3c-11.8,0-21.3,9.6-21.3,21.3c0,11.8,9.6,21.3,21.3,21.3h213.3c11.8,0,21.3-9.6,21.3-21.3
                S373.4,233.7,361.7,233.7z"/>
              <path className="st3" d="M361.7,319H148.3c-11.8,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3h213.3c11.8,0,21.3-9.6,21.3-21.3
                C383,328.6,373.4,319,361.7,319z"/>
            </g>
          </svg>
      </div>
      {toggler && 
        <nav ref={togglerRef} id={`menu__Toggler`} className={test}>
          <ul>
            <li><Link activeClass="active"
                  to="Hero__Section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
            >Accueil</Link></li>
            <li><Link activeClass="active"
                  to="Services__Section"
                  spy={true}
                  smooth={true}
                  offset={-230}
                  duration={500}
            >Services</Link></li>
            <li><Link activeClass="active"
                  to="Skills__Section"
                  spy={true}
                  smooth={true}
                  offset={-230}
                  duration={500}
            >Compétences</Link></li>
            <li><Link activeClass="active"
                  to="Portfolio__Section"
                  spy={true}
                  smooth={true}
                  offset={-230}
                  duration={500}
            >Portfolio</Link>
            </li>
            {/* <li><Link href='/'>Contact</Link></li> */}
          </ul>
        </nav>
      }
 </>
  );
}

export { NavToggler };
