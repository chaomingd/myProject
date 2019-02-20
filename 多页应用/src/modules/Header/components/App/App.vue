<template>
    <div id="Header" class="Header" ref="Header" v-if="configData !== null && copyData !== null ">
		<div class="bg"></div>
		<div class="text-container">
			<div class="preload light"><img src="./../../images/light.png" /></div>
			<CjsAnim class="animate" ref="Computer"></CjsAnim>
			<div class="preload chip-box">
				<div class="preload"><img src="./../../images/chip.png" /></div>
			</div>

			<div class="text-box1">
				<p class="headline1" v-html="copyData.headLine1"></p>
				<p class="headline2" v-html="copyData.headLine2"></p>
			</div>

			<div class="text-box2">
				<p class="up-to" v-html="copyData.upTo"></p>
				<div class="title-box">
					<p class="title" v-html="copyData.title"></p>
					<p class="sub-text" v-html="copyData.subText"></p>
				</div>
				<p class="desc" v-html="copyData.desc"></p>
			</div>

        	<div class="preload logo-retailer" v-if="configData.showRetailerLogo"><img :src="require(`../../images/${configData.retailerLogoImage}`)" /></div>
		</div>


		<!-- Legal Start -->
        <Legal ref="LegalCom" :legalData="legalData" v-if="configData.showLegal"></Legal>
		<!-- Legal Start -->

		<!-- Loading Start -->
		<Loading ref="LoadingCom" :class="[{hidden: allImageLoaded}]" :allImageLoaded="allImageLoaded"></Loading>
		<!-- Loading Start -->

    </div>
</template>

<script type="text/javascript" src="./app.js"></script>

<style lang="scss">
    @import "./app.scss";
</style>