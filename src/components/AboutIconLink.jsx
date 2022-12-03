import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link" style={{ marginTop: "20px" }}>
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
      {/* |==> This a custom link  using an object with properties. */}
      {/* <Link
        to={{
          pathname: "/about",
          search: "?sort=name",
          hash: "#hello",
        }}
      >
        <FaQuestion size={30} />
      </Link> */}
    </div>
  );
}

export default AboutIconLink;
