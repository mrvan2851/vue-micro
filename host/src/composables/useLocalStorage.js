export const useLocalStorage = () => {
  function removeStorage(name) {
    try {
      localStorage.removeItem(name);
      localStorage.removeItem(name + '_expires');
    } catch (e) {
      return false;
    }
    return true;
  }
  function getStorage(key) {
    var now = Date.now();
    try {
      var expiresIn = localStorage.getItem(key + '_expires');
    } catch (error) {
      return null;
    }
    if (expiresIn === undefined || expiresIn === null) { expiresIn = 0; }

    if (expiresIn < now) {
      removeStorage(key);
      return null;
    } else {
      try {
        var value = localStorage.getItem(key);
        return value;
      } catch (e) {
        return null;
      }
    }
  }
  function setStorage(key, value, option = {}) {
    let { expires = 1 } = option
    if (expires === undefined || expires === null) {
      expires = 86400
    } else {
      expires = Math.abs(expires * 86400);
    }

    var now = Date.now();
    var schedule = now + expires * 1000;
    try {
      localStorage.setItem(key, value);
      localStorage.setItem(key + '_expires', schedule);
    } catch (e) {
      return false;
    }
    return true;
  }
  return {
    get: getStorage,
    set: setStorage,
    remove: removeStorage
  }
}