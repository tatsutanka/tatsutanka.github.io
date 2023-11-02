// pmt = pagamento mensal
//  @param np n ´u mero de presta ¸c ~o es .
//  @param pv valor do empr ´e stimo .
//  @param t taxa de juros .
//  @param pmt pagamento mensal .
//  @return uma matriz cujas linhas s ~a o listas com :
//  ( mes , presta ¸c ~ao , juros , amortiza ¸c ~ao , saldo devedor )
//  Utilizar para fazer sumir as caixas
function priceTable(np, pv, t, pmt) {
  let table = [];
  let end = [];
  pt = jt = at = 0;
  for (let i = 0; i < np; i++) {
    juros = pv * t;
    amortizacao = pmt - juros;
    saldo = pv - amortizacao;
    pv = saldo;
    pt += pmt;
    jt += juros;
    at += amortizacao;
    table.push({
      numero: i + 1,
      pmt: pmt.toFixed(2),
      juros: juros.toFixed(2),
      amortizacao: amortizacao.toFixed(2),
      saldo: saldo.toFixed(2),
    });
  }
  end.push({name:"Total", pt:pt, jt:jt, at:at, saldo:0});
  return table;
}

// coeficiente financeiro
// @param p: parcelas
// @param t: taxa
function CF(p, t) {
  return t / (1 - 1/((1 + t) ** p));
}
function PMT(pv,cf){
  return pv * cf
}
var table = [];
var total = [];
var data_exemple = [
  {
    numero: 0.,
    pmt: 0.,
    juros: 0.,
    amortizacao: 0.,
    saldo: 0.,
  },
];
$(document).ready(function () {
  $("#price-table").DataTable({
    data: data_exemple,
    columns: [
      { data: "numero", title: "Numero" },
      { data: "pmt", title: "Prestação" },
      { data: "juros", title: "juros" },
      { data: "amortizacao", title: "Amortização" },
      { data: "saldo", title: "Saldo" },
    ],
  });
  // $("#price-table-form").hide();
});

$("#submitButton").click(function () {
  var errorMessage = "";
  let ipp = $("#ipp").val();
  let itax = $("#itax").val() * 0.01;
  let ipv = $("#ipv").val();
  let np = $("#parc").val();
  let pb = $("#ipb").val();
  console.log("ipp:", ipp);
  console.log("itax:", itax);
  console.log("ipv:", ipv);
  console.log("np:", np);
  console.log("pb:", pb);
  console.log("Entrou dentro do click");
  if (itax == 0 && ipp == 0) {
    errorMessage +=
      "<p>Taxa de juros e valor final não podem ser ambos nulos.</p>";
  }
  if (itax == 0 && ipv == 0) {
    errorMessage +=
      "<p>Taxa de juros e valor financiado não podem ser ambos nulos.</p>";
  }
  if (ipv == 0 && ipp == 0) {
    errorMessage +=
      "<p>Valor financiado e valor final não podem ser ambos nulos.</p>";
  }
  if (errorMessage != "") {
    $("#errorMessage").html(errorMessage);
    $("#errorMessage").show();
    $("#successMessage").hide();
    event.preventDefault();
  } else {
    $("#successMessage").show();
    $("#errorMessage").hide();
    pmt = PMT(ipv,CF(np,itax))
    table = priceTable(np, ipv, itax, pmt);
    console.log(table);
    $("#price-table").DataTable().clear().draw();
    console.log("limpou");
    $("#price-table").DataTable().rows.add(table).draw();
    // $("#price-table-form").show();
    // $("#cdcfieldset").hide();
  }
});

//making dragabble
$(function () {
  $(".draggable").draggable();
});

webshims.setOptions("forms-ext", {
  replaceUI: "auto",
  types: "number",
});
webshims.polyfill("forms forms-ext");

function getINterest() {
  let t1 = x / y;
  let t = 0;
  let n = 0;
}
