import { useCallback, useEffect, useState } from 'react';
import {useMove} from '../../utils/mouseCoords'
import { IHeroProps } from '@/types/types'



const Hero = (props: IHeroProps) => {

  const {x, y, handleMouseMove} = useMove()
  const [word, setWord] =         useState<string>('React');
  const [count, setCount] =       useState<number>(1);
  const [test, setTest] =         useState<string>('');
  
  const wordCounter = useCallback(() => {
    const names = ['', 'NextJs', 'NodeJs', 'JavaScript ', 'NOsql ', 'TypeScript', 'Sass', 'Illustrator', 'Photoshop', 'XD', 'React']
    if (count === names.length -1) setCount(1)
    else setCount(count+1);
    setWord(names[count])
    setTest('animTest')
  }, [count]);
  
  
  useEffect(() => {
    const intervalID = setInterval(wordCounter, 5000);
    return () => clearInterval(intervalID);
  }, [wordCounter])

    

  return (
    <section id="Hero__Section">
      <div className="Hero__MouseEvent" onMouseMove={handleMouseMove}></div>

      <div className={`HeroTitle__Main`}>
        <h1 style={{backgroundPositionY: y, backgroundPositionX : x / 10}}>{props.lastName}</h1> 
        <span className='HeroTitle__Shad'>NAVARRO</span>
        <span className='HeroTitle__FirstName'>{props.firstName}</span>
      </div>

      <div className={`Hero__Subtitle`}>
        <div className="post">
          <span>{props.post}</span>
            <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
              <text x="7" y="68" className={`small`}>{word}</text>
            </svg>
        </div>
      </div>

      <svg id="HeroBg" xmlns="http://www.w3.org/2000/svg" fill='none' preserveAspectRatio='none' viewBox="0 0 400 400" height={480}>
          <circle className="HeroBg__Blue" cx="200" cy="170" r="125"/>
          <circle className="HeroBg__Purple" cx="170" cy="230" r="125"/>
          <circle className="HeroBg__Magenta" cx="230" cy="230" r="125"/>
          <linearGradient id="SVGID_0_" gradientUnits="userSpaceOnUse" x1="1052" y1="750" x2="1167" y2="522">
            <stop  offset="0.0" style={{stopColor:'#0b0b0b'}}/>
            <stop  offset="1" style={{stopColor:'#0785F2'}}/>
          </linearGradient>
          <circle className="HeroBg__Main" cx="200" cy="200" r="135" stroke='url(#SVGID_0_)' strokeOpacity="1"/>
      </svg>


      <svg id='Bottom__Path' viewBox="0 0 1920 140" xmlns="http://www.w3.org/2000/svg">
        <path d="M1920,130v8H0v-8c218.8-46.8,550.5-99.9,960-99.9C1190.5,30.1,1531.3,47,1920,130z"/>
      </svg>
    </section>
    );
}
export { Hero };
