function getHighest(str, k) {
  const len = str.length;
  const stack = [str[0]];
  let top = 0;

  for (let i = 1; i < len; i++) {
    if (str[i] <= stack[top]) {
      stack.push(str[i]);
      top++;
    } else {
      while (k > 0 && top >= 0) {
        stack.pop();
        top--;
        k--;
      }
      stack.push(str[i]);
      top++;
    }
  }
  console.log(stack.join(""));
}

getHighest("462839", 5);
