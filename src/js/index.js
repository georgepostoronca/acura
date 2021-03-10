import SlimSelect from 'slim-select'

let selects = [].slice.call(document.querySelectorAll("select"));
selects.forEach((item) => {
  new SlimSelect({
    select: item
  });
})
