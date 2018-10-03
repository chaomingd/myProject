import React, { Component } from 'react';
import { BodyCopy } from 'paidpost-core';

// import PropTypes from 'prop-types';
import scss from './Intro.scss';
import classnames from 'classnames';
import Data from '../Data/data';
import arrow from '!raw-loader!./arrow.svg';

import FPGCjsBox from '../../FPGLibrary/FPGCjsBox'
const introData = Data.introData;
export default class Intro extends Component {
	componentDidMount() {
		import('./_runtime').then(runtime => {
			runtime.default.call(this);
		})
	}
  render() {
    this.children = [];
    return (
      <div className={classnames(scss.TLIntro)}>
          {/* p1 */}
        <div className={classnames(scss['intro-page'], scss['intro-page1'])} ref={el => {if(el) this.children.push(el)}}>
          <div  className={classnames(scss['intro-img'],'activeEl')} ref={el => {this.gifCon = el}}>
            <img className={classnames(scss['show-desktop'])} src={require('../../images/entro_ani.gif')} alt=""/>
            <img className={classnames(scss['show-mobile'])} src={require('../../images/entro_ani_mobile.gif')} alt=""/>
          </div>
          <div className={classnames(scss['intro-context'])}>
            <h1>{introData.text1}</h1>
            <p>
              {introData.text2}
            </p>
            <div className={scss.scrollBtn} onClick={this.scrollToAnchor}>
              <span className={scss.btnText}>Scroll</span>
              <span className={scss.arrow} dangerouslySetInnerHTML={{ __html: arrow }} />
            </div>
          </div>
        </div>
				{/* p2 */}
        <div className={classnames(scss['intro-page'], scss['intro-page2'])}>
          <div className={classnames(scss['page2-content'])}>
            <div className={scss['page-sub-anim']}>
              <img src={require('../../images/subAnim.gif')} alt=""/>
            </div>
            <BodyCopy className={scss['page2-bodyCopy']}>
              <div>
                <p dangerouslySetInnerHTML={{ __html: introData.text3 }} />
                <p dangerouslySetInnerHTML={{ __html: introData.text4 }} />
                <p dangerouslySetInnerHTML={{ __html: introData.text5 }} />
              </div>
              <div>
                <p dangerouslySetInnerHTML={{ __html: introData.text6 }} />
                <p dangerouslySetInnerHTML={{ __html: introData.text7 }} />
              </div>
            </BodyCopy>
          </div>
          <div ref={
						(el) => this.observeraEle =el
					} className={classnames(scss['page-char'])}>
            <div className={scss.top}>
              <span className={scss.title}>DECADES OF ECONOMIC EXPANSION</span>
              <span className={scss.subTitle}>
                U.S. GDP 1978 VS. 2017, INFLATION ADJUSTED<sup>6</sup>
              </span>
            </div>
            <div className={scss.mid}>
              <div className={scss['chart-box']}>
                <div className={classnames(scss['chart-num'], scss.num1)}>
                  <span>$6.4</span>
                  <span>TRILLION</span>
                </div>
                <div className={classnames(scss['chart-line'], scss.line1)} />
                <div className={scss['chart-year']}>1978</div>
              </div>
              <div className={scss['chart-box']}>
                <div className={scss['chart-num']}>
                  <span>$19.4</span>
                  <span>TRILLION</span>
                </div>
                <div className={scss['chart-line']} />
                <div className={scss['chart-year']}>2017</div>
              </div>
            </div>
            <div className={scss.bottom}>
              <div className={scss.title}>OUTPUT SURGE</div>
              <div className={scss.content}>
                <span className={scss.bigNum}>+71%</span>
                <span className={scss.decs}>
                  GROWTH OF U.S. NATURAL GAS PRODUCTION SINCE 2005<sup>7</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* p3 */}
        <div className={classnames(scss['intro-page'], scss['intro-page3'])}>
          <div className={classnames(scss['page3-content'], 'intro-observeraEle')}>
            <BodyCopy className={scss['page3-bodyCopy']}>
              <h1>
                <span>Energized&nbsp;</span>
                <span>Growth</span>
              </h1>
              <p dangerouslySetInnerHTML={{ __html: introData.text8 }} />
            </BodyCopy>
            <div className={scss['page3-sub-anim']}>
              <img src={require('../../images/intro-cargroup.png')} alt=""/>
            </div>
          </div>
          <div className={classnames(scss['page3-anim'], 'intro-observeraEle')}>
            <div className={scss.copy}>
              <span className={scss.title}>+$550B</span>
              <span className={scss.subTitle}>
                CONTRIBUTION OF NATURAL GAS TO U.S. ECONOMY, ESTIMATED PER YEAR<sup>10</sup>
              </span>
            </div>
            <FPGCjsBox cjsName="ani2" innerRender className={classnames(scss.anim,'activeEl')} >
            </FPGCjsBox>
          </div>
          <div className={scss['next-bar']} >
            <span dangerouslySetInnerHTML={{ __html: arrow }} />
          </div>
        </div>
      </div>
    );
  }
}