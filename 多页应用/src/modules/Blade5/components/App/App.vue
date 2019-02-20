<template lang="html">
    <div id="Blade5" class="Blade5" v-if="copyData && configData">

		<!-- Background Start -->
        <Background ref="BackgroundCom"></Background>
		<!-- Background Start -->

		<!-- ChartDesktop Start -->
        <ChartDesktop ref="ChartDesktopCom" :configData="configData" :copyData="copyData" :trackingLabels="trackingLabels"></ChartDesktop>
		<!-- ChartDesktop Start -->

		<!-- ChartMobile Start -->
        <ChartMobile ref="ChartMobileCom" :configData="configData" :copyData="copyData" :trackingLabels="trackingLabels"></ChartMobile>
		<!-- ChartMobile Start -->

		<!-- Legal Start -->
        <Legal :trackingLabels="trackingLabels" ref="LegalCom" :legalData="legalData" v-if="configData.showLegal"></Legal>
		<!-- Legal Start -->
    </div>
</template>

<script type="text/javascript" src="./App.js"></script>
<style lang="scss">
    @import "./App.scss";
</style>
