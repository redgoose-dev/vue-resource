<template>
<article class="page">
  <head-title type="h2" title="icon"/>
  <blockquote>
    <p>
      <strong>
        component: <a :href="`${$store.state.url.github}tree/master/src/components/icon`" target="_blank">icon</a>
      </strong>
    </p>
  </blockquote>
  <p>
    <code>SVG</code> 코드를 이용한 아이콘 컴포넌트 입니다.<br/>
    웹폰트 아이콘을 사용할 수 없고, 색상이나 사이즈를 컴포넌트나 <code>stylesheet</code>로 수정할 수 있도록할때 사용할 수 있습니다.
  </p>
  <p>
    만드는것은 상당히 만들기 번거로운 편이지만 쉽게 사용할 수 있습니다.<br/>
    주로 아이콘이 디자인에 의해 커스터마이즈가 되고 사용 갯수가 정해져 있다면 <code>&lt;img/></code>엘리먼트를 사용하는것보다 효과적입니다.
  </p>

  <section>
    <head-title type="h3" title="icons list"/>
    <p>먼저 예제로 만들어진 아이콘들을 다음과 같이 확인해볼 수 있습니다.</p>
    <div class="example">
      <div class="row row-gutter icons-index">
        <div v-for="(name,k) in icons" class="col col-4 col-sm-3 col-md-2">
          <span><icon :name="name"/></span>
          <em>{{name}}</em>
        </div>
      </div>
    </div>
    <pre class="example-code"><code>// star
&lt;icon name="star"/>

// cloud
&lt;icon name="cloud"/>

// heart
&lt;icon name="heart"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="props"/>
    <p>이 컴포넌트는 다음과 같은 <code>props</code>를 사용합니다.</p>
    <table class="table table--center table--bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Comment</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>name</td>
        <td>String</td>
        <td class="typo-align--left">아이콘 이름</td>
      </tr>
      <tr>
        <td>size</td>
        <td>Number</td>
        <td class="typo-align--left">아이콘 사이즈. 가로/세로 동일한 수치로 사용합니다.</td>
      </tr>
      <tr>
        <td>color</td>
        <td>String</td>
        <td class="typo-align--left">아이콘의 컬러</td>
      </tr>
      </tbody>
    </table>
  </section>

  <section>
    <head-title type="h3" title="size"/>
    <p>아이콘의 사이즈를 지정합니다.</p>
    <div class="example">
      <div class="row row-v-center">
        <div class="col typo-align--center">
          <icon name="star" :size="24"/>
        </div>
        <div class="col typo-align--center">
          <icon name="star" :size="36"/>
        </div>
        <div class="col typo-align--center">
          <icon name="star" :size="48"/>
        </div>
      </div>
    </div>
    <pre class="example-code"><code>&lt;icon name="star" :size="24"/>
&lt;icon name="star" :size="36"/>
&lt;icon name="star" :size="48"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="color"/>
    <p>아이콘의 컬러를 지정합니다.</p>
    <div class="example">
      <div class="row row-v-center">
        <div class="col typo-align--center">
          <icon name="power" :size="36" color="red"/>
        </div>
        <div class="col typo-align--center">
          <icon name="power" :size="36" color="blueviolet"/>
        </div>
        <div class="col typo-align--center">
          <icon name="power" :size="36" color="forestgreen"/>
        </div>
        <div class="col typo-align--center">
          <icon name="power" :size="36" color="turquoise"/>
        </div>
      </div>
    </div>
    <pre class="example-code"><code>// blue
&lt;icon name="power" color="red"/>

// #ff0000
&lt;icon name="power" color="#ff0000"/></code></pre>
  </section>

  <section>
    <head-title type="h3" title="add icon"/>
    <p>먼저 svg 파일로 만들어진 아이콘 이미지로 아이콘 요소로 추가할 수 있습니다.</p>
    <p>텍스트 에디터로 <code>svg</code>파일을 열어보면 보통 다음 코드와 같은 형태로 되어있습니다.</p>
    <pre><code>&lt;svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  &lt;path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z">&lt;/path>
&lt;/svg></code></pre>
    <p>
      위의 코드를 복사하고 아이콘 컴포넌트 위치 기준에서 <code>./src</code>경로에서 <code>icon-{NAME}.vue</code> 형식으로 vue 파일을 만들고 <code>&lt;template>&lt;/template></code> 엘리먼트를 만들어서 그 속에 복사한 svg 소스코드를 붙여넣습니다.
    </p>
    <p><a :href="`${$store.state.url.github}tree/master/src/components/icons/src`" target="_blank">여기</a>에서 미리 만들어져 있는 예제 아이콘들을 참고할 수 있습니다.</p>
    <p>다음과 같이 아이콘 파일 <code>code-{NAME}.vue</code> 형식에서 <code>{NAME}</code> 부분을 이름으로 사용해서 컴포넌트로 아이콘을 불러올 수 있습니다.</p>
    <div class="example">
      <icon name="star"/>
    </div>
    <pre class="example-code"><code>&lt;icon name="{NAME}"></code></pre>
  </section>

  <section>
    <head-title type="h3" title="custom shape"/>
    <p>svg 코드를 직접 넣어서 사용할 수 있습니다.</p>
    <div class="example">
      <icon :size="48" color="blueviolet">
        <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
          <line x1="8" y1="16" x2="8" y2="16"></line>
          <line x1="8" y1="20" x2="8" y2="20"></line>
          <line x1="12" y1="18" x2="12" y2="18"></line>
          <line x1="12" y1="22" x2="12" y2="22"></line>
          <line x1="16" y1="16" x2="16" y2="16"></line>
          <line x1="16" y1="20" x2="16" y2="20"></line>
        </g>
      </icon>
    </div>
    <pre class="example-code"><code>&lt;icon :size="48" color="blueviolet">
  &lt;g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    &lt;path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25">&lt;/path>
    &lt;line x1="8" y1="16" x2="8" y2="16">&lt;/line>
    &lt;line x1="8" y1="20" x2="8" y2="20">&lt;/line>
    &lt;line x1="12" y1="18" x2="12" y2="18">&lt;/line>
    &lt;line x1="12" y1="22" x2="12" y2="22">&lt;/line>
    &lt;line x1="16" y1="16" x2="16" y2="16">&lt;/line>
    &lt;line x1="16" y1="20" x2="16" y2="20">&lt;/line>
  &lt;/g>
&lt;/icon></code></pre>
  </section>
</article>
</template>

<script>
export default {
  name: 'page',
  components: {
    'head-title': () => import('@/docs/layout/title'),
    'icon': () => import('@/components/icon'),
  },
  data()
  {
    return {
      icons: [
        'cloud',
        'heart',
        'bookmark',
        'folder',
        'link',
        'map',
        'plus-circle',
        'power',
        'save',
        'search',
        'settings',
        'share',
        'star',
        'sun',
        'trash',
        'umbrella',
        'volume-2',
        'wifi',
        'close',
      ],
    };
  },
}
</script>
<style lang="scss" scoped>
.icons-index {
  span {
    position: relative;
    display: block;
    background: #f5f5f5;
    padding-bottom: 100%;
    > svg {
      position: absolute;
      display: block;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
  em {
    display: block;
    margin-top: 4px;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    line-height: 1;
  }
}
</style>
