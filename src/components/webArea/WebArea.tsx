import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import test from '../../../public/media/webIcons/index'

const WebArea = () => {
  const router = useRouter();
  
  console.log(test);
  
  return (
    <div id="WebArea">
      <div className="grid-container">

      <div className='Card'>
        {Object.values(test).map((e, id) => 
        <Image key={id}
          src={`${e.src}`} 
          alt={'test'}
          priority
          height={'100'}
          width={'100'}
        />
        
        )}
      </div>

      </div>
    </div>
    );
}
export { WebArea };
