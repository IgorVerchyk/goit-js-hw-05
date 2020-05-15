const Account = function (user) {
  this.login = user.login;
  this.email = user.email;
};
Account.prototype.getInfo = function () {
  console.log(`login:${this.login}, Email:${this.email}`);
};
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
