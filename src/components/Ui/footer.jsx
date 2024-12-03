import React from "react";
import "../style/footer.css";
const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-column">
            <h3>About Us</h3>
            <p>
              Hello, I am full stack developer My expertise spans MongoDB,
              Express.js, React.js, and Node.js, allowing me to deliver
              full-stack solutions with efficiency and precision. I am
              proficient in front-end technologies such as HTML, CSS, and
              JavaScript.
            </p>
          </div>

          <div class="footer-column">
            <h3>Skills</h3>
            <ul>
              <li>
                <a href="#">Html</a>
              </li>
              <li>
                <a href="#">Css </a>
              </li>
              <li>
                <a href="#">React Js</a>
              </li>
              <li>
                <a href="#">JavaScript </a>
              </li>
              <li>
                <a href="#">Bootstrap</a>
              </li>
              <li>
                <a href="#">Node js</a>
              </li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Contact</h3>
            <p>Email: nikhilpramodsingh.com</p>
            <p>Phone: 8459342385</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
