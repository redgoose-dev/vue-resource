## grid.scss

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
