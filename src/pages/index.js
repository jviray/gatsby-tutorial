import React from "react"
import { Link } from "gatsby"

const Index = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Jonathan, a ful l-stack developer living in NYC!</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}

export default Index
