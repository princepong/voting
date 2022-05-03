let stockOptions;

async function fetchStockData() {
  let res = await fetch("/stock-data");
  let stockData = await res.json();
  return stockData;
}

async function initDropDownStock() {
  result = await fetchStockData();
  stockOptions = result.stockOptions;

  let dropdown = document.querySelector("form [name=fav-stock]");
  for (let i = 0; i < stockOptions.length; i++) {
    let companyOption = document.createElement("option");
    companyOption.innerText = `${stockOptions[i].value}`;
    companyOption.value = stockOptions[i].value;
    dropdown.appendChild(companyOption);
  }

  $("form [name=fav-stock-advanced]").autocomplete({
    source: stockOptions,
    delay: 300,
    minLength: 0,
    close: function (event, ui) {
      console.log("closed");
      $("form [name=fav-stock]").val($("form [name=fav-stock-advanced]").val());
      triggerElEvent("form [name=fav-stock-advanced]");
      triggerElEvent("form [name=fav-stock]");
    },
    appendTo: "#fav-stock-advanced-result",
  });
}

initDropDownStock();
