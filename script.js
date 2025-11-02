// x402Lite Payment Widget - Demo 0.01 USDC Payment
// Using x402 Protocol / ERC-8004 for Pay-Per-Use logic

const payButton = document.getElementById("payButton");
const responseBox = document.getElementById("responseBox");

// Example endpoint — replace with your live x402Lite Worker API
const API_URL = "https://api.x402lite.com/api/x402";

payButton.addEventListener("click", async () => {
  responseBox.textContent = "⏳ Initiating payment via x402...";

  try {
    const res = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 402) {
      const data = await res.json();
      responseBox.textContent = JSON.stringify(data, null, 2);
      console.log("x402 Response:", data);
      alert("Payment request (402) received — complete using wallet or CDP API!");
    } else if (res.ok) {
      const data = await res.json();
      responseBox.textContent = JSON.stringify(data, null, 2);
    } else {
      responseBox.textContent = `❌ Unexpected response: ${res.status}`;
    }
  } catch (err) {
    console.error(err);
    responseBox.textContent = "⚠️ Error connecting to x402 endpoint.";
  }
});
