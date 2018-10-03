this.AdobeAn = {};


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
        this.isTicked = false;
        this.isPlayRato = false;
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
    playRato(progress) {
        const cf = (progress * this.tf) >> 0;
        this.root.gotoAndStop(cf);
        this.isPlayRato = true;
        this.onTicker();
        if (cf === 0 || cf === this.tf) this.offTicker();
    }
    pause(frame) {
        if (frame !== null) {
            this.cf = frame;
            if (frame === 'end') this.cf = this.tf;
        }
        this.root.gotoAndStop(this.cf);
        this.offTicker();
        this.stage.update();
    }
    onTicker() {
        if (this.isTicked) return;
        this.offTicker();
        this.isTicked = true;
        createjs.Ticker.addEventListener('tick', this.tickHander);
    }
    offTicker() {
        this.isTicked = false;
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
        if (this.innerRender || this.isPlayRato) return;
        if (this.cf === this.tf) {
            this.loopCounter += 1;
            if (this.loopCounter === this.loopTimes) {
                this.offTicker();
                if (this.cb) this.cb();
            } else {
                this.root.gotoAndPlay((this.cf = 0));
            }
        }
    }
}

this.CjsLoader = CjsLoader || {};
this.CjsLoader.load = function(CompositionId, container, callBack) {
    createjs.MotionGuidePlugin.install();
    const aniCanvas = document.createElement('canvas');
    const comp = AdobeAn.getComposition(CompositionId);
    const lib = comp.getLibrary();
    container.appendChild(aniCanvas);
    if (lib.properties.manifest.length === 0) {
        handleComplete({}, comp);
    }

    function handleFileLoad(evt) {
        const images = comp.getImages();
        console.log(evt);
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
        const pRatio = 1 || 1;
        aniCanvas.width = tempW * pRatio;
        aniCanvas.height = tempH * pRatio;
        stage.scaleX = pRatio;
        stage.scaleY = pRatio;
        const controller = new AniController(exportRoot, stage, container, lib.properties.fps);
        if (callBack) callBack(controller);
    }
    if (lib.properties.manifest.length === 0) {
        // handleFileLoad({}, comp);
    } else {
        const compImg = comp.getImages();
        const manifestLen = lib.properties.manifest.length;
        let loadedNum = 0;
        lib.properties.manifest.map(data => {
            const img = new Image();
            img.src = data.src;
            compImg[data.id] = img;
            img.onload = function() {
                loadedNum += 1;
                if (loadedNum === manifestLen) {
                    handleComplete({}, comp);
                }
            };
            return true;
        });
    }
};