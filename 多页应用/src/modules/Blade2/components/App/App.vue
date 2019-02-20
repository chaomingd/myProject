<template>
    <div id="Blade2" class="Blade2" ref="Blade2" v-if="configData !== null && copyData !== null ">
		<div class="bg"></div>

		<div class="container">
			<div class="left-box">
				<p class="headline" v-html="copyData.leftInfo.headLine"></p>
				<div class="preload chip"><img src="./../../images/chip.png" /></div>
			</div>

			<div class="right-box">
				<div :class="['text-box', `text-box${index+1}`]" v-for="(data, index) in copyData.rightInfo" :key="index">
					<div class="number-box">
						<div class="number-svg">
							<p class="number" v-html="data.number"></p>
							<svg class="svg-box">
								<defs>
									<pattern id="pattern-image" x="0" y="0" width="100%" height="100%">
										<image class="fill-image" xlink:href="./../../images/color.jpg" x="-15%" y="0%" width="165%" height="165%"></image>
									</pattern>
								</defs>
								<text x="0%" y="0%" class="text2">
									<tspan text-anchor="middle" x="50%" y="80%">{{data.number}}</tspan>
								</text>
							</svg>
						</div>
						<div class="preload light"><img :src="require(`./../../images/light${index + 1}.png`)" /></div>
						<div class="preload light"><img :src="require(`./../../images/light${index + 1}.png`)" /></div>
						<p class="up-to" v-html="data.upTo"></p>
					</div>
					<p class="title" v-html="data.title"></p>
				</div>
			</div>

		</div>
		<!-- Legal Start -->
        <Legal ref="LegalCom" :legalData="legalData" v-if="configData.showLegal"></Legal>
		<!-- Legal Start -->

    </div>
</template>

<script type="text/javascript" src="./app.js"></script>

<style lang="scss">
    @import "./app.scss";
</style>