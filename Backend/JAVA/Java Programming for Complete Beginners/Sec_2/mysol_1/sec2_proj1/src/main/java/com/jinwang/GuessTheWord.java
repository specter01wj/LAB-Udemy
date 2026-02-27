package com.jinwang;

import java.util.Scanner;

public class GuessTheWord {

    private boolean play = true;
    private final Words randomWord = new Words();
    private final Scanner scanner = new Scanner(System.in);

    private int rounds = 10;
    private char lastGuess;

    public void start() {

        while (play) {
            showWord();
            getInput();
            checkInput();
        }
    }

    private void showWord() {
        System.out.println("You have " + rounds + " tries left.");
        System.out.println(randomWord);
    }

    private void getInput() {

        System.out.print("Enter a letter to guess the word: ");
        String userGuess = scanner.nextLine().toLowerCase();

        if (!userGuess.isEmpty()) {
            lastGuess = userGuess.charAt(0);
        }
    }

    private void checkInput() {

        boolean isGuessedRight = randomWord.guess(lastGuess);

        if (isGuessedRight) {

            if (randomWord.isGuessedRight()) {
                System.out.println("Congrats, you won!");
                System.out.println("The word is: " + randomWord.getSelectedWord());
                play = false;
            }

        } else {

            rounds--;

            if (rounds == 0) {
                System.out.println("Game Over!");
                System.out.println("The word was: " + randomWord.getSelectedWord());
                play = false;
            }
        }
    }

    public void end() {
        scanner.close();
    }
}
