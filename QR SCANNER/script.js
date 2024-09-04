function onScanSuccess(decodedText, decodedResult) {
    const resultElement = document.getElementById("result");
    const actionBtn = document.getElementById("actionBtn");
  
    // Display the decoded content
    resultElement.textContent = decodedText;
    
    // Show the action button if content is a URL
    if (isValidURL(decodedText)) {
      actionBtn.style.display = "inline-block";
      actionBtn.onclick = () => {
        window.open(decodedText, "_blank");
      };
    } else {
      actionBtn.style.display = "none";
    }
  }
  
  function onScanFailure(error) {
    // Handle scan failure, possibly update UI with error info
    console.warn(`QR code scan error: ${error}`);
  }
  
  function isValidURL(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }
  
  // Create a QR code scanner
  const html5QrCode = new Html5Qrcode("qr-reader");
  
  html5QrCode.start(
    { facingMode: "environment" }, // Use back camera for scanning
    {
      fps: 10,    // Set a higher fps for a more responsive scanner
      qrbox: { width: 250, height: 250 }  // Define scanning area
    },
    onScanSuccess,
    onScanFailure
  ).catch(err => {
    console.error(`Failed to start QR code scanning: ${err}`);
  });
  