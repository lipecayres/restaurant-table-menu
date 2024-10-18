import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text">&copy; {new Date().getFullYear()}</p>

        <p className="text">Enjoy your drinks and please drink responsibly.</p>
      </div>
    </footer>
  );
};

export default Footer;
