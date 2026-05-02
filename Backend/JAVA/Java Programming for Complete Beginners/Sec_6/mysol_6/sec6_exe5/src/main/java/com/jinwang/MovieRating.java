package com.jinwang;

import java.util.Objects;

public class MovieRating {

    private String movieTitle;
    private int rating;

    public MovieRating(String movieTitle, int rating) {
        this.movieTitle = movieTitle;
        this.rating = rating;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public int getRating() {
        return rating;
    }

    @Override
    public String toString() {
        return movieTitle + " - " + rating;
    }

    // IMPORTANT for HashSet uniqueness
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof MovieRating)) return false;
        MovieRating that = (MovieRating) o;
        return rating == that.rating &&
                Objects.equals(movieTitle, that.movieTitle);
    }

    @Override
    public int hashCode() {
        return Objects.hash(movieTitle, rating);
    }
}
