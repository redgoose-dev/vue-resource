<template>
<article class="page">
	<head-title type="h2" title="Stylesheet guide"/>
	<p>
		공통적으로 사용하는 css library 영역.<br/>
		파일 이름을 섹션으로 지정하고 그 파일에 있는 내용물에 대한 설명을 볼 수 있다.
	</p>
	<p>
		소스파일 안에서 주석을 상세하게 적어둘 수 있겠지만 `scss`파일이 한글이 들어가면 문제가 생겼던 경험이 있고, 소스를 복사해서 사용하기 때문에 소스에서의 주석은 간단하게 표기하고, 문서에서 설명을 자세하게 다룬다.
	</p>

	<head-title type="h3" title="Using"/>
	<p>
		서비스를 위한 공통적인 스타일시트를 만들때 scss 에서는 `app.scss` 파일 하나를 만들어서 다른 scss 파일들을 import 해올것이다.<br/>
		여기에서 필요한 scss들을 다음과 같은 방법으로 불러와서 사용할 수 있다.
	</p>

	<pre>
<code>@import "./variables";
@import "./mixins";
@import "./fonts";
@import "./elements";
@import "./typography";
@import "./grid";
@import "./forms";
@import "./table";
@import "./etc";</code>
	</pre>
</article>
</template>

<script>
export default {
	name: 'page',
	components: {
		'head-title': () => import('@/docs/component/title'),
	},
}
</script>
