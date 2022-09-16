import Image from "next/image";
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";
import {MainButton} from "@/components/ui/Button";
import { useRouter } from "next/router";



const Contact = () => {
  const router = useRouter();
  const form = useRef<HTMLDivElement | null>(null)
  const [openContact, setOpenContact] = useState(false)

  const templateParams = {
    name: 'James',
    notes: 'Check this out!'
  };

  const sendEmail = (e: any) => {
    console.log(e);
    // emailjs.sendForm('service_18tk8aj', 'template_u1vg98h', form.current, 'CMeA_HhgBFe-s2dTJ')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  const handleContact = () => {
    setOpenContact(!openContact)
  }

  useEffect(() => {
    // function handleClickOutside(event: any) {
    //   if (form.current && !form.current.contains(event.target)) setOpenContact(false);
    // }
    // document.addEventListener("mousedown", handleClickOutside);
    // return () => {
    //   document.removeEventListener("mousedown", handleClickOutside);
    // };
  }, [form]);


  // console.log(openContact);
  
  
  return (
    <div id="Contact">

      <div className="OpenContact__Btn" onClick={() => handleContact()}>
        <Image src={`${router.basePath}/media/Contact.svg`} 
            alt={'contact'}
            priority
            height={60}
            width={60}
          />
      </div>

      {openContact &&
        <div ref={form} className={`Contact__Form ${openContact && 'ContactOpen__Animate'}`}>
          <div className="ContactForm__Header">
            <Image src={`${router.basePath}/media/Contact.svg`} 
              alt={'contact'}
              priority
              height={40}
              width={40}
            />
            <span>Contact</span>
            <svg className="CloseContact__Btn" onClick={() => handleContact()} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none' viewBox="0 0 100 100">
              <path className="st110" d="M91.75,15.69L15.69,91.75c-2.06,2.06-5.39,2.06-7.44,0l0,0c-2.06-2.06-2.06-5.39,0-7.44L84.31,8.25
                c2.06-2.06,5.39-2.06,7.44,0l0,0C93.81,10.3,93.81,13.63,91.75,15.69z"/>
              <path className="st111" d="M84.31,91.75L8.25,15.69c-2.06-2.06-2.06-5.39,0-7.44l0,0c2.06-2.06,5.39-2.06,7.44,0l76.07,76.07
                c2.06,2.06,2.06,5.39,0,7.44l0,0C89.7,93.81,86.37,93.81,84.31,91.75z"/>
            </svg>
          </div>
          <div className="ContactForm__Body">
            <form onSubmit={(e) => sendEmail(e)}>
              <input type="text" name="user_name" placeholder="Name" minLength={10} maxLength={30} pattern="[a-z0-9]{1,15}" required/>
              <input type="email" name="user_email" placeholder="email" required/>
              <textarea name="message" placeholder="message..." required/>
              <div className="g-recaptcha" data-sitekey="6LfX9ewhAAAAAPyHQW7-cxvyCFLGfDcdo6B-CgBE"></div>
            </form>
            <MainButton classN={`Main__Button`}>
              <div onClick={(e) => sendEmail(e.target)}>
                Envoyer
              </div>
            </MainButton>
          </div>

        </div>
      }

    {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
    </div>
  );
}
export { Contact };
