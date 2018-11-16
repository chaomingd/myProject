import React from 'react'
import {
	FullBleed,
	BodyCopy,
	Picture,
	breakpoints
} from 'paidpost-core'

import scss from './Intro.scss'
import classnames from 'classnames'
import FPGResponsiveCjsBox from '../FPGResponsiveCjsBox'

class Intro extends React.Component {
	constructor(props) {
		super(props)
		this.loaded = this.loaded.bind(this);
	}
	componentDidMount() {
		import('./__runtime').then(runtime => {
			runtime.default.call(this);
		})
	}
	loaded() {
		document.getElementById('mask').style.opacity = '0';
		setTimeout(() => {
			document.getElementById('mask').style.display = 'none'
		}, 500)
	}
	render() {
		const { header, paragraph, cjsName } = this.props;
		if (!header) return null;
		return (
			<FullBleed>
				<FullBleed
					withHorizontalPadding={false}
					contentClassName={scss.Intro}
					id="intro"
					className={classnames(scss.headerIntro)}>
					<div className={scss.headerImg} ref={el => this.headerImg = el}>
						<div className={scss.headerImg_inner}>
							{cjsName ? <FPGResponsiveCjsBox ref={obj => this.cjs = obj} loaded={this.loaded} cjsName={cjsName} autoPlay /> : null}
						</div>
					</div>
					<div className={scss.headerBox} ref={el => this.headerBox = el}>
						<header className={classnames(scss.header)} ref={el => this.header = el}>
							<div  className={scss.header_inner} ref={el => this.header_inner = el}>
								<div className={scss.headerTitle} ref={el => this.title = el}>
									<h1 className={scss.showRegular} dangerouslySetInnerHTML={{ __html: header.title }}></h1>
									<h1 className={scss.showCompact} dangerouslySetInnerHTML={{ __html: header.compactTitle }}></h1>
								</div>
								<div className={scss.headersubTitle} ref={el => this.subTitle = el}>
									<h2 className={scss.showRegular} dangerouslySetInnerHTML={{ __html: header.subTitle }}></h2>
									<h2 className={scss.showCompact} dangerouslySetInnerHTML={{ __html: header.compactSubTitle }}></h2>
								</div>
								<div ref={el => this.icon = el} className={classnames(scss.icon, scss.showRegular)}>
									<img src={require('../../images/arrow.png')} alt="" />
								</div>
							</div>
						</header>
					</div>
				</FullBleed>
				{
					paragraph.length > 0 ?
						<BodyCopy className={classnames('marginTop', scss.BodyCopy)}>
							{
								paragraph.map((p, index) => {
									if (index === 0) {
										return <p key="0" className={scss.firstP} dangerouslySetInnerHTML={{ __html: p }} />
									}
									return <p dangerouslySetInnerHTML={{ __html: p }} key={index + ''} />
								})
							}
						</BodyCopy> : null
				}
			</FullBleed>
		);
	}
}

export default Intro;