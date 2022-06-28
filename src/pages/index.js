import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
/*
StaticImage => 빠른 이미지 로딩, 좀 더 로딩이 자연스럽게 된다.
*/

// markup
const IndexPage = () => {
  return (
    // <div>
    //   <title>Home Page</title>
    //   <Head />
    //   <h1>안녕하세요.</h1>
    // </div>
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <StaticImage
        className="profileImg"
        alt="My Profile Image"
        src="../images/GithubProfile.jpg"
        style={{
          width: "100%",
          height: "500px",
          display: "block",
          borderRadius: "20px",
        }}
      ></StaticImage>
    </Layout>
  );
};

export default IndexPage;
