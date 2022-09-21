import ReactGA from "react-ga";

type IEventtrack = {
  category: string;
  action: string;
  label: string;
}

const eventTrack = ({category, action, label}: IEventtrack) => {  
  // console.log("GA event:", category, ":", action, ":", label); 
   ReactGA.event({ category: category, action: action, label: label})
}
export {eventTrack}