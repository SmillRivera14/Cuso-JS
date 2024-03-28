let bobsFollowers=['Smill',' ','h',''];
let tinasFollowers=['Smill',' ','h'];
let mutualFollowers=[];

for(i=0; i<bobsFollowers.length; i++){
  for(j=0; j<tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}

console.log(mutualFollowers);