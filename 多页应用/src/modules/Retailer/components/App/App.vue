<template>
    <div id="Retailer" class="Retailer" v-if="configData">
		<!-- ImageBg Start -->
        <ImageBg ref="ImageBgCom" :showLink="configData.showLink" :link="configData.link"></ImageBg>
		<!-- ImageBg Start -->

		<!-- Legal Start -->
        <Legal ref="LegalCom" :legalData="legalData" v-if="configData.showLegal"></Legal>
		<!-- Legal Start -->
    </div>
</template>
<script type="text/javascript" src="./app.js"></script>
<style lang="scss">
    @import "./app.scss";
</style>