<template>
	<div id="ImageBg" class="ImageBg" @click.stop="panelClickHandler">
		<div class="preload bg"><img src="./../../images/bg.jpg" /></div>
		<div class="preload bg-mob"><img src="./../../images/bg_mob.jpg" /></div>
		<div class="preload bg-rtl"><img src="./../../images/bg_rtl.jpg" /></div>
	</div>
</template>
<script type="text/javascript" src="./ImageBg.js"></script>
<style lang="scss">
    @import "./ImageBg.scss";
</style>