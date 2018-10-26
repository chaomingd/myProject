import React from 'react'

import FPGCjsBox from './FPGCjsBox'

class FPGResponsiveCjsBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cjsName: undefined,
		}
		this.setCjsName = this.setCjsName.bind(this);
		this.resize = this.resize.bind(this);
		this.trimAndToNum = this.trimAndToNum.bind(this);
	}
	componentWillUnmount() {
		window.removeEventListener('resize',this.resize);
	}
	componentDidMount() {
		const { cjsName } = this.props;
		if(typeof cjsName === 'string'){
			this.setState({
				cjsName,
			})
			return;
		}
		let breakPoints;
		if(typeof cjsName === 'object' && !!cjsName){
			breakPoints = Object.keys(cjsName)
			breakPoints.forEach((breakPoint,index) => {
				breakPoints[index] = this.trimAndToNum(breakPoint.split('~'));
			});
		}
		this.breakPoints = breakPoints;
		this.setCjsName(breakPoints);
		window.addEventListener('resize',this.resize)
	}
	trimAndToNum(arr) {
		arr = arr.map(str => {
			return Number(str.trim());
		});
		return arr;
	}
	resize() {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.setCjsName(this.breakPoints)
		},100);
	}
	setCjsName(breakPoints) {
		const { cjsName } = this.props;
		const cjsNames = Object.values(cjsName)
		let realCjsName;
		for(let i = 0;i < breakPoints.length; i ++) {
			if(window.innerWidth >= breakPoints[i][0] && window.innerWidth < breakPoints[i][1]){
				realCjsName = cjsNames[i];
				break;
			}
			if(breakPoints[i][1] === 0) {
				realCjsName = cjsNames[cjsNames.length - 1];
			}
		}
		this.setState({
			cjsName: realCjsName
		});
	}
	render() {
		return (
			<FPGCjsBox cjsName={this.state.cjsName} />
		);
	}
}

export default FPGResponsiveCjsBox;