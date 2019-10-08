<template>
<article class="page">
  <head-title type="h2" title="Scripts introduce"/>
  <p>
    스크립트 함수들에 대한 모음입니다.<br/>
    여러가지 도구로 성격의 함수들을 모아두고 사용할 수 있습니다.
  </p>

  <section>
    <head-title type="h3" title="object"/>
    <p>오브젝트 객체에 대해 다룹니다.</p>
    <p>import 방식은 다음과 같습니다.</p>
    <pre><code>import * as objects from '@/scripts/objects';</code></pre>

    <head-title type="h4" title="find index using key"/>
    <p>배열속에 들어있는 객체속에 값으로 배열의 키를 찾습니다.</p>
    <pre><code>objects.findIndexUsingKey(array, key, search);</code></pre>
    <p>함수에서 사용하는 파라메터는 다음과 같습니다.</p>
    <ul>
      <li><code>array</code>: 찾을 객체의 배열</li>
      <li><code>key</code>: 객체의 `key`이름</li>
      <li><code>search</code>: 찾을 객체의 `value`값</li>
    </ul>
    <p>사용하는 함수의 예제는 다음과 같습니다.</p>
    <pre><code>let key = objects.findIndexUsingKey(
  [
    { apple: 'red', banana: 'yellow', mango: 'green' },
    { apple: 'red1', banana: 'yellow1', mango: 'green1' },
    { apple: 'red2', banana: 'yellow2', mango: 'green2' },
  ],
  'banana',
  'yellow');</code></pre>

    <head-title type="h4" title="serialize"/>
    <p>객체를 <code>?foo=bar&apple=red</code> 형식으로 변환합니다.</p>
    <pre><code>objects.serialize(obj, usePrefix);</code></pre>
    <p>함수에서 사용하는 파라메터는 다음과 같습니다.</p>
    <ul>
      <li><code>obj</code>: 변환할 객체</li>
      <li><code>usePrefix</code>: 앞에 <code>?</code>문자를 붙입니다.</li>
    </ul>
    <p>사용하는 함수의 예제는 다음과 같습니다.</p>
    <pre><code>let str = objects.serialize({
  apple: 'red',
  banana: 'yellow',
  mango: 'green'
}, true);

// str = ?apple=red&banana=yellow&mango=green</code></pre>
  </section>

  <section>
    <head-title type="h3" title="strings"/>
    <p>문자에 관련된 도구를 다룹니다.</p>
    <p>import 방식은 다음과 같습니다.</p>
    <pre><code>import * as strings from '@/scripts/strings';</code></pre>
  </section>

  <section>
    <head-title type="h3" title="util"/>
    <p>유틸리티에 관련된 도구들을 다룹니다.</p>
    <p>import 방식은 다음과 같습니다.</p>
    <pre><code>import * as util from '@/scripts/util';</code></pre>

    <head-title type="h4" title="sleep"/>
    <p>명령어 실행에 대한 딜레이를 하는 promise 함수</p>
    <pre><code>// promise
util.sleep(delay).then();

// async
await util.sleep(delay);</code></pre>
    <p>함수에서 사용하는 파라메터는 다음과 같습니다.</p>
    <ul>
      <li><code>delay</code>: 딜레이시킬 시간(ms)</li>
    </ul>
    <p>사용하는 함수의 예제는 다음과 같습니다.</p>
    <pre><code>// promise
util.sleep(3000).then(function() {
  console.log('goal');
});

// async
await util.sleep(3000);
console.log('goal');
</code></pre>

    <head-title type="h4" title="initial custom event"/>
    <p>같은 엘리먼트 이벤트를 서로다른 이름으로 설정합니다. 엘리먼트에서 서로 간섭하지 않는 이벤트를 추가하길 원하는때에 사용합니다.</p>
    <p>이벤트를 초기화 하는 방법은 다음과 같습니다.</p>
    <pre><code>util.initCustomEvent();</code></pre>
    <p>엘리먼트에 이벤트를 추가</p>
    <pre><code>window.on('click.eventName', function() {});</code></pre>
    <p>엘리먼트에 이벤트를 제거</p>
    <pre><code>window.off('click.eventName');</code></pre>
    <p>
      이 도구의 가장 큰 목적은 같은 엘리먼트에서 서로 다른 이벤트를 추가할 수 있는것입니다.<br/>
      그래서 다음과 같이 여러가지 이벤트를 추가할 수 있습니다.
    </p>
    <pre><code>// click
window.on('click.foo');
window.on('click.bar');

// scroll
window.on('scroll.foo');</code></pre>
  </section>

</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
  },
}
</script>
