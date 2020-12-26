import React from "react"
import { Link } from "gatsby"
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
          Posts
        </Link>
        {children}
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
          Newsletter
        </Link>
      </li>
      <li>
        <Link to="/post" className="page-link">
          Post
        </Link>
      </li>
      <li>
        <Link to="/healthcare" className="page-link">
          Helthcare
        </Link>
      </li>
      <li>
        <Link to="/technology" className="page-link">
          Technology
        </Link>
      </li>
      <li>
        <Link to="/robotics" className="page-link">
          Robotics
        </Link>
      </li>
      <li>
        <Link to="/contact" className="page-link">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Links
