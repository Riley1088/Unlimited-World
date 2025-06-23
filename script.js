const fruitSwingSpeeds = {
    "Water": 9.85,
    "Thunder": 7.42,
    "Swordman": 10.54,
    "Wind": 8.41,
    "Ice Knight": 14.24,
    "Fiery Blood": 11.18,
    "Moon": 14.13,
    "Sun": 11.18,
    "Easter": 14.13
};

function calculate() {
    const ppc = parseFloat(document.getElementById('powerPerClick').value);
    const goal = parseFloat(document.getElementById('desiredPower').value);
    const fruit = document.getElementById('fruitSelect').value;
    const speed = fruitSwingSpeeds[fruit];

    if (isNaN(ppc) || isNaN(goal) || ppc <= 0 || goal <= 0) {
        document.getElementById('result').innerHTML = "Enter valid numbers.";
        return;
    }

    const clicks = goal / ppc;
    const time = clicks / speed;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    document.getElementById('result').innerHTML =
        `With <strong>${fruit}</strong>, it'll take <strong>${hours}h ${minutes}m ${seconds}s</strong> to reach <strong>${goal.toExponential()}</strong> power.`;
}
