

function createCustomer(fname, lname, email, pnum, city) {
  return {
    fname,
    lname,
    email,
    pnum,
    city,
    customerInfo() {
      console.log(`First Name: ${this.fname}
      Last Name: ${this.lname}
      Email: ${this.email}
      Phone Number: ${this.pnum}
      City: ${this.city}`);
    }
  };

}

document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const pnum = document.getElementById("pnum").value;
  const city = document.getElementById("city").value;
  const tableData = document.getElementById("table-body");


  const customer = createCustomer(fname, lname, email, pnum, city);
  customer.customerInfo();
  const customerToSave = { ...customer };
  delete customerToSave.customerInfo;
  localStorage.setItem("customer", JSON.stringify(customerToSave));

  localStorage.getItem("customer") && console.log(JSON.parse(localStorage.getItem("customer")));

});

document.addEventListener("DOMContentLoaded", function () {
  const tableData = document.getElementById("table-body");
  const data = localStorage.getItem("customer") && JSON.parse(localStorage.getItem("customer"));
  if (data) {
    tableData.innerHTML += `
      <tr>
           <td>${data.fname}</td>
           <td>${data.lname}</td>
           <td>${data.email}</td>
           <td>${data.pnum}</td>
           <td>${data.city}</td>
      </tr>
      `
  }
});