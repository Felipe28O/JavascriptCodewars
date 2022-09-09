function name (_firstName, _lastName) {
    function getFirstName () {
        return _firstName;
    } 
    function getLastName () {
        return _lastName;
    }
    function getFullName () {
        return `${_firstName} ${_lastName} `;
    }
    function setFirtsName (firstName) {
        _firstName = firstName;
    }
    function setLastName (lastName) {
        _lastName = lastName
    }
    function setFullName (fullName) {
        let arr = fullName.split(" ");
        _firstName = arr[0];
        _lastName = arr[1];
    }

    return {
        getFirstName,
        getFullName,
        getLastName,
        setFirtsName,
        setFullName,
        setLastName
    }
}


let carlos = new name("carlos", "ruiz");
carlos.setFirtsName("mario")
let nombre = carlos.getFirstName();

console.log(nombre);

carlos.setFirtsName("Guapo")

console.log(carlos.getFirstName());




function persona ({
    _firstName: firstName,
    _lastName: lastName,
    _age:age,
    _sex: sex
}) {
    console.log(arguments)

    this.getFirstName = () => _firstName,
    this.getLastName = () => _lastName,
    this.getFullName = () => _firstName + " " + _lastName;
    this.getAge = () => _age;
    this.getSex = () => _sex;
    this.getFullInformation = () => {
      return {
          _age,
          _sex,
          _firstName ,
          _lastName,

      }
    }
    this.setFirtsName = (firstName) => firstName 
    }





let charles = new persona(_firstName = "charles", _lastName = "leclerc", _sex = "male", _age = 32)

console.log(charles.getFullInformation());

console.log(Object.keys(charles))



const Person = function(firstAndLast) {
    // Only change code below this line
    let arr = firstAndLast.split(" ");
    let _firstName = arr[0];
    let _lastName = arr[1];
  
    this.getFirstName = () => _firstName;
    this.getLastName = () => _lastName;
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return _firstName + " " + _lastName;
    };
    this.setFirstName = (value) => _firstName = value;
    this.setLastName =  (value) => _lastName  = value;
    this.setFullName = (fName) => {
      narr = fName.split(" ");
      _firstName = narr[0];
      _lastName = narr[1];
    }
  };
  
  const bob = new Person('Bob Ross');
  bob.setFullName("Ross chastain");

  console.log(bob.getFirstName())

  console.log(Object.keys(bob).length)