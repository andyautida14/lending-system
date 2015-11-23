'use strict';

var SampleData = require("./renderer/svc/sample-data.js").SampleData;

angular.module("test", [])
.service("SampleData", SampleData);
