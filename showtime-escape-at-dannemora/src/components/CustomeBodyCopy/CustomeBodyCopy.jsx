import React from 'react'

import {
	FullBleed,
	BodyCopy
} from 'paidpost-core'

import FPGAnimator from '../../FPGLibrary/FPGAnimator';
import scss from './CustomeBodyCopy.scss'
import classnames from 'classnames'

class CustomeBodyCopy extends React.Component {
	render() {
		const { paragraph,sourceCopy } = this.props;
		return (
			<FullBleed className={classnames('marginTop',scss.marginTop)}>
				<FPGAnimator>
					<BodyCopy >
						<div className={scss.hr}></div>
					</BodyCopy>
					<BodyCopy className={classnames(scss.CustomeBodyCopy,'marginTop')}>
					{paragraph.length > 0? paragraph.map((p,index) => 
						<p key={index + ''} dangerouslySetInnerHTML={{__html: p}} />):null}
						<div className={scss.rule}></div>
						<div className={scss.sourceCopy}>{sourceCopy}</div>
					</BodyCopy>
				</FPGAnimator>
			</FullBleed>
		);
	}
}

export default CustomeBodyCopy;