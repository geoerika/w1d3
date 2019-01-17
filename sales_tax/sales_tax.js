const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = (salesData, taxRates) => {

  let results = {};
  console.log('results:', results);
  for(sale of salesData) {
    console.log('sale.name:', sale.name);
    let company = sale.name;
    if (!results[company]) {
      results[company] = {};
      results[company].totalSales = 0;
      results[company].totalTaxes = 0;
    }
  }

  if (salesData !== {}) {
    for(sale of salesData) {
      let company = sale.name;
      for(tax in taxRates) {
        console.log('tax:', tax);
        if (sale.province === tax) {
          results[company].totalSales = results[company].totalSales + amount(sale.sales, 1);
          results[company].totalTaxes = results[company].totalTaxes + amount(sale.sales, salesTaxRates[tax]);
        }
      }
    }
  }
  return results;
}

const amount = (array, rate) => {
  console.log("array:", array);
  let total = 0
  if (array !== []) {
    array.forEach((amount) => {
      console.log('amount:', amount);
      total = total + amount * rate;
    })
  }
  return total;
}


let results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
