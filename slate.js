// Global configs: https://github.com/jigish/slate/wiki/Global-Configs
// Layouts doc: https://github.com/jigish/slate/wiki/Layouts
// Some examples: https://github.com/mikegrb/slate.js/blob/master/.slate.js
//                https://github.com/jigish/dotfiles/blob/master/slate.js
//                https://github.com/krismolendyke/slate.js/blob/master/slate.js

// CONFIGS
S.cfga({
    "defaultToCurrentScreen" : true,
    "secondsBetweenRepeat" : 0.1,
    "checkDefaultsOnLoad" : true,
    "focusCheckWidthMax" : 3000,
    "orderScreensLeftToRight" : true
});

// MONITORS (external up, internal down)
var externalScreen = "0",
    internalScreen = "1";

// OPTIONS
var fullScreen = S.op("move", {
    "x"     : "screenOriginX",
    "y"     : "screenOriginY",
    "width" : "screenSizeX",
    "height": "screenSizeY"
});
var leftHalf = fullScreen.dup({"width" : "screenSizeX/2"});
var rightHalf = leftHalf.dup({"x": "screenOriginX+screenSizeX/2"});
var topHalf = fullScreen.dup({"height" : "screenSizeY/2"});
var bottomHalf = topHalf.dup({"y": "screenOriginY+screenSizeY/2"});

var leftTop = leftHalf.dup({"height" : "screenSizeY/2"});
var rightTop = rightHalf.dup({"height" : "screenSizeY/2"});
var leftBottom = bottomHalf.dup({"width" : "screenSizeX/2"});
var rightBottom = leftBottom.dup({"x": "screenOriginX+screenSizeX/2"});

var throwToExternal = S.op("throw", {
    "screen" : externalScreen,
    "width" : "screenSizeX",
    "height" : "screenSizeY"
});
var throwToInternal = S.op("throw", {
    "screen" : internalScreen,
    "width" : "screenSizeX",
    "height" : "screenSizeY"
});

// BINDS
S.bnda({
    // "l:ctrl;alt;cmd"    : slate.operation("layout", { "name" : externalMonitorLayout }),
    "m:alt;cmd"      : fullScreen,
    "left:alt;cmd"   : leftHalf,
    "right:alt;cmd"  : rightHalf,
    "up:alt;cmd"     : topHalf,
    "down:alt;cmd"   : bottomHalf,
    "left:shift;cmd" : leftTop,
    "up:shift;cmd"   : rightTop,
    "down:shift;cmd" : leftBottom,
    "right:shift;cmd": rightBottom,
    "up:ctrl;cmd"         : throwToExternal,
    "down:ctrl;cmd"       : throwToInternal,
    "esc:ctrl"            : S.op("grid"),
    "esc:cmd"             : S.op("hint")
});
