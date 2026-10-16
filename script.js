/**
 * Each quiz item is an object.
 * - "Answer" is what the learner must type.
 * - "Clue" is what the page displays. 
 * The square brackets make this an array of objects. 
 * So, vocabulary is a variable.
 * - Defined as an array variable due to the brackets.
 * Add or remove entries here to change the quiz content.
 */
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

//Sentence-mode questions use the same object shape as vocabulary questions.
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

//This parses / formats the TXT file.
function parseClassifierQuestions(text) {
    const questions = [];

    text.split(/\r?\n/).forEach((line) => {
        const examples = line.match(/^\s*-\s*Examples:\s*(.+)$/i);
        if (!examples) return;

        examples[1].split(/\s*,\s*/).forEach((example) => {
            const match = example.match(/^(.+?)\s+\((.+)\)$/);
            if (!match) return;

            const [classifier, ...objectWords] = match[1].trim().split(/\s+/);
            if (!classifier || objectWords.length === 0) return;

            questions.push({
                answer: classifier,
                clue: match[2].trim()
            });
        });
    });

    if (questions.length === 0) {
        throw new Error('No classifier examples were found in the source file.');
    }

    return questions;
}

let classifierQuestions = null;
let classifierLoadPromise = null;

function loadClassifierQuestions() {
    if (classifierQuestions) return Promise.resolve(classifierQuestions);
    if (!classifierLoadPromise) {
        classifierLoadPromise = fetch('viet101_classifiers.txt')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('The classifier file could not be loaded.');
                }
                return response.text();
            })
            .then((text) => {
                classifierQuestions = parseClassifierQuestions(text);
                return classifierQuestions;
            });
    }
    return classifierLoadPromise;
}

//For the number translation questions.
function parseNumbers(text) {
    //The JS split() splits a String into an array of elements, 
    //depending on the delimiter between, such as " " or "," or "-".
    const numArray = text.split(" - ");
    const questions = [];

    //Oh yeah, let's apply some Java.
    for (let i = 0; i < numArray.length; i + 2) {
        questions.push({
            answer: numArray[i + 1],
            clue: numArray[i]
        });
        answers.push(numArray[i + 1]);
    }

    //Throws error if there's literally nothing to base questions off of.
    if (questions.length === 0) {
        throw new Error('No classifier examples were found in the source file.');
    }

    return questions;
}

let numberQuestions = null;
let numberLoadPromise = null;

//Copied over from loadClassifierQuestions().
function loadNumbers() {
    //What the heck is a "Promise" class??

    //I guess if the User clicks a certain tab, then 
    //these questions appear to "fulfill" a promise?
    if (numberQuestions) return Promise.resolve(numberQuestions);

    if (!numberLoadPromise) {
        numberLoadPromise = fetch('viet101_numbers.txt')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('The number file could not be loaded.');
                }
                return response.text();
            })
            .then((text) => {
                numberQuestions = parseNumbers(text);
                return numberQuestions;
            });
    }

    return numberLoadPromise;
}

/**
 * A helper function for finding an HTML element by its ID. 
 * This is an arrow function.
 * Input: ID 
 * Output: The result of getElementById(id).
 * 
 * $ is the function name. 
 */
const $ = (id) => document.getElementById(id);

//Keep the two tab elements in an array so setMode() can update them together.
const tabs = [$('vocab-tab'), $('sentence-tab'), $('classifier-tab'), $('numbers-tab')];
const modes = ['vocab', 'sentence', 'classifiers', 'numbers'];

/**
 * These variables track the quiz between user actions. 
 * 
 * VARIABLES
 * "let" is used because their values change.
 * "const" above is used for values that are not reassigned and are "constant".
 */

let mode = 'vocab';
let current = null; //Currently displayed question object.
let previousIndex = -1; //Last question's position, used to avoid immediate repeats.
let attempts = 3;
let locked = false; //True after the question is completed, to prevent extra submissions.

//The "? :" conditional (ternary) chooses the list matching the current mode.
function questionList() {
    if (mode === 'vocab') return vocabulary;
    if (mode === 'sentence') return sentences;
    if (mode === 'classifiers') return classifierQuestions;
    return numberQuestions || [];
}

function nextQuestion() {
    const list = questionList();
    if (list.length === 0) return;

    //Math.random() returns a number from 0 up to (but excluding) 1.
    //Multiplying by the list length and rounding down picks a valid index.
    //Ex. Out of 10 places, 0.8 (chance) * 10 (array length) = 8
    let index = Math.floor(Math.random() * list.length);

    //If the random pick repeats the previous item, advance one slot instead.
    if (list.length > 1 && index === previousIndex) index = (index + 1) % list.length;
    previousIndex = index;
    current = list[index];

    //Reset state and update the page for the new question.
    attempts = 3;
    locked = false;

    //Remember, $(ID) refers to the ID in the HTML file.
    $('mode-label').textContent = mode === 'vocab' ? 'WORD SPELLING' : mode === 'sentence' ? 'SENTENCE TRANSLATION' : mode === 'classifiers' ? 'CLASSIFIER PRACTICE' : 'NUMBER PRACTICE';
    $('question-label').textContent = mode === 'vocab'
        ? 'Write the corresponding word in Vietnamese using the given definition.'
        : mode === 'sentence'
            ? 'Translate this sentence into Vietnamese.'
        : mode === 'classifiers'
            ? 'Type the Vietnamese classifier for this object.'
            : 'Type the number in Vietnamese.';
    $('question').textContent = current.clue;
    $('meaning').textContent = mode === 'vocab'
        ? 'Yes, accents do matter. Just give it a try.'
        : mode === 'sentence'
            ? 'Use the Vietnamese sentence and punctuation.'
        : mode === 'classifiers'
            ? 'Type the classifier only (for example, cái).'
            : 'Translate the number in letter format.';
    $('answer').value = '';
    $('answer').disabled = false;
    $('submit-button').disabled = false;
    $('submit-button').textContent = 'Check answer.';
    $('skip-button').disabled = false;
    $('feedback').textContent = '';
    $('feedback').className = 'feedback';
    $('next-button').hidden = true;
    updateProgress();
    $('answer').focus();
}

function updateProgress() {
    //Update the visible attempt count and progress bar.
    $('attempt-label').textContent = attempts + (attempts === 1 ? ' try' : ' tries');
    $('progress-bar').style.width = ((3 - attempts) / 3 * 100) + '%';

    //Keep the accessibility value in sync so assistive technology can read it.
    document.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', String(attempts));
}

//Make answers comparable despite extra spaces, letter case, or different
//Unicode representations of accented characters.
function normalize(value) {
    return value.trim().normalize('NFC').replace(/\s+/g, ' ').toLocaleUpperCase('vi');
}

//Form submit handler. "event" is the browser's event object describing the
//submit; preventDefault() stops the browser from reloading/navigating the page.
function checkAnswer(event) {
    event.preventDefault();
    if (locked) return;

    const answer = normalize($('answer').value);
    if (!answer) { $('answer').focus(); return; }

    //Compare normalized learner input with the expected answer.
    if (answer === normalize(current.answer)) {
        locked = true;
        $('feedback').textContent = 'Correct! Well done! Or shall I say, giỏi lắm!';
        $('feedback').className = 'feedback correct';
        finishQuestion();
        return;
    }

    //A wrong answer costs one try. 
    //Keep the question open while tries remain.
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

//Disable further answers and reveal/focus the button to continue.
function finishQuestion() {
    $('answer').disabled = true;
    $('submit-button').disabled = true;
    $('next-button').hidden = false;
    $('next-button').focus();
}

//Switch between quiz modes, update the tabs' visual and accessibility states,
//then load a question from the selected mode.
async function setMode(nextMode) {
    mode = nextMode;
    previousIndex = -1;
    tabs.forEach((tab, index) => {
        const active = modes[index] === mode;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
    });

    if (mode === 'classifiers' && !classifierQuestions) {
        $('mode-label').textContent = 'CLASSIFIER PRACTICE';
        $('question-label').textContent = 'Loading classifier examples…';
        $('question').textContent = 'Loading…';
        $('meaning').textContent = 'Using examples from viet101_classifiers.txt.';
        $('answer').value = '';
        $('answer').disabled = true;
        $('submit-button').disabled = true;
        $('skip-button').disabled = true;
        $('next-button').hidden = true;
        $('feedback').textContent = '';
        $('feedback').className = 'feedback';

        try {
            await loadClassifierQuestions();
        } catch (error) {
            classifierLoadPromise = null;
            $('feedback').textContent = 'Could not load classifier examples. Please check that viet101_classifiers.txt is available and try again.';
            $('feedback').className = 'feedback incorrect';
            return;
        }

        if (mode !== 'classifiers') return;
    }
    
    if (mode === 'numbers' && !numberQuestions) {
        $('mode-label').textContent = 'NUMBER PRACTICE';
        $('question-label').textContent = 'Loading number examples…';
        $('question').textContent = 'Loading…';
        $('meaning').textContent = 'Using examples from viet101_numbers.txt.';
        $('answer').value = '';
        $('answer').disabled = true;
        $('submit-button').disabled = true;
        $('skip-button').disabled = true;
        $('next-button').hidden = true;
        $('feedback').textContent = '';
        $('feedback').className = 'feedback';

        try {
            await loadNumbers();
        } catch (error) {
            numberLoadPromise = null;
            $('feedback').textContent = 'Could not load number examples. Please check that viet101_numbers.txt is available and try again.';
            $('feedback').className = 'feedback incorrect';
            return;
        }

        if (mode !== 'numbers') return;
    }

    nextQuestion();
}

//Event listeners connect user actions in the HTML to the functions above.
$('answer-form').addEventListener('submit', checkAnswer);
$('next-button').addEventListener('click', nextQuestion);
$('skip-button').addEventListener('click', nextQuestion);

//Arrow functions here pass a specific mode into setMode when a tab is clicked.
$('vocab-tab').addEventListener('click', () => setMode('vocab'));
$('sentence-tab').addEventListener('click', () => setMode('sentence'));
$('classifier-tab').addEventListener('click', () => setMode('classifiers'));
$('numbers-tab').addEventListener('click', () => setMode('numbers'));

//Initialize the page with the first vocabulary question.
nextQuestion();
