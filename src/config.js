// Do not change the Name of the variables

/*Email Config*/
const Email_Services = "service_vrogmkp";
const TemplateID = "template_o235w43";
const PublicKey = "RlYextuOUlqCr_0Ue";

/*General Settings*/
const NameWebSite = "Password Genterator"; // Name WebSite

const minPassword = 6; // Amount of password length MIN
const maxPassword = 16; // Amount of password length MAX

/*
Add FAQ  It is not recommended to add more than 8
Add according to the template
    {
      FAQ_Header:'title',
      content:'message',
    },
*/

const FAQ_content = [
  {
    FAQ_Header: "What this is WebSite ?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.`,
  },
  ,
  {
    FAQ_Header: "How do you contact us ?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.`,
  },
];

export {
  Email_Services,
  TemplateID,
  PublicKey,
  NameWebSite,
  minPassword,
  maxPassword,
  FAQ_content,
};
