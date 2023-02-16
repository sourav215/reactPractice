function timer() {
  for (var i = 1; i < 5; i++) {
    function close(i) {
      console.log("i", i);
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }
    close(i);
  }
}
timer();
