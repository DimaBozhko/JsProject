let menu = document.querySelector(".menu"),
	menuItem = document.querySelectorAll(".menu__item"),
	menuContent = document.querySelectorAll(".menu-content"),
	triangle = document.querySelector(".triangle"), 
	dvs = document.querySelectorAll(".dvs"),
  destinationItem = document.querySelectorAll(".destination__item"),
  court = ["Київського", "Московського", "Шевченківського", "Жовтневого", "Ленінського", "Комінтернівського",
            "Червонозаводського", "Фрунзенського", "Орджонікідзевського"],
  courtName = document.querySelectorAll(".court-name"),
  caseNumber = document.querySelectorAll(".case-number"),
  caseNumberInp = document.querySelector(".case-number-inp"),  
  debtor = document.querySelector(".debtor"),
  birthday = document.querySelector(".birthday"),
  ipn = document.querySelector(".ipn"),
  address = document.querySelector(".address"),
  debtorName = document.querySelector(".debtor-name"),
  debtorBirthday = document.querySelector(".debtor-birthday"),
  debtorIpn = document.querySelector(".debtor-ipn"),
  debtorAddress = document.querySelector(".debtor-address"),
  sumOsnovInp = document.querySelector(".sum-osnov-inp"),
  inflInp = document.querySelector(".infl-inp"),
  treePercentInp = document.querySelector(".tree-percent-inp"),
  courtTaxInp = document.querySelector(".court-tax-inp"),
  arrearsGrg = document.querySelector(".arrears-grn"),
  arrearsWord = document.querySelector(".arrears-word"),
  arrearsKop = document.querySelector(".arrears-kop"),
  arrearsWordInp = document.querySelector(".arrears-word-inp"),
  sumOsnovGrn = document.querySelector(".sum-osnov-grn"),
  sumOsnovKop = document.querySelector(".sum-osnov-kop"),
  inflGrn = document.querySelector(".infl-grn"),
  inflKop = document.querySelector(".infl-kop"),
  treePercentGrn = document.querySelector(".tree-percent-grn"),
  treePercentKop = document.querySelector(".tree-percent-kop"),
  courtTaxGrn = document.querySelector(".court-tax-grn"),
  courtTaxKop = document.querySelector(".court-tax-kop");

function hideBg() {
  for (i = 0; i < dvs.length; i++) {
    dvs[i].classList.remove("dvs--background");
  }
}
function addHide() {
  for (i = 0; i < dvs.length; i++) {
    destinationItem[i].classList.add("hide");
  }
}

document.addEventListener("keydown", function(event) {
    if (event.code == "KeyQ" && (event.ctrlKey || event.metaKey)) {
      menuItem.forEach(function(item) {
        item.classList.toggle("hide");
      })
    }
})

document.addEventListener("click", function(event) {
  if (event.target && event.target.classList.contains("menu__item")) {
     for (let i = 0; i < menuItem.length; i++) {
      if (event.target == menuItem[i]) {
        menuContent[i].classList.toggle("hide");
      }
    }
  }
  if (event.target && event.target.classList.contains("start-dvs") || event.target.classList.contains("triangle")) {
  	triangle.classList.toggle("triangle--border");
  	dvs.forEach(function(item) {
  		item.classList.toggle("hide");

  	})
  }
  if (event.target && event.target.classList.contains("dvs")) {
  	hideBg();
    addHide();
    for (i = 0; i < dvs.length; i++){
  		if (event.target == dvs[i]) {
        dvs[i].classList.add("dvs--background");
        destinationItem[i].classList.remove("hide");
        courtName.forEach(function(item) {
          item.innerHTML = court[i];
        })
  		}
  	}
  }
})

document.addEventListener("input", function(event) {
  if (event.target == caseNumberInp) {
    caseNumber.forEach(function(item) {
      item.innerHTML = "№" + caseNumberInp.value;      
    })
  }  
  if (event.target == debtorName) {
    debtor.innerHTML = debtorName.value;
  }
  if (event.target == debtorBirthday) {
    birthday.innerHTML = debtorBirthday.value;
  }
  if (event.target == debtorIpn) {
    ipn.innerHTML = debtorIpn.value;
  }
  if (event.target == debtorAddress) {
    address.innerHTML = debtorAddress.value;
  }
  if (event.target == arrearsWordInp) {
    arrearsWord.innerHTML = arrearsWordInp.value;
  }
  if (event.target == sumOsnovInp) {
    a = Math.trunc(+sumOsnovInp.value);
    s = Math.trunc(((+sumOsnovInp.value - Math.trunc(+sumOsnovInp.value)) * 100).toFixed(2));
    sumOsnovGrn.innerHTML = a;
    sumOsnovKop.innerHTML = s;
    if (s < 10 && s >= 0) {
        sumOsnovKop.innerHTML = "0" + s;
    } 
  }
  if (event.target == inflInp) {
    a = Math.trunc(+inflInp.value);
    s = Math.trunc(((+inflInp.value - Math.trunc(+inflInp.value)) * 100).toFixed(2));
    inflGrn.innerHTML = a;
    inflKop.innerHTML = s;
    if (s < 10 && s >= 0) {
        inflKop.innerHTML = "0" + s;
    } 
  }
  if (event.target == treePercentInp) {
    a = Math.trunc(+treePercentInp.value);
    s = Math.trunc(((+treePercentInp.value - Math.trunc(+treePercentInp.value)) * 100).toFixed(2));
    treePercentGrn.innerHTML = a;
    treePercentKop.innerHTML = s;
    if (s < 10 && s >= 0) {
        treePercentKop.innerHTML = "0" + s;
    } 
  }
  if (event.target == courtTaxInp) {
    a = Math.trunc(+courtTaxInp.value);
    s = Math.trunc(((+courtTaxInp.value - Math.trunc(+courtTaxInp.value)) * 100).toFixed(2));
    courtTaxGrn.innerHTML = a;
    courtTaxKop.innerHTML = s;
    if (s < 10 && s >= 0) {
        courtTaxKop.innerHTML = "0" + s;
    } 
  }
  if (event.target == sumOsnovInp || inflInp || treePercentInp || courtTaxInp) {
    a = Math.trunc(+sumOsnovInp.value + +inflInp.value + +treePercentInp.value + 
      +courtTaxInp.value);
    }
    s = Math.trunc((((+sumOsnovInp.value + +inflInp.value + +treePercentInp.value + 
      +courtTaxInp.value) - Math.trunc(+sumOsnovInp.value + +inflInp.value + +treePercentInp.value + 
      +courtTaxInp.value)) * 100).toFixed(2));
    arrearsGrg.innerHTML = a;
    arrearsKop.innerHTML = s;

    if (s < 10 && s >= 0) {
      arrearsKop.innerHTML = "0" + s;
    }

})
