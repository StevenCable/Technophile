function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
}
Phone.prototype.callPhone = function (phoneNumber){
    return this.phoneNumber + " calls " + phoneNumber;
  };

// var android = new Phone("867-5309");
// console.log(android);

module.exports = Phone; 