import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faInstagram, faFacebook, faTwitter, faPinterest);

function App() {
  return (
    <div className="App">
      <p className="Name">ihsrah</p>
      <section className="Social">
        <ul className="List">
          <li>
            <a
              href="https://instagram.com/ihsrah.illustrations"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                // mask={["fas", "circle"]}
                // transform="grow-7 left-1.5 up-2.2"
                // fixedWidth
                color="white"
                size="2x"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Ihsrahart-113107960436454"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                // mask={["fas", "circle"]}
                // transform="grow-7 left-1.5 up-2.2"
                // fixedWidth
                color="white"
                size="2x"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ihsrah_art" target="_blank">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                // mask={["fas", "circle"]}
                // transform="grow-7 left-1.5 up-2.2"
                // fixedWidth
                color="white"
                size="2x"
              />
            </a>
          </li>
          {/* <li>
            <a href="google.com" target="_blank">
              <FontAwesomeIcon
                icon={["fab", "pinterest"]}
                // mask={["fas", "circle"]}
                // transform="grow-7 left-1.5 up-2.2"
                // fixedWidth
                color="white"
                size="2x"
              />
            </a>
          </li> */}
        </ul>
      </section>
    </div>
  );
}

export default App;
