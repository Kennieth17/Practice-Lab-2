function billingFunction() {
    if (document.getElementById("same").checked) {
            document.getElementById("billingName").value = document.getElementById("shippingName").value;
    document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }
    else {
      document.getElementById("billingName").value = "";
      document.getElementById("billingZip").value = "";
    }
      }

function sendServer() {
  if (document.getElementById("ver").click) {
    alert("The response was delivered to the server.");
  }
}