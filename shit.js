function debounce(fn) {
  let timeout;

  return function() {

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn();
    }, 200);

  };
}

const betterFn = debounce(checkSlide);