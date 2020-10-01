function clearErrors()
{
    for (var loopCounter = 0;
        loopCounter < document.forms["infoRequest"].elements.length;
        loopCounter++) {
        if (document.forms["infoRequest"].elements[loopCounter]
            .parentElement.className.indexOf("has-") != -1)
        {

            document.forms["infoRequest"].elements[loopCounter]
                .parentElement.className = "form-group";
        }
    }
}

function resetForm()
{
    clearErrors();
    document.forms["infoRequest"]["Name"].value = "";
    document.forms["infoRequest"]["Email"].value = "";
    document.forms["infoRequest"]["Phone"].value = "";
    document.forms["infoRequest"]["reason"].selectedIndex = null;
    document.forms["infoRequest"]["info"].value = "";
    document.getElementById("").innerText = "submit";
    document.forms["infoRequest"]["Name"].focus();
}

function validateForm()
{

    clearErrors();
    var name = document.forms["infoRequest"]["Name"].value;
    var email = document.forms["infoRequest"]["Email"].value;
    var phone = document.forms["infoRequest"]["Phone"].value;
    var inquiry = document.forms["infoRequest"]["reason"].value;
    var bestDay = document.getElementsByName("dayChoice");
    var isValid = true;

    if (name == null || name == "")
    {
        isValid = false;
        alert("Please put in your name.");
        return false;
    }

    if (email == null || email == "")
    {
        isValid = false;
        alert("An email is required.");
        return false;
    }

    if (phone.length > 10 || phone.length < 10 || phone == null || phone == "" || isNaN(phone))
    {
        isValid = false;
        alert("Please enter a valid phone number.");
        return false;
    }

    if (inquiry == "")
    {
        isValid = false;
        alert("please select an option.");
        return false;
    }

    var isChecked = false;
   
    for (var i = 0; i < 5; i++)
    {

        if (bestDay[i].checked)
        {
            isChecked = true;
        }
    }

    if (isChecked == false)
    {
        isValid = false;
        alert("At least one of the checkboxes must be chosen.");
    }

    if (isValid == true)
    {
        alert("Thanks for your submission we'll contact you shortly.")
        return false;
    }
}