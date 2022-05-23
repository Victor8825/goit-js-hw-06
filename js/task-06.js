const inputEl = document.querySelector("#validation-input");

function onInputBlur () {
  if ( this.dataset.length == this.value.length ) {
    this.classList.remove("invalid");
    this.classList.add( "valid" );
  } 
  else {
    this.classList.remove("valid");
    this.classList.add( "invalid" );
  }
}

inputEl.addEventListener("blur", onInputBlur);
