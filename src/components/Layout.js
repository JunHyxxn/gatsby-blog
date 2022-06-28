import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  siteDescription,
} from "./Layout.module.css";
// Layout 의 Inner Tag 값으로 넣는 값은 무조건 children으로 지정되어있다.
const Layout = ({ pageTitle, children }) => {
  /*
    useStaticQuery => graphql 에서 데이터 가져오기
    data.site.siteMetadata.title, .description 으로 가져올 수 있다.

    */
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <div className={siteDescription}>
        {data.site.siteMetadata.description}
      </div>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>

      <div>💥 Copyright All Rights</div>
    </div>
  );
};

export default Layout;
