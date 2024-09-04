"use strict";

function onScanSuccess(decodedText, decodedResult) {
  var resultElement = document.getElementById("result");
  var actionBtn = document.getElementById("actionBtn"); // Display the decoded content

  resultElement.textContent = decodedText; // Show the action button if content is a URL

  if (isValidURL(decodedText)) {
    actionBtn.style.display = "inline-block";

    actionBtn.onclick = function () {
      window.open(decodedText, "_blank");
    };
  } else {
    actionBtn.style.display = "none";
  }
}

function onScanFailure(error) {
  // Handle scan failure, possibly update UI with error info
  console.warn("QR code scan error: ".concat(error));
}

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
} // Create a QR code scanner


var html5QrCode = new Html5Qrcode("qr-reader");
html5QrCode.start({
  facingMode: "environment"
}, // Use back camera for scanning
{
  fps: 10,
  // Set a higher fps for a more responsive scanner
  qrbox: {
    width: 250,
    height: 250
  } // Define scanning area

}, onScanSuccess, onScanFailure)["catch"](function (err) {
  console.error("Failed to start QR code scanning: ".concat(err));
});
//# sourceMappingURL=script.dev.js.map
