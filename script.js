var nameString, i, checkBoxs;

function checkCheckbox() {

    checkBoxs = document.getElementsByClassName("checkAliens");

    for (i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked)
            return true;
    }

    return false;
}

function checkName() {
    nameString = document.getElementById("fullName1").value;
    return (nameString.includes(" ") ? true : false);
}

function checkHuman() {
    return (document.getElementById("verify").value == "01011" ? true : false);
}

function checkValid() {

    if (checkCheckbox() == false) {
        alert("You must select at least one of the aliens to be kiddnap by!!!");
        return false;
    }

    if (checkName() == false) {
        alert("You must write your full name with space (ship) !!!");
        return false;
    }

    if (checkHuman() == false) {
        alert("The verify pass show that YOU NOT A HUMAN !!! You'r Robot !!")
    }

}

// $(document).ready(function() {
//     $("form").submit(function() {
//         if ($('input:checkbox').filter(':checked').length < 1) {
//             alert("You must select at least one of the aliens !!!");
//             return false;
//         }
//     });
// });