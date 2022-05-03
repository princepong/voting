fetch("./companyList.json")
  .then((response) => response.json())
  .then(() => appendData2())
  .then((data) => console.log(data));

function appendData2(data) {
  let imageLink = document.getElementById("myData");
  for (let i = 0; i < data.length; i++) {
    let imgSrc = document.createElement("div");
    imgSrc.src = data[i].name;
    imgSrc.className = "rounded";
    imageLink.appendChild(imgSrc);
  }
}
