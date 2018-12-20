# CSS Library

공통적으로 사용하는 css library 영역.  
파일 이름을 섹션으로 지정하고 그 파일에 있는 내용물에 대한 설명을 볼 수 있다.

소스파일 안에서 주석을 상세하게 적어둘 수 있겠지만 `scss`파일이 한글이 들어가면 문제가 생겼던 경험이 있고, 소스를 복사해서 사용하기 때문에 소스에서의 주석은 간단하게 표기하고, 문서에서 설명을 자세하게 다룹니다.


## Using guide

서비스를 위한 공통적인 스타일시트를 만들때 scss 에서는 `app.scss` 파일 하나를 만들어서 다른 scss 파일들을 import 해올것이다.  
여기에서 필요한 scss들을 다음과 같은 방법으로 불러와서 사용할 수 있다.

```scss
@import "./variables";
@import "./mixins";
@import "./fonts";
@import "./elements";
@import "./typography";
@import "./grid";
@import "./forms";
@import "./table";
@import "./etc";
```


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

- `color`: 
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
