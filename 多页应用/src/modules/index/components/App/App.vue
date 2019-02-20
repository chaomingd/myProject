<template>
    <div id="app" class="main-story">
        <section v-for="(panel, index) in panels" 
            ref="modulePanels"
            :key="index" 
            :class="['module-container']"
            v-if="panels && panel.visible"
			:data-desktop-double="panel.desktopDoubleHeight"
			:data-mobile-double="panel.mobileDoubleHeight"
        >
            <iframe
                ref="iframePanels"
                scrolling="no"
                frameborder="0"
            	:data-type="panel.type ? panel.type : ''"
				:data-desktop-double="panel.desktopDoubleHeight"
				:data-mobile-double="panel.mobileDoubleHeight"
                :class="['iframe-panel', 'iframe-root-panel']"
                :src="(panel.url)"
                @load="iframeLoaded(index)"
            />
        </section>
		
        <div class="landscape">
            <div class="container">
                <img class="bg" src="../../images/landscape.png">
            </div>
        </div>
    </div>
</template>
<script type="text/javascript" src="./app.js"></script>

<style lang="scss">
    @import "./app.scss";
</style>

