## grid.scss

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

만약 `.row-wrap` 엘리먼트의 영역을 벗어나는 자식 요소가 있다면 `overflow: hidden;` 속성 때문에 요소가 잘려서 안보이기 때문에 `.row-wrap` 클래스를 사용하지 않는것이 좋다.
