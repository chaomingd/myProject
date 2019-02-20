<template lang="html">
    <div id="ChartMobile" class="ChartMobile">
		<p class="headline" v-html="copyData.headLine"></p>
		<swiper class="swiper-container" :options="swiperOption" ref="swiperObj">
			<swiper-slide :class="['swiper-slider', `swiper-slider${index+1}`]" v-for="(data, index) in copyData.listInfo" :key="index">
				<div class="content-box">
					<div class="icon-box">
						<div class="icon"><img :src="require(`./../../images/icon${index + 1}.png`)" /></div>
						<CjsAnim class="animate" :ref="`Icon${index+1}`"></CjsAnim>
					</div>
					<p class="sub-headLine" v-html="copyData.listInfo[index].subHeadLine"></p>
					<p class="sub-text" v-html="copyData.listInfo[index].subText"></p>
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
