import { rhythm, scale } from "../utils/typography";
import { Link } from "gatsby";
import React from "react";
// import  Nav from "react-bootstrap/Nav";
// import Button from 'react-bootstrap/Button';


class Education extends React.Component {

  render() {
    const { location, title } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">

        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Northern Arizona University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2016 - December 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">DeVry University</h3>
              <div className="subheading mb-3">Bachelor of Arts</div>
              <div>Multimedia Design and Development</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2010 - September 2011</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Birmingham Community Charter Highschool</h3>
              <div className="subheading mb-3">Math and Science Program</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2009 - May 2010</span>
            </div>
          </div>
        </div>

      </section>

    );

  }

}
export default Education;