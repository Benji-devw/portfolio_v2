import Image from "next/image";
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";
import {MainButton} from "@/components/ui/Button";
import { useRouter } from "next/router";



const Contact = () => {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null)
  const [openContact, setOpenContact] = useState(false)

  const templateParams = {
    name: 'James',
    notes: 'Check this out!'
  };

  const sendEmail = (e: any) => {
    console.log(e);
    emailjs.sendForm('service_18tk8aj', 'template_u1vg98h', form.current!, 'CMeA_HhgBFe-s2dTJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleOpenContact = () => {
    setOpenContact(!openContact)
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (form.current && !form.current.contains(event.target)) setOpenContact(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [form]);


  // console.log(openContact);
  
  
  return (
    <div id="Contact">

      <div className="OpenContact__Btn" onClick={() => handleOpenContact()}>
        <Image src={`${router.basePath}/media/Contact.svg`} 
            alt={'contact'}
            priority
            height={80}
            width={80}
          />
      </div>

      {openContact &&
        <div className={`Contact__Form ${openContact && 'ContactOpen__Animate'}`}>
          <form ref={form} onSubmit={sendEmail} className={``}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            
            <div className="g-recaptcha" data-sitekey="6LfX9ewhAAAAAPyHQW7-cxvyCFLGfDcdo6B-CgBE"></div>

            {/* <button type="submit" onClick={() => sendEmail('!isOpen')}> */}
              <MainButton classN={`Main__Button`}>
                <div onClick={() => sendEmail('!isOpen')}>
                  Envoyer
                </div>
              </MainButton>
            {/* </button> */}
          </form>
        </div>
      }

    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </div>
  );
}
export { Contact };
