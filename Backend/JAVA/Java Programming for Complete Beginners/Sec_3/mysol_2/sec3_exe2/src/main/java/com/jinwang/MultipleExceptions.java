package com.jinwang;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.ParseException;

public class MultipleExceptions {

    public void start() throws IOException, ParseException {

        // Simulate exception
        throw new ParseException("Error at line 10", 2);
    }

    public void example() throws IOException, FileNotFoundException {

        // Simulate no exception
    }
}
