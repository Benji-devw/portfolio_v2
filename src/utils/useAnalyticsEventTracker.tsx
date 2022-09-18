import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Porfolio_v2") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;