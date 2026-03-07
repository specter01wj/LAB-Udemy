package com.jinwang.enums;

public enum Color {

    RED("Passion"),
    GREEN("Health"),
    BLUE("Calm");

    private final String meaning;

    Color(String meaning) {
        this.meaning = meaning;
    }

    public String getMeaning() {
        return meaning;
    }

    @Override
    public String toString() {
        return "This color's meaning is: " + meaning;
    }
}
