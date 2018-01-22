"use strict";

global.PACKAGE_NAME = 'Algolia';

const express = require('express'),
  bodyParser = require('body-parser'),
  API = require('rapi-js-package'),
  fs = require('fs'),
  lib = require('./lib'),
  _ = lib.callback;

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json(({
  limit: '50mb'
})));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.all(`/api/${PACKAGE_NAME}`, (req, res) => {
  res.send(metadata);
});

let mfile = fs.readFileSync('./metadata.json', 'utf-8'),
  cfile = fs.readFileSync('./control.json', 'utf-8');

let metadata = JSON.parse(mfile),
  control = JSON.parse(cfile);

for (let func in control) {
  let options = {
    parseUri: true,
    hasSkip: true,
    query: {},
    debug: true
  };

  let {
    method,
    args,
    values,
    tree,
    url
  } = control[func];

  app.post(`/api/${PACKAGE_NAME}/${func}`, _(function*(req, res) {
    let response;
    let opts = {};
    let r = {
      callback: "",
      contextWrites: {}
    };
    let endpoint = `https://${req.body.args['appId']}.algolia.net`;
    let rawArgs = req.body.args.requests;
    req.body.args = lib.clearArgs(req.body.args);

    if (!req.body.args['forwardToSlaves'])
      req.body.args['forwardToSlaves'] = false;


    try {
      let api = new API(endpoint + url, {
        headers: {
          'X-Algolia-API-Key': req.body.args['apiKey'],
          'X-Algolia-Application-Id': req.body.args['appId']
        }
      });

      if (values)
        for (let val in values) opts[val + '|String'] = values[val];

      for (let arg in args) {
        let argarr = arg.split('|');
        if(argarr[0] == 'Boolean')
        {

           if(req.body.args[argarr[1]] === 'true')
           {
             console.log(args[arg]);
            argarr[1] = true;
           } else if(req.body.args[argarr[1]] === 'false')
           {
            req.body.args[argarr[1]] = false;
           }
        }

        opts[args[arg] + '|' + argarr[0]] = req.body.args[argarr[1]];

      }


      method == 'GET' || method == 'DELETE' ? options.query = opts : options.body = opts;
      //options.isRawBody = method == 'POST' || method == 'PUT';
      options.method = method;
      if(func == 'batchObjectsWrite'){
        console.log(rawArgs);
        options.body['$!requests|Raw'] = {"requests":rawArgs};
        }

        if(func == 'getSingleObject' && options.query['attributes|String'])
        {
          options.query['attributes|String'] = options.query['attributes|String'].join(',');
        }

        if(func == 'querySingleIndex' && options.query['optionalFilters|String'])
        {
          options.query['optionalFilters|String'] = options.query['optionalFilters|String'].join(',');
        }
        if(func == 'querySingleIndex' && options.query['disableExactOnAttributes|String'])
        {
          options.query['disableExactOnAttributes|String'] = options.query['disableExactOnAttributes|String'].join(',');
        }
        if(func == 'querySingleIndex' && options.query['ruleContexts|String'])
        {
          options.query['ruleContexts|String'] = options.query['ruleContexts|String'].join(',');
        }
        if(func == 'querySingleIndex' && options.query['optionalWords|String'])
        {
          options.query['optionalWords|String'] = options.query['optionalWords|String'].join(',');
        }
        if(func == 'querySingleIndex' && options.query['alternativesAsExact|String'])
        {
          options.query['alternativesAsExact|String'] = options.query['alternativesAsExact|String'].join(',');
        }
      // console.log(options);
      response = yield api.request(options);
      r.callback = 'success';
      r.contextWrites['to'] = response == '' ? {
        'message': 'Success'
      } : response;
    } catch (e) {
      console.log(e);
      r.callback = 'error';
      r.contextWrites['to'] = e.status_code ? e : {
        status_code: "API_ERROR",
        status_msg: e.message ? e.message : e
      };
    }

    res.status(200).send(r);
  }))
}

app.listen(PORT);
module.exports = app;
