/* eslint-env browser */
/* global PaidPost */
import React from 'react';
import { PaidPostArticle,breakpoints,FullBleed } from 'paidpost-core';
import scss from './index.scss';
import Data from './components/Data/Data'

console.log(breakpoints);
import Intro from './components/Intro'
import Section1 from './components/Section1'
import CustomeBodyCopy from './components/CustomeBodyCopy'
import CustomeVideo from './components/CustomeVideo'
import Footer from './components/Footer'


const Index = () => (
  <PaidPostArticle fontFamily="Open Sans" className={scss.PaidPost}>
	<div id="mask" className={scss.mask}></div>
		<Intro {...Data.Intro} />
		{Object.keys(Data.Sections).map(key_S => {
			return <Section1 key={key_S} {...Data.Sections[key_S]} />
		})}
		<CustomeBodyCopy {...Data.customeBodyCopy} />
		<CustomeVideo />
		<Footer />
  </PaidPostArticle>
);

export default Index;
