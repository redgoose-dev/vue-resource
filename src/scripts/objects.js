/**
 * find index using key in array
 * 배열속에 들어있는 객체의 값을찾는 함수
 *
 * @param {Array} array
 * @param {String} key key name
 * @param {String} search search value
 * @return {Number}
 */
export function findIndexUsingKey(array=[], key='', search='')
{
  for (let i=0; i<array.length; i++)
  {
    if (array[i][key] === search) return i;
  }
  return null;
}


/**
 * object to query string
 * 객체를 `?foo=bar&bar=foo` 형식으로 변환한다.
 *
 * @param {Object} obj
 * @param {Boolean} usePrefix
 * @return {String}
 */
export function serialize(obj, usePrefix=false)
{
  let str = [];
  for (let p in obj)
  {
    if (obj.hasOwnProperty(p) && !!encodeURIComponent(obj[p] || ''))
    {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p] || ''));
    }
  }
  str = str.join("&");
  return (usePrefix) ? '?' + str : str;
}
