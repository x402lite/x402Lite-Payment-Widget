# 💳 x402Lite Payment Widget

### Seamless Pay-Per-Use Payments (0.01 USDC) via x402 Protocol / ERC-8004

This open-source demo shows how to embed **micro-transaction payments** in any app or website using the **x402 Protocol** (HTTP 402 standard) and **ERC-8004** payment schema.

---

## 🚀 Features
- Simple pay-per-use button (0.01 USDC default)
- Uses standard `402 Payment Required` flow
- Works with **Coinbase CDP API** or x402Lite endpoints
- JSON response preview for easy integration
- Minimal, responsive widget (HTML + JS + CSS)

---

## 🛠️ How to Use
1. Clone the repo:
   ```bash
   git clone https://github.com/x402lite/x402Lite-Payment-Widget.git
   cd x402Lite-Payment-Widget
   ```
2. Open `index.html` in your browser or deploy on **Replit**, **Vercel**, or any static host.
3. Update the endpoint in `script.js`:
   ```js
   const API_URL = "https://api.x402lite.com/x402";
   ```
4. Click **“Pay 0.01 USDC”** — see a live 402 JSON response.
5. Integrate this snippet into your dApp or agent UI.

---

## ⚡ Example Response
```json
{
  "x402Version": 1,
  "resource": "https://api.x402lite.com/x402",
  "asset": "USDC",
  "amount": "0.01",
  "description": "Access premium feature",
  "status": "402 Payment Required"
}
```

---

## 🌐 Learn More
- 🔗 [x402 Protocol Docs](https://www.x402.org)
- 🧩 [ERC-8004 Standard](https://ethereum.org/en/developers/docs/standards/tokens/)
- 🧠 [x402Lite Website](https://x402lite.com)
- 💬 [Community on X](https://x.com/x402Lite)

---

### License
MIT License © 2025 x402Lite — Open Source for AI + Payments
