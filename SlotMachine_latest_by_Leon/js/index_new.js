function SlotMachine(option) {
    this.option = option;
    var container = document.getElementById(option.el);
    var canvas = document.createElement('canvas');
    container.appendChild(canvas);
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    var bbox = container.getBoundingClientRect();
    this.canvas.width = bbox.width;
    this.canvas.height = bbox.height;
    this.imgOrder = [];
    this.moveObj = []; // 保存各个图片的位置信息
    for (var i = 0; i < this.option.n; i++) {
        this.imgOrder.push(i);
    }
    this.imgOrder.sort(function () {
        return Math.random() > .5 ? -1 : 1;
    });
    this.imgOrder = this.imgOrder.concat(this.imgOrder);
    this.init();
}

SlotMachine.prototype = {
    constructor: SlotMachine,
    init: function () { // 初始化
        var that = this;
        this.loadImg(this.option.imgs, function (index, imgArr) {
            if (index === that.option.imgs.length - 1) {
                that.imgArr = imgArr; // 传入的图片
                that.slotBg = new Image();
                that.slotMark = new Image();
                that.slotBg.src = that.option.slotBg;
                that.slotBg.onload = function () {
                    that.slotMark.src = that.option.slotMark;
                    that.slotMark.onload = function () {
                        that.gridWidth = that.slotBg.width / 3;
                        that.gridHeight = that.slotBg.height;
                        that.imgWidth = imgArr[0].width / that.option.n;
                        that.imgHeight = imgArr[0].height;
                        that.translatex = that.gridWidth / 2 - that.imgWidth / 2;
                        that.translatey = that.gridHeight / 2 - that.imgHeight / 2;
                        that.moveObj = that.imgArr.map(function (item, i) { // 位置信息
                            return {
                                dx: that.translatex + that.gridWidth * i,
                                dy: that.translatey,
                                currentOrder: [0, 1],
                                oringin: {
                                    dy: that.translatey
                                }
                            }
                        });
                        that.drawImgs();
                        that.drawBg(); // 画背景
                        that.startRun();
                    }
                }
            }
        });
    },
    loadImg: function (imgs, callback) { // 加载图片
        var imgArr = [];
        var index = 0;

        function imgload() {
            imgArr[index] = new Image();
            imgArr[index].src = imgs[index];

            imgArr[index].onload = function () {
                index++;
                if (index < imgs.length) {
                    imgload();
                    callback(index, imgArr);
                }
            }
        }
        imgload();
    },
    drawBg: function () { // 画背景
        this.ctx.drawImage(this.slotBg, 0, 0);
        this.ctx.drawImage(this.slotMark, 0, 0);
    },
    drawImgs: function () {
        var that = this;
        // this.ctx.drawImage(this.imgArr[0],0,0);
        // console.log(that.imgWidth)
        this.imgArr.forEach(function (img, i) { // 每次画两个
            var sx = that.imgWidth * that.imgOrder[that.moveObj[i].currentOrder[0]];
            var dx = that.moveObj[i].dx;
            // console.log(dx);
            var sx2 = that.imgWidth * that.imgOrder[that.moveObj[i].currentOrder[1]];
            that.ctx.drawImage(img, sx, 0, that.imgWidth, that.imgHeight, dx, that.moveObj[i].oringin.dy, that.imgWidth, that.imgHeight);
            that.ctx.drawImage(img, sx2, 0, that.imgWidth, that.imgHeight, dx, that.moveObj[i].oringin.dy + that.gridHeight, that.imgWidth, that.imgHeight);
        });
    },
    startRun: function () {
        var that = this;
        this.tl = new TimelineMax({
            paused: !that.option.autoPlay,
            onUpdate: function () {
                // that.ctx.fillStyle = "rgba(255,255,255,.1)";
                // that.ctx.fillRect(0, 0, that.canvas.width, that.canvas.height);
                that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
                that.drawImgs();
                that.drawBg();
            },
            onComplete: function () { // 重置 this.imgOrder  this.moveObj
                var lastOrder = that.imgOrder[that.imgOrder.length - 1];
                that.imgOrder.sort(function () {
                    return Math.random() > .5 ? -1 : 1;
                });
                var index = that.imgOrder.indexOf(lastOrder);
                that.imgOrder[index] = that.imgOrder[0];
                that.imgOrder[0] = lastOrder;


                that.moveObj.forEach(function(item,i) {
                    item.currentOrder = [0,1];  // 开头两张
                });
            }
        });

        function update(moveObj, type) {
            return TweenLite.to(moveObj, 5, {
                dy: moveObj.dy - that.gridHeight * (that.imgOrder.length - 1),
                onUpdate: function () {
                    var dy = moveObj.dy - that.translatex;
                    var i = Math.floor(Math.abs(dy) / that.gridHeight);
                    moveObj.currentOrder[0] = i;
                    moveObj.currentOrder[1] = i + 1;
                    moveObj.oringin.dy = moveObj.dy + that.gridHeight * i;
                    // console.log(i);
                },
                ease: Power4.easeInOut
            })
        }
        this.moveObj.forEach(function (moveObj, i) {
            var position = "-=" + (i === 0 ? 0 : 4.5);
            that.tl.add(update(moveObj), position);
        });
    },
    restart: function () {
        if (!this.tl.isActive()) {
            this.tl.restart();
        }
    }
}





window.onload = function () {
    var slotMachine = new SlotMachine({
        el: 'container',
        canvas: {
            id: 'canvas',
            width: 746,
            height: 252
        },
        slotBg: "./img/slot_bg.png",
        slotMark: './img/slot_mask.png',
        imgs: [
            "./img/doimgs.png",
            "./img/drinkimgs.png",
            "./img/eatimgs.png"
        ],
        n: 11,
        autoPlay: true
    });

    var reset = document.getElementById('reset');
    reset.onclick = function () {
        slotMachine.restart();
    }

}