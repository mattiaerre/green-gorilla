const { hash } = require('./package.json');

export const data = (context, callback) => { // eslint-disable-line
  const model = {
    staticPath: context.staticPath,
    hash
  };
  callback(null, model);
};
