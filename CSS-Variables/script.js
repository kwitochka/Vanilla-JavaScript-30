const inputs = document.querySelectorAll('input');// return NodeList, not array
//dataset - object that keeps everything with data-
function handleUpdate () {
  //taking 'px' from data-sizing
  const suffix = this.dataset.sizing || '';
  //setting updating style in html (the one in :root of css)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


