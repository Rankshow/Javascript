const dogs = [
    { weight: 22, curFood: 250, owner: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owner: ['Matilda'] },
    { weight: 13, curFood: 340, owner: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owner: ['Micheal'] },
  ];
  // 1 looping
   dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)))
   console.log(dogs);
  
  //  2.
  const dogSarah = dogs.find(dog => dog.owner.includes('Sarah'))
  console.log(dogSarah)
  console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'too much' : 'too little' } `)
  // 3
  
  const ownersEaTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owner);
  console.log(ownersEaTooMuch);
  
  const ownersEaTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owner);
  console.log(ownersEaTooLittle);
  
  console.log(`${ownersEaTooMuch.join(' and ')}'s eat too much`);
  console.log(`${ownersEaTooLittle.join(' and ')}'s eat too little`);
  // 5
  console.log(dogs.some(dog => dog.curFood === dog.recFood));
  
  // 6
  const checkeatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
  console.log(dogs.some(checkeatingOkay));
  
  // 7
  console.log(dogs.filter(checkeatingOkay))
  
  // 8
  const dogSorted = dogs.slice().sort((a, b) => b.recFood - a.recFood);
  console.log(dogSorted)