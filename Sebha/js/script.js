let count = 0;
let currentPhraseIndex = 0;
let subCount = 0;

const phrases = [
    "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    " لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ",
    "الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد"
];

function selectPhrase() {
    const selectElement = document.getElementById('phrase');
    currentPhraseIndex = selectElement.value;
    document.getElementById('label').textContent = phrases[currentPhraseIndex];
    resetCount();
}

function increaseCount() {
    count++;
    subCount++;
    document.getElementById('count').textContent = count;

    if (subCount >= 10) { // Example condition to change the phrase
        subCount = 0;
    }
}

function resetCount() {
    count = 0;
    subCount = 0;
    document.getElementById('count').textContent = count;
}
