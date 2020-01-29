import { rhythm, scale } from "../utils/typography";
import { Link } from "gatsby";
import React from "react";
// import  Nav from "react-bootstrap/Nav";
// import Button from 'react-bootstrap/Button';


class Interests extends React.Component {

    render() {
        const { location, title } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;

        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
            <div className="w-100">
              <h2 className="mb-5">Interests</h2>
              <p>I love sports, especially basketball. I am an avid video game player, when I have time. I eventually want to create my own video game.</p>
              <p className="mb-0">When I'm relaxing, I enjoy listening to audiobooks, reading, and watching anime and sci-fi.</p>
            </div>
          </section>
      
            
        );

    }

}
export default Interests;