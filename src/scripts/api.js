import axios from 'axios';

const core = axios;

export default {
  // axios core object
  core,
  /**
   * config
   * 기본값 설정
   *
   * @param {String} key
   * @param {String} value
   */
  config(key, value)
  {
    let obj = core.defaults;
    let keys = key.split('.');
    let lastKey = keys.pop();
    keys.forEach((o, k) => {
      obj = obj[o];
    });
    obj[lastKey] = value;
  },
  /**
   * create
   * 인터페이스 인스턴스 객체를 만듭니다.
   *
   * @param {Object} config
   */
  create(config)
  {
    return core.create(config);
  },
  /**
   * get data
   * 데이터 요청하기
   *
   * @param {String} url
   * @param {String} method
   * @param {Object} options
   * @return {Promise}
   */
  get(url, method='get', options={})
  {
    return new Promise((resolve, reject) => {
      if (!url) reject('Not found `url`');
      core({
        ...options,
        url,
        method,
      })
        .then((res) => resolve(res))
        .catch((e) => reject(e));
    });
  },
}
