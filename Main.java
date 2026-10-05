import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class Main {
    private static final Map<String, String> ENGLISH_MEANINGS = createEnglishMeaningMap();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in, StandardCharsets.UTF_8.name());
        boolean running = true;

        while (running) {
            System.out.println();
            System.out.println("Vietnamese Practice Menu");
            System.out.println("1) Vocabulary spelling game");
            System.out.println("2) Sentence translation game");
            System.out.println("3) Exit");
            System.out.print("Choose an option (1, 2, or 3): ");

            String modeChoice = scanner.nextLine().trim();

            if (modeChoice.equals("1")) {
                playVocabularyGame(scanner);
            } else if (modeChoice.equals("2")) {
                playSentenceTranslationGame(scanner);
            } else if (modeChoice.equals("3") || modeChoice.equalsIgnoreCase("q") || modeChoice.equalsIgnoreCase("exit")) {
                running = false;
            } else {
                System.out.println("Invalid choice. Please enter 1, 2, or 3.");
            }
        }

        System.out.println("Thanks for practicing Vietnamese!");
        scanner.close();
    }

    private static void playVocabularyGame(Scanner scanner) {
        List<String> words = loadWords("/Users/hannahpham/Personal Projects/Vietnamese/vietnamese_words_list.txt");

        if (words.isEmpty()) {
            System.out.println("No Vietnamese words were found in the file.");
            return;
        }

        Random random = new Random();
        System.out.println("Vietnamese Vocabulary Practice");
        System.out.println("Type each word exactly, including accents and capitalization.");

        boolean playAgain = true;
        while (playAgain) {
            String targetWord = words.get(random.nextInt(words.size()));
            String questionWord = stripAccents(targetWord);
            String englishMeaning = getEnglishMeaning(targetWord);
            int attemptsLeft = 3;

            System.out.println();
            System.out.println("Type the Vietnamese spelling for: " + questionWord + " (meaning: " + englishMeaning + ")");

            while (attemptsLeft > 0) {
                System.out.print("Your answer: ");
                String userAnswer = normalizeInput(scanner.nextLine());

                if (userAnswer.equalsIgnoreCase(targetWord)) {
                    System.out.println("Correct! Well done.");
                    attemptsLeft = 0;
                } else {
                    attemptsLeft--;
                    if (attemptsLeft > 0) {
                        System.out.println("Incorrect. You have " + attemptsLeft + " more try(s) left.");
                    } else {
                        System.out.println("Incorrect. The correct spelling is: " + targetWord);
                    }
                }
            }

            System.out.print("Try another word? (y/n, press Enter for yes): ");
            String choice = scanner.nextLine().trim().toLowerCase(Locale.ROOT);
            playAgain = choice.isEmpty() || choice.startsWith("y");
        }
    }

    private static void playSentenceTranslationGame(Scanner scanner) {
        List<String> sentences = loadWords("/Users/hannahpham/Personal Projects/Vietnamese/vietnamese_sentences_list.txt");

        if (sentences.isEmpty()) {
            System.out.println("No Vietnamese sentences were found in the file.");
            return;
        }

        Random random = new Random();
        System.out.println("Vietnamese Sentence Translation Practice");
        System.out.println("Translate the English sentence into Vietnamese.");

        boolean playAgain = true;
        while (playAgain) {
            String targetSentence = sentences.get(random.nextInt(sentences.size()));
            String englishSentence = getEnglishSentence(targetSentence);
            int attemptsLeft = 3;

            System.out.println();
            System.out.println("Translate this into Vietnamese: " + englishSentence);

            while (attemptsLeft > 0) {
                System.out.print("Your answer: ");
                String userAnswer = normalizeInput(scanner.nextLine());

                if (userAnswer.equalsIgnoreCase(targetSentence)) {
                    System.out.println("Correct! Well done.");
                    attemptsLeft = 0;
                } else {
                    attemptsLeft--;
                    if (attemptsLeft > 0) {
                        System.out.println("Incorrect. You have " + attemptsLeft + " more try(s) left.");
                    } else {
                        System.out.println("Incorrect. The correct Vietnamese sentence is: " + targetSentence);
                    }
                }
            }

            System.out.print("Try another sentence? (y/n, press Enter for yes): ");
            String choice = scanner.nextLine().trim().toLowerCase(Locale.ROOT);
            playAgain = choice.isEmpty() || choice.startsWith("y");
        }
    }

    private static String getEnglishMeaning(String word) {
        if (word == null || word.trim().isEmpty()) {
            return "the meaning of this word";
        }

        String trimmedWord = word.trim();
        String exactKey = trimmedWord.toUpperCase(Locale.ROOT);
        if (ENGLISH_MEANINGS.containsKey(exactKey)) {
            return ENGLISH_MEANINGS.get(exactKey);
        }

        String accentlessKey = stripAccents(exactKey);
        if (ENGLISH_MEANINGS.containsKey(accentlessKey)) {
            return ENGLISH_MEANINGS.get(accentlessKey);
        }

        return "the meaning of this word";
    }

    private static Map<String, String> createEnglishMeaningMap() {
        Map<String, String> definitions = new HashMap<>();
        definitions.put("CHÀO", "hello / hi");
        definitions.put("ANH", "older brother / male friend");
        definitions.put("TÔI", "I / me");
        definitions.put("TÊN", "name");
        definitions.put("LÀ", "is / am / are");
        definitions.put("NAM", "Nam (a male name)");
        definitions.put("CHỊ", "older sister");
        definitions.put("GÌ", "what");
        definitions.put("RẤT", "very");
        definitions.put("VUI", "happy / pleased");
        definitions.put("ĐƯỢC", "to be allowed / can / get");
        definitions.put("LÀM", "to do / make");
        definitions.put("QUEN", "to know / be familiar with");
        definitions.put("VỚI", "with");
        definitions.put("ÔNG", "grandfather / sir");
        definitions.put("CŨNG", "also / too");
        definitions.put("BIẾT", "to know");
        definitions.put("KHỎE", "healthy / well");
        definitions.put("CÁM", "thank you");
        definitions.put("CAM", "orange / bitter");
        definitions.put("ƠN", "favor / kindness");
        definitions.put("BÀ", "grandmother / ma'am");
        definitions.put("ĐÂY", "this / here");
        definitions.put("AI", "who");
        definitions.put("SINH", "to be born");
        definitions.put("VIÊN", "member / person");
        definitions.put("LAN", "Lan (a female name)");
        definitions.put("MUA", "to buy");
        definitions.put("NÀY", "this");
        definitions.put("NGỌT", "sweet");
        definitions.put("CÓ", "to have / there is");
        definitions.put("Ô", "car / vehicle (part of 'ô tô')");
        definitions.put("TÔ", "car / vehicle (part of 'ô tô')");
        definitions.put("XE", "vehicle / car");
        definitions.put("HƠI", "steam / smell / a little");
        definitions.put("ĐÂU", "where");
        definitions.put("NGƯỜI", "person / people");
        definitions.put("NƯỚC", "water / country");
        definitions.put("NÀO", "which / what kind");
        definitions.put("HỌC", "to study / learn");
        definitions.put("TIẾNG", "language / sound");
        definitions.put("VIỆT", "Vietnamese");
        definitions.put("Ở", "at / in / to live");
        definitions.put("CHO", "for / give / let");
        definitions.put("HỎI", "to ask");
        definitions.put("MỸ", "American / America");
        definitions.put("NÓI", "to speak / say");
        definitions.put("NHÀ", "house / home");

        return definitions;
    }

    private static String getEnglishSentence(String sentence) {
        Map<String, String> sentences = new HashMap<>();
        sentences.put("CHÀO ANH!", "Hello, brother!");
        sentences.put("TÔI TÊN LÀ NAM.", "My name is Nam.");
        sentences.put("CHỊ TÊN LÀ GÌ?", "What is your sister's name?");
        sentences.put("RẤT VUI ĐƯỢC LÀM QUEN VỚI ÔNG.", "It is very nice to meet you, sir.");
        sentences.put("TÔI CŨNG RẤT VUI ĐƯỢC BIẾT ANH.", "I am also very happy to know you.");
        sentences.put("TÔI KHỎE, CÁM ƠN BÀ.", "I am well, thank you, ma'am.");
        sentences.put("ĐÂY LÀ AI?", "Who is this?");
        sentences.put("AI BIẾT?", "Who knows?");
        sentences.put("NAM LÀ SINH VIÊN.", "Nam is a student.");
        sentences.put("LAN MUA CAM.", "Lan buys oranges.");
        sentences.put("CAM NÀY NGỌT.", "This orange is sweet.");
        sentences.put("NAM CÓ Ô TÔ/XE HƠI.", "Nam has a car.");

        return sentences.getOrDefault(sentence, "the English meaning of this sentence");
    }

    private static String stripAccents(String input) {
        String normalized = java.text.Normalizer.normalize(input, java.text.Normalizer.Form.NFD);
        StringBuilder builder = new StringBuilder();

        for (int i = 0; i < normalized.length(); i++) {
            char ch = normalized.charAt(i);
            if (Character.getType(ch) != Character.NON_SPACING_MARK) {
                builder.append(ch);
            }
        }

        return builder.toString();
    }

    private static String normalizeInput(String rawInput) {
        StringBuilder cleaned = new StringBuilder();

        for (int i = 0; i < rawInput.length(); i++) {
            char ch = rawInput.charAt(i);

            if (ch == '\b' || ch == '\u007F') {
                if (cleaned.length() > 0) {
                    cleaned.setLength(cleaned.length() - 1);
                }
            } else if (ch == '\r') {
                continue;
            } else {
                cleaned.append(ch);
            }
        }

        return cleaned.toString().trim();
    }

    private static List<String> loadWords(String filePath) {
        List<String> words = new ArrayList<>();
        Path path = Paths.get(filePath);

        try {
            List<String> lines = Files.readAllLines(path, StandardCharsets.UTF_8);
            for (String line : lines) {
                String trimmed = line.trim();
                if (!trimmed.isEmpty()) {
                    words.add(trimmed);
                }
            }
        } catch (IOException e) {
            System.out.println("Could not read word list from: " + filePath);
            System.out.println("Make sure the file exists and the path is correct.");
        }

        return words;
    }
}
