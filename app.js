// Voting state management
let provider = null;
let signer = null;
let userAccount = null;
let voteCounts = { proposal1: 42, proposal2: 38 };
let hasVoted = false;

// Contract details
const VOTING_CONTRACT_ADDRESS = "0x35cd167FA931C6c5E07AbB2621846FC35D54baD6";
const VOTING_ABI = [
    "function vote(uint256 proposal) external"
];

let date = document.getElementById('date');
date.textContent = new Date().getFullYear();

// DOM Elements
let connectBtn, connectionStatus, balanceSection, votingSection;
let accountBalance, refreshBalanceBtn, vote1Btn, vote2Btn, votingResult;
let result1El, result2El;
let transferSection, recipientAddress, ethAmount, sendEthBtn, sendResult;

function initializeElements() {
    connectBtn = document.getElementById('connectBtn');
    connectionStatus = document.getElementById('connectionStatus');
    balanceSection = document.getElementById('balanceSection');
    votingSection = document.getElementById('votingSection');
    accountBalance = document.getElementById('accountBalance');
    refreshBalanceBtn = document.getElementById('refreshBalanceBtn');
    vote1Btn = document.getElementById('vote1Btn');
    vote2Btn = document.getElementById('vote2Btn');
    votingResult = document.getElementById('votingResult');
    result1El = document.getElementById('result1');
    result2El = document.getElementById('result2');
    
    // Transfer elements
    transferSection = document.getElementById('transferSection');
    recipientAddress = document.getElementById('recipientAddress');
    ethAmount = document.getElementById('ethAmount');
    sendEthBtn = document.getElementById('sendEthBtn');
    sendResult = document.getElementById('sendResult');
}

function showError(message, container = null) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;

    if (container) {
        container.innerHTML = '';
        container.appendChild(errorDiv);
    } else {
        if (votingResult) {
            votingResult.innerHTML = '';
            votingResult.appendChild(errorDiv);
        }
    }
}

function showSuccess(message, container = null) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success';
    successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;

    if (container) {
        container.innerHTML = '';
        container.appendChild(successDiv);
    } else {
        if (votingResult) {
            votingResult.innerHTML = '';
            votingResult.appendChild(successDiv);
        }
    }
}

function updateConnectionStatus(connected) {
    if (connected) {
        connectionStatus.innerHTML = `<i class="fas fa-plug connected"></i> Connected: ${userAccount.slice(0, 6)}...${userAccount.slice(-4)}`;
        connectionStatus.className = 'status connected';
        connectBtn.innerHTML = '<i class="fas fa-link"></i> Connected';
        connectBtn.disabled = true;
        balanceSection.style.display = 'block';
        votingSection.style.display = 'block';
        transferSection.style.display = 'block';
    } else {
        connectionStatus.innerHTML = '<i class="fas fa-plug disconnected"></i> Not connected to wallet';
        connectionStatus.className = 'status disconnected';
        connectBtn.innerHTML = '<i class="fab fa-ethereum"></i> Connect MetaMask';
        connectBtn.disabled = false;
        balanceSection.style.display = 'none';
        votingSection.style.display = 'none';
        transferSection.style.display = 'none';
    }
}

async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        showError('MetaMask is not installed. Please install MetaMask to use this DApp.');
        return;
    }

    try {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });

        if (accounts.length === 0) {
            throw new Error('No accounts found');
        }

        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        userAccount = accounts[0];

        // Check network
        const network = await provider.getNetwork();
        if (network.chainId !== 11155111n) {
            showError('Please switch to Sepolia testnet for voting functionality');
        }

        updateConnectionStatus(true);
        await updateBalance();

        // Check if user has already voted
        const votedStatus = localStorage.getItem(`voted_${userAccount}`);
        if (votedStatus) {
            hasVoted = true;
            showSuccess("You've already voted in this session");
        }

    } catch (error) {
        console.error('Connection error:', error);
        
        if (error.code === 4001) {
            showError('Please connect your wallet to continue.');
        } else {
            showError('Failed to connect wallet: ' + error.message);
        }
    }
}

async function updateBalance() {
    if (!provider || !userAccount) return;

    try {
        const balance = await provider.getBalance(userAccount);
        const balanceInEth = ethers.formatEther(balance);
        accountBalance.textContent = `${parseFloat(balanceInEth).toFixed(4)} ETH`;
    } catch (error) {
        console.error('Balance error:', error);
        showError('Failed to fetch balance');
    }
}

async function vote(proposalNumber) {
    if (!signer) {
        showError('Please connect your wallet first');
        return;
    }

    if (hasVoted) {
        showError('You have already voted in this session');
        return;
    }

    try {
        const network = await provider.getNetwork();
        if (network.chainId !== 11155111n) {
            showError('Please switch to Sepolia testnet to vote');
            return;
        }

        const button = proposalNumber === 1 ? vote1Btn : vote2Btn;
        const originalText = button.innerHTML;
        button.innerHTML = '<span class="loading-spinner"></span> Processing Vote...';
        button.disabled = true;

        // Simulate transaction delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Generate random transaction hash for demo
        const txHash = '0x' + Array.from({length: 64}, () => Math.floor(Math.random() * 16).toString(16)).join('');
        
        showSuccess(`Vote submitted! Transaction hash: ${txHash}`);
        
        // Simulate confirmation
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        showSuccess(`Vote confirmed! Thank you for participating.`);
        
        // Update vote counts
        if (proposalNumber === 1) {
            voteCounts.proposal1++;
        } else {
            voteCounts.proposal2++;
        }
        
        // Update UI
        result1El.textContent = voteCounts.proposal1;
        result2El.textContent = voteCounts.proposal2;
        
        // Mark user as voted
        hasVoted = true;
        localStorage.setItem(`voted_${userAccount}`, 'true');

        // Update balance after transaction
        await updateBalance();

    } catch (error) {
        console.error('Voting error:', error);
        let errorMessage = 'Failed to vote: ';

        if (error.message.includes('insufficient funds')) {
            errorMessage += 'Insufficient funds for gas fees';
        } else if (error.message.includes('user rejected')) {
            errorMessage += 'Transaction rejected by user';
        } else {
            errorMessage += error.message;
        }

        showError(errorMessage);
    } finally {
        vote1Btn.innerHTML = `
            <div class="proposal-title">Proposal 1</div>
            <div>Ecosystem Upgrade</div>
            <div class="proposal-description">Improve network efficiency</div>
        `;
        vote1Btn.disabled = hasVoted;
        
        vote2Btn.innerHTML = `
            <div class="proposal-title">Proposal 2</div>
            <div>Community Fund</div>
            <div class="proposal-description">Support new projects</div>
        `;
        vote2Btn.disabled = hasVoted;
    }
}

async function sendETH() {
    const toAddress = recipientAddress.value.trim();
    const amount = ethAmount.value.trim();
    
    if (!toAddress || !amount) {
        showError('Please fill in all fields', sendResult);
        return;
    }
    
    if (!ethers.isAddress(toAddress)) {
        showError('Invalid recipient address', sendResult);
        return;
    }
    
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue)) {
        showError('Please enter a valid amount', sendResult);
        return;
    }
    
    try {
        // Update button to show loading state
        const originalText = sendEthBtn.innerHTML;
        sendEthBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';
        sendEthBtn.disabled = true;
        
        // Send transaction
        const tx = await signer.sendTransaction({
            to: toAddress,
            value: ethers.parseEther(amount.toString())
        });
        
        showSuccess(`Transaction sent! Hash: ${tx.hash}`, sendResult);
        
        // Wait for confirmation
        const receipt = await tx.wait();
        showSuccess(`Transaction confirmed in block ${receipt.blockNumber}`, sendResult);
        
        // Clear form
        recipientAddress.value = '';
        ethAmount.value = '';
        
        // Update balance
        await updateBalance();
        
    } catch (error) {
        console.error('Transfer error:', error);
        let errorMessage = 'Failed to send ETH: ';
        
        if (error.message.includes('insufficient funds')) {
            errorMessage += 'Insufficient funds';
        } else if (error.message.includes('user rejected')) {
            errorMessage += 'Transaction rejected';
        } else if (error.message.includes('invalid address')) {
            errorMessage += 'Invalid recipient address';
        } else {
            errorMessage += error.message;
        }
        
        showError(errorMessage, sendResult);
    } finally {
        sendEthBtn.innerHTML = originalText;
        sendEthBtn.disabled = false;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    
    // Set up event listeners
    connectBtn.addEventListener('click', connectWallet);
    refreshBalanceBtn.addEventListener('click', updateBalance);
    vote1Btn.addEventListener('click', () => vote(1));
    vote2Btn.addEventListener('click', () => vote(2));
    sendEthBtn.addEventListener('click', sendETH);
    
    // Tab functionality
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
    
    // Listen for account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) {
                updateConnectionStatus(false);
            } else {
                userAccount = accounts[0];
                updateConnectionStatus(true);
                updateBalance();
                
                // Check if new account has voted
                const votedStatus = localStorage.getItem(`voted_${userAccount}`);
                hasVoted = !!votedStatus;
                
                // Update button states
                vote1Btn.disabled = hasVoted;
                vote2Btn.disabled = hasVoted;
            }
        });

        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
    }
    
    // Try to connect automatically if already connected
    if (window.ethereum && window.ethereum.selectedAddress) {
        connectWallet();
    }
});