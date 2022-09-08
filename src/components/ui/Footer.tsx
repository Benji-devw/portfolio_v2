import Image from "next/image";
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  
  return (
    <div id="Footer">

      <div className="Footer__Grid">
        
        <div className="Footer__Card footer_left">
          <h5>NAVARRO Benjamin</h5>
          <h6>Developpeur Web</h6>
          <p>Passioné par l&apos;informatique depuis tout jeune, mon savoir ciblais plutôt la parti matériel informtique.
            Cela fait maintenant 3ans que ma passion pour la programmation web existe et persiste...

          </p>
        </div>
        <div className="Footer__Card footer_middle">
          <ul>
            <li>Home</li>
            <li>Compétences</li>
            <li>Porfolio</li>
          </ul>
          
        </div>
        <div className="Footer__Card  footer_right">
          <div className="Footer_Network">
            <Image 
              src={`${router.basePath}/media/webIcons/Github_Blue.svg`} 
              alt={'test'}
              priority
              // layout='fill'
              // objectFit="contain"
              height={50}
              width={50}
            />
          </div>
          <div className="Footer_Network">
          <Image 
            src={`${router.basePath}/media/webIcons/in.svg`} 
            alt={'test'}
            priority
            width={50}
            height={50}
          />

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
