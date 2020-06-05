import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { TiTag } from 'react-icons/ti';
import colors from '../constants/colors';

const BlogItemWrapper = styled.a`
  margin-bottom: 2.4rem;
  box-shadow: 0 1px 3px rgba(43, 43, 45, 0.1);
  cursor: pointer;
  transition: all 0.5s linear;

  &:hover {
    box-shadow: 0 1px 10px rgba(71, 229, 188, 0.8);
  }
`;

const BlogArticle = styled.article`
  padding: 2.4rem;
  border-radius: 2px;
  border: 2px solid #2b2b2d;
`;

const ArticleTime = styled.time`
  display: block;
  letter-spacing: 0.1rem;
  color: ${colors.blue};
  margin-bottom: 1.5vh;
`;

const ArticleTitle = styled.h1`
  font-size: 1.6rem;
  color: ${colors.green};
  opacity: 0.5;
  margin: 0.2rem 0px 0.5rem;
`;

const ArticleDescription = styled.h2`
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 1.5vh;
`;

const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TagIcon = styled(TiTag)`
  color: ${colors.lightGrey};
  width: 30px;
  height: 25px;
  margin-right: 0.5vw;
`;

const Tag = styled.span`
  background-color: ${props => props.background ? props.background : '#000' } ;
  padding: 5px 10px;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  margin-right: 10px;
  border-radius: 5px;
`;

const BlogItem = ({ slug, background, category, date, timeToRead, title, description}) => {

  return (
    <BlogItemWrapper href="www.google.com.br" target="_blank" rel="noopener noreferrer">
      <Link to={slug}>
        <BlogArticle>
          <ArticleTime>{date} * {timeToRead} min de leitura </ArticleTime>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleDescription>{description}</ArticleDescription>
          <TagsWrapper>
            <TagIcon />
            <Tag background={background} >{category}</Tag>
          </TagsWrapper>
        </BlogArticle>
      </Link>
    </BlogItemWrapper>
  );
};

BlogItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

}

export default BlogItem;
