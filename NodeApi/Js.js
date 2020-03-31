//How to preserve the immutability on my heroes list? (map, reduce and filter)
//1. Get heroes who are not evils
//2. Print Unique family names
//3. Print Hero Names from given objects, and append sir in each of them before printing

const heroes = [
     { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
     { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
     { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
     { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
     { name: 'Batman',         family: 'DC Comics', isEvil: false },
     { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
     { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
     { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
     { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
   ]