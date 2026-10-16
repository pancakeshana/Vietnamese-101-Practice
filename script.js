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

    //To split between line by line.
    const lines = text.split(/\r?\n/);
    const questions = [];

    //Oh yeah, let's apply some Java.
    for (let i = 0; i < lines.length; i++) {
        //To split within each of the lines.
        const parts = lines[i].split(" - ");
        if (parts.length !== 2) continue;

        questions.push({
            //Part[0] refers to the digit. Ex. 0, 1, 100.
            clue: parts[0].trim(),
            //Part[1] refers to the Vietnamese translation, as per in the file.
            answer: parts[1].trim()
        });
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

function parseSentenceBuilderWords(text, fileName) {
    const words = text.split(/\r?\n/).map((line) => {
        if (!line.trim()) return null;
        const [word, translation, thirdPerson] = line.split('|').map((part) => part.trim());
        if (!word || !translation) {
            throw new Error(fileName + ' entries must use Vietnamese | English format.');
        }
        return { word: word, translation: translation, thirdPerson: thirdPerson || '' };
    }).filter(Boolean);
    const uniqueWords = Array.from(new Map(words.map((entry) => [normalize(entry.word), entry])).values());
    if (uniqueWords.length < 3) {
        throw new Error(fileName + ' needs at least three distinct words for Sentence Builder.');
    }
    return uniqueWords;
}

function shuffleSentenceBuilderItems(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
}

function createSentenceBuilderChoices(words, answer, kind) {
    const choices = answer === null
        ? shuffleSentenceBuilderItems(words).slice(0, 3)
        : [
            answer,
            ...shuffleSentenceBuilderItems(words.filter((word) => word.word !== answer.word)).slice(0, 2)
        ];
    return shuffleSentenceBuilderItems(choices.map((choice) => ({ ...choice, kind })));
}

let sentenceBuilderQuestions = null;
let sentenceBuilderLoadPromise = null;

function loadSentenceBuilderQuestions() {
    if (sentenceBuilderQuestions) return Promise.resolve(sentenceBuilderQuestions);
    if (!sentenceBuilderLoadPromise) {
        const files = [
            'viet101_pronouns.txt',
            'viet101_verbs.txt',
            'viet101_adjectives.txt'
        ];

        sentenceBuilderLoadPromise = Promise.all(files.map((fileName) => fetch(fileName)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(fileName + ' could not be loaded.');
                }
                return response.text();
            })
            .then((text) => parseSentenceBuilderWords(text, fileName))))
            .then(([nouns, verbs, adjectives]) => {
                const predicates = [
                    ...verbs.map((word) => ({ ...word, kind: 'Verb' })),
                    ...adjectives.map((word) => ({ ...word, kind: 'Adjective' }))
                ];
                sentenceBuilderQuestions = [];

                nouns.forEach((noun) => {
                    predicates.forEach((predicate) => {
                        const choices = [
                            ...createSentenceBuilderChoices(nouns, noun, 'Noun'),
                            ...createSentenceBuilderChoices(verbs, predicate.kind === 'Verb' ? predicate : null, 'Verb'),
                            ...createSentenceBuilderChoices(adjectives, predicate.kind === 'Adjective' ? predicate : null, 'Adjective')
                        ];
                        sentenceBuilderQuestions.push({
                            answer: noun.word + ' ' + predicate.word,
                            blocks: [],
                            choices: shuffleSentenceBuilderItems(choices)
                        });
                    });
                });
                return sentenceBuilderQuestions;
            });
    }
    return sentenceBuilderLoadPromise;
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
const tabs = [$('vocab-tab'), $('sentence-tab'), $('classifier-tab'), $('numbers-tab'), $('builder-tab')];
const modes = ['vocab', 'sentence', 'classifiers', 'numbers', 'builder'];

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
    if (mode === 'builder') return sentenceBuilderQuestions || [];
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
    current = mode === 'builder'
        ? { ...list[index], blocks: [], choices: list[index].choices.map((choice) => ({ ...choice })) }
        : list[index];

    //Reset state and update the page for the new question.
    attempts = 3;
    locked = false;

    //Remember, $(ID) refers to the ID in the HTML file.
    $('mode-label').textContent = mode === 'vocab' ? 'WORD SPELLING' : mode === 'sentence' ? 'SENTENCE TRANSLATION' : mode === 'classifiers' ? 'CLASSIFIER PRACTICE' : mode === 'builder' ? 'SENTENCE BUILDER' : 'NUMBER PRACTICE';
    $('question-label').textContent = mode === 'vocab'
        ? 'Write the corresponding word in Vietnamese using the given definition.'
        : mode === 'sentence'
            ? 'Translate this sentence into Vietnamese.'
        : mode === 'classifiers'
            ? 'Type the Vietnamese classifier for this object.'
        : mode === 'builder'
            ? 'Build a Noun + Verb or Noun + Adjective sentence.'
            : 'Type the number in Vietnamese.';
    $('question').textContent = mode === 'builder' ? 'Build a sentence' : current.clue;
    $('meaning').textContent = mode === 'vocab'
        ? 'Yes, accents do matter. Just give it a try.'
        : mode === 'sentence'
            ? 'Use the Vietnamese sentence and punctuation.'
        : mode === 'classifiers'
            ? 'Type the classifier only (for example, cái).'
        : mode === 'builder'
            ? 'Select words to see their English translation. Tap a noun, then a verb or adjective. Tap a chosen word again to remove it.'
            : 'Translate the number in letter format.';
    $('sentence-builder').hidden = mode !== 'builder';
    $('sentence-blocks').replaceChildren();
    if (mode === 'builder') renderSentenceBlocks();
    $('answer').value = '';
    $('answer').hidden = mode === 'builder';
    $('answer').required = mode !== 'builder';
    $('answer').disabled = false;
    $('submit-button').disabled = false;
    $('submit-button').textContent = mode === 'builder' ? 'Check sentence' : 'Check answer.';
    $('skip-button').disabled = false;
    $('feedback').textContent = '';
    $('feedback').className = 'feedback';
    $('next-button').hidden = true;
    updateProgress();
    if (mode !== 'builder') $('answer').focus();
}

function renderSentenceBlocks() {
    const container = $('sentence-blocks');
    container.replaceChildren();

    current.choices.forEach((choice, index) => {
        const selectionIndex = current.blocks.findIndex((block) => block.choiceIndex === index);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'sentence-block';
        button.disabled = locked;
        button.setAttribute('aria-pressed', String(selectionIndex >= 0));
        button.setAttribute('aria-label', choice.kind + ': ' + choice.word + (selectionIndex >= 0 ? ', sentence word ' + (selectionIndex + 1) : ''));

        const kind = document.createElement('span');
        kind.className = 'sentence-block-kind';
        kind.textContent = choice.kind;
        const word = document.createElement('span');
        word.textContent = choice.word;
        const order = document.createElement('span');
        order.className = 'sentence-block-order';
        order.textContent = selectionIndex >= 0 ? String(selectionIndex + 1) : '';
        button.append(kind, word, order);

        button.addEventListener('click', () => {
            if (locked) return;
            if (selectionIndex >= 0) {
                current.blocks.splice(selectionIndex, 1);
                if (current.blocks.length > 0 && current.blocks[0].kind !== 'Noun') current.blocks = [];
                $('feedback').textContent = '';
                $('feedback').className = 'feedback';
            } else if (current.blocks.length === 0 && choice.kind !== 'Noun') {
                $('feedback').textContent = 'Start with a noun.';
                $('feedback').className = 'feedback incorrect';
                return;
            } else if (current.blocks.length === 1 && choice.kind === 'Noun') {
                $('feedback').textContent = 'Choose a verb or adjective next.';
                $('feedback').className = 'feedback incorrect';
                return;
            } else if (current.blocks.length >= 2) {
                $('feedback').textContent = 'Your sentence already has two words. Remove a choice to change it.';
                $('feedback').className = 'feedback incorrect';
            } else {
                current.blocks.push({ ...choice, choiceIndex: index });
                $('feedback').textContent = '';
                $('feedback').className = 'feedback';
            }
            updateSentenceBuilderTranslation();
            renderSentenceBlocks();
        });
        container.append(button);
    });
}

function updateSentenceBuilderTranslation() {
    let englishTranslation = 'Build a sentence';

    if (current.blocks.length === 1) {
        englishTranslation = current.blocks[0].translation;
    } else if (current.blocks.length === 2) {
        const noun = current.blocks[0];
        const predicate = current.blocks[1];
        const isPronoun = ['i', 'you', 'he', 'she', 'we (without the listener)', 'we (with the listener)', 'they'].includes(noun.translation.toLowerCase());
        const subject = isPronoun ? noun.translation : 'the ' + noun.translation;
        if (predicate.kind === 'Verb') {
            const usesThirdPerson = !['i', 'you', 'we (without the listener)', 'we (with the listener)', 'they'].includes(noun.translation.toLowerCase());
            const verb = usesThirdPerson ? predicate.thirdPerson || predicate.translation : predicate.translation;
            englishTranslation = subject + ' ' + verb + '.';
        } else {
            const linkingVerb = noun.translation.toLowerCase() === 'you' ? ' are ' 
                    : noun.translation.toLowerCase() === 'i' ? ' am ' 
                    : noun.translation.toLowerCase() === 'we (without the listener)' ? ' are ' 
                    : noun.translation.toLowerCase() === 'we (with the listener)' ? ' are ' 
                    : ' is ';
            englishTranslation = subject + linkingVerb + predicate.translation + '.';
        }
    }

    const capitalizedTranslation = 'English: ' + englishTranslation.charAt(0).toLocaleUpperCase('en') + englishTranslation.slice(1);
    
    if (englishTranslation !== 'Build a sentence') {
        $('question').textContent = capitalizedTranslation;
    }
    else {
        $('question').textContent = 'Build a sentence';
    }
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
    if (mode === 'builder') {
        if (current.blocks.length !== 2) {
            $('feedback').textContent = 'Select a noun and a verb or adjective in that order.';
            $('feedback').className = 'feedback incorrect';
            return;
        }
        locked = true;
        $('feedback').textContent = 'Correct! Well done! Or shall I say, giỏi lắm!';
        $('feedback').className = 'feedback correct';
        finishQuestion();
        return;
    }

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
        if (mode !== 'builder') $('answer').select();
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
    if (mode === 'builder') renderSentenceBlocks();
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

    if (mode === 'builder' && !sentenceBuilderQuestions) {
        $('mode-label').textContent = 'SENTENCE BUILDER';
        $('question-label').textContent = 'Loading word lists…';
        $('question').textContent = 'Loading…';
        $('meaning').textContent = 'Choose from three nouns, three verbs, and three adjectives.';
        $('sentence-builder').hidden = true;
        $('answer').hidden = true;
        $('answer').disabled = true;
        $('submit-button').disabled = true;
        $('skip-button').disabled = true;
        $('next-button').hidden = true;
        $('feedback').textContent = '';
        $('feedback').className = 'feedback';

        try {
            await loadSentenceBuilderQuestions();
        } catch (error) {
            sentenceBuilderLoadPromise = null;
            if (mode !== 'builder') return;
            const message = error instanceof Error ? error.message : 'Please check that the word files are available.';
            $('feedback').textContent = 'Could not load sentence builder words. ' + message;
            $('feedback').className = 'feedback incorrect';
            return;
        }

        if (mode !== 'builder') return;
        if (sentenceBuilderQuestions.length === 0) {
            $('feedback').textContent = 'Add words to the three text files to start building sentences.';
            $('feedback').className = 'feedback incorrect';
            return;
        }
    }

    $('sentence-builder').hidden = mode !== 'builder';
    $('answer').hidden = mode === 'builder';
    $('answer').disabled = false;
    $('submit-button').disabled = false;
    $('skip-button').disabled = false;
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
$('builder-tab').addEventListener('click', () => setMode('builder'));

//Initialize the page with the first vocabulary question.
nextQuestion();
