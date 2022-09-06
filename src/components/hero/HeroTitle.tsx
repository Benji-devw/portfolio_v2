import { useState } from 'react';

type IHeroTitleProps = {
  lastName: string
  firstName: string
  post?: string
};



const HeroTitle = (props: IHeroTitleProps) => {
    
    const [coords, setCoords] = useState({x: 0, y: 0});
    const handleMouseMove = (event: any) => {
      // console.log(event.target.scrollWidth);
      setCoords({
        x: event.clientX - event.target.offsetLeft ,
        y: event.clientY - event.target.offsetTop ,
      });
    };
  

  return (
    <div id="Hero__Title" onMouseMove={handleMouseMove}>
        <div className={`HeroTitle__Main`}>
          <h1>{props.lastName}</h1> 
          <span style={{top: coords.y / 30, left: coords.x / 30}} className='ts1'>{props.lastName}</span> 
          <span style={{top: coords.y / 20, left: coords.x / 20}} className='ts2'>{props.lastName}</span> 
        </div>

        <div className={`HeroTitle__Subtitle`}>
          <span className='firstName'>{props.firstName}</span>
          <br />
          <span className='post'>{props.post}</span>
          {/* <h3>Coords: {coords.x} {coords.y}</h3> */}
        </div>

    </div>
    );
}
export { HeroTitle };
