import ReactGA from "react-ga";

const eventTrack = (category: any, action: any, label: any) => {  
  console.log("GA event:", category, ":", action, ":", label); 
   ReactGA.event({    category: category,    action: action,    label: label,  })

  }
  export {eventTrack}