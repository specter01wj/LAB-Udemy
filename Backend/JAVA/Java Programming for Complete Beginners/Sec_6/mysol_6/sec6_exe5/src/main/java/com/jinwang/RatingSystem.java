package com.jinwang;

import java.util.HashSet;
import java.util.Set;

public class RatingSystem {

    private Set<MovieRating> ratings = new HashSet<>();

    public void addRating(MovieRating rating) {
        ratings.add(rating);
    }

    public void displayRatings() {
        for (MovieRating r : ratings) {
            System.out.println(r);
        }
    }
}
