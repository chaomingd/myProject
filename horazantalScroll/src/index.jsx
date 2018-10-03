/* eslint-env browser */
/* global PaidPost */
import React from 'react';
import { PaidPostArticle,breakpoints } from 'paidpost-core';
// import { paragraphs as lipsum } from './index.yml';
import MainContainer from './components/MainContainer';
import scss from './index.scss';

console.log(breakpoints);
const Index = () => (
  <PaidPostArticle fontFamily="Open Sans" className={scss.PaidPost}>
    <MainContainer />
  </PaidPostArticle>
);

export default Index;
