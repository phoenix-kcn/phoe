// Tab Navigation Logic
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-section');

navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all buttons and sections
        navButtons.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active-section'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show the corresponding section
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active-section');
    });
});

// Copy to Clipboard Logic
function copyTemplate(elementId) {
    const codeBlock = document.getElementById(elementId);
    const textToCopy = codeBlock.innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Find the button that was clicked to provide feedback
        const btn = event.target;
        const originalText = btn.innerText;
        
        btn.innerText = "Copied!";
        btn.style.backgroundColor = "#d4edda";
        btn.style.borderColor = "#c3e6cb";
        
        // Revert button back after 1.5 seconds
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "#ffffff";
            btn.style.borderColor = "#bbb";
        }, 1500);
    }).catch(err => {
        alert("Failed to copy text. Please try manually.");
        console.error("Copy failed: ", err);
    });
}