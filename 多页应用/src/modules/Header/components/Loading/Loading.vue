<template>
	<div class="loading-mask">
		<div class="loading-bar-wrapper">
			<div class="loading-bar">
				<div
					class="loading-bar-inner"
					:style="{
						width: barWidth,
					}"
				>
					<div class="loading-bar-inner-bar" />
				</div>
				<div class="loading-bar-text">{{percentage}}</div>
			</div>
		</div>

		<!-- ImageLoad Start -->
		<div class="loading-img" v-show="false">
			<div class="preload"><img src="../../images/bg-mobile.jpg"/></div>
			<div class="preload"><img src="../../images/bg.jpg"/></div>
			<div class="preload"><img src="../../images/chip.png"/></div>
			<div class="preload"><img src="../../images/header-mob.jpg"/></div>
			<div class="preload"><img src="../../images/header.jpg"/></div>
			<div class="preload"><img src="../../images/light.png"/></div>
			<div class="preload"><img src="../../images/loading-bar-left.png"/></div>
			<div class="preload"><img src="../../images/loading-bar-right.png"/></div>
			<div class="preload"><img src="../../images/logo_retailer.png"/></div>
		</div>
		<!-- ImageLoad End -->
	</div>


</template>


<script type="text/javascript" src="./Loading.js"></script>

<style lang="scss">
@import "./Loading.scss";
</style>
