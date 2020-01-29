/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import { library } from "@fortawesome/fontawesome-svg-core"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
            github
            linkedin
            facebook
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0">Devin <br />
          <span className="text-primary">Gray</span>
        </h1>
        <div className="subheading mb-5">Sherman Oaks, CA, 91401 · (818) 406-9441 ·
                    <a href="mailto:devin.gray92@gmail.com">devin.gray92@gmail.com</a>
        </div>
        <p className="lead mb-5">If you do what you love, you'll never work a day in your life. In this truth, I realize that I haven't truly worked since my first job out of high school.</p>
        <p>My evolution both within the corporate sphere and as a person has prepared me to be one of the best in the world in what I do, and that is digital consulting.</p>
        <p>Everything from playing competitive basketball, achieving my black belt in Tae Kwon Do and my years spent as a programmer and full- stack developer to fulfilling many projects as a Social Media and SEO lead - I have developed the skills necessary to perform at the highest level in whatever I set my mind to do.</p>
        <p>By delivering a combination of quality strategies, implementing frameworks and productivity increasing workflows for teams, I have created multiple successful campaigns that have seen companies exceed their goals by over 800%!</p>
        <p>To produce these results I am constantly sharpening my sword, working with and learning from some of the best gurus from around the world covering everything from programming to social media advertising, to LinkedIn outreach. They continue to teach me, coach me, mentor me, and encourage me. I believe in constant growth and mastery within myself and my businesses.</p>

        <div className="social-icons">
          <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={`https://github.com/${social.github}`}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={`https://twitter.com/${social.twitter}`}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={`https://www.facebook.com/${social.facebook}`}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </div>
    </section>

  )
}

export default Bio
