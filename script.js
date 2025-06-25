const fruitSwingSpeeds = {
    "Water": 9.85,
    "Thunder": 7.42,
    "Swordman": 10.54,
    "Wind": 8.41,
    "Ice Knight": 14.24,
    "Fiery Blood": 11.18,
    "Moon": 14.13,
    "Sun": 11.18,
    "Easter": 14.13,
    "Sonic": 14.24,
    "Rock": 11.18
};

function calculate() {
    const ppc = parseFloat(document.getElementById('powerPerClick').value);
    const current = parseFloat(document.getElementById('currentPower').value);
    const goal = parseFloat(document.getElementById('desiredPower').value);
    const fruit = document.getElementById('fruitSelect').value;
    const speed = fruitSwingSpeeds[fruit];
    const resultEl = document.getElementById('result');

    if (isNaN(ppc) || isNaN(current) || isNaN(goal) || ppc <= 0 || goal <= 0 || current < 0 || current >= goal) {
        resultEl.innerHTML = "Enter valid numbers (goal must be higher than current).";
        return;
    }

    const neededPower = goal - current;
    const totalClicks = Math.ceil(neededPower / ppc);
    const totalTime = totalClicks / speed;

    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = Math.floor(totalTime % 60);

    resultEl.innerHTML = `
        From <strong>${current.toExponential()}</strong> to <strong>${goal.toExponential()}</strong> power,<br>
        with <strong>${fruit}</strong> fruit:<br><br>
        ⏱️ <strong>Time:</strong> ${hours}h ${minutes}m ${seconds}s<br>
        🖱️ <strong>Total Clicks:</strong> ${totalClicks.toLocaleString()}
    `;
}

// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
