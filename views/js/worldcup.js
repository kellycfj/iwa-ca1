var gEntreeCount = 0;
// returns a number that represents the sum of all the selected menu
// matches prices.
function calculateBill(idMenuTable) {
    var fBillTotal = 0.0;
    var i = 0;
    // find the table tag
    var oTable = document.getElementById(idMenuTable);
    // go through the table and add up the prices of all
    // the selected matches. The code takes advantage of the 
    // fact that each checkbox has a corresponding row in
    // the table, and the only INPUT tags are the checkboxes.
    var aCBTags = oTable.getElementsByTagName('INPUT');
    for (i = 0; i < aCBTags.length; i++) {
        // is this menu matches selected? it is if the checkbox is checked
        if (aCBTags[i].checked) {
            // get the checkbox' parent table row
            var oTR = getParentTag(aCBTags[i], 'TR');

            // retrieve the price from the price column, which is the third column in the table
            var oTDPrice = oTR.getElementsByTagName('TD')[2];
            // the first child text node of the column contains the price
            fBillTotal += parseFloat(oTDPrice.firstChild.data);
        };
    };
    // return the price as a decimal number with 2 decimal places
    return Math.round(fBillTotal * 100.0) / 100.0;
};
// This function either turns on or off the row highlighting for kitpack
// matches (depending on the value of bShowKit)
function highlightkitpack(idTable, bShowKit) {
    // if bShowKit is true, then we're highlighting kitpack
    //	meals, otherwise we're unhighlighting them.
    var i = 0;
    var oTable = document.getElementById(idTable);
    var oTBODY = oTable.getElementsByTagName('TBODY')[0];
    var aTRs = oTBODY.getElementsByTagName('TR');
    // walk through each of the table rows and see if it has a 
    // "kitpack" attribute on it.
    for (i = 0; i < aTRs.length; i++) {
        if (aTRs[i].getAttribute('kitpack') && aTRs[i].getAttribute('kitpack') == "true") {
            if (bShowKit) {
                aTRs[i].style.backgroundColor = "lightGreen";
            } else {
                aTRs[i].style.backgroundColor = "";
            };
        };
    };
};
// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)
function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};
window.addEventListener("load", function () {
    document.forms[0].txtBillAmt.value = calculateBill('menuTable');
    document.querySelector("#calcBill").addEventListener("click", function () {
        document.forms[0].txtBillAmt.value = calculateBill('menuTable');
    });
    document.querySelector("#showKit").addEventListener("click", function () {
        highlightkitpack('menuTable', this.checked);
    });
});

function basket() {
    var txt;
    if (confirm("Complete purchase?")) {
        
      alert("Successfuly ordered!");
        
      document.getElementById("showKit").reset();
     
    } else {
      
    }
    document.getElementById("demo").innerHTML = txt;
  }

  var subjectObject = {
    "Group A": {
      "Brazil x Saudi Arabia": ["€ 120.00"],
      "Russia x Uruguay": ["€ 120.00"],
      "Kit Pack A": ["€ 80.00"]    
    },
    "Group B": {
      "Morocco x Qatar": ["€ 120.00"],
      "Portugal x Spain": ["€ 120.00"],
      "Kit Pack B": ["€ 80.00"] 
    },
    "Group C": {
      "France x Autralia": ["€ 120.00"],
      "Argentina x Iceland": ["€ 120.00"],
      "Kit Pack C": ["€ 80.00"] 
    },
  "Group D": {
    "Ireland x Denmark": ["€ 120.00"],
    "Belgium x England": ["€ 120.00"],
    "Kit Pack D": ["€ 80.00"] 
  },
  "Group E": {
    "Costa Rica x Germany": ["€ 120.00"],
    "Switzerland x Japan": ["€ 120.00"],
    "Kit Pack E": ["€ 80.00"] 
  }
  
  }
  window.onload = function() {
      var subjectSel = document.getElementById("subject");
      var topicSel = document.getElementById("topic");
      var chapterSel = document.getElementById("chapter");
      for (var x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
      }
      subjectSel.onchange = function() {
        //empty Chapters- and Topics- dropdowns
        chapterSel.length = 1;
        topicSel.length = 1;
        //display correct values
        for (var y in subjectObject[this.value]) {
          topicSel.options[topicSel.options.length] = new Option(y, y);
        }
      }
      topicSel.onchange = function() {
        //empty Chapters dropdown
        chapterSel.length = 1;
        //display correct values
        var z = subjectObject[subjectSel.value][this.value];
        for (var i = 0; i < z.length; i++) {
          chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
        }
      }
    }