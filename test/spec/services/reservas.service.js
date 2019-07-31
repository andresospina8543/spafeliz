'use strict';

describe('Service: reservas.service', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var reservas.service;
  beforeEach(inject(function (_reservas.service_) {
    reservas.service = _reservas.service_;
  }));

  it('should do something', function () {
    expect(!!reservas.service).toBe(true);
  });

});
