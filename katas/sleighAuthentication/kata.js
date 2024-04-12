// #1
// function Sleigh() {}

// Sleigh.prototype.authenticate = function(name, password) {
//   // TODO
//   const n = "Santa Claus";
//   const p = "Ho Ho Ho!";
//   return name == n && p == password
// };

// #2
function Sleigh() {
    this.name = "Santa Claus";
    this.password = "Ho Ho Ho!";
}
  
Sleigh.prototype.authenticate = function(name, password) {
    return this.name == name && this.password == password;
};