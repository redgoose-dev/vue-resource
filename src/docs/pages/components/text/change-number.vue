<template>
<article class="page">
  <head-title type="h2" title="text / change-number"/>
  <p>
    숫자가 변하는 애니메이션 컴포넌트.
    <a href="https://github.com/inorganik/countUp.js" target="_blank">countUp.js</a> 자바스크립트 클래스를 이용합니다.
  </p>

  <section>
    <head-title type="h3" title="automatic"/>
    <p>폼에서 값이 바뀌면 자동으로 값이 변한다.</p>
    <div class="example">
      <p>
        <span>result: </span>
        <change-number :to="automaticValue" :duration="1" :use-easing="false"/>
      </p>
      <fieldset class="forms-fieldset">
        <legend>input forms</legend>
        <form-text type="number" v-model="automaticValue" :step="100"/>
      </fieldset>
    </div>
    <pre class="example-code"><code>&lt;input type="number" v-model="automaticValue" :step="10"/>
&lt;change-number :to="automaticValue" :duration="1"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="manual"/>
    <p>특정 메서드 실행으로 값이 변하는 방식입니다.</p>
    <div class="example">
      <p>
        <span>result: </span>
        <change-number
          ref="changeNumberManual"
          :from="0"
          :duration="2"
          @init="$changeNumberManual = $refs.changeNumberManual"
          @complete="completeChangeNumberManual"/>
      </p>
      <fieldset class="forms-fieldset">
        <legend>input forms</legend>
        <form-text type="number" v-model="manualTargetValue" :step="50"/>
      </fieldset>
      <hr>
      <nav>
        <button-basic type="button" :inline="true" @click="clickManual('play')">play</button-basic>
        &nbsp;
        <button-basic type="button" :inline="true" @click="clickManual('pause')">pause</button-basic>
        &nbsp;
        <button-basic type="button" :inline="true" @click="clickManual('reset')">reset</button-basic>
        &nbsp;
        <button-basic type="button" :inline="true" @click="clickManual('update', manualTargetValue)">change</button-basic>
      </nav>
    </div>
    <pre class="example-code"><code>&lt;change-number
  ref="refName"
  :from="0"
  :duration="2"
  @init="$changeNumberManual = $refs.refName"/>

&lt;button type="button" @click="$refs.refName.play()">play&lt;/button>
&lt;button type="button" @click="$refs.refName.pause()">pause&lt;/button>
&lt;button type="button" @click="$refs.refName.reset()">reset&lt;/button>
&lt;button type="button" @click="$refs.refName.change(300)">change 300&lt;/button></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
    <div class="table--overflow">
      <table class="table table--center table--bordered">
        <thead>
        <tr>
          <th scope="col" style="width:180px">Name</th>
          <th scope="col" style="width:80px">Type</th>
          <th scope="col">Default</th>
          <th scope="col">Comment</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>from</td>
          <td>Number</td>
          <td>0</td>
          <td class="typo-align--left">시작하는 숫자</td>
        </tr>
        <tr>
          <td>to</td>
          <td>Number</td>
          <td>undefined</td>
          <td class="typo-align--left">종료되는 숫자</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>Number</td>
          <td>1</td>
          <td class="typo-align--left">애니메이션 시간</td>
        </tr>
        <tr>
          <td>use-easing</td>
          <td>Boolean</td>
          <td>true</td>
          <td class="typo-align--left">애니메이션 가속도 사용유무</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section>
    <head-title type="h3" title="events"/>
    <p>컴포넌트에서 사용하는 이벤트</p>
    <table class="table table--center table--bordered">
      <thead>
      <tr>
        <th>name</th>
        <th>params</th>
        <th>comment</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>@init</td>
        <td></td>
        <td class="typo-align--left">컴포넌트가 마운트 되었을때 호출</td>
      </tr>
      <tr>
        <td>@complete</td>
        <td></td>
        <td class="typo-align--left">번호 애니메이션이 종료되었을때 호출</td>
      </tr>
      </tbody>
    </table>
  </section>

  <section>
    <head-title type="h3" title="methods"/>
    <p>컴포넌트에서 사용되는 메서드</p>
  </section>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
    'navigation-paginate': () => import('@/components/navigation/paginate'),
    'change-number': () => import('@/components/text/change-number'),
    'form-text': () => import('@/components/forms/text'),
    'button-basic': () => import('@/components/button/basic'),
  },
  data()
  {
    return {
      automaticValue: 0,
      manualTargetValue: 100,
    };
  },
  methods: {
    clickManual(method, n)
    {
      switch (method)
      {
        case 'play':
          this.$changeNumberManual.play(this.manualTargetValue);
          break;
        case 'pause':
          this.$changeNumberManual.pause();
          break;
        case 'reset':
          this.$changeNumberManual.reset();
          break;
        case 'update':
          this.$changeNumberManual.change(n);
          break;
      }
    },
    completeChangeNumberManual()
    {
      console.log('complete change number manual');
    },
  },
}
</script>
