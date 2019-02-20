<template lang="html">
    <div id="ChartDesktop" class="ChartDesktop" v-if="copyData && configData">
		
		<div class="content-box">
			<p class="headline" v-html="copyData.headLine"></p>
			<ul class="icon-ul">
				<li ref="iconLis" :class="['box', `box${index+1}`]" v-for="(data, index) in copyData.listInfo">
					<div class="icon-box">
						<div class="icon"><img :src="require(`./../../images/icon${index + 1}.png`)" /></div>
						<CjsAnim class="animate" :ref="`Icon${index+1}`"></CjsAnim>
					</div>
				</li>
			</ul>
			<ul class="text-ul">
				<li ref="textLis" :class="['box', `box${index+1}`]" v-for="(data, index) in copyData.listInfo">
					<p class="sub-headLine" v-html="copyData.listInfo[index].subHeadLine"></p>
					<p class="sub-text" v-html="copyData.listInfo[index].subText"></p>
				</li>
			</ul>
		</div>

    </div>
</template>

<script type="text/javascript" src="./ChartDesktop.js"></script>
<style lang="scss">
    @import "./ChartDesktop.scss";
</style>
