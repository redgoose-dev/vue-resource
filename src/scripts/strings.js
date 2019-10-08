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
