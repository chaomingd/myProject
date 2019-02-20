import platform from 'joshua-platform';

window.platform = platform;
window.AdobeAn = {};

const navSelf = navigator.userAgent.toLowerCase();
platform.isUc = navSelf.indexOf('ucbrowser') > 0;
platform.isWin7 = navSelf.indexOf('windows nt 6.1') > -1 || navSelf.indexOf('windows 7') > -1;
platform.isIos11 = navigator.userAgent.indexOf('OS 11') !== -1;
platform.isGalaxyTab = navSelf.indexOf('sm-t') !== -1;

if (platform.isUc) $('html').addClass('uc');
if (platform.isWin7) $('html').addClass('win7');
if (platform.isIos11) $('html').addClass('ios11');
if (platform.isGalaxyTab) $('html').addClass('galaxyTab');

$.fn.extend({
    imageLoader(options) {
        const opts = $.extend({}, {
            delay: 500
        }, options);
        return this.each(function () {
            const $this = $(this);
            const $imgs = $this.find('img');
            const imgLen = $imgs.length;
            let loadedNum = 0;
            $imgs.map((index, img) => {
                const loadImg = new Image();
                loadImg.src = img.src;
                loadImg.onload = () => {
                    loadedNum += 1;
                    const progress = loadedNum / imgLen * 100 >> 0;
                    $this.trigger('progress', progress);
                    if (progress === 100) {
                        setTimeout(() => {
                            $this.trigger('loaded');
                        }, opts.delay);
                    }
                };
            });
        });
    },
});
class AniController {
    constructor(aniRoot, aniStage, aniDom, fps) {
        this.root = aniRoot;
        this.stage = aniStage;
        this.aniDom = aniDom;
        this.loopTimes = 1;
        this.loopCounter = 0;
        this.innerRender = false;
        this.cf = 0;
        this.tf = this.root.timeline.duration - 1;
        this.tickHander = this.tickHander.bind(this);
        createjs.Ticker.setFPS(fps);
    }
    play(frame, loopTimes, callBack) {
        this.cf = frame || 0;
        this.root.gotoAndPlay(frame);
        this.loopTimes = loopTimes || 1;
        this.loopCounter = 0;
        this.onTicker();
        if (callBack) this.cb = callBack;
    }
    gotoEnd() {
        this.root.gotoAndStop(this.root.totalFrames - 1);
        this.root.gotoAndStop(this.root.totalFrames - 1);
        updateMc(this.root);
        this.stage.update();
        this.offTicker();
    }
    pause(frame) {
        if (frame !== null) this.cf = frame;
        this.root.gotoAndStop(this.cf);
        this.offTicker();
        this.stage.update();
    }
    onTicker() {
        this.offTicker();
        createjs.Ticker.addEventListener('tick', this.tickHander);
    }
    offTicker() {
        createjs.Ticker.removeEventListener('tick', this.tickHander);
    }
    on(event, fn) {
        if (typeof event !== 'string') return;
        this.stage.addEventListener(event, fn);
    }
    off(event, fn) {
        if (typeof event !== 'string') return;
        this.stage.removeEventListener(event, fn);
    }
    tickHander() {
        this.stage.update();
        this.cf = this.root.currentFrame;
        if (this.innerRender) return;
        if (this.cf === this.tf) {
            this.loopCounter += 1;
            if (this.loopCounter === this.loopTimes) {
                this.root.stop();
                this.offTicker();
                if (this.cb) this.cb();
            } else {
                this.root.gotoAndPlay(this.cf = 0);
            }
        }
    }
}

function updateMc(mc) {
    if (mc.children.length === 0) return;
    if (mc.gotoAndStop) mc.gotoAndStop(mc.totalFrames - 1);
    for (var i = 0; i < mc.children.length; i++) {
        const child = mc.children[i];
        if (child.gotoAndStop) child.gotoAndStop(mc.totalFrames - 1);
        if (child.children && child.children.length > 0) {
            updateMc(child)
        }
    }
}

window.Utils = {
    stagger(arr, staggerTime, completeCallback) {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            setTimeout(() => {
                if (item.length !== undefined) {
                    for (let j = 0; j < item.length; j++) {
                        item[j].removeAttribute('hide', '');
                        setTimeout(() => {
                            item[j].setAttribute('active', '')
                        }, 100)
                    }
                } else {
                    item.removeAttribute('hide', '');
                    setTimeout(() => {
                        item.setAttribute('active', '');
                    }, 100)
                }
                if (i === arr.length - 1) {
                    completeCallback && completeCallback();
                }
            }, staggerTime * i * 1000)
        }
    },
    removeAttr(arr, completeCallback) {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (item.length !== undefined) {
                for (let j = 0; j < item.length; j++) {
                    item[j].removeAttribute('active')
                    item[j].setAttribute('hide', '');
                }
            } else {
                item.removeAttribute('active');
                item.setAttribute('hide', '');
            }
            if (i === arr.length - 1) {
                completeCallback && completeCallback();
            }
        }
    },
    track(action) {
        let tempAction = action;
        if (platform.isMobile || platform.isTablet) {
            tempAction = `${window.moduleName}_M_${action}`;
        } else {
            tempAction = `${window.moduleName}_D_${action}`;
        }
        console.log('send click tracking: ' + tempAction);
        if (window.wap_tms.pageLoadSyndication) window.wap_tms.pageLoadSyndication(tempAction);
    },
    trackPreview(action) {
        let tempAction = action;
        if (platform.isMobile || platform.isTablet) {
            tempAction = `${window.moduleName}_M_${action}`;
        } else {
            tempAction = `${window.moduleName}_D_${action}`;
        }
        console.log('send click tracking: ' + tempAction);
        if (window.wap_tms.pageLoadSyndication) window.wap_tms.pageLoadSyndication(tempAction);
    },

    cjsLoader(CompositionId, container, callBack) {
        createjs.MotionGuidePlugin.install();
        const aniCanvas = document.createElement('canvas');
        const comp = AdobeAn.getComposition(CompositionId);
        const lib = comp.getLibrary();
        container.appendChild(aniCanvas);

        function handleFileLoad(evt) {
            const images = comp.getImages();
            if (evt && evt.item.type === 'image') {
                images[evt.item.id] = evt.result;
            }
        }

        function handleComplete(evt) {
            const ss = comp.getSpriteSheet();
            const queue = evt.target;
            const ssMetadata = lib.ssMetadata;
            for (let i = 0; i < ssMetadata.length; i += 1) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                    images: [queue.getResult(ssMetadata[i].name)],
                    frames: ssMetadata[i].frames,
                });
            }
            const exportRoot = new lib.Root();
            const stage = new lib.Stage(aniCanvas);
            stage.addChild(exportRoot);
            const tempW = lib.properties.width;
            const tempH = lib.properties.height;
            const pRatio = window.devicePixelRatio || 1;
            aniCanvas.width = tempW * pRatio;
            aniCanvas.height = tempH * pRatio;
            stage.scaleX = pRatio;
            stage.scaleY = pRatio;
            const controller = new AniController(exportRoot, stage, container, lib.properties.fps);
            if (callBack) callBack(controller);
        }
        if (lib.properties.manifest.length === 0) {
            handleComplete({}, comp);
        } else {
            const compImg = comp.getImages();
            const manifestLen = lib.properties.manifest.length;
            let loadedNum = 0;
            lib.properties.manifest.map(data => {
                const img = new Image();
                img.src = data.src;
                compImg[data.id] = img;
                img.onload = function () {
                    loadedNum += 1;
                    if (loadedNum === manifestLen) {
                        handleComplete({}, comp);
                    }
                };
            });
        }
    },
};
