export const NumberOfPokemon = (number: number, requestLength: number) => {
  const length = number.toString().length;

  let temp = '';
  for (var i = 0; i < requestLength; i++) {
    if (length === requestLength - i) {
      temp += number.toString();
      break;
    }
    temp += '0';
  }

  return temp;
};

export const parseId = (url: string) => {
  let result = url.split('/');
  return result[result.length - 2];
};

export const setRandomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

export const setColor = (type: string) => {
  switch (type) {
    case 'hp':
      return '#D32F2F';
    case 'attack':
      return '#6D4C41';
    case 'defense':
      return '#212121';
    case 'special-attack':
      return '#EF6C00';
    case 'special-defense':
      return '#FFEE58';
    case 'speed':
      return '#4DD0E1';
    case 'accuracy':
      return '#00796B';
    case 'evasion':
      return '#6A1B9A';
  }
};

export const setBackground = (type: string) => {
  switch (type) {
    case 'normal':
    case 'water':
    case 'ice':
      return '#3F51B5';
    case 'fighting':
    case 'fire':
    case 'dragon':
      return '#E53935';
    case 'flying':
    case 'psychic':
    case 'shadow':
    case 'steel':
      return '#9E9E9E';
    case 'poison':
    case 'bug':
    case 'grass':
    case 'fairy':
      return '#388E3C';
    case 'rock':
    case 'ground':
    case 'ghost':
    case 'unknown':
      return '#5D4037';
    case 'dark':
      return '#fff';
    case 'electric':
      return '#FDD835';
  }
};
