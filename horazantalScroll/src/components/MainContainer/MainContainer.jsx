import React from 'react';
import scss from './MainContainer.scss';

import classnames from 'classnames';

import Intro from '../Intro';
import PageContainer1 from '../PageContainer1';
import PageContainer2 from '../PageContainer2';
import PageContainer3 from '../PageContainer3';
import NavDot from '../NavDot';


export default class MainContainer extends React.Component {
	componentDidMount() {
		import('./__runtime').then(runtime => {
			runtime.default.call(this)
		});
		setTimeout(()=> {
			this.mask.style.display = 'none';
		},800)
	}
  render() {
    return (
      <div className={scss.mainContainer}>
			<NavDot />
			<div ref={el => this.mask = el} className={scss.mask}></div>
        <div className={scss.verticalScrollElement}  />
        <div ref={
					el=> this.scrollContainer = el
				} className={classnames(scss.scrollContainer)}>
					
          <Intro />
          <PageContainer1 />
          <PageContainer2 />
          <PageContainer3 />
          </div>
      </div>
    );
  }
}
