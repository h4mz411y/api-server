'use strict';
const logger = require('../src/middleware/logger');

describe('logger middleware', () => {

    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log');
    });

    test('Logging  request', () => {
        req.method = 'GET';
        req.path = '/clothes';
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    });
    afterEach(() => {
        consoleSpy.mockRestore();
    });

})