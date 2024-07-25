import PropTypes from "prop-types";
import { useEffect } from "react";
import smoothScroll from "../js/utils/smoothScroll";

export default function Content({ children }) {
  useEffect(() => {
    smoothScroll();
  });

  return <main className="content">{children}</main>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
