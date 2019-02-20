import axios from 'axios';

/* Notes Start */
import Notes from '../Notes/Notes.vue';
/* Notes End */

const MAX_WIDTH = 1464;
const BREAKPOINT = 767;
const VIDEO_WIDTH = platform.isMobile ? 414 : 1200;
const VIDEO_HEIGHT = platform.isMobile ? 600 : 600;
const VIDEO_RATIO = VIDEO_WIDTH / VIDEO_HEIGHT;

const isLocalVideo = false;
const version = 'V4';
const panelName = 'VideoBlade';
export default {
    name: 'App',
    created() {
        axios.get(require('../../data/config.txt')).then(response => {
			if (typeof response.data === 'string'){
				throw new Error(`there are some errors in ${response.request.responseURL}`);
			}
			this.configData = response.data;
			this.legalTrack = this.configData.trackingLabels;
			window.moduleName = this.configData.moduleName;
            
            if (platform.isMobile && !platform.isNexus7 && !platform.isTablet) {
                this.videoId = this.configData.videoData.mobile;
            } else {
                this.videoId = this.configData.videoData.desktop;
            }
            this.$nextTick(function () {
                setTimeout(() => {
                    this.dataLoaded = true;
                    this.initApp();
                });
            });
            
        }).catch(error => {
            console.error(error);
        });
    },
    data() {
        return {
			configData: null,
            copyData: null,
            videoId: '',
            videoDemoId: 'video',
            dataLoaded: false,
            mounted: false,
            playState: 'pause',
            legalData: null,
            legalTrack: null,
            isShowPlayBtn: false,
            isUpdate: false,
			playTimer: null,
			onceClickFlag: false,
			isFrameClick: false,
            playStopFlag: true,
            clearLoadTimeId: null,
        };
    },
    mounted() {
        this.$nextTick(function () {
            setTimeout(() => {
                this.mounted = true;
                this.initApp();
            });
        });
        window.addEventListener('message', this.messageHandler);
    },
    methods: {
        initApp(){
			const self = this;
			if (!this.mounted || !this.dataLoaded) return;
            this.outPutVersion();
			if (window.parent === window){
				$('html').addClass('alone-pre');
			}
			this.resizeWeb();
			this.resizeWeb();
			
			if (platform.isNexus7 || platform.isTablet){
				$('html').removeClass('mobile');
			}
			
			if (this.configData.singleVideo || platform.isIos9){
				this.isShowPlayBtn = true;
			} else {
				if (this.configData.muteAudio){
					if (platform.isUc && platform.isMobile || (platform.isSamsungNative && !platform.isAndroid7Plus)){
						this.isShowPlayBtn = true;
					} else {
						this.isShowPlayBtn = false;
					}
				} else {
					if (window.parent === window){
						if ((platform.isMac && platform.isDesktop && platform.isChrome) || (platform.isMac && platform.isDesktop && platform.isSafari) || (platform.isIE11 && platform.isWin7) || (platform.isChrome && platform.isWin7) || !platform.isDesktop){
							this.isShowPlayBtn = true;
						} else {
							this.isShowPlayBtn = false;
						}
					} else {
						if ((platform.isMac && platform.isDesktop && platform.isChrome) || platform.isSafari || platform.isIOS || platform.isUc || platform.isSamsungNative || (platform.isIE11 && platform.isWin7)){
							this.isShowPlayBtn = true;
						} else {
							this.isShowPlayBtn = false;
						}
					}
				}
			}

			$(window).on('load', function () {
                self.initVideo();
            });
			
            $(window).on('resize', function () {
                self.resizeWeb();
            });
        },
        outPutVersion() {
            console.log(`${panelName} version: ${version}`);
        },
        messageHandler(e){
            const type = e.data.type;
            if (type === 'hasScrollBar') {
                if (e.data.value){
                    $('html').addClass('hasScrollBar');
                    $('html').removeClass('noScrollBar');
                } else {
                    $('html').addClass('noScrollBar');
                    $('html').removeClass('hasScrollBar');
                }
            } else if (type === 'desktopDouble') {
				if (e.data.value) $('html').addClass('hasDesktopDouble');
            } else if (type === 'mobileDouble') {
                if (e.data.value) $('html').addClass('hasMobileDouble');
            } else if (type === 'rtl') {
                if (e.data.value){
                    $('html').addClass('rtl');
                }
            } else if (type === 'play') {
				this.isFrameClick = true;
                if (platform.isMac && platform.isDesktop && platform.isChrome) this.replayVideo();
				if (!this.isShowPlayBtn){
					platform.isSamsungNative ? this.playVideo() : this.replayVideo();
				} else {
					if (this.onceClickFlag){
						platform.isSamsungNative ? this.playVideo() : this.replayVideo();
					}
				}
            } else if (type === 'pause') {
                this.pauseVideo();
            } else if (type === 'replay') {
                this.replayVideo();
            } else if (type === 'seek') {
                console.log('===');
            } else if (type === 'reset') {
                clearInterval(this.playTimer);
                this.pauseVideo();
                setTimeout(() => {
                    if (!platform.isSamsungNative) {
                        if (this.tl && this.tl.time) this.tl.time(0);
                        if (this.tl && this.tl.pause) this.tl.pause();
                        this.seekVideo(0);
                        this.pauseVideo();
						this.resetAnim();
                    }
                }, 250);
            }
        },
        initVideo(){
            if (!isLocalVideo) {
                const script = document.createElement('script');
                script.className = 'video-js-self';
                if (script.readyState) {
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.videoScriptLoaded();
                        }
                    };
                } else {
                    script.onload = () => {
                        this.videoScriptLoaded();
                    };
                }
                script.src = '//players.brightcove.net/5226411160001/default_default/index.min.js';
                document.body.appendChild(script);
            } else {
                // $(`#${this.videoDemoId}`)[0].src = platform.isMobile ? require('../../video-source/videoM-less.mp4') : require('../../video-source/video-less.mp4');
                this.videoScriptLoaded();
            }
        },
       
        videoScriptLoaded(){
            const self = this;

            if (!isLocalVideo) {
                self.myPlayer = window.videojs(this.videoDemoId);
            } else {
                self.videoContainer = self.myPlayer = $(`#${self.videoDemoId}`);
                self.myPlayer.currentTime = function(num) {
                    if (num || num === 0) {
						if (self.myPlayer[0].currentTime){
							self.myPlayer[0].currentTime = num;
						}
                    } else {
						if (self.myPlayer[0].currentTime){
							return self.myPlayer[0].currentTime;
						}
                    }
                };
                self.myPlayer.play = function(num) {
                    self.myPlayer[0].play();
                };
                self.myPlayer.pause = function(num) {
                    self.myPlayer[0].pause();
                };
				self.myPlayer.duration = function(){
					return self.myPlayer[0].duration;
				};
            }

            // self.myPlayer = window.videojs(this.videoDemoId);
            self.myPlayer.on('ready', function(){
                self.videoContainer = $(`#${self.videoDemoId}`);
				if (self.onceClickFlag) self.playVideo();
            }).on('ended', function(){
				$('.go-to-end').hide();
				self.playState = 'ended';
                window.parent.postMessage({
                    type: 'ended',
                }, '*');
                console.log('ended`');
                
                clearTimeout(self.clearLoadTimeId);
                if (self.$refs && self.$refs.videoBox) self.$refs.videoBox.classList.remove('waiting');

            }).on('timeupdate', function(){
                if (self.playState !== 'play'){
                    self.playState = 'play';
                }
                clearTimeout(self.clearLoadTimeId);
                if (self.$refs && self.$refs.videoBox) self.$refs.videoBox.classList.remove('waiting');
                if (self.myPlayer.currentTime() < self.myPlayer.duration() - 2) {
                    self.clearLoadTimeId = setTimeout(() => {
                        if (self.$refs && self.$refs.videoBox) self.$refs.videoBox.classList.add('waiting');
                    }, 500);
                }
                // self.myPlayer.off('timeupdate');
			}).on('posterchange', function() {
                const posterUrl = self.myPlayer.poster();
                const img = new Image();
                img.src = posterUrl;
                img.onload = function() {
                    // $('.playBtn')[0].style.backgroundImage = `url(${posterUrl})`;
                };
                img.onerror = function() {
                    console.log('poster error===>>');
                };
            });
		},
		playStopVideo(){
			if (this.playStopFlag){
				this.myPlayer.pause();
			} else {
				this.myPlayer.play();
			}
			this.playStopFlag = !this.playStopFlag;
		},
        upDateTlTime() {
            
            if (this.myPlayer && this.myPlayer.currentTime()){
                console.log('=====');
                
                const vidCurrentTime = this.myPlayer.currentTime();
                if (this.tl && this.tl.time) this.tl.time(vidCurrentTime);
                if (this.playState === 'play') requestAnimationFrame(this.upDateTlTime);
            }
        },
        
        playVideo(){
            const isUpdata = this.playState !== 'play';
            if (this.$refs && this.$refs.videoBox) this.$refs.videoBox.classList.add('waiting');
			// TweenMax.to('.playBtn', 0.1, {autoAlpha: 0});
			TweenMax.set('.playBtn', {autoAlpha: 0});
            clearInterval(this.playTimer);
            this.playTimer = setInterval(() => {
                if (this.myPlayer && this.myPlayer.play){
                    this.myPlayer.play();
                    this.playState = 'play';
                    // if (isUpdata) this.upDateTlTime();
                    clearInterval(this.playTimer);
                }
            }, 100);
        },
        pauseVideo(){
            if (this.myPlayer && this.myPlayer.pause){
                this.myPlayer.pause();
                this.playState = 'pause';
            }
        },
        seekVideo(time){
            if (this.myPlayer && this.myPlayer.currentTime){
                this.myPlayer.currentTime(time);
            }
        },
        replayVideo(){
            const isUpdata = this.playState !== 'play';
            if (this.$refs && this.$refs.videoBox) this.$refs.videoBox.classList.add('waiting');
			// TweenMax.to('.playBtn', 0.1, {autoAlpha: 0});
			TweenMax.set('.playBtn', {autoAlpha: 0});

            this.resetAnim();
            if (this.myPlayer){
                this.myPlayer.currentTime(0);
                try {
                    this.myPlayer.play();
					this.playState = 'play';
                } catch (e) {

                }
            }
            // if (isUpdata) this.upDateTlTime();
        },
        resetAnim(){
            // if (this.tl && this.tl.time) this.tl.time(0.001).pause();
			// if (this.tl && this.tl.pause) this.tl.pause();
			setTimeout(() => {
				$('.text-box').removeClass('fade-in').removeClass('fade-out');
				$('.go-to-end').show();
			}, 0);
            this.playState = 'pause';
        },
        btnPlayHandler(){
			this.onceClickFlag = true;
			// TweenMax.to('.playBtn', 0.1, {autoAlpha: 0});
			TweenMax.set('.playBtn', {autoAlpha: 0});
			platform.isSamsungNative ? this.playVideo() : this.replayVideo();
			const action = this.configData.trackingLabels.play;
			Utils.track(action);
        },
        replayHandler() {
			this.replayVideo();
			const action = this.configData.trackingLabels.replay;
			Utils.track(action);
        },
        closeHandler() {
            this.playState = 'stopped';
            try {
                this.myPlayer.pause();
            } catch (e){
                
            }
            
            window.parent.postMessage({
                type: 'close',
			}, '*');
			// TweenMax.to('.playBtn', 0.1, {autoAlpha: 1});
			if (!this.isFrameClick) TweenMax.set('.playBtn', {autoAlpha: 1, delay: 0.1});
            this.resetAnim();

			const action = this.configData.trackingLabels.close;
			Utils.track(action);
        },
        resizeWeb() {
            const panelSizeData = {
                desktopScale: 1200 / 600,
                mobileScale: 1200 / 600,
            };
			if (window.parent === window){
				const scrollWidth = this.hasScrollBar() ? 15 : 0;
				const $container = $('.app-container');
				

				// fixed ie calculation bug
				for (let j = 0; j < 2; j++){
					let bWidth = document.body.clientWidth;
					if (bWidth > MAX_WIDTH) bWidth = MAX_WIDTH;
					
					let viewHeight = bWidth + scrollWidth > BREAKPOINT ? bWidth / panelSizeData.desktopScale >> 0 : bWidth / panelSizeData.mobileScale >> 0;
					if (bWidth >= 1200){
						viewHeight = 600;
					}
					// if (window.platform.isDesktop || window.platform.isNexus7 || window.platform.isGalaxyTab){
					// 	if (bWidth + scrollWidth <= BREAKPOINT){
					// 		viewHeight = 500;
					// 	}
					// }
					$container.height(viewHeight);
				}
			} else {
                if (!platform.isMobile){
                    const {width, height} = this.$refs.app.getBoundingClientRect();
                    const ratio = width / height;
                    let targetWidth;
                    if (ratio > VIDEO_RATIO) {
                        targetWidth = width;
                    } else {
                        targetWidth = VIDEO_WIDTH * height / VIDEO_HEIGHT;
                    }
                    this.$nextTick(() => {
                        this.$refs.videoBox.style.width = `${targetWidth}px`;
                    });
                } else {
									const wWidth = window.innerWidth;
									const targetHeight = wWidth / panelSizeData.mobileScale;
                    this.$nextTick(() => {
                        this.$refs.videoBox.style.width = `${wWidth}px`;
                        this.$refs.app.style.width = `${wWidth}px`;
                        this.$refs.app.style.height = `${targetHeight}px`;
                    });
                }
            }
        },
        hasScrollBar() {
            if (window.innerWidth === document.body.clientWidth) return false;
            return true;
        },
		goToEnd(){
			if (this.myPlayer && this.myPlayer.currentTime){
				$('.go-to-end').hide();
				this.seekVideo(this.myPlayer.duration() - 2);
            }
		},
    },
    components: {
		/* Notes Start */
		Notes,
		/* Notes End */
    },
    watch:{
        
    },
};
