export const isArray = Array.isArray;
export const isFunction = (val) => typeof val === "function";
export const isString = (val) => typeof val === "string";
export const isSymbol = (val) => typeof val === "symbol";
export const isBoolean = (val) => typeof val === "boolean";
export const isUndefined = (val) => typeof val === "undefined";
export const isNull = (val) => val === null;
export const isDate = (val) => isObject(val) && isFunction(val.getTime);
export const isNumber = (val) => typeof val === "number";
export const isObject = (val) => val !== null && typeof val === "object";
export const isElement = (val) => isObject(val) && !!val.tagName;
export function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
export const NO_OP = () => { };
export const FALSE_OP = () => false;
export const PASSIVE_EV = { passive: true };
export function promisedTimeout(timeout) {
  return new Promise((res) => {
    setTimeout(res, timeout);
  });
}
export const MAX_ARRAY_SIZE = 2 ** 32 - 2;
export function minMax(val, min, max) {
  if (val < min)
    return min;
  if (val > max)
    return max;
  return val;
}
export const isClient = typeof window != "undefined";
export function deepClone(result, ...sources) {
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    if (source === undefined || !isObject(source))
      continue;
    const keys = Object.keys(source);
    for (let j = 0; j < keys.length; j++) {
      const k = keys[j];
      const v = unwrap(source[k]);
      const sourceType = typeof v;
      const type = typeof result[k];
      if (result[k] === undefined || sourceType === type) {
        result[k] = isObject(v)
          ? deepClone(result[k] || {}, v)
          : source[k];
      }
    }
  }
  return result;
}