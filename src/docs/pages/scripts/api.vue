<template>
<article class="page">
	<head-title type="h2" title="Support API"/>
  <p>API 지원 인터페이스에 대한 스크립트 객체입니다.</p>
  <p>인터페이스를 불러오는 코드는 다음과 같습니다.</p>
  <pre><code>import api from '@/scripts/api';</code></pre>
  <p>API 인터페이스의 유닛은 다음과 같이 사용할 수 있습니다.</p>
  <pre><code>api.core</code></pre>

  <section>
    <head-title type="h3" title="config"/>
    <p>API 통신 인터페이스의 설정값을 지정합니다.</p>
    <pre><code>api.config('headers.common.Authorization', 'value');</code></pre>
  </section>

  <section>
    <head-title type="h3" title="create"/>
    <p>인스턴스 객체를 만듭니다.</p>
    <pre><code>let instance = api.create({
  baseURL: 'https://restapi-address',
  timeout: 5000,
});</code></pre>
  </section>

  <section>
    <head-title type="h3" title="get"/>
    <p>데이터를 요청합니다.</p>
    <div class="example">{{get_result}}</div>
    <pre class="example-code"><code>api.get('https://reqres.in/api/users/2', 'get', {})
  .then((res) => {
    this.result = res.data.data;
  })
  .catch((e) => {
    console.error(e)
  });</code></pre>
  </section>
</article>
</template>

<script>
import api from '@/scripts/api';

export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/layout/title'),
	},
  data()
  {
    return {
      get_result: 'loading..',
    };
  },
  mounted()
  {
	  api.get('https://reqres.in/api/users/2')
      .then((res) => {
        this.get_result = res.data.data;
      })
      .catch((e) => {
        console.warn(e)
      });
  },
}
</script>
