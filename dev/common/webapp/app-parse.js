#!/usr/bin/env node
// config
var express = require('express'),
    path = require('path'),
    jsdom = require('jsdom'),
    request = require('request'),
    url = require('url'),
    //cookieParser = require('cookie-parser'),
    //bodyParser = require('body-parser'),
    store_api = 'https://store.line.me/api/stickers?',
    store_search_page = 'https://store.line.me/stickershop/search/',
    store_detail = ['http://dl.stickershop.line.naver.jp/products/', 'productInfo.meta'];
var app = express();

// error
app.use(function(err, req, res, next){
    console.error("### error occured : " + err.stack);
    res.send(500, {status:500, message:'Internal Error', type:'internal'});
});
// CORS
app.use(function(req, res, next){
    res.header({
        'content-type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        "Access-Control-Allow-Headers": "X-Requested-With"
    });

    if(req.method === 'OPTIONS'){
        res.send(200);
    } else {
        next();
    }
});
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
//app.use(cookieParser());
app.listen(9801);

// main
app.get('/wapi/v1/info/sticker.json', function(req, res){
    // params
    var _mode = req.param('mode') || '',
        _type = req.param('type') || '',
        _lang = req.param('lang') || 'ko',
        _useragent = req.headers['user-agent'],
        page, url, q, productId, locatedId, deviceId, deviceRatio;

    // loading url setting
    var mode = {
        main: 0,
        list: 1,
        search: 2,
        detail: 3
    }[_mode];
    var type = {
        top: 'top',
        'new': 'new',
        'top_creators': 'top_creators',
        'new_creators': 'new_creators'
    }[_type];
    var lang = {
        ja: 'ja',
        en: 'en',
        ko: 'ko',
        'zh-Hant': 'zh_TW',
        'zh-Hans': 'zh_CN',
        th: 'th',
        id: 'id',
        de: 'de',
        fr: 'fr',
        it: 'ja',
        'pt-BR': 'pt-BR',
        es: 'es'
    }[_lang]; // 아 이거 뭔가 이상해 ㅠ
    switch (mode) {
        case 0: // main
            if(type === undefined || type === 'new' || type === 'new_creators') {
                resError(10, 'wrong parameter');
                return;
            }
            url = [store_api, 'listType=', type, '&start=0&size=8'].join('');
            break;
        case 1: // list
            if(type === undefined) {
                resError(10, 'wrong parameter');
                return;
            }
            page = parseInt(req.param('page')) || 1;
            url = [store_api, 'listType=', type, '&start=', (page * 16) - 1,'&size=16'].join('');
            break;
        case 2: // search
            q = encodeURIComponent((req.param('q') || '').trim());
            if(type === undefined) {
                resError(10, 'wrong parameter');
                return;
            }
            if(!q) {
                resError(10, 'wrong parameter');
                return;
            }
            url = [
                store_search_page,
                (type === 'top' || type === 'new') ? '' : 'creators/',
                lang,
                '?q=',
                q
            ].join('');
            break;
        case 3: // detail
            productId = parseInt(req.param('pid')) || 0;
            locatedId = req.param('lid') || '0/0/1/'+ productId +'/';
            if(lang === undefined) {
                resError(10, 'wrong parameter');
                return;
            }
            deviceId = (_useragent.toLowerCase().indexOf('android') > 0) ? 'android/' : 'iphone/';
            deviceRatio = (deviceId === 'android/') ? '' : '@2x';
            url = [store_detail[0], locatedId, deviceId, store_detail[1]].join('');
            break;
        default:
            resError(10, 'wrong parameters');
            return;
    }
    console.log("### request URL : " + url);

    // html parsing and send json
    request({
        url: url
    }, function(error, response, body){
        var obj = {};

        // process request
        response = response || {};
        if(!error && response.statusCode === 200){
            switch (mode) {
                case 0:
                case 1: // main, list
                    console.log('### params : mode='+ _mode +'('+ mode +'), type='+ type +', page='+ page);
                    var o = JSON.parse(body);
                    if (o.status === 0) { // 정상응답
                        obj.list = [];
                        for (var i=0; i<o.list.length; i++) {
                            //console.log(o.list[i]);
                            if(o.list[i].stickerImagePath.match(/\d+\/\d+\/\d+\/\d{1,7}\//) === null){
                                //특이 url형태이므로 에러 반환
                                resError(12, 'unusual Located ID');
                                return;
                            }
                            obj.list.push({
                                id: o.list[i].packageId,
                                locatedId: (o.list[i].stickerImagePath.match(/\d+\/\d+\/\d+\/\d{1,7}\//))[0],
                                title: o.list[i].title,
                                author: o.list[i].authorName,
                                price: o.list[i].storePriceForDisplay,
                                image: o.list[i].stickerImagePath,
                                isNew: o.list[i].newFlag
                            });
                        }
                        if(mode === 1) { // only top 8 in Main, not need hasNext
                            obj.hasNext = o.hasNext;
                        }
                        resJson(obj);
                    } else {
                        console.log("### request module's error : " + error);
                        resError(11, 'API error');
                    }
                    break;

                case 2: // search
                    console.log('### params : mode='+ _mode +'('+ mode +'), type='+ type +', q='+ q);
                    jsdom.env(
                        body,
                        ['assets/jquery-2.1.1.min.js'],
                        function(errors, window){
                            var $ = window.jQuery;
                            var result = $('.lyMainInner2 .mdMN02Ul:eq(0) li');
                            obj.list = [];
                            obj.size = result.length;
                            result.each(function(idx, val){
                                var v = $(val);
                                var lu = v.find('.mdMN02Img img').attr('src');
                                if(lu.match(/\d\/\d\/\d\/\d{1,7}\//) === null){
                                    //특이 url형태이므로 에러 반환
                                    resError(12, 'unusual Located ID');
                                    return;
                                }
                                obj.list.push({
                                    id : parseInt((v.find('a').attr('href').split('/'))[3]),
                                    locatedId: lu.match(/\d\/\d\/\d\/\d{1,7}\//)[0],
                                    //link : _item.find('a').attr('href'),
                                    title : $.trim(v.find('.mdMN02Desc').text()),
                                    image : lu,
                                    isNew : v.find('.MdIcoNew').length > 0
                                });
                            });
                            resJson(obj);
                        }
                    );
                    break;

                case 3: // detail
                    console.log('### params : mode='+ _mode +'('+ mode +'), lid='+ locatedId);
                    var o = JSON.parse(body),
                        cointype, v1, v2; // title, author에서 ko가 없을 경우, 첫번째 데이터 사용

                    obj.id = o.packageId;
                    obj.onSale = o.onSale;
                    obj.validDays = o.validDays;
                    if(!o.title.ko) {
                        obj.title = o.title[lang] || o.title.ko;
                    } else {
                        for (v1 in o.title) {
                            break;
                        }
                        obj.title = o.title[lang] || o.title[v1];
                    }
                    if(!o.author.ko) {
                        obj.author = o.author[lang] || o.author.ko;
                    } else {
                        for (v1 in o.author) {
                            break;
                        }
                        obj.author = o.author[lang] || o.author[v1];
                    }
                    cointype = {
                        'ko': 'KR',
                        'ja': 'JP',
                        'en': 'US',
                        'zh-Hant': 'TW',
                        'zh-Hans': 'HK'
                    }[lang] || 'KR'; // 기본 국가는 한국, price는 추후 대응국가 확인 필요 (HK,SG)
                    for(var i=0; i<o.price.length; i++) {
                        if(o.price[i].country === cointype) {
                            obj.price = o.price[i].symbol + o.price[i].price;
                            break;
                        }
                    }
                    obj.desc = 'description dummy, description dummy, description dummy, description dummy, description dummy' // dummy
                    obj.mainImage = 'http://dl.stickershop.line.naver.jp/products/'+ locatedId + deviceId +'main'+ deviceRatio +'.png';
                    obj.previewImage = 'http://dl.stickershop.line.naver.jp/products/'+ locatedId + deviceId +'preview'+ deviceRatio +'.png';
                    obj.stickersSize = o.stickers.length;

                    obj.stickers = [];
                    for(var j=0; j<o.stickers.length; j++) {
                        obj.stickers.push({
                            url: 'http://dl.stickershop.line.naver.jp/products/'+ locatedId + deviceId +'stickers'+ deviceRatio +'/'+ o.stickers[j].id + deviceRatio +'.png',
                            width: o.stickers[j].width,
                            height: o.stickers[j].height
                        });
                    }
                    resJson(obj);
                    break;

                default:
                    return;
            }
        } else { // stickershop internal api error
            console.log("### request module's error : " + error);
            resError(11, 'API error');
        }

        return;
    });

    // lib
    function resJson(obj){
        console.log('### result send : success');
        obj.status = 0;
        res.status(200).json(obj);
    }
    function resError(n, msg){
        console.log('### error occrued : msg = ' + msg);
        res.status(200).json({
            status: n,
            message: msg
        });
    }

});

// start
console.log("### app-parse.js server start...");
