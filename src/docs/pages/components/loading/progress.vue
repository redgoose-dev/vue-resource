<template>
<article class="page">
	<head-title type="h2" title="loading - progress"/>
  <blockquote>
    <p>
      <strong>component: <a :href="`${$store.state.url.github}tree/master/src/components/loading/progress`" target="_blank">progress</a></strong>
    </p>
  </blockquote>
	<p>
		무언가 처리하고 있을때의 모습을 보여줄때 사용하는 컴포넌트.<br/>
		프로그레스 바 형태의 모습을 가지고 있습니다. 파일 업로드를 할때 사용할 수 있습니다.
	</p>

  <section>
    <head-title type="h3" title="basic"/>
    <p>기본적인 형태로 사용합니다.</p>
    <div class="example">
      <loading-progress :percent="basicPercent"/>
      <hr>
      <button-basic :inline="true" size="small" @click="playPercent">play</button-basic>
    </div>
    <pre class="example-code"><code>&lt;loading-progress :percent="30"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col" style="width:100px">Name</th>
          <th scope="col" style="width:80px">Type</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>percent</td>
          <td>Number</td>
          <td class="typo-align--left">
            현재 몇 퍼센트인지의 수치<br/>
            이 값이 없으면 <code>total</code>과 <code>current</code>값을 이용해 퍼센트 값을 구합니다.
          </td>
        </tr>
        <tr>
          <td>total</td>
          <td>Number</td>
          <td class="typo-align--left">퍼센트 값을 구하기 위한 전체 값</td>
        </tr>
        <tr>
          <td>current</td>
          <td>Number</td>
          <td class="typo-align--left">퍼센트 값을 구하기 위한 현재 값</td>
        </tr>
        <tr>
          <td>show-label</td>
          <td>Boolean</td>
          <td class="typo-align--left"><code>10%</code>와 같은 퍼센트 레이블을 표시합니다.</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/layout/title'),
    'loading-progress': () => import('@/components/loading/progress'),
    'button-basic': () => import('@/components/button/basic'),
	},
  data()
  {
    return {
      basicPercent: 0,

    };
  },
  methods: {
    playPercent()
    {
      this.basicPercent = 0;
      let start = null;
      let speed = .5;
      const step = (timeStamp) => {
        if (!start) start = timeStamp;
        if ((timeStamp - start) > (speed * this.basicPercent))
        {
          start = null;
          this.basicPercent = this.basicPercent + 1;
        }
        if (this.basicPercent < 100)
        {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
    playSize(total, current)
    {
      const step = (timeStamp) => {

      };
    },
  },
}
</script>
