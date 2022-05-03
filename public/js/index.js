function setUpValidator() {
  let validator = $("form.example").jbvalidator({
    language: "js/en.json",
    successClass: true,
  });

  // let hkidElem = $('form.example #hkid')
  validator.validator.custom = function (el, event) {
    if ($(el).is("[name=hkid]") && $(el).val().length != 4) {
      return "請輸入身份證號碼的頭4個數字";
    }

    if ($(el).is("[name=tel]") && $(el).val().length != 15) {
      return "Invalid Tel";
    }
    if (
      $(el).is("[name=fav-stock]") &&
      ($(el).val() === null || $(el).val() === "null")
    ) {
      return "請選出適當的選項";
    }

    if ($(el).is("[name=fav-stock-advanced]")) {
      let result = stockOptions.find((stockOption) => {
        return stockOption.value === $(el).val().trim();
      });
      if (!result) {
        document.querySelector("form [name=fav-stock]").value = null;
        document
          .querySelector("form [name=fav-stock]")
          .dispatchEvent(new Event("input"));
        return "No match result";
      }
    }
  };
}

function triggerElEvent(queryString, event = "input") {
  if (!queryString) {
    return;
  }
  let el = document.querySelector(queryString);
  if (!el) {
    return;
  }
  el.dispatchEvent(new Event(event));
}

function defaultInput() {
  let form = document.querySelector("form");
  form.name.value = "我最喜愛";
  form.email.value = "test@test.com";
  form.hkid.value = "1234";
  form.tel.value = "(852) 1234-5678";
}

window.onload = initVotePage;
function initVotePage() {
  $("[name=tel]").mask("(999) 9999-9999");

  $("form [name=fav-stock]").on("change", () => {
    let favStockVal = $("form [name=fav-stock]").val();
    document.querySelector("form [name=fav-stock-advanced]").value =
      favStockVal && favStockVal != "null" ? favStockVal : "";
    triggerElEvent("form [name=fav-stock-advanced]");
  });

  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let formElem = e.target;

    let formObj = {
      name: formElem.name.value,
      email: formElem.email.value,
      hkid: formElem.hkid.value,
      tel: formElem.tel.value,
      selectedStock: formElem["fav-stock-advanced"].value.split(" ")[0],
    };

    let res = await fetch("/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObj),
    });
    console.log("res: !!!!!!!!!!!", res);

    if (!res.ok) {
      console.log("Voring problem");
      $.notify("Vote fail", "error");
    } else {
      $.notify("成功投票", "success");
      console.log("OKOKOKO vote ");
    }
    // await res.json()
  });

  setUpValidator();
}
