import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-700 mb-4">
    <div className="container mx-auto py-5">
      <h1 className="m-0 text-2xl">
        <Link to="/" className="text-white no-underline">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
