import Image from "next/image";
// import Link from "next/link";
import { useRouter } from 'next/router';
import { Link } from "react-scroll";

const Footer = () => {
  const router = useRouter();

  
  
  return (
    <div id="Footer">

      <div className="Footer__Grid">
        
        <div className=" footer_left">
          <h5>NAVARRO Benjamin</h5>
          <h6>Developpeur Web</h6>
        </div>

        <div className="Footer__Card footer_middle">
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
        </div>

        <div className="Footer__Card  footer_right">
          <div className="Footer_Link">
            <a href="https://github.com/Benji-devw" target="_blank" rel="noreferrer">
              <Image 
                src={`${router.basePath}/media/webIcons/Github_White.svg`} 
                alt={'git_img'} priority height={30} width={30}
              />
            </a>
          </div>
          <div className="Footer_Link">
            <a href="https://www.linkedin.com/in/benjamin-navarro-586713220/" target="_blank" rel="noreferrer">
              <Image 
                src={`${router.basePath}/media/webIcons/in_White.svg`} 
                alt={'git_img'} priority height={30} width={30}
              />
            </a>
          </div>

        </div>

        <div className="copyright">
          <p>© Navarro Benjamin.2022</p>
          
        </div>
      </div>


    </div>
    );
}
export { Footer };
