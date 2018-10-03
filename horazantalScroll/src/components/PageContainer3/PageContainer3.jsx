import React, { Component } from 'react';
import { BodyCopy, SourceCopy, } from 'paidpost-core';

// import PropTypes from 'prop-types';
import scss from './PageContainer3.scss';
import classnames from 'classnames';
import TitleBoxWidthContent from '../TitleBoxWidthContent';
import TitleBox from '../TitleBox';
import CustomBodyCopy from '../CustomBodyCopy';
import Data from '../Data/data';

import FPGCjsBox from '../../FPGLibrary/FPGCjsBox'

const section3Data = Data.section3Data;
export default class PageContainer3 extends Component {
  componentDidMount() {
    // this.runtimePromise = System.import('./_runtime.js').then(runtime => {
    //   runtime.didMount.call(this);
    //   return runtime;
    // });
  }
  clickTest() {
    window.open('https://www.chevron.com/operations/natural-gas', '_blank');
  }
  render() {
    this.children = [];
    return (
      <div
        className={classnames(scss.PageContainer3)}
      >
        {/* p1 */}
          <div className={classnames(scss['intro-page'], scss['intro-page1'])} >
            <div className={classnames(scss.nacigationMob)}>
              <span>ENERGY SECURITY</span>
            </div>
            <div className={classnames(scss.nacigationMob, scss.prevNav)}>
              <span>Emissions</span>
            </div>
            <CustomBodyCopy  index="3" title={section3Data.text1} text={section3Data.text2} />
            <div className={classnames(scss['page1-anims-container'])}>
              <FPGCjsBox cjsName="2" className={classnames(scss['show-desktop'],'activeEl')} />
              <FPGCjsBox cjsName="RectBlue_m" className={classnames(scss['show-mobile'])} />
              <TitleBox index="3" Textindex={3} className={scss.titleBox} title="Top 5<br/> natural gas PRODUCERS" text="BY COUNTRY, BILLION CUBIC METERS, 2016<sup>37</sup>" />
            </div>
          </div>
          {/* p2 */}
          <div className={classnames(scss['intro-page'], scss['intro-page2'])} >
            <CustomBodyCopy  index="3" title={section3Data.text3} text={section3Data.text4} />
            <div className={classnames(scss['page2-anims-container'])}>
              <FPGCjsBox cjsName="4" className={classnames(scss['show-desktop'],'activeEl')} />
              <FPGCjsBox cjsName="angleBlue_m" className={classnames(scss['show-mobile'])} />
              <TitleBox index="3" Textindex={3} className={scss.titleBox2} title="Top 5<br/> natural gas<br/> based exports" text="VALUE OF NG CONSTITUENTS,<br/>$ BILLION, 2015<sup>39</sup>" />
            </div>
            <div className={classnames(scss['page2-graphicBox'])}>
              <TitleBoxWidthContent
                className={scss.graphic}
                index="3"
                contentClassName={scss.color}
                title="EXPORT BOOM"
                number="+5,930%"
                text2="INCREASE IN U.S. NATURAL GAS EXPORTS, 1978-2017<sup>40</sup>"
              />
            </div>
          </div>
          {/* p3 */}
          <div className={classnames(scss['intro-page'], scss['intro-page3'])}>
            <div className={classnames(scss.nacigationMob, scss.endNav)}>
              <span>ENERGY SECURITY</span>
            </div>
            <CustomBodyCopy  index="3" title={section3Data.text5} text={section3Data.text6}>
              <SourceCopy className={scss.sourceCopy}>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      'Illustrations by Giacomo Bagnara.',
                  }}
                />
              </SourceCopy>
            </CustomBodyCopy>
            <div className={classnames(scss['page3-anims-container'])}>
              <div className={scss.textBox}>
                <h1>DEMAND HOTSPOTS</h1>
                <p> CHANGE IN ENERGY DEMAND BY 2040, MILLION TONS OF OIL EQUIVALENT<sup>43</sup></p>
              </div>
              <FPGCjsBox cjsName="map" className={classnames(scss['show-desktop'],'activeEl')} >
									<img style={{
										position: 'absolute',
										top: '0',
										left: '0',
										width: '100%',
										height: '100%',
										zIndex: '-1'
									}} src={require('../../images/map.png')} alt=""/>
							</FPGCjsBox>
              <FPGCjsBox cjsName="map_m" className={classnames(scss['show-mobile'])} >
									<img
									style={{
										position: 'absolute',
										top: '0',
										left: '0',
										width: '100%',
										height: '100%',
										zIndex: '-1'
									}} src={require('../../images/section3-map_mob.jpg')} alt=""/>
							</FPGCjsBox>
            </div>
          </div>
          
          <SourceCopy className={scss.sourceCopyMob}>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    'Illustrations by Giacomo Bagnara.',
                }}
              />
            </SourceCopy>

          <div className={classnames(scss['intro-page'], scss['intro-page4'],'activeEl')}>
            <div className={scss['footer-content']}>
              <h1>See how Chevron<br/> is engaged in the natural gas business.</h1>
              <a onClick={this.clickTest}>
                <div className={scss.button}><span>Learn More</span></div>
              </a>
              <img className={scss.logo} src={require('../../images/logo.png')} alt="" />
            </div>
          </div>
        </div>
    );
  }
}
