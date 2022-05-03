import express from "express";
import { Request, Response } from "express";
import path from "path";
import { getStockData } from "./helper/stock";
import fs from "fs";

const app = express();
const PORT = 8080;
let votes: Vote[];

interface Vote {
  name: string;
  email: string;
  hkid: string;
  tel: string;
  selectedStock: string;
}
votes = JSON.parse(fs.readFileSync("data/vote.json", "utf8"));
console.table(votes);

app.use(express.json());
app.get("/", function (req: Request, res: Response) {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});
app.get("/thank-you", function (req: Request, res: Response) {
  res.sendFile(path.resolve(__dirname, "public/thank-you.html"));
});

app.get("/stock-data", (req, res) => {
  res.json(getStockData());
});

app.post("/vote", (req, res) => {
  let { name, email, tel, hkid, selectedStock } = req.body;
  console.log({ name, email, tel, hkid, selectedStock });
  console.log("inputName", { tel });
  console.log(votes);
  for (let i = 0; i < votes.length; i++) {
    let telList = votes[i].tel;
    console.log(telList);
    let arr = [];
    arr.push(telList);
    console.log(`${arr[i]}`);
  }

  if (!name || !email || !tel || !hkid) {
    res.status(400).json({
      error: "Invalid voting input",
    });

    return;
  }

  votes.push({ name, email, tel, hkid, selectedStock });
  fs.writeFileSync("data/vote.json", JSON.stringify(votes));

  res.json({
    message: "投票成功",
  });
});

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
