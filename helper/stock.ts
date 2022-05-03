import XLSX from "xlsx";

interface CompanyName {
  name: string;
}
interface StockCode {
  code: string;
}

let workbook = XLSX.readFile("data/stock_data.xlsx");
const companyNameWS = workbook.Sheets["company_name"];
const companyNames: CompanyName[] = XLSX.utils.sheet_to_json(companyNameWS, {
  header: 1,
});
const stockCodeWS = workbook.Sheets["stock_code"];
const stockCodes: StockCode[] = XLSX.utils.sheet_to_json(stockCodeWS, {
  header: 1,
});

export function getStockData() {
  if (companyNames.length != stockCodes.length) {
    throw new Error("Data length not matched");
  }
  let stock2d = [companyNames, stockCodes];
  let stockOptions = [];
  for (let j = 0; j < stock2d[0].length; j++) {
    let stockOption = {
      value: `${stockCodes[j]} - ${companyNames[j]}`,
    };
    stockOptions.push(stockOption);
  }
  console.log({
    stock2d,
    stockOptions,
  });
  return {
    stock2d,
    stockOptions,
  };
}
// getStockData();
