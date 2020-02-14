function duplicateRemover(){
  const city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung'],
        filtered = [];

  for(var i=0;i<city.length;i++){
    if(!filtered.includes(city[i])) filtered.push(city[i]);
  }
  return filtered;
}
console.log(duplicateRemover());