/* eslint-env browser */
/* global PaidPost */
import React from 'react';
import { PaidPostArticle,breakpoints,BodyCopy,FullBleed } from 'paidpost-core';
// import { paragraphs as lipsum } from './index.yml';
import MainContainer from './components/MainContainer';
import scss from './index.scss';
import FPGCjsBox from './FPGLibrary/FPGCjsBox'
import FPGResponsiveCjsBox from './components/FPGResponsiveCjsBox'
console.log(breakpoints);
const Index = () => (
  <PaidPostArticle fontFamily="Open Sans" className={scss.PaidPost}>
		{/* <MainContainer /> */}
		{/* <FPGCjsBox cjsName="charLine" ></FPGCjsBox> */}
		<FPGResponsiveCjsBox cjsName={{
			'~ 539': 'charLine_M',
			'540 ~': 'charLine'
		}} />
  </PaidPostArticle>
);

export default Index;
