import { Link } from "react-scroll";
import Image from "next/image";
import { useRouter } from 'next/router';
import { NavToggler } from './Nav_Toggler'

const NavFeatures = () => {
  const router = useRouter();

  return (
    <div className={`Nav__Wrapper`}>
      <div className={`Nav__Main`}>

        <div className="Nav__Title">
          <Link activeClass="active"
                  to="Hero__Section"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
          >PORTFOLIO</Link>
        </div>

        <nav id={`menu__Main`}>
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

        <div className="Header__Links">
            <a href="https://github.com/Benji-devw" target="_blank" rel="noreferrer">
              <Image 
                src={`${router.basePath}/media/webIcons/Github_White.svg`} 
                alt={'git_img'} priority height={30} width={30}
              />
            </a>
          <a href="https://www.linkedin.com/in/benjamin-navarro-586713220/" target="_blank" rel="noreferrer">
            <Image 
              src={`${router.basePath}/media/webIcons/in_White.svg`} 
              alt={'git_img'} priority height={30} width={30}
            />
          </a>
        <div className={`Nav__Toggler`}>
          <NavToggler />
        </div>
        </div>

      </div>
    </div>
  );
}
export { NavFeatures };
