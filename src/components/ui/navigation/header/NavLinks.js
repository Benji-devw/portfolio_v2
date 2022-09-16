import propTypes from "prop-types";

export const NavLinks = [
    {
      name: "Home",
      id: "home_page",
    },
    {
      name: "Web devis",
      id: "web_page",
    },
    {
      name: "Card devis",
      id: "card_page",
    },
    {
      name: "Logo devis",
      id: "logo_page",
    },
    {
      name: "Pack devis",
      id: "pack_page",
    }
  ];

  // proptypes check
  NavLinks.propTypes = {
    name: propTypes.string,
    id: propTypes.string,
  };