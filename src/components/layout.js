import React from "react";
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.scss";
import Header from "../components/header";
import Container from 'react-bootstrap/Container';
import { rhythm, scale } from "../utils/typography";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(48),
          padding: `${rhythm(2)} ${rhythm(1.5)}`,
        }}
      >
        <Header location={location} title={title} rootPath={rootPath} />
        <Container fluid>
            <main>{children}</main>
        </Container>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `} Devin Gray
        </footer>
      </div>
    )
  }
}

export default Layout;
