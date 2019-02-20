<template lang="html">
    <div id="ChartMobile" class="ChartMobile">
		<swiper class="swiper-container" :options="swiperOption" ref="swiperObj">
			<swiper-slide class="swiper-slider1">
				<p class="title" v-html="copyData.leftSideInfo.chartsInfo.header"></p>
				<ul>
					<li v-for="data in copyData.leftSideInfo.chartsInfo.features">
						<div class="desc-left">
							<p class="header" v-html="data.header"></p>
							<p class="desc" v-html="data.desc"></p>
						</div>
					</li>
				</ul>
			</swiper-slide>
			<swiper-slide class="swiper-slider2">
				<div :class="['chip-content']">
					<div class="chip-text" v-for="(data, index) in configData.leftSideInfo.chartsInfo.chipInfo" :key="index">
						<div class="preload chip">
							<img :src="require(`./../../images/${configData.leftSideInfo.chartsInfo.chipInfo[index].chipImage}`)" />
							<div class="preload light-box"><img class="light" src='./../../images/light.png' /></div>
						</div>
					</div>
				</div>
				<ul>
					<li v-for="(data, index) in copyData.leftSideInfo.chartsInfo.features">
						<div v-for="dataOpt in configData.leftSideInfo.chartsInfo.features[index].options" :class="['preload', 'hook', dataOpt === 1 ? 'active': 'hide']"><img src="./../../images/hook.svg" /></div>
					</li>
				</ul>
				<div class="desc-content">
					<div class="desc" v-for="data in copyData.leftSideInfo.chartsInfo.chipSpecs"><p v-html="data"></p></div>
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slider3">
				<div class="preload line"><img src='./../../images/line.jpg' /></div>
				<div class="container-box">
					<p class="headline" v-html="copyData.rightSideInfo.headLine"></p>
					<div class="subline-box">
						<p class="subline" v-html="copyData.rightSideInfo.subLine"></p>
						<p class="desc" v-for="(data, index) in copyData.rightSideInfo.desc" v-html="data"></p>
					</div>
				</div>
			</swiper-slide>
			<div class="arrow-btn swiper-button-prev swiper-button-black" slot="button-prev" @click="showTrack(0)">
				<div class="normal"><img src="./../../images/yellow-left-arrow.jpg"></div>
				<div class="hover"><img src="./../../images/yellow-left-arrow-hover.jpg"></div>
			</div>
			<div class="arrow-btn swiper-button-next swiper-button-black" slot="button-next" @click="showTrack(1)">
				<div class="normal"><img src="./../../images/yellow-left-arrow.jpg"></div>
				<div class="hover"><img src="./../../images/yellow-left-arrow-hover.jpg"></div>
			</div>

			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
    </div>
</template>

<script type="text/javascript" src="./ChartMobile.js"></script>
<style lang="scss">
    @import "./ChartMobile.scss";
</style>
