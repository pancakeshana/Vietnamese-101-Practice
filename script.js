const vocabulary = [
    { answer: 'CHÀO', clue: 'Hello / hi' },
    { answer: 'ANH', clue: 'Older brother / male friend' },
    { answer: 'TÔI', clue: 'I / me' },
    { answer: 'TÊN', clue: 'Name' },
    { answer: 'LÀ', clue: 'Is / am / are' },
    { answer: 'NAM', clue: 'Nam (a male name)' },
    { answer: 'CHỊ', clue: 'Older sister' },
    { answer: 'GÌ', clue: 'What' },
    { answer: 'RẤT', clue: 'Very' },
    { answer: 'VUI', clue: 'Happy / pleased' },
    { answer: 'ĐƯỢC', clue: 'To be allowed / can' },
    { answer: 'LÀM', clue: 'To do / make' },
    { answer: 'QUEN', clue: 'To know / be familiar with' },
    { answer: 'VỚI', clue: 'With' },
    { answer: 'ÔNG', clue: 'Grandfather / sir' },
    { answer: 'CŨNG', clue: 'Also / too' },
    { answer: 'BIẾT', clue: 'To know' },
    { answer: 'KHỎE', clue: 'Healthy / well' },
    { answer: 'CÁM ƠN', clue: 'Thank you' },
    { answer: 'BÀ', clue: 'Grandmother / ma’am' },
    { answer: 'ĐÂY', clue: 'This / here' },
    { answer: 'AI', clue: 'Who' },
    { answer: 'SINH', clue: 'To be born' },
    { answer: 'VIÊN', clue: 'Member / person' },
    { answer: 'LAN', clue: 'Lan (a female name)' },
    { answer: 'MUA', clue: 'To buy' },
    { answer: 'NÀY', clue: 'This' },
    { answer: 'NGỌT', clue: 'Sweet' },
    { answer: 'CÓ', clue: 'To have / there is' },
    { answer: 'Ô TÔ', clue: 'Car' },
    { answer: 'XE', clue: 'Vehicle / car' },
    { answer: 'HƠI', clue: 'Steam / a little' },
    { answer: 'ĐÂU', clue: 'Where' },
    { answer: 'NGƯỜI', clue: 'Person / people' },
    { answer: 'NƯỚC', clue: 'Water / country' },
    { answer: 'NÀO', clue: 'Which / what kind' },
    { answer: 'HỌC', clue: 'To study / learn' },
    { answer: 'TIẾNG', clue: 'Language / sound' },
    { answer: 'TIẾNG VIỆT', clue: 'Vietnamese' },
    { answer: 'Ở', clue: 'At / in / to live' },
    { answer: 'CHO', clue: 'For / give / let' },
    { answer: 'HỎI', clue: 'To ask' },
    { answer: 'MỸ', clue: 'American / America' },
    { answer: 'NÓI', clue: 'To speak / say' },
    { answer: 'NHÀ', clue: 'House / home' },
    { answer: 'TRƯỜNG', clue: 'School / institution' },
    { answer: 'ĐẠI', clue: 'Big / large / university' },
    { answer: 'SÀI', clue: 'Sài (part of Sài Gòn / Saigon)' },
    { answer: 'GÒN', clue: 'Gòn (part of Sài Gòn / Saigon)' },
    { answer: 'QUẬN', clue: 'District / ward' },
    { answer: '3', clue: 'Three' },
    { answer: 'THẤY', clue: 'To see' },
    { answer: 'CÂY', clue: 'Tree' },
    { answer: 'DỪA', clue: 'Coconut' },
    { answer: 'VẼ', clue: 'To draw / paint' },
    { answer: 'HAI', clue: 'Two / several' },
    { answer: 'CON', clue: 'Child / animal / classifier' },
    { answer: 'MÈO', clue: 'Cat' },
    { answer: 'ẤY', clue: 'That / those' },
    { answer: 'MUỐN', clue: 'To want' },
    { answer: 'MƯỢN', clue: 'To borrow / lend' },
    { answer: 'MẤY', clue: 'How many / several' },
    { answer: 'QUYỂN', clue: 'Book / volume (classifier)' },
    { answer: 'SÁCH', clue: 'Book' },
    { answer: 'CĂN', clue: 'Room / house (classifier)' },
    { answer: 'PHÒNG', clue: 'Room' },
    { answer: 'ĐẸP', clue: 'Beautiful / pretty' },
    { answer: 'TỪ', clue: 'Word / from' },
    { answer: 'ĐIỂN', clue: 'Dictionary / encyclopedia' },
    { answer: 'CÁI', clue: 'Thing / object (classifier)' },
    { answer: 'BÀN', clue: 'Table' },
    { answer: 'MÀU', clue: 'Color' },
    { answer: 'TRẮNG', clue: 'White' }
];

const sentences = [
    { answer: 'RẤT VUI ĐƯỢC LÀM QUEN VỚI ÔNG.', clue: 'It is very nice to meet you, sir.' },
    { answer: 'TÔI CŨNG RẤT VUI ĐƯỢC BIẾT ANH.', clue: 'I am also very happy to know you.' },
    { answer: 'TÔI KHỎE, CÁM ƠN BÀ.', clue: 'I am well, thank you, ma’am.' },
    { answer: 'ANH LÀ NGƯỜI NƯỚC NÀO?', clue: 'What country are you from?' },
    { answer: 'TÔI LÀ NGƯỜI MỸ.', clue: 'I am American.' },
    { answer: 'TÔI HỌC Ở TRƯỜNG ĐẠI HỌC SÀI GÒN.', clue: 'I study at Saigon University.' },
    { answer: 'NHÀ TÔI Ở QUẬN 3.', clue: 'My house is in District 3.' },
    { answer: 'TÔI THẤY NĂM CÂY DỪA.', clue: 'I see five coconut trees.' },
    { answer: 'TÔI VẼ HAI CON MÈO ẤY.', clue: 'I draw those two cats.' },
    { answer: 'TÔI MUỐN MƯỢN MẤY QUYỂN SÁCH.', clue: 'I want to borrow some books.' },
    { answer: 'CĂN PHÒNG NÀY ĐẸP.', clue: 'This room is beautiful.' },
    { answer: 'ĐÂY LÀ QUYỂN TỪ ĐIỂN.', clue: 'This is a dictionary.' },
    { answer: 'CÁI BÀN NÀY MÀU GÌ?', clue: 'What color is this table?' },
    { answer: 'CÁI BÀN NÀY MÀU TRẮNG.', clue: 'This table is white.' },
    { answer: 'NAM NÓI TIẾNG GÌ?', clue: 'What language does Nam speak?' }
];

const $ = (id) => document.getElementById(id);
const tabs = [$('vocab-tab'), $('sentence-tab')];

let mode = 'vocab';
let current = null;
let previousIndex = -1;
let attempts = 3;
let locked = false;

function questionList() { return mode === 'vocab' ? vocabulary : sentences; }

function nextQuestion() {
    const list = questionList();
    let index = Math.floor(Math.random() * list.length);
    if (list.length > 1 && index === previousIndex) index = (index + 1) % list.length;
    previousIndex = index;
    current = list[index];
    attempts = 3;
    locked = false;
    $('mode-label').textContent = mode === 'vocab' ? 'WORD SPELLING' : 'SENTENCE TRANSLATION';
    $('question-label').textContent = mode === 'vocab' ? 'Write the corresponding word in Vietnamese using the given definition.' : 'Translate this sentence into Vietnamese.';
    $('question').textContent = current.clue;
    $('meaning').textContent = mode === 'vocab' ? 'Yes, accents do matter. Just give it a try.' : 'Use the Vietnamese sentence and punctuation.';
    $('answer').value = '';
    $('answer').disabled = false;
    $('submit-button').disabled = false;
    $('submit-button').textContent = 'Check answer.';
    $('feedback').textContent = '';
    $('feedback').className = 'feedback';
    $('next-button').hidden = true;
    updateProgress();
    $('answer').focus();
}

function updateProgress() {
    $('attempt-label').textContent = attempts + (attempts === 1 ? ' try' : ' tries');
    $('progress-bar').style.width = ((3 - attempts) / 3 * 100) + '%';
    document.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', String(attempts));
}

function normalize(value) {
    return value.trim().normalize('NFC').replace(/\s+/g, ' ').toLocaleUpperCase('vi');
}

function checkAnswer(event) {
    event.preventDefault();
    if (locked) return;
    const answer = normalize($('answer').value);
    if (!answer) { $('answer').focus(); return; }
    if (answer === normalize(current.answer)) {
        locked = true;
        $('feedback').textContent = 'Correct! Well done! Or shall I say, giỏi lắm!';
        $('feedback').className = 'feedback correct';
        finishQuestion();
        return;
    }
    attempts--;
    updateProgress();
    if (attempts > 0) {
        $('feedback').textContent = 'Not quite. Try again—you have ' + attempts + ' more ' + (attempts === 1 ? 'try' : 'tries') + '.';
        $('feedback').className = 'feedback incorrect';
        $('answer').select();
    } else {
        locked = true;
        $('feedback').textContent = 'The answer is: ' + current.answer;
        $('feedback').className = 'feedback incorrect';
        finishQuestion();
    }
}

function finishQuestion() {
    $('answer').disabled = true;
    $('submit-button').disabled = true;
    $('next-button').hidden = false;
    $('next-button').focus();
}

function setMode(nextMode) {
    mode = nextMode;
    previousIndex = -1;
    tabs.forEach((tab, index) => {
        const active = index === (mode === 'vocab' ? 0 : 1);
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
    });
    nextQuestion();
}

$('answer-form').addEventListener('submit', checkAnswer);
$('next-button').addEventListener('click', nextQuestion);
$('skip-button').addEventListener('click', nextQuestion);
$('vocab-tab').addEventListener('click', () => setMode('vocab'));
$('sentence-tab').addEventListener('click', () => setMode('sentence'));
nextQuestion();
