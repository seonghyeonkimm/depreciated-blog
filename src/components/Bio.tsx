import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components";

import { rhythm } from "../utils/typography"

const Bio: React.FC = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata
      return (
        <BioWrapper>
          <ProfileImage
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
          />
          <div>
            <ProfileLink
              href={`https://twitter.com/${social.twitter}`}
            >
              {author}
            </ProfileLink>
            의 개인 블로그입니다.
            <br />
            <p>배경지식 없이도 쉽게 이해할 수 있게 글을 쓰려고 노력합니다.</p>
          </div>
        </BioWrapper>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpeg/" }) {
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
        }
      }
    }
  }
`

const BioWrapper = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`;

const ProfileImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;

  img {
    border-radius: 50%;
  }
`;

const ProfileLink = styled.a`
  border-bottom: 1px solid black;
  font-weight: bold;
  text-decoration: none;
`;

export default Bio
