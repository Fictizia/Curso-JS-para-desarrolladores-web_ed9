 ## The Ever-Present Event, Whether You Like it or Not

 ### The event is always present, even when you don't provide a name:
```
$(".foo").on("click", function(){
  alert( arguments[0].type );
});

```

- That is the same as saying this:
```
$(".foo").on("click", function(event){
  alert( event.type );
});
```
The event object is already being passed to your callback (whether your provide a name for it or not), you can choose to not use it if you like. For instance, if we looked to a jQuery onClick method:
```
$(".foo").on("click", function(){
  /* Do stuff */
});
```
Making Use of It

You'll note that I have no event object referenced in my callback. I'm not required to. However, if I want to use it, for whatever purpose, I should give it a name:
```
$(".foo").on("click", function(myEvent){
  myEvent.preventDefault();
  myEvent.stopPropagation();
});
```
