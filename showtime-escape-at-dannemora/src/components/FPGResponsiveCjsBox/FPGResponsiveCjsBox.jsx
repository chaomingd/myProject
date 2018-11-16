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
		this.updateCjsName = this.updateCjsName.bind(this);
		this.getAni = this.getAni.bind(this);
	}
	componentWillUnmount() {
		window.removeEventListener('resize',this.resize);
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.cjsName === this.props.cjsName){
			return;
		}
		if(!this.loaded) return;
		this.updateCjsName();
	}
	componentDidMount() {
		this.loaded = true;
		this.updateCjsName();
		
		window.addEventListener('resize',this.resize)
	}
	getAni(aniObj) {
		this.aniObj = aniObj;
	}
	updateCjsName() {
		const { cjsName } = this.props;
		if(!cjsName) return;
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
			this.breakPoints = breakPoints;
			this.setCjsName(breakPoints);
		}
	}
	trimAndToNum(arr) {
		arr = arr.map(str => {
			return Number(str.trim());
		});
		return arr;
	}
	resize() {
		if(!this.props.cjsName) return;
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
		const { cjsName ,...passThroughProps} = this.props;
		return (
			<FPGCjsBox getAni={this.getAni} cjsName={this.state.cjsName} {...passThroughProps} />
		);
	}
}

export default FPGResponsiveCjsBox;