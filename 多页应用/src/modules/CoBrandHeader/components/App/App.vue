<template>
    <div id="CoBrandHeader" class="CoBrandHeader" ref="CoBrandHeader" v-if="configData !== null && copyData !== null ">
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
					<p class="desc" v-html="copyData.desc"></p>
				</div>
			</div>

			<div class="text-box3">
				<div class="left-box">
					<p class="starting-at" v-html="copyData.startingAt"></p>
					<p class="price" v-html="copyData.price"></p>
					<p class="product-name" v-html="copyData.productName"></p>
				</div>
				<div class="right-box">
					<p class="sub-line" v-html="copyData.productName"></p>
					<p class="sub-text" v-html="copyData.productDesc"></p>
				</div>
			</div>
        	<div class="preload logo-retailer" v-if="configData.showPartnerLogo"><img :src="require(`../../images/${configData.partnerLogoImage}`)" /></div>
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