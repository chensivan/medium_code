app.service('myService', function () {

  this._serviceVar = 'This is from service'

  this.check = function (input, check) {
    return input == check? 'Yes':'No';
  }
});
