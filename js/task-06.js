const inputEl = document.querySelector("#validation-input");

function onInputBlur () {
  console.log(this.dataset);
  if ( this.dataset.length == this.value.length ) {
    this.classList.remove("invalid");
    this.classList.add( "valid" );
  } 
  else {
    this.classList.remove("valid");
    this.classList.add( "invalid" );
  }
  // inputEl.dataset.length == inputEl.value.length ? inputEl.classList.add("valid") : inputEl.classList.add("invalid");
}

inputEl.addEventListener("blur", onInputBlur);
