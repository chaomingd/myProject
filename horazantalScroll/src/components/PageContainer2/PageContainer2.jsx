import React from 'react';

// import PropTypes from 'prop-types';
import scss from './PageContainer2.scss';
import classnames from 'classnames';
import TitleBoxWidthContent from '../TitleBoxWidthContent';
import CustomBodyCopy from '../CustomBodyCopy';
import Data from '../Data/data';
import TitleBox from '../TitleBox';
import arrow from '!raw-loader!./arrow.svg';
import FPGCjsBox from '../../FPGLibrary/FPGCjsBox'

const section2Data = Data.section2Data;


export default class PageContainer2 extends React.Component {
  render() {
    this.children = [];
    return (
      <div
        className={classnames(scss.PageContainer2, this.props.swiperClass, 'swiper-slide')}
      >
        
        {/* p1 */}
          <div className={classnames(scss['intro-page'], scss['intro-page1'])}>
            <div className={classnames(scss.nacigationMob)}>
              <span>Emissions</span>
            </div>
            <div className={classnames(scss.nacigationMob, scss.prevNav)}>
              <span>INNOVATION</span>
            </div>
            <CustomBodyCopy className="section2-observeraEle" index="2" title={section2Data.text1} text={section2Data.text2} />
            <div className={classnames(scss['page1-anims-container'])}>
            <FPGCjsBox cjsName="chartLineGreen" className={classnames(scss['show-desktop'],'activeEl')} />
            <FPGCjsBox cjsName="chartLineGreen_M" className={classnames(scss['show-mobile'])} />
              <TitleBox Textindex={2} className={scss.titleBox} title="LOWER CARBON INTENSITY" text="METRIC TONS OF CO<sub>2</sub> EMISSIONS PER $ MILLION OF GDP, INFLATION ADJUSTED, 1949-2017<sup>28</sup>" />
            </div>
            <div className={classnames(scss['page1-graphicBox'])}>
              <TitleBoxWidthContent
                className={scss.graphic}
                index={2}
                contentClassName={scss.color}
                title="CO<sub>2</sub> DECLINE"
                number="–14.2%"
                text2="DECLINE IN U.S. ENERGY-RELATED CO<sub>2</sub> EMISSIONS, LED BY NATURAL GAS, 2005-2017<sup>29</sup>"
              />
              <div className={scss['page1-bg2']}>
                <img src={require('../../images/section2-house.png')} alt="" />
              </div>
            </div>
          </div>
          {/* p2 */}
          <div className={classnames(scss['intro-page'], scss['intro-page2'])} ref={el => {if(el) this.children.push(el)}}>
            <CustomBodyCopy index="2" title={section2Data.text3} text={section2Data.text4} />
            <div className={classnames(scss['page2-anims-container'])}>
              <FPGCjsBox cjsName="1" className={classnames(scss['show-desktop'],'activeEl')}  />
              <FPGCjsBox cjsName="RectGreen_m" className={classnames(scss['show-mobile'])}/>
              <TitleBox index="2" Textindex={2} className={scss.titleBox2} title="GROWING GAS<br /> & RENEWABLES" text="ELECTRICITY GENERATION BY SOURCE, 2008 VS 2017<sup>32</sup>" />
            </div>
          </div>
          {/* p3 */}
          <div className={classnames(scss['intro-page'], scss['intro-page3'])} ref={el => {if(el) this.children.push(el)}}>
            <CustomBodyCopy className="section2-observeraEle" index={2} title={section2Data.text5} text={section2Data.text6} />
            <FPGCjsBox cjsName="5" className={classnames(scss['page3-bg'],'activeEl')} />
            <div className={scss['page3-graphicBox']}>
              <TitleBoxWidthContent
                className={scss.graphic}
                index="2"
                contentClassName={scss.color}
                title="UP & AWAY"
                number="+123%"
                text2="INCREASE IN U.S. GDP PRODUCED PER UNIT OF ENERGY, 1978-2017<sup>35</sup> "
              />
            </div>
            <div className={scss['next-bar']}>
              <span dangerouslySetInnerHTML={{ __html: arrow }} />
            </div>
          </div>
        </div>
    );
  }
}
