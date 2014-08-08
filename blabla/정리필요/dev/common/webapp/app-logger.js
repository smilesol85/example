#!/usr/bin/env node
'use strict';

var express    = require('express'),
    bodyParser = require('body-parser'),
    cors       = require('cors'),
    app        = express()
    app.use(bodyParser.json())
    app.use(cors())

var mongodb    = require('mongodb').MongoClient,
    db         = null,
    coll       = null

var geoip      = require('geoip-lite');

var i = 0;

function log() {
    arguments[0] = arguments[0] + '\t' + new Date() + '\t';
    arguments[1] = arguments[1] === 1 ? '[SERVER]' : '[CLIENT]';
    console.log.apply(this, arguments);
}

app.post('/wapi/v1/logs/addLog.json', function(req, res) {
    var data = req.body;

    data.uri         = req.originalUrl;
    data.userAgent   = req.headers['user-agent'];
    data.referer     = req.headers['referer'];
    data.requestTime = new Date();
    data.remoteAddr  = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    data.geo         = geoip.lookup(data.remoteAddr);

    if(data.geo) {
        data.country = data.geo.country;
        data.region = data.geo.region;
    } else {
        data.geo = {}
    }

    log(i++, 2, 'POST '+data.uri);
    res.send({result: 'SUCCESS', code: 0})
    coll.insert(data, {w:1}, function(error, result) {
        log(i++, 1, 'Insert rows');
    });
})

app.post('/wapi/v1/logs/get.json', function(req, res) {
    var data = req.body;

    var regexNo = /^[0-9]+$/;
    if(!data.start || !data.display) {
        res.send({result: 'REQUIRE_METHOD', code: 403});
    } else if(!regexNo.test(data.start) || !regexNo.test(data.display) || (data.order && !/^asc|desc$/.test(data.order))) {
        res.send({result: 'INVALID_VALUE', code: 405});
    } else {
        var query   = data.query || {},
            start   = data.start < 0 ? 1 : data.start,
            display = data.display,
            orderBy = data.order || 'asc',
            order   = orderBy == 'asc' ? 1 : -1

        coll.count(query, function(err, count) {
            coll.find(query, {
                sort: {
                    '_id': order,
                },
                skip: start - 1,
                limit: display
            }).toArray(function(err, rows) {
                res.send({
                    result: 'SUCCESS',
                    code: 0,
                    items: rows,
                    totalCount: count
                })
            });
        })

    }
})

app.listen(9800);
console.log('express running at http://localhost:%d', 9800);
mongodb.connect('mongodb://mongodb.fe.linecorp.com/stickerShop_prototype', function(error, dba) {
    if(error) {
        log(i++, 1, "MongoDB connection failed.");
    } else {
        db = dba;
        coll = db.collection('logs');
        log(i++, 1, 'MongoDB is connected.');
    }
})
