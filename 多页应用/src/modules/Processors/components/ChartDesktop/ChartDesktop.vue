<template lang="html">
    <div id="ChartDesktop" class="ChartDesktop" v-if="copyData && configData">
		
		<div class="content-box">
			<div class="left-box">
				<div class="chip-box">
					<div class="title-chip">
						<div class="title-box">
							<p v-html="copyData.leftSideInfo.chartsInfo.header"></p>
						</div>
						<div class="chip-content">
							<div class="chip-text" v-for="(data, index) in configData.leftSideInfo.chartsInfo.chipInfo" :key="index">
								<div class="preload chip">
									<img :src="require(`./../../images/${configData.leftSideInfo.chartsInfo.chipInfo[index].chipImage}`)" />
									<div class="preload light-box"><img class="light" src='./../../images/light.png' /></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="compare-box">
					<ul>
						<li v-for="(data, index) in copyData.leftSideInfo.chartsInfo.features" :key="index">
							<div class="desc-left">
								<p class="header" v-html="data.header"></p>
								<p class="desc" v-html="data.desc"></p>
							</div>
							<div class="chooice-box">
								<div v-for="dataOpt in configData.leftSideInfo.chartsInfo.features[index].options" :class="['preload', 'hook', dataOpt === 1 ? 'active': 'hide']"><img src="./../../images/hook.svg" /></div>
							</div>
						</li>
					</ul>
				</div>
				<div class="desc-box">
					<div class="space-box"></div>
					<div class="desc-content">
						<div class="desc" v-for="data in copyData.leftSideInfo.chartsInfo.chipSpecs"><p v-html="data"></p></div>
					</div>
				</div>
			</div>
			<div class="right-box">
				<div class="preload line"><img src='./../../images/line.jpg' /></div>
				<div class="container-box">
					<p class="headline" v-html="copyData.rightSideInfo.headLine"></p>
					<div class="subline-box">
						<p class="subline" v-html="copyData.rightSideInfo.subLine"></p>
						<p class="desc" v-for="(data, index) in copyData.rightSideInfo.desc" v-html="data"></p>
					</div>
				</div>
			</div>
		</div>

    </div>
</template>

<script type="text/javascript" src="./ChartDesktop.js"></script>
<style lang="scss">
    @import "./ChartDesktop.scss";
</style>
