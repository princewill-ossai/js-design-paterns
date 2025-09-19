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

const btn = document.getElementById("btn");
if (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pnum = document.getElementById("pnum").value;
    const city = document.getElementById("city").value;

    const customer = createCustomer(fname, lname, email, pnum, city);
    customer.customerInfo();

    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    const customerToSave = { ...customer };
    delete customerToSave.customerInfo;
    customers.push(customerToSave);
    localStorage.setItem("customers", JSON.stringify(customers));
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const tableData = document.getElementById("table-body");
  if (tableData) {
    const customers = JSON.parse(localStorage.getItem("customers")) || [];
    customers.forEach(function (customer) {
      tableData.innerHTML += `
        <tr>
             <td>${customer.fname}</td>
             <td>${customer.lname}</td>
             <td>${customer.email}</td>
             <td>${customer.pnum}</td>
             <td>${customer.city}</td>
        </tr>
      `;
    });
  }
});