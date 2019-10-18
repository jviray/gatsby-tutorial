import React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        I'm constantly learning about software and building useful applications.
      </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out!</Link>
      </p>
    </div>
  )
}

export default About
