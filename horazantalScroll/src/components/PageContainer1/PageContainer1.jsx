import React from 'react';
import scss from './PageContainer1.scss';
import classnames from 'classnames';
import TitleBoxWidthContent from '../TitleBoxWidthContent';
import CustomBodyCopy from '../CustomBodyCopy';
import TitleBox from '../TitleBox';
import Data from '../Data/data';
import FPGCjsBox from '../../FPGLibrary/FPGCjsBox'
import arrow from '!raw-loader!./arrow.svg';
const section1Data = Data.section1Data;
export default class PageContainer1 extends React.Component {
  render() {
    this.children = [];
    return (
      <div
        className={classnames(scss.PageContainer1)}
      >
        {/* p1 */}
          <div className={classnames(scss['intro-page'], scss['intro-page1'])}>
            <div className={classnames(scss.nacigationMob)}>
              <span>INNOVATION</span>
            </div>
            <CustomBodyCopy  index={1} title={section1Data.text1} text={section1Data.text2} />
            <div className={classnames(scss['page1-anims-container'])}>
              <FPGCjsBox cjsName="charLine" className={classnames(scss['show-desktop'],'activeEl')} ></FPGCjsBox>
              <FPGCjsBox cjsName="charLine_M" className={classnames(scss['show-mobile'])} ></FPGCjsBox>
              <TitleBox className={scss.titleBox} title="NATURAL GAS RESURGENCE" text="U.S. NATURAL GAS<br/>PRODUCTION BY YEAR, 1977-2017, TRILLION CUBIC FEET<sup>15</sup>" />
            </div>
          </div>
          {/* p2 */}
          <div className={classnames(scss['intro-page'], scss['intro-page2'])}>
            <CustomBodyCopy index="1" title={section1Data.text3} text={section1Data.text4} />
            <FPGCjsBox cjsName="people" className={classnames(scss['page2-bg'],'activeEl')}></FPGCjsBox>
            <div className={scss['page2-graphicBox']}>
              <TitleBoxWidthContent
                className={scss.graphic}
                contentClassName={scss.grapClass}
                index={1}
                title="ENERGY JOBS"
                number="10.3"
                text1="Million"
                text2="U.S. JOBS SUPPORTED BY THE NATURAL GAS AND OIL INDUSTRY<sup>18</sup> "
              />
              <TitleBoxWidthContent
                index={1}
                className={scss.graphic2}
                contentClassName={scss.grapClass2}
                title="SIGNIFICANT SAVINGS"
                number="$655"
                text2="ESTIMATED ANNUAL SAVINGS PER HOUSEHOLD FROM RISING USE OF NATURAL GAS BY 2040<sup>19</sup>"
              />
            </div>
          </div>
          {/* p3 */}
          <div className={classnames(scss['intro-page'], scss['intro-page3'])}>
            <CustomBodyCopy index="1" title={section1Data.text5} text={section1Data.text6} />
            <div className={classnames(scss['page3-anims-container'])}>
              <FPGCjsBox cjsName="chartRect" className={classnames(scss['show-desktop'],'activeEl')} />
              <FPGCjsBox cjsName="chartRect_M" className={classnames(scss['show-mobile'])} />
              <TitleBox index="2" className={scss.titleBox3} title="WHERE WE<br/> USE IT" text="U.S. NATURAL GAS CONSUMPTION BY SECTOR, 2017<sup>22</sup>" />
            </div>
            <div className={scss['next-bar']}>
              <span dangerouslySetInnerHTML={{ __html: arrow }} />
            </div>
          </div>
        </div>
    );
  }
}
