// const form = document.querySelector("#form");
// const inputName = document.querySelector("#name");
// const inputTel = document.querySelector("#tel");
// const inputHkid = document.querySelector("#hkid");
// const inputStock = document.querySelector("#stocks");
// const inputAge = document.querySelector("#age");
// const inputTerm = document.querySelector("#gridCheck");
// const errorsContainer = document.querySelector(".errors");
// const errorsList = document.querySelector(".errors-list");
// const reg = /[\u4e00-\u9fa5]/;
// form.addEventListener("submit", (e) => {
// const errorMessages = [];
// clearErrors();
// if (!reg.test(inputName.value)) {
// errorMessages.push("輸入的姓名必須是中文");
// }
// if (!inputTel.value.length < 8) {
// errorMessages.push("輸入的電話必須是 8 個號碼");
// }
// if (!inputHkid.value.length < 5) {
// errorMessages.push("輸入的身份證必須是數字的頭 4 個字");
// }
// if ((inputStock.value = null)) {
// errorMessages.push("請選擇你的心水股票");
// }
// if (inputAge.value.number < 18) {
// errorMessages.push("投票人必須件滿 18 歲");
// }
// if (!termsInput.checked) {
// errorMessages.push("You must accept the terms");
// }
// if (errorMessages.length > 0) {
// e.preventDefault();
// showErrors(errorMessages);
// }
// });

// function clearErrors() {
// while (errorsList.children[0] != null) {
// errorsList.removeChild(errorsList.children[0]);
// }
// errorsContainer.classList.remove("show");
// }

// function showErrors(errorMessages) {
// errorMessages.forEach((errorMessage) => {
// const li = document.createElement("li");
// li.innerText = errorMessage;
// errorsList.appendChild(li);
// });
// errorsContainer.classList.add("show");
// }

///////////////////////////////////////////////////////////

<form class="row g-3" form action="thank-you.html" id="form">
        <div class="errors col-md-12">
            <h3 class="error-title">Error</h3>
            <ul class="errors-list">
            </ul>
        </div>
        <div class="col-md-6">
            <label for="inputName" class="form-label">姓名</label>
            <input type="text" class="form-control" id="name" name="name">
        </div>
        <div class="col-md-6">
            <label for="inputTel" class="form-label">電話</label>
            <input type="tel" class="form-control" id="tel" name="tel">
        </div>
        <div class="col-md-6">
            <label for="inputHkid" class="form-label">身份證號碼 (頭4個字)</label>
            <input type="text" class="form-control" id="hkid" name="hkid">
        </div>
        <div class="col-md-6">
            <label for="inputStocks" class="form-label">心水股份</label>
            <select id="stocks" class="form-select">
                <option selected>Choose...</option>

            </select>
        </div>

        <!-- <form autocomplete="off" action="/action_page.php">
            <div class="autocomplete" style="width:500px;">
                <input id="myInput" type="text" name="myCountry" placeholder="Country">
            </div>
            <input type="submit" style="width:100px; height:50px">
        </form> -->


        <div class="col-md-6">
            <label for="inputAge" class="form-label">年齡 (投票人必須年滿18歲)</label>
            <input type="number" class="form-control" id="age" name="age">
        </div>

        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    <a href="">收集個人資料聲明</a>
                </label>
            </div>
        </div>
        <div class="col-12">
            <button type="submit" id="formSubmit" class="btn btn-primary">提交投票</button>
        </div>
    </form>

    ///////////////////////////////

     // const reg = /[\u4e00-\u9fa5]/;
        // let cnNameElem = $('form.example #cnName')
        // validator.validator.custom = function (cnNameElem, event) {
        //     if ($(cnNameElem).is('[name=cnName]') && !reg.test($(cnNameElem).value)) {
        //         return 'input chinese character please';
        //     }
        // }


        ///////////////////////////////////////
        const form = document.querySelector("#form");

const inputName = document.querySelector("#name");
const inputTel = document.querySelector("#tel");
const inputHkid = document.querySelector("#hkid");
const inputStock = document.querySelector("#stocks");
const inputAge = document.querySelector("#age");
const inputTerm = document.querySelector("#gridCheck");
const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");
const reg = /[\u4e00-\u9fa5]/;
form.addEventListener("submit", (e) => {
const errorMessages = [];
clearErrors();
if (!reg.test(inputName.value)) {
errorMessages.push("輸入的姓名必須是中文");
}
if (!inputTel.value.length < 8) {
errorMessages.push("輸入的電話必須是 8 個號碼");
}
if (!inputHkid.value.length < 5) {
errorMessages.push("輸入的身份證必須是數字的頭 4 個字");
}
if ((inputStock.value = null)) {
errorMessages.push("請選擇你的心水股票");
}
if (inputAge.value.number < 18) {
errorMessages.push("投票人必須件滿 18 歲");
}
if (!termsInput.checked) {
errorMessages.push("You must accept the terms");
}
if (errorMessages.length > 0) {
e.preventDefault();
showErrors(errorMessages);
}
});

function clearErrors() {
while (errorsList.children[0] != null) {
errorsList.removeChild(errorsList.children[0]);
}
errorsContainer.classList.remove("show");
}

function showErrors(errorMessages) {
errorMessages.forEach((errorMessage) => {
const li = document.createElement("li");
li.innerText = errorMessage;
errorsList.appendChild(li);
});
errorsContainer.classList.add("show");
}

let name = [
"長和",
"中電控股",
"香港中華煤氣",
"滙豐控股",
"電能實業",
"恒生銀行",
"恒基地產",
"新鴻基地產",
"新世界發展",
"銀河娛樂",
"港鐵公司",
"恒隆地產",
"吉利汽車",
"阿里健康",
"中信股份",
"萬洲國際",
"華潤啤酒",
"中國石油化工",
"香港交易所",
"創科實業",
"中國海外發展",
"騰訊控股",
"中國聯通",
"領展房產基金",
"中國石油",
"信義玻璃",
"中國海洋石油",
"建設銀行",
"中國移動",
"龍湖集團",
"信義光能",
"聯想集團",
"長江基建集團",
"恒安國際",
"石藥集團",
"華潤置地",
"長實集團",
"中國生物製藥",
"比亞迪股份",
"友邦保險",
"工商銀行",
"小米集團",
"百威亞太",
"金沙中國",
"九龍倉置業",
"碧桂園",
"瑞聲科技",
"安踏體育",
"藥明生物",
"申洲國際",
"中國平安",
"蒙牛乳業",
"李寧",
"舜宇光學科技",
"中銀香港",
"中國人壽",
"新奧能源",
"美團",
"招商銀行",
"中國銀行",
"碧桂園服務",
"海底撈",
"京東集團",
"農夫山泉",
"阿里巴巴",
"網易",
];
let code = [
"00001",
"00002",
"00003",
"00005",
"00006",
"00011",
"00012",
"00016",
"00017",
"00027",
"00066",
"00101",
"00175",
"00241",
"00267",
"00288",
"00291",
"00386",
"00388",
"00669",
"00688",
"00700",
"00762",
"00823",
"00857",
"00868",
"00883",
"00939",
"00941",
"00960",
"00968",
"00992",
"01038",
"01044",
"01093",
"01109",
"01113",
"01177",
"01211",
"01299",
"01398",
"01810",
"01876",
"01928",
"01997",
"02007",
"02018",
"02020",
"02269",
"02313",
"02318",
"02319",
"02331",
"02382",
"02388",
"02628",
"02688",
"03690",
"03968",
"03988",
"06098",
"06862",
"09618",
"09633",
"09988",
"09999",
];
let arr2d = [name, code];
let myJson = [];

for (let j = 0; j < arr2d[0].length; j++) {
let myObj = { 公司名稱: name[j], 股票號碼: code[j] };
// let myObj = { 1: name[j], 2: code[j] };
myJson.push(myObj);
}

// let companyList = JSON.stringify(myJson);
let dropdown = document.getElementById("stocks");
for (let i = 0; i < 66; i++) {
let company = document.createElement("option");
company.innerText = JSON.stringify(myJson[i]);

dropdown.appendChild(company);
}

//autocompleted
function autocomplete(inp, arr) {
/_the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:_/
var currentFocus;
/_execute a function when someone writes in the text field:_/
inp.addEventListener("input", function (e) {
var a,
b,
i,
val = this.value;
/_close any already open lists of autocompleted values_/
closeAllLists();
if (!val) {
return false;
}
currentFocus = -1;
/_create a DIV element that will contain the items (values):_/
a = document.createElement("DIV");
a.setAttribute("id", this.id + "autocomplete-list");
a.setAttribute("class", "autocomplete-items");
/_append the DIV element as a child of the autocomplete container:_/
this.parentNode.appendChild(a);
/_for each item in the array..._/
for (i = 0; i < arr.length; i++) {
/_check if the item starts with the same letters as the text field value:_/
if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
/_create a DIV element for each matching element:_/
b = document.createElement("DIV");
/_make the matching letters bold:_/
b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
b.innerHTML += arr[i].substr(val.length);
/_insert a input field that will hold the current array item's value:_/
b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
/_execute a function when someone clicks on the item value (DIV element):_/
b.addEventListener("click", function (e) {
/_insert the value for the autocomplete text field:_/
inp.value = this.getElementsByTagName("input")[0].value;
/_close the list of autocompleted values,
(or any other open lists of autocompleted values:_/
closeAllLists();
});
a.appendChild(b);
}
}
});
/_execute a function presses a key on the keyboard:_/
inp.addEventListener("keydown", function (e) {
var x = document.getElementById(this.id + "autocomplete-list");
if (x) x = x.getElementsByTagName("div");
if (e.keyCode == 40) {
/_If the arrow DOWN key is pressed,
increase the currentFocus variable:_/
currentFocus++;
/_and and make the current item more visible:_/
addActive(x);
} else if (e.keyCode == 38) {
//up
/_If the arrow UP key is pressed,
decrease the currentFocus variable:_/
currentFocus--;
/_and and make the current item more visible:_/
addActive(x);
} else if (e.keyCode == 13) {
/_If the ENTER key is pressed, prevent the form from being submitted,_/
e.preventDefault();
if (currentFocus > -1) {
/_and simulate a click on the "active" item:_/
if (x) x[currentFocus].click();
}
}
});
function addActive(x) {
/_a function to classify an item as "active":_/
if (!x) return false;
/_start by removing the "active" class on all items:_/
removeActive(x);
if (currentFocus >= x.length) currentFocus = 0;
if (currentFocus < 0) currentFocus = x.length - 1;
/_add class "autocomplete-active":_/
x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
/_a function to remove the "active" class from all autocomplete items:_/
for (var i = 0; i < x.length; i++) {
x[i].classList.remove("autocomplete-active");
}
}
function closeAllLists(elmnt) {
/_close all autocomplete lists in the document,
except the one passed as an argument:_/
var x = document.getElementsByClassName("autocomplete-items");
for (var i = 0; i < x.length; i++) {
if (elmnt != x[i] && elmnt != inp) {
x[i].parentNode.removeChild(x[i]);
}
}
}
/_execute a function when someone clicks in the document:_/
document.addEventListener("click", function (e) {
closeAllLists(e.target);
});
}

/_An array containing all the country names in the world:_/
var countries = [
"Afghanistan",
"Albania",
"Algeria",
"Andorra",
"Angola",
"Anguilla",
"Antigua & Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bermuda",
"Bhutan",
"Bolivia",
"Bosnia & Herzegovina",
"Botswana",
"Brazil",
"British Virgin Islands",
"Brunei",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cambodia",
"Cameroon",
"Canada",
"Cape Verde",
"Cayman Islands",
"Central Arfrican Republic",
"Chad",
"Chile",
"China",
"Colombia",
"Congo",
"Cook Islands",
"Costa Rica",
"Cote D Ivoire",
"Croatia",
"Cuba",
"Curacao",
"Cyprus",
"Czech Republic",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Ethiopia",
"Falkland Islands",
"Faroe Islands",
"Fiji",
"Finland",
"France",
"French Polynesia",
"French West Indies",
"Gabon",
"Gambia",
"Georgia",
"Germany",
"Ghana",
"Gibraltar",
"Greece",
"Greenland",
"Grenada",
"Guam",
"Guatemala",
"Guernsey",
"Guinea",
"Guinea Bissau",
"Guyana",
"Haiti",
"Honduras",
"Hong Kong",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran",
"Iraq",
"Ireland",
"Isle of Man",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jersey",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Kosovo",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macau",
"Macedonia",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Mauritania",
"Mauritius",
"Mexico",
"Micronesia",
"Moldova",
"Monaco",
"Mongolia",
"Montenegro",
"Montserrat",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauro",
"Nepal",
"Netherlands",
"Netherlands Antilles",
"New Caledonia",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"North Korea",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Palestine",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Poland",
"Portugal",
"Puerto Rico",
"Qatar",
"Reunion",
"Romania",
"Russia",
"Rwanda",
"Saint Pierre & Miquelon",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Korea",
"South Sudan",
"Spain",
"Sri Lanka",
"St Kitts & Nevis",
"St Lucia",
"St Vincent",
"Sudan",
"Suriname",
"Swaziland",
"Sweden",
"Switzerland",
"Syria",
"Taiwan",
"Tajikistan",
"Tanzania",
"Thailand",
"Timor L'Este",
"Togo",
"Tonga",
"Trinidad & Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Turks & Caicos",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States of America",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Vatican City",
"Venezuela",
"Vietnam",
"Virgin Islands (US)",
"Yemen",
"Zambia",
"Zimbabwe",
];

/_initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:_/
autocomplete(document.getElementById("myInput"), countries);
