import { rhythm, scale } from "../utils/typography";
import { Link } from "gatsby";
import React from "react";
import "./scss/experience/styles.scss";
// import  Nav from "react-bootstrap/Nav";
// import Button from 'react-bootstrap/Button';


class Experience extends React.Component {

  render() {
    const { location, title } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div class="w-100">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">Freelancer</h3>
              <div class="subheading mb-3">Devin Gray LLC</div>
              <p>Working with small businesses in improving their search engine optimization through content marketing and link building. Implementation of pay-per-click campaigns through targeted keywords. Create simple and complex marketing funnels through a combination of Paid Search Engine Keywords and Social Media Paid Advertising campaigns.</p>
              <p>Plan and direct webinars for services and products to better position people and businesses as authorities in their fields. Teach LinkedIn marketing to business owners and sales teams to increase business to business sales. Manage YouTube channels for businesses and individuals.</p>
              <p>Create and curate content for blogs and social media. Manage a team of marketers and developers, training both groups in creating sales funnels and landing pages.</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">September 2019 - November 2019</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">Full-Stack Developer</h3>
              <div class="subheading mb-3">The Home Improvement Guide</div>
              <p>I've learned a lot at my time with THIG. I spend most of my time developing and maintaining JAM stack applications, and maintaining the companies main application. I build frontend websites with a combination of technologies, including Vue.js, jQuery, and Bootstrap. The backend is built on PHP, and most of the data for our client sites are called through our main company CMS, where we handle clients projects, images, reviews, and other data. I also build web scrapers to gather client data.</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">September 2019 - November 2019</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">APS Software Engineer</h3>
              <div class="subheading mb-3">Thales</div>
              <p>Develop processes to submit and handle data sent by applicants to multiple sources, and handle responses sent from multiple government agencies. Designed processes, wireframes, and, educational materials for new hires.</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">September 2019 - November 2019</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">Web Developer</h3>
              <div class="subheading mb-3">Adler &amp; Associates Entertainment</div>
              <p>During my time with Alder &amp; Associates I was tasked with making a video streaming and ecommerce platform launch in a 3-4 month span. I helped manage a team of interns on the front-end side of things with building out pages and determining the component logic. The project was to use as minimal 3rd-party code as possible.</p>
              <p>The team worked with a Node.js backend and a React front-end. The database was designed using MySQL for better data security and ability to handle high transaction rates. We use React Router on the front-end for handling our routes, and ES6 for handling API calls using fetch. Node creates our backend APIs and JSON web tokens for security.</p>
              <p>My tasks included adding Redux to the project for state management, in areas such as the shopping cart, handling front-end search functionality, and configuring validation and separate state management for forms. I also developed a WordPress site for the company's non-profit.</p>
              <p>This project taught me a lot about working with larger teams and how to plan out a project. I learned to manage different git workflows, the importance of implementing testing within a codebase, and better learned how to work in AGILE and SCRUM methodologies.</p>

            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">June 2019 - August 2019</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">Web Developer</h3>
              <div class="subheading mb-3">Wiredhat Interactive</div>
              <p>My years studying marketing, web development, and designing in Photoshop and Illustrator have culminated in my working with Wiredhat Interactive.</p>
              <p>Working with multiple companies to provide them with their dream website, creating designs that match a client's vision and bring them to life on a desktop, tablet, and mobile device.</p>
              <p>Manage a team of designers and developers on numerous projects to ensure that product deadlines are met.</p>
              <p>Create Social Media, Email, and Google AdWords campaigns that bring clients tens of thousands in new leads and paying customers after going viral.</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">October 2017 - June 2019</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Tech and Media Arts Instructor</h3>
              <div class="subheading mb-3">New Horizons</div>
              <p>Here I spent time working with special needs individuals to help them learn technical skills that are practical, technological, and employable. These skills not only help them to be able to learn more academically but also aid in</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">June 2017 - October 2017</span>
            </div>
          </div>


          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Tech and Media Arts Instructor</h3>
              <div class="subheading mb-3">New Horizons</div>
              <p>Here I spent time working with special needs individuals to help them learn technical skills that are practical, technological, and employable. These skills not only help them to be able to learn more academically but also aid in</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">June 2017 - October 2017</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Web Developer</h3>
              <div class="subheading mb-3">Southern California School of Interpretation</div>
              <p>Working for SCSI was a great learning experience. It gave me experience in a management position. I took the lead in designing digital and print assets. I also managed the company's social media and took the lead in marketing campaigns for the new year.</p>
              <p>I had a part in helping develop new features and performance enhancements for students and proctors, as well as translate class manuals into over 20 new languages. I recorded, processed, and uploaded video lectures. I also helped managed database synchronization between the on-campus and online schools. This position was also my first experience working within the Caspio content management system to control data.</p>
              <p>My time here was admittedly brief, but It taught me a lot in terms of responsibility, and will always have a place in my heart because it was the first job I had while living on my own.</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">January 2017 - March 2017</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Web Developer</h3>
              <div class="subheading mb-3">Avital Web, Inc</div>
              <p>Working for Avital Web was an experience that taught me about the business side of web development. I learned the importance of meeting deadlines and optimizing sites for Google PageRank by optimizing file sizes, SEO, and refactoring code. This is where I first worked with older sites and had to focus on browser support, and my first experience with Email Marketing. </p>
              <p>The most exciting part about this job was learning about PHP security, constantly upgrading older PHP sites and protecting them from code injections and other vulnerabilities that affect older sites.</p>

            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">November 2016 - December 2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Assistant Instructor</h3>
              <div class="subheading mb-3">UCLA Extension</div>
              <p>Formerly supporting an intensive, 6-month coding Bootcamp based out of The University of Texas at Austin involving 250+ hours of in-class teaching through an extensive curriculum using HTML 5, CSS 3, JavaScript, jQuery, Git, Node.js. Express.js, MySQL 5, React, TDD, SEO, and cloud application development.</p>
              <p>For more information: <a href="https://www.tcbuclaextension.com/">https://www.tcbuclaextension.com/</a></p>
              <p>This is what I consider to be my first real coding job. Working with Trilogy has been one of the most enjoyable experiences in my professional career. I enjoyed working with such knowledgable professionals, and learned a lot. I also really enjoyed teaching, more than I ever thought I would. I would definitely recommend this bootcamp to anyone interested, to work for or to learn from.</p>
              <p>My main duties were helping the students grasps the concepts that the main instructor was focusing on each day. The curriculum also changed while I was there so it taught me to learn as I go. I also had to grade homework projects, which meant looking at many different coding styles and grading them on performance, how readability, and if it actually worked. I also helped with some of the project creation for the initial bootcamp.</p>
              <p>This position taught me the importance of communication, both with the students and the fellow instructors. It takes a lot of work to make sure classes start and end on time, and communication with the head instructor is key for that. It is also important to communicate to the students what you're trying to convey to them as far as solving the problem. It takes good communication skills to lead them to the correct answer, rather than giving it to them.</p>

            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">May 2016 - December 2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Full-Stack Developer</h3>
              <div class="subheading mb-3">Versa Products</div>
              <p>Manage multiple sites and convert them to modern technologies. Decrease bounce rates, increase the effectiveness of Google Analytics tracking, increase social media and website engagement rates. Successfully lead project campaigns, managing team members and instructing other developers in code styles and technologies. Work with BigCommerce to migrate the site from PHP to Node.js.</p>
              <p>Working with all of the great people at VersaProducts taught me a lot as far as how to actually work with a team. How to coordinate with my different team members regularly to get projects accomplished on a deadline. Working with a great marketing and creative team exposed me to different techniques on how to break through the typical advertising cycle and break the status quo to grab attention and build awareness.</p>

            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">July 2016 - August 2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Front-End Developer</h3>
              <div class="subheading mb-3">Los Angeles Times</div>
              <p>Designed and developed landing pages for a network of websites for the Los Angeles Times. Helped perform quality assurance testing to improve usability on sites that needed work the most. Helped create marketing campaigns to get new subscribers for physical subscriptions to the local newspaper.</p>

            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">June 2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Personal Trainer</h3>
              <div class="subheading mb-3">Gray Physique</div>
              <p>This was my first attempt at creating a business. I was tired of working a regular office job and wanted to get into personal training. That said, I still didn't want to drop everything I learned studying web development, so the solution? Create a virtual training business, of course! I filed a DBA, got an EIN, made some marketing materials, and partnered with a company overseas to get an app made so I could sell training programs to people for a membership fee. The only problem? Just as at Equinox, I wasn't good at selling, so I couldn't get anyone to sign up. The project was eventually abandoned, but I learned a lot about sales, including what not to do, marketing, and how to properly scale a business. All things that would've come in handy BEFORE I started the business, not after it flopped, but you live and learn.</p>

            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">June 2015 - January 2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Personal Trainer</h3>
              <div class="subheading mb-3">Equinox</div>
              <p>As a personal trainer, you do the usual tasks, assess current member fitness levels, and use that information to create appropriate training regimens and nutrition plans within your scope of knowledge and influence. The real takeaway I got from this job is the importance of learning how to sell. It requires patience but you've got to be assertive. It is a difficult skill to learn, vastly different from working retail or a normal office job. I gained a lot of information on different training modalities and how the body works, which</p>
              <p>is what I use every day when I work out myself. I also learned some selling techniques and how to manage clients, information that I'd take to other jobs.</p>

            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">October 2015 - December 2015</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Web Editor</h3>
              <div class="subheading mb-3">Scrubs AC, Inc.</div>
              <p>Web Editor for allheart.com and allheartchefs.com. Collaborate with my web team to meet project deadlines and optimize workflow as a group. Work through the Kalio eCommerce Platform to add, edit, delete, and update products on allheart.com; use Yahoo! Small Business Platform to publish products to allheartchefs.com. Use Photoshop to colorize, mask, and re- size images formatted for web and devices, as well as create banners. Work through Microsoft Excel to manage product information such as inventory, size, and description and upload them to the database, using formulas to manipulate data to work in an expedient manner. Create and update HTML size charts for use on the site.</p>
              <p>Karen's Toys Sales Associate April 2012 - September 2012 (6 months)</p>
              <p>Work with customers to give them the best possible shopping experience. Manage organizing of the backroom and the front of the store. Maintenance of the store and answering phones. Gift wrapping for birthdays and holidays.</p>

            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">September 2012 - October 2015</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Sales Associate</h3>
              <div class="subheading mb-3">Karen's Toys</div>
              <p>Work with customers to give them the best possible shopping experience. Manage organizing of the backroom and the front of the store. Maintenance of the store and answering phones. Gift wrapping for birthdays and holidays.</p>

            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">April 2012 - September 2012</span>
            </div>
          </div>


          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Cashier</h3>
              <div class="subheading mb-3">Target</div>
              <p>Handle money and transactions of all forms of payment from credit and debit cards to WIC checks and EBT cards.</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">November 2011 - January 2012</span>
            </div>
          </div>

        </div>

      </section>

    );

  }

}
export default Experience;