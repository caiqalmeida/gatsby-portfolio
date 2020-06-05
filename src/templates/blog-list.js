import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import media from 'styled-media-query';


import { GiTalk } from 'react-icons/gi';

import Layout from "../components/Layout"
import PageContentWrapper from '../components/PageContentWrapper';
import BlogItem from '../components/BlogItem';
import Pagination from '../components/Pagination'

const BlogSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 65vw;
  margin: 0 auto;

  ${media.lessThan("925px")`
    max-width: 90%;
  `}
`;

const BlogTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  margin-bottom: 10vh;
`;

const BlogIcon = styled(GiTalk)`
  margin-left: 1vw;
`;

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges;

  // Essas props são aquelas variaveis que passamos como context no gatsby-node
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage-1}`;
  const nextPage = `/blog/page/${currentPage+1}`;

  return (
    <Layout>
    <PageContentWrapper>
      <BlogTitle>
        Blog
        <BlogIcon />
      </BlogTitle>
      <BlogSection>
        { postList.map( ({
           node: { 
             frontmatter: { 
               background, category, date, description, title},
               timeToRead,
               fields: {
                 slug
               }
          } 
        }) => (
          <BlogItem
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            background={background}
          />
        ))}

        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
          
      </BlogSection>
    </PageContentWrapper>
  </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: {order: DESC, fields: frontmatter___date}
    limit: $limit,
    skip: $skip
    ) {
    edges {
      node {
        fields {
          slug
        }
        id
        timeToRead
        wordCount {
          words
        }
        frontmatter {
          background
          category
          date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
          description
          title
        }
      }
    }
  }
}
`;

export default BlogList;
