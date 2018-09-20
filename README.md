# Create your amazing placeholder

[See a demo.](https://happyjayxin.github.io/ColorPlaceholder/)

## Usage

### html
```html
<input type="text" id="name">

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
<script src="jquery.placeholder.min.js"></script>
```
### css
```css
#name{
    width: 200px;
}
```
### jquery
```js
$('#name').ColorPlaceholder();


$('#name').ColorPlaceholder({
   text:'快點告訴我你的名子'
});


$('#name').ColorPlaceholder({
   color:'#45aaf2',
   text:'快點告訴我你的名子'
});
```
