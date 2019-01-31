function t(func, fallbackValue) {
  try {
    var value = func();
    return (value === null || value === undefined) ? fallbackValue : value;
  } catch (e) {
    return fallbackValue;
  }
}

if (typeof(module) != 'undefined' && module.exports) {
  module.exports = t;
}
