import React from 'react';
import { Link } from 'gatsby';
import propTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';


import { FaLongArrowAltLeft , FaLongArrowAltRight } from "react-icons/fa"

import colors from '../constants/colors';

const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  color: white;

  ${media.lessThan("925px")`
    flex-direction: column;
    align-items:center;
  `}
`;

const PageLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color .5s;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover {
    color: ${colors.blue}
  }

  ${media.lessThan("925px")`
    margin-bottom: 3vh;
  `}
`;

const CurrentPage = styled.p`
  color: ${colors.darkGrey};
  font-size: .9em;
  ${media.lessThan("925px")`
    margin-bottom: 3vh;
  `}
`;

const ArrowLeft = styled(FaLongArrowAltLeft)`
  margin-right: 10px;
`;

const ArrowRight = styled(FaLongArrowAltRight)`
  margin-left: 10px;
`;

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <PaginationWrapper>
    {!isFirst && 
      <PageLink to={prevPage}><ArrowLeft /> Página anterior</PageLink>
    }

   <CurrentPage>{ currentPage } de {numPages}</CurrentPage> 

    {!isLast && 
      <PageLink to={nextPage}>Próxima Página <ArrowRight /></PageLink>
    }
  </PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}



export default Pagination