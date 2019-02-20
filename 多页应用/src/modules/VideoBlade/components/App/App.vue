<template>
    <div id="app" :class="['app-container']" ref="app"  v-if="configData">
        <div class="btn-container">
            <div :class="['btn-replay endElement', {active: playState==='ended'}]" v-if="configData.showReplayButton" @click.stop="replayHandler" ref="replayBtn"></div>
            <div class="btn-close active" v-if="configData.showCloseButton" @click.stop="closeHandler"></div>
        </div>
        <template>
            <div :class="['video-box', 'waiting']" ref="videoBox">
                <div class="container" style="position: relative; display: block; max-width: 100%;">
                    <div id="video-container">
                        <video 
							v-if="configData.muteAudio"
                            :id="videoDemoId" 
                            class="video-js" 
                            ref="video"
                            :data-video-id="videoId" 
                            data-account="5226411160001"
                            data-player="default" 
                            data-embed="default" 
                            data-application-id
                            preload="true" playsinline="true" :autoplay="!isShowPlayBtn"
                            style="position: absolute; width: 100%; height: 100%;">
                        </video>
                        <video 
							v-if="!configData.muteAudio"
                            :id="videoDemoId" 
                            class="video-js" 
                            ref="video"
                            :data-video-id="videoId" 
                            data-account="5226411160001"
                            data-player="default" 
                            data-embed="default" 
                            data-application-id
                            preload="true" playsinline="true" :autoplay="!isShowPlayBtn"
                            style="position: absolute; width: 100%; height: 100%;">
                        </video>
						<div :class="['poster-endframe-container', configData.singleVideo ? 'poster-index' : '']">
							<div class="poster">
								<div class="loading-spinner"></div>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </template>
		
       
		<div v-if="configData.showGoToEndButton" class="go-to-end" @click="goToEnd">GO TO END</div>

        <!-- <Legal :class="['legal-box', {active: playState==='ended'}]" :legalData="legalData" :legalTrack="legalTrack" v-if="configData.showLegal"></Legal> -->

		

        <div :class="['playBtn', configData.singleVideo ? 'poster-index' : '', isShowPlayBtn ? 'show': '']" @click="btnPlayHandler" ><img src="../../images/play-btn.png" /></div>

		<!-- <div class="play-stop" @click="playStopVideo"></div> -->
    </div>
</template>

<script type="text/javascript" src="./app.js"></script>

<style lang="scss">
	@import "./app.scss";
</style>