var ubidots = require('ubidots');
var client = ubidots.createClient('BBFF-2d64d59eefff63cec765dc3b2f27bfd5a94');
    
    client.auth(function () {
      this.getDatasources(function (err, data) {
        console.log(data.results);
      });
    
      var ds = this.getDatasource('BBFF-PUhCMRaL6qbIOSpaIUUInztuFA3lmO');
    
      ds.getVariables(function (err, data) {
        console.log(data.results);
      });
    
      ds.getDetails(function (err, details) {
        console.log(details);
      });
    
      var v = this.getVariable('63652b5b8fcb470213569010');
    
      v.getDetails(function (err, details) {
        console.log(details);
      });
    
      v.saveValue(22);
    
      v.getValues(function (err, data) {
        console.log(data.results);
      });
    });