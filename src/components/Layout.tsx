import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components';

import { rhythm } from "../utils/typography"
import GlobalStyle from "../components/GlobalStyle";

interface IProps {
  title: string;
  children: React.ReactElement;
  location: {
    pathname: string;
  };
}

const Layout: React.FC<IProps> = (props) => (
  <StaticQuery
    query={LayoutQuery}
    render={data => {
      const {
        location,
        title,
        children,
      } = props;
      const rootPath = `${__PATH_PREFIX__}/`;
      const isRoot = location.pathname === rootPath;
      const { social } = data.site.siteMetadata;
      return (
        <LayoutWrapper>
          <GlobalStyle />
          <header>
            <HeaderHead isRoot={isRoot}>
              <HeaderLink to="/">{ title }</HeaderLink>
            </HeaderHead>
          </header>
          <main>{children}</main>
          <footer>
            <FooterLink href={`https://twitter.com/${social.twitter}`}>Twitter</FooterLink>
            {` • `}
            <FooterLink href={`https://github.com/${social.github}`}>Github</FooterLink>
            {` • `}
            <FooterLink href={`https://www.linkedin.com/in/${social.linkedin}`}>LinkedIn</FooterLink>
          </footer>
        </LayoutWrapper>
      );
    }}
  />
);


const LayoutQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
          linkedin
          github
        }
      }
    }
  }
`

const LayoutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const HeaderHead = styled.h3<{ isRoot: boolean; children: any; }>`
  margin-top: 0;
  font-family: Spoqa Han Sans;
  margin-bottom: ${rhythm(1.5)};
  font-size: ${props => props.isRoot ? '2rem' : 'inherit'};
  line-height: ${props => props.isRoot ? '3rem' : 'inherit'};
`;

const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const FooterLink = styled.a`
  border-bottom: 1px solid black;
`;

export default Layout
