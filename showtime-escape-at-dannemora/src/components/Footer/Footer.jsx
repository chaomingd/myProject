import React from 'react'
import {
	FullBleed,
	Picture
} from 'paidpost-core'

import scss from './Footer.scss'

class Footer extends React.Component {
	render() {
		return (
			<FullBleed>
				<a target="_blank" href="http://www.sho.com/order?s_cid=da-dannemora-14284">
					<div className={scss.footer}>
						<Picture src={require('../../images/footer1.png')} />
						<div className={scss.footerLogoContainer}>
							<div className={scss.logo}>
								<Picture src={require('../../images/logo.png')} />
							</div>
							<div className={scss.footerText}>
								Start your <span>free trial now</span>
							</div>
						</div>
					</div>
				</a>
			</FullBleed>
		);
	}
}


export default Footer;