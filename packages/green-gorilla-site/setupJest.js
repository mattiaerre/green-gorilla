require('isomorphic-fetch'); // eslint-disable-line import/no-extraneous-dependencies
const fetch = require('jest-fetch-mock'); // eslint-disable-line import/no-extraneous-dependencies

jest.setMock('node-fetch', fetch);
