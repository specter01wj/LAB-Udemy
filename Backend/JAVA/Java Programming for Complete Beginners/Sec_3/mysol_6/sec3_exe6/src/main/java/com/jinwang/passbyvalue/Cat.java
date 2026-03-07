package com.jinwang.passbyvalue;

public class Cat {

    private String name;

    public Cat(String name) {
        this.name = name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Cat [name=" + name + "]";
    }
}
