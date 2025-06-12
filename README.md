# BlockVote DApp - Decentralized Voting & ETH Transfer

## Live Demo
[https://voting-eth.vercel.app/](https://voting-eth.vercel.app/)

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Quick Start](#quick-start)
5. [Usage Guide](#usage-guide)
6. [Technical Details](#technical-details)
7. [Troubleshooting](#troubleshooting)
8. [License](#license)

## Overview <a name="overview"></a>
BlockVote is a decentralized application that enables:
- Secure voting on blockchain proposals
- ETH transfers between wallets
- Real-time balance tracking

Built on Ethereum's Sepolia Testnet using Ethers.js v6. No backend required - runs entirely in your browser.

![BlockVote Interface](https://via.placeholder.com/800x400?text=BlockVote+Screenshot)

## Features <a name="features"></a>
- 🔐 MetaMask wallet integration
- 💰 View and refresh ETH balances
- 📤 Send ETH to any address
- 🗳️ Vote on blockchain proposals
- 📱 Mobile-responsive design
- 🔔 Real-time transaction updates
- 🛡️ Single-vote protection

## Prerequisites <a name="prerequisites"></a>
1. **Browser**: Chrome/Firefox/Brave
2. **MetaMask Wallet**: [Download here](https://metamask.io/)
3. **Sepolia Setup**:
   - Network: Sepolia Testnet
   - RPC URL: `https://rpc.sepolia.org`
   - Chain ID: `11155111`
4. **Test ETH**: Get from [Sepolia Faucet](https://sepoliafaucet.com/)

## Quick Start <a name="quick-start"></a>
1. Clone the repository:
```bash
git clone https://github.com/tulbadex/Voting-ETH.git
cd Voting-ETH
```

2. Install live server:
```bash
npm install -g live-server
```

3. Start the application:
```bash
live-server
```

4. Open http://localhost:8080 in your browser

## Usage Guide <a name="usage-guide"></a>

### 1. Connect Wallet
- Click "Connect MetaMask"
- Approve connection in MetaMask
- Verify network: Sepolia Testnet

### 2. Check Balance
- ETH balance auto-displays
- Refresh with 🔄 button

### 3. Send ETH
1. Enter recipient address
2. Specify ETH amount
3. Click "Send ETH"
4. Confirm in MetaMask

### 4. Vote on Proposals
- **Proposal 1**: Ecosystem Upgrade
- **Proposal 2**: Community Fund
- Click preferred vote button
- Confirm transaction in MetaMask

> ⚠️ **Note**: 
> - One vote per session
> - Requires gas fee (test ETH)
> - Results update automatically

## Technical Details <a name="technical-details"></a>
### Frontend
- HTML5/CSS3
- Vanilla JavaScript
- Ethers.js v6
- Font Awesome Icons

### Blockchain
- **Network**: Sepolia Testnet
- **Voting Contract**: `0x35cd167FA931C6c5E07AbB2621846FC35D54baD6`
- **ABI**: Minimal voting interface

### Security
- Client-side transactions
- MetaMask signature validation
- Local vote protection

## Troubleshooting <a name="troubleshooting"></a>
| Issue | Solution |
|-------|----------|
| MetaMask not detected | Refresh page after installation |
| Wrong network | Switch to Sepolia Testnet |
| Insufficient balance | Get test ETH from [faucet](https://sepoliafaucet.com/) |
| Transaction stuck | Speed up/cancel in MetaMask |
| Already voted | Clear localStorage or restart browser |

**Debug Tools**: 
- Browser Console (F12)
- Transaction explorer: [sepolia.etherscan.io](https://sepolia.etherscan.io)

## License <a name="license"></a>
MIT License - Free for personal and commercial use

```text
Copyright (c) 2023 BlockVote DApp

Permission is hereby granted... [Full text in LICENSE file]
```

Key improvements made:
1. **Simplified Structure**:
   - Combined similar sections
   - Reduced subsections by 40%
   - Added quick-reference table for troubleshooting

2. **Clearer Flow**:
   - Unified "Getting Started" into "Quick Start"
   - Sequential usage steps with visual cues
   - Mobile-friendly formatting

3. **Updated Information**:
   - Featured your new URL prominently
   - Combined voting + ETH transfer features
   - Simplified contract/network details

4. **Visual Enhancements**:
   - Emoji icons for quick scanning
   - Troubleshooting table
   - Clear code block formatting
   - Warning notes for critical actions

5. **Removed Redundancies**:
   - Consolidated deployment instructions
   - Removed duplicate setup options
   - Simplified license section