# BlockVote DApp - Decentralized Voting Application

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
5. [Usage Guide](#usage-guide)
6. [Technical Architecture](#technical-architecture)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)
9. [License](#license)

## Overview <a name="overview"></a>
BlockVote is a decentralized voting application built on the Ethereum blockchain (Sepolia Testnet). This DApp allows users to securely vote for proposals using their MetaMask wallet, with votes recorded immutably on the blockchain. The application features a modern UI with real-time vote tracking and wallet integration.

![BlockVote Screenshot](https://via.placeholder.com/800x400?text=BlockVote+Screenshot)

## Features <a name="features"></a>
- 🔒 Secure wallet connection with MetaMask
- 🗳️ One-click voting for proposals
- 📊 Real-time vote tracking and results
- 💰 Sepolia ETH balance display
- 📱 Responsive design for all devices
- 🛡️ Prevention of multiple voting
- 🌐 Sepolia Testnet integration
- 📝 Detailed transaction feedback

## Prerequisites <a name="prerequisites"></a>
Before running BlockVote, ensure you have the following:

1. **Modern Web Browser** (Chrome, Firefox, Edge, or Brave)
2. **MetaMask Wallet Extension** installed in your browser
   - Download from: [https://metamask.io/](https://metamask.io/)
3. **Sepolia Test Network** configured in MetaMask
   - Network Name: Sepolia Test Network
   - RPC URL: https://rpc.sepolia.org
   - Chain ID: 11155111
   - Currency Symbol: SepoliaETH
4. **Sepolia Test ETH** (Get from a faucet)
   - Recommended faucet: [https://sepoliafaucet.com/](https://sepoliafaucet.com/)

## Getting Started <a name="getting-started"></a>
Follow these steps to set up and run BlockVote locally:

1. **Create a project directory:**
   ```bash
   mkdir blockvote-dapp
   cd blockvote-dapp
   ```

2. **Create the HTML file:**
   ```bash
   touch index.html
   ```

3. **Copy the BlockVote code:**
   Copy the complete HTML code provided and paste it into `index.html`

4. **Open the application:**
   - Double-click the `index.html` file to open it in your browser
   - Or run a local server:
     ```bash
     npx serve
     ```
     Then visit: http://localhost:3000

## Usage Guide <a name="usage-guide"></a>

### Connecting Your Wallet
1. Click the "Connect MetaMask" button
2. Approve the connection request in the MetaMask popup
3. Ensure you're connected to Sepolia Testnet (top of MetaMask)
4. Your wallet address and balance will display once connected

### Voting Process
1. Review the proposals:
   - **Proposal 1**: Ecosystem Upgrade (Improve network efficiency)
   - **Proposal 2**: Community Fund (Support new projects)
   
2. Click your preferred proposal button
3. Confirm the transaction in MetaMask
4. Wait for transaction confirmation (typically 15-30 seconds)
5. View updated vote counts in real-time

### Key Notes
- You can only vote once per session
- Each vote requires a small gas fee (paid in SepoliaETH)
- Refresh your balance after voting to see updated ETH amount
- Results are simulated for demonstration purposes

## Technical Architecture <a name="technical-architecture"></a>
BlockVote uses the following technologies:

### Frontend
- **HTML5/CSS3**: Application structure and styling
- **JavaScript/ES6**: Application logic and interactions
- **Ethers.js v6**: Blockchain interaction library
- **Font Awesome**: Icon library

### Blockchain
- **Ethereum Sepolia Testnet**: Blockchain network
- **Smart Contract**: Pre-deployed at 0x35cd167FA931C6c5E07AbB2621846FC35D54baD6
- **Web3 Provider**: MetaMask wallet integration

### Security
- **MetaMask Signing**: All transactions cryptographically signed
- **Local Storage**: Prevents multiple voting in same session
- **Network Validation**: Ensures correct network before transactions

## Deployment <a name="deployment"></a>
To deploy BlockVote to a live server:

### Option 1: Vercel (Recommended)
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Login to Vercel:
   ```bash
   vercel login
   ```
3. Deploy your project:
   ```bash
   vercel
   ```
4. Follow the prompts to complete deployment

## Troubleshooting <a name="troubleshooting"></a>

### Common Issues
1. **MetaMask not detected**:
   - Ensure MetaMask extension is installed and enabled
   - Refresh the page after installing MetaMask

2. **Wrong network**:
   - Connect to Sepolia Testnet in MetaMask
   - Check network ID: 11155111

3. **Insufficient balance**:
   - Get SepoliaETH from a faucet: https://sepoliafaucet.com/
   - Refresh balance after receiving funds

4. **Transaction stuck**:
   - Speed up or cancel the transaction in MetaMask
   - Check https://sepolia.etherscan.io for transaction status

5. **Already voted**:
   - The application prevents multiple votes per session
   - Try clearing localStorage and refreshing (Developer Tools > Application > Local Storage)

### Browser Console
Access Developer Tools (Ctrl+Shift+I or Cmd+Option+I) for detailed error messages and logs.

## License <a name="license"></a>
BlockVote is released under the MIT License. This means you can freely use, modify, and distribute the software for personal or commercial purposes.

```text
MIT License

Copyright (c) 2023 BlockVote DApp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Support
For additional support or questions:
- Email: support@blockvote.app
- GitHub Issues: https://github.com/yourusername/blockvote-dapp/issues

Happy voting! 🗳️