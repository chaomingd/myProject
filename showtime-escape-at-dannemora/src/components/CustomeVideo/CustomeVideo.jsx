import React from 'react'
import {
	VideoMatte,
} from 'paidpost-core'

import scss from './CustomeVideo.scss'
import renditions from './showtime-video'

class CustomeVideo extends React.Component {
	render() {
		return (
			<div>
				<VideoMatte
				className={scss.VideoMatte}
				headline="Watch the trailer"
				duration={130000}
				ratio="1920:1080"
				renditions={renditions}
			poster={require('../../images/53916_1_showtime-escape-dannemora-v1_wg_1080p.jpg')}
			/>
				<div className={scss.videoTitle}>
					<span>Go inside one of America’s most</span> <span>infamous prison escapes.</span>
				</div>
			</div>
		);
	}
}

export default CustomeVideo