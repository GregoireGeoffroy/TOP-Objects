let user = {
    name: "John",
    surname: "Smith",
}
user.name = "Pete";
delete user.name;


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  console.log(sum); // 390



// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };


