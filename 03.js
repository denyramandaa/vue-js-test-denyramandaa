function mirrorString(a){
  const split = a.split(""),
        reverse = split.reverse(),
        join = reverse.join("");

  return a+join;
}
console.log(mirrorString('---ccv'));