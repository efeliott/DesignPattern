const add = (a, b) => {
    return a + b;
};

module.exports = { add };

const multiplyArray = (numbers) => {
    if (!Array.isArray(numbers)) {
      throw new Error('Argument must be an array of numbers');
    }
  
    if (numbers.length === 0) {
      return 0;
    }
  
    return numbers.reduce((acc, curr) => acc * curr, 1);
}
  
module.exports = { multiplyArray };

const calculateFactorial = (n) => {
    if (typeof n !== 'number' || n < 0) {
      throw new Error('Input must be a non-negative number');
    }
  
    if (n === 0 || n === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  
    return result;
}
  
module.exports = { calculateFactorial };

const transformUsers = (users) => {
  if(!Array.isArray(users)){
    throw new Error('Users must be provided.');
  }

  users.forEach(users => {
    if (typeof(users) === 'string'){
      throw new Error('Users must be provided.');
    }
  })

  if(users.length > 3){
    throw new Error('Too many users provided.');
  }

  const trasformedUsers = users.map(obj => {
    const { id, body: { userName, userAge } } = obj;
    return {
      id,
      name: userName,
      age: userAge,
    };
  });
  return trasformedUsers;
}

module.exports = { transformUsers };