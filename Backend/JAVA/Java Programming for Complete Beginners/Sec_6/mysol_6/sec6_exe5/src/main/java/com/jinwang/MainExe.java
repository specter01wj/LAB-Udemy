package com.jinwang;

public class MainExe {

    public static void main(String[] args) {

        RatingSystem system = new RatingSystem();

        system.addRating(new MovieRating("Inception", 5));
        system.addRating(new MovieRating("Avatar", 4));
        system.addRating(new MovieRating("Inception", 5)); // duplicate

        system.displayRatings();
    }

}
