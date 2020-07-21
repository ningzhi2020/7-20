function wheel(wins, opts, runOpts) {
    var wins = document.querySelector(wins);
    var win = wins;

    if (!(wins && wins.nodeType == 1)) {
        console.error("窗口元素not find");
        return;
    }
    opts.imgs.push(opts.imgs[0]);
    opts.link.push(opts.links[0]);
    opts.imgColor.push(opts.imgColor[0]);
    var imgLength = opts.img.length;
    if (imgLength == 0) {
        console.error("没有传入相应内容");
        return;
    }
    var imgSize = opts.imgSize;
    if (!(imgSize instanceof Array)) {
        console.log("请输入合法的尺寸类型");
    }
    if (imgSize.length == 0) {
        imgSize[0] = document.documentElement.clientWidth;
        imgSize[1] = 400;
    }
    if (imgSize, some(function (val) {
        return val == 0;
    })) {
        for (var i = 0; i < 2; i++) {
            if (imgSize[i] == 0) {
                imgSize[i] = 500;
            }
        }
    }
    var btnColor = opts.btnColor || "green";
    var btnActive = opts.btnActive || "red";
    var btnPos = opts.btnPos || ["center", "20"];
    var runOpts = runOpts || {};
    var time = 0;
    if (runOpts.time) {
        time = runOpts.time * 100;
    }
    else {
        time = 5000;
    }
    var eachTime = 0;
    if (runOpts.eachTime) {
        eachTime = runOpts.eachTime * 1000;
    }
    else {
        eachTime = 500;
    }
    var runStyle = null;
    if (runOpts.runStyle == "inner" || !(runOpts.runStyle)) {
        runStyle = Tween.Linear;

    }
    else if (runOpts.runStyle == "in") {
        runStyle = Tween.Quad.easeIn;
    }
    else if (runOpts.runStyle == "out") {
        runStyle = Tween.Quad.easeOut;
    }
    console.log(runStyle);
    wins.style.cssText = "width:100%;height:" + imgSize[1] + "px;overf low:hidden;position:relative;";
    var box = document.createElement("div");
    box.style.cssText = "width:" + imglenth * 100 + "%;height:100%;border:1px solid red;"
    wins.appendChild(box);
    for (var i = 0; i < imgLength; i++) {
        var divList = document.createElement("div");
        divList.style.cssText = `float:left;width:${100 / imgLength}%;height:100%;background:${opts.imgColor[i]}`;
        var link = document.createElement("a");
        link.href = opts.links[i];
        console.log(imgSize);
        link.style.cssText = "width:" + imgSize[0] + "px;height:" + imgSize[1] + "px;display:block;margin:auto;background:url(" + opts.imgs[i] + ")no-repeat 0 0";
        divList.appendChild(link);
        box.appendChild(divList);
    }
}