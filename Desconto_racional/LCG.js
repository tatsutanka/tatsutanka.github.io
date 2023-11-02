// np = numero de pagamentos
// t = interest rate
// pv = initial price
// pp = final price
//

// var data = [
//   {
//     name: "Tiger Nixon",
//     position: "System Architect",
//     salary: "$3,120",
//     start_date: "2011/04/25",
//     office: "Edinburgh",
//     extn: "5421",
//   },
//   {
//     name: "Garrett Winters",
//     position: "Director",
//     salary: "$5,300",
//     start_date: "2011/07/25",
//     office: "Edinburgh",
//     extn: "8422",
//   },
// ];

// $(document).ready(function () {
//   $("#price-table").DataTable({
//     data: data,
//     columns: [
//       { data: "name" },
//       { data: "position" },
//       { data: "salary" },
//       { data: "office" },
//     ],
//   });
// });

function priceTable(np, pv, t, pmt) {
  pt = jt = at = 0;
  for (let i = 0; i < np; i++) {
    juros = pv * t;
    amortização = pmt - juros;
    saldo = pv - amortização;
    pv = saldo;
    pt += pmt;
    jt += juros;
    at += amortização;
    $("#price-table").append([i + 1, juros, amortização, saldo]);
  }
  $("#price-table").append(["Total", pt, jt, at, 0]);
  return data;
}
