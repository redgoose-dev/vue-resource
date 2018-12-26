
## normalize.css

css 리셋 라이브러리  
url: https://necolas.github.io/normalize.css/

파일이 `css`로 되어있기 때문에 `scss`를 부르는 장소에 import 해줘야한다.

```javascript
import './normalize.css';
```

만약 scss 형식으로 불러오고 싶으면 `normalize.scss` 형태의 이름으로 변경하여 `@import "./normalize";`로 불러올 수 있다.


## variables.scss

만드는 서비스에서 사용하는 변수들을 지정해놓은 파일들이다.  
다음과 같이 섹션을 나누어서 그룹을 정해두었다.

- `color`: 자주 사용되는 컬러들을 지정한다.
- `size`: 모든 사이즈에 대한 변수를 지정한다.
- `font`: 글꼴에 대한 변수값을 지정한다. 웹폰트같은 다른폰트가 추가되면 더 추가한다.
- `etc`: 그 외에 여러가지 변수값들을 지정한다.

`variables.scss` 파일은 한번 불러오면 `scss`가 연결된 내용이라면 언제나 사용할 수 있지만 IDE 프로그램에서는 그걸 제대로 인식하지 못하기 때문에 scss 파일마다 따로 import 해주는것을 권장한다.


## mixins.scss

`scss`의 함수라고 볼 수 있다.  
스타일시트를 작성하는데 많이 도움이 되는 툴들이 들어있다.

사용예제

```scss
@include mixin-name();
```

자세한 파라메터나 스타일 속성들은 소스를 보는것을 권장한다.

### responsive

쉽고 통일된 사이즈로 media query 구현.

모바일 퍼스트 기준으로 만들어져 있다. 예를들어 `tablet 보다 크다면..` 조건이 성립되면 해당 스타일로 바뀐다.

```scss
@include responsive('tablet') {}
@include responsive('desktop') {}
@include responsive('desktop-1280') {}
@include responsive('desktop-1440') {}
@include responsive('desktop-1920') {}
```

### retina

레티나 디스플레이일 경우에 해당 스타일로 바뀐다.

```scss
@include retina() {}
```

### color-linear-gradient

그라디언트 컬러 표현을 한다. 만약 방향을 가로로 사용하고 싶다면 4번째 파라메터를 `horizontal`로 변경하면 된다.

```scss
@include color-linear-gradient(#eee, #eee, #999, 'vertical');
```

### image-background

배경 이미지 지원

```scss
@include image-background();
```

### image-sprite

스프라이드 이미지.  
이미지 경로는 파일이름까지 적는다. `@` 앞까지..

```scss
@include image-sprite('./sp-image', 200px, 100px);
```

### text-single-line

한줄 텍스트 표현

```scss
@include text-single-line();
```

### text-multi-line

여러줄 텍스트 표현

```scss
@include text-multi-line(16px, 3);
```

### button-touch-options

버튼에서 터치에 대한 추가속성을 넣는다.

```scss
@include button-touch-options(true);
```

### blind

화면에서 안보이도록 한다.

```scss
@include blind();
```

### horizontal-scroll

가로 스크롤을 표현한다. 주로 모바일에서 유용하다.

```scss
@include horizontal-scroll(16px);
```


## grid.scss

그리드 레이아웃 시스템에 대한 스타일시트. 이 그리드의 컬럼은 총 12개로 되어있으며 ![flexbox](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox의_기본_개념)를 이용하여 그리드 레이아웃을 만들고 있다.

Documentation url: (url)

> TODO: grid 섹션의 설명은 html 페이지로 만드는게 좋을거 같아서 나중에 옮길예정

### basic

기초적인 사용법은 다음과 같다.

```html
<div class="row">
	<div class="col">col</div>
	<div class="col">col</div>
</div>
```

만약 여러가지 속성을 같이 사용하고 싶다면 멀티클래스 형식으로 작성해준다.

```html
<div class="row row-gutter row-v-center"/>
```

### size

기본 컬럼을 넣는다면 일정한 비율로 사이즈 조절이 되지만 총 사이즈를 나눈 수치를 클래스 이름으로 넣는다면 총 가로영역에서 등분된 사이즈로 컬럼이 표시된다. 예제를 보는것이 이해하는데 도움이 될것이다.

```html
<div class="row">
	<div class="col col-6">col-6</div>
	<div class="col col-6">col-6</div>
</div>
```

#### 반응형 레이아웃에 대한 컬럼 사이즈 표

다음 표는 스크린 사이즈의 조건에 맞으면 컬럼의 사이즈가 변하게 된다. __참고로 모바일 퍼스트 기준이며 반응형 사이즈 기준에 따라 달라진다.__

| Mobile | Tablet     | Desktop     | Desktop large | Desktop extra |
|--------|------------|-------------|---------------|---------------|
| `none` | `.col-sm-` | `.col-md-`  | `.col-lg-`    | `.col-xl-`    |

반응형 사이즈를 참고하여 다음과 같이 스크린 사이즈가 변함에 따라 컬럼 사이즈를 변경할 수 있다.

```html
<div class="row">
	<div class="col">col</div>
	<div class="col-8 col-lg-2">col-8 col-lg-2</div>
	<div class="col">col</div>
</div>

<div class="row">
	<div class="col-4 col-md-3">col-4 col-md-3</div>
	<div class="col-4 col-md-6">col-4 col-md-6</div>
	<div class="col-4 col-md-3">col-4 col-md-3</div>
</div>
```

#### none size

특정 스크린 사이즈에 따라 컬럼의 고정된 사이즈를 가변사이즈로 변경한다.

```html
<div class="row">
	<div class="col">col</div>
	<div class="col-auto">col-auto</div>
	<div class="col col-md-auto">col col-md-auto</div>
</div>
```

### gutter

컬럼의 사이의 가로 여백을 넣을 수 있다.

간격 사이즈의 한 컬럼 사이즈는 `variables.scss` 파일에 있는 `$size-grid-col-gutter` 값에서 변경할 수 있다. 

```html
<div class="row row-gutter">
	<div class="col">col</div>
	<div class="col">col</div>
</div>
```

### vertical

`row` 높이가 특정 사이즈로 설정되어있다면 높이의 기준으로 정렬한다. `align-items` 속성을 이용한다.

```html
<div class="row row-v-start"/>
<div class="row row-v-center"/>
<div class="row row-v-end"/>
```

### horizontal

컬럼들을 가로를 기준으로 정렬한다. `justify-context` 속성을 이용한다.

```html
<div class="row row-h-start"/>
<div class="row row-h-center"/>
<div class="row row-h-end"/>
<div class="row row-h-around"/>
<div class="row row-h-between"/>
```

### order

컬럼의 순서를 변경할때 사용된다. 여기서 추가로 반응형으로 스크린 사이즈에 따라 순서를 바꿀 수 있다.  
최대 12까지 지정할 수 있으며 더 높은숫자나 특별한 숫자를 사용하고 싶다면 직접 스타일을 넣어라.

```html
<div class="row row-gutter">
	<div class="order-1 order-md-2">col</div>
	<div class="order-2 order-md-1">col</div>
</div>
```

### wrapper

`.row-gutter`가 적용된 그리드 레이아웃을 감싸기 위한 용도로 만들어졌다. `.row-gutter`를 적용하면 사이드가 돌출되는 부분을 `overflow: hidden;`속성을 가리기 위한 용도로 사용할 수 있다.

```html
<div class="row-wrap">
	<div class="row row-gutter"/>
</div>
```


## typography.scss


## forms.scss


## table.scss


## fonts.scss


## etc.scss
