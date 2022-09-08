
import Image from "next/image";
import Slider from "react-slick";
import WebIcons from '../../../public/media/webIcons/index'



const WebArea = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }]
  };
  
  return (
    <div id="WebArea">
        <div className="grid-container">
          <Slider {...settings}>
          {Object.values(WebIcons).map((e, id) => 
            <div key={id} className={`WebArea__SlideCard`}>
              <Image 
                src={`${e.src}`} 
                alt={'webIcon'}
                priority
                width={150}
                height={70}
              />
            </div>
          )}
         </Slider>
        </div>
    </div>
    );
}
export { WebArea };
