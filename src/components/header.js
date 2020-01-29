import { rhythm, scale } from "../utils/typography";
import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import "./scss/header/styles.scss";
import  Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Image from "gatsby-image"



        const Header = () => {
            const rootPath = `${__PATH_PREFIX__}/`;
    
            const data = useStaticQuery(graphql`
            query HeaderQuery {
              avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
                childImageSharp {
                  fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              site {
                siteMetadata {
                  author
                  social {
                    twitter
                  }
                }
              }
            }
          `)
          const { author, social } = data.site.siteMetadata
            window.addEventListener('scroll', (event) => {
              const navBar = document.getElementById("sideNav");
              Array.from(document.getElementsByTagName("section"), section => {
                let navLink = navBar.querySelector(`a[href="#${section.getAttribute("id")}"]`),
                    top = section.offsetTop,
                    left = section.offsetLeft,
                    width = section.offsetWidth,
                    height = section.offsetHeight,
                    isInViewport = (
                      top >= window.pageYOffset &&
                      left >= window.pageXOffset &&
                      (top + height) <= (window.pageYOffset + window.innerHeight) &&
                      (left + width) <= (window.pageXOffset + window.innerWidth)
                    )
              
                if (isInViewport && navLink) {
                  navLink.classList.add("active");
                } else {
                  navLink.classList.remove("active");
                }
              });
            }, false); 
          return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Devin Gray</span>
                        <span className="d-none d-lg-block">
                            <Image className="img-fluid img-profile rounded-circle mx-auto mb-2"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
      />
                        </span>
                    </a>
                    <Button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav as="ul"  activeKey={rootPath} className="navbar-nav">
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link js-scroll-trigger" href="#about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link js-scroll-trigger" href="#experience">Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link js-scroll-trigger" href="#education">Education</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link js-scroll-trigger" href="#interests">Interests</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </nav>

            </header>
        );
    
        }
    
export default Header;