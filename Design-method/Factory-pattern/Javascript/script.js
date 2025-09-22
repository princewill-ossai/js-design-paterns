function createCustomer(fname, lname, email, pnum, city, type) {
  return {
    fname,
    lname,
    email,
    pnum,
    city,
    type
  };
}

function createRegularCustomer(fname, lname, email, pnum, city) {
  return new Customer(fname, lname, email, pnum, city, "regular");
}

function createSeniorCustomer(fname, lname, email, pnum, city) {
  return new Customer(fname, lname, email, pnum, city, "senior");
}

class Customer {
  constructor(fname, lname, email, pnum, city, type) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.pnum = pnum;
    this.city = city;
    this.type = type;
  }
}

const btn = document.getElementById("btn");
if (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pnum = document.getElementById("pnum").value;
    const city = document.getElementById("city").value
    const type = document.getElementById("type").value;

    const customer = createCustomer(fname, lname, email, pnum, city, type);

    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    const customerToSave = { ...customer };
    customers.push(customerToSave);
    localStorage.setItem("customers", JSON.stringify(customers));
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const tableData = document.getElementById("table-body");
  if (tableData) {
    const customers = JSON.parse(localStorage.getItem("customers")) || [];
    customers.forEach((customer) => {
      tableData.innerHTML += `
        <tr>
             <td>${customer.fname}</td>
             <td>${customer.lname}</td>
             <td>${customer.email}</td>
             <td>${customer.pnum}</td>
             <td>${customer.city}</td>
             <td>${customer.type}</td>
        </tr>
      `;
    });
  }
});
