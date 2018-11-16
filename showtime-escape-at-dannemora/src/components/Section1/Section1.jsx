import React from 'react'
import {
	FullBleed,
	BodyCopy
} from 'paidpost-core'

import scss from './Section1.scss'
import classnames from 'classnames'
import FPGResponsiveCjsBox from '../FPGResponsiveCjsBox'

class Section1 extends React.Component {
	componentDidMount() {
		import('./__runtime').then(runtime => {
			runtime.default.call(this)
		})
	}
	render() {
		const { header,paragraph,sign,index,cjsName } = this.props;
		return (
			<FullBleed className={classnames('marginTop',scss.section)} id="section">
				<FullBleed contentClassName={scss.full} withHorizontalPadding={false}>
					<div className={scss.fullImg} ref={el => this.fullImg = el}>
							<div className={classnames(scss.fullImg_T,scss['canvas'+index])} ref={el => this.fullImg_T = el}>
							{cjsName? <FPGResponsiveCjsBox ref={obj => this.cjs = obj}  cjsName={cjsName} />: null}
							</div>
					</div>
					<div className={scss.fullContent} ref={el => this.fullContent = el}>
						<div ref={el => this.title = el} className={classnames(scss.title)}>
							<h1 dangerouslySetInnerHTML={{__html: header.title}}></h1>
						</div>
						<div ref={el => this.subTextBox = el} className={classnames(scss.subTextBox,scss['subTextBox' + index])}>
							<div ref={el => this.subTextAni = el} className={scss.subText_inner}>
								<div className={scss.subText_inner_box} dangerouslySetInnerHTML={{__html: header.subText}}></div>
							</div>
						</div>	
					</div>
				</FullBleed>
				{
					paragraph.length > 0?
					<BodyCopy 
					className={classnames('marginTop',scss.BodyCopy,scss[sign])}>
						{
							paragraph.map((p,index) => {
								if(index === 0) {
									return<p className={scss.firstCopy} key={index + ''} dangerouslySetInnerHTML={{__html: p}} />
								}
								return <p key={index + ''} dangerouslySetInnerHTML={{__html: p}} />
							})
						}
					</BodyCopy>:null
				}
			</FullBleed>
		);
	}
}


export default Section1;