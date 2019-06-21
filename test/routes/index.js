process.env.NODE_ENV = 'test';

let Cart = require('../../models/cart');

const assert = require('assert');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();;
const chaiHttp = require('chai-http');
const app = require('../../app.js');
chai.use(chaiHttp);

describe('Unit testing the / route', function() {

    it('should return OK status', function() {
      return request(app)
        .get('/')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });

});
