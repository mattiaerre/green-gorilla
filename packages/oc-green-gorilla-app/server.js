export const data = (context, callback) => { // eslint-disable-line
  const model = { staticPath: context.staticPath };
  callback(null, model);
};
