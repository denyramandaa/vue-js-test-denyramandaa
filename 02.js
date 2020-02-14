function reverseString(a){
  const split = a.split(" "),
        reverse = split.reverse(),
        join = reverse.join(" ");

  return join;
}
console.log(reverseString('saya ingin makan nasi goreng'));