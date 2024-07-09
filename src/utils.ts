export const shuffle = (array: any[]): any[] => {
  const temp = [...array];
  let currentIndex = temp.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [temp[currentIndex], temp[randomIndex]] = [
      temp[randomIndex],
      temp[currentIndex],
    ];
  }

  return temp;
};