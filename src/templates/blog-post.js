import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../components/Layout"
import PageContentWrapper from '../components/PageContentWrapper';
import SEO from '../components/Seo';

import * as S from '../components/BlogItemContent';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <PageContentWrapper>
        <SEO 
        title={post.frontmatter.title} 
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        />
        <S.PostHeader>
          <S.PostDate>
            {post.frontmatter.date} * { post.timeToRead } min de leitura
          </S.PostDate>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        </S.PostHeader>
        <S.MainContent>
          <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </S.MainContent>
        
      </PageContentWrapper>
    </Layout>
  );
};

// Quando passamos a query desta maneira, recebemos a data via props

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        image
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
