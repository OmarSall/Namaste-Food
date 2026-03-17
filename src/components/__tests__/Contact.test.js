import Contact from "../Contact";
import {render,screen} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom"

describe("Contact Us Page Test Case", () => {
    beforeAll(() => {
        console.log("Before All");
    })

    beforeEach(() => {
        console.log("Before Each");
    })

    afterAll(() => {
        console.log("After All");
    })

    afterEach(() => {
        console.log("After Each");
    })

    it("Should load contact us component", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        // Assertion
        expect(heading).toBeInTheDocument();
    });

    it("Should load input name inside Contact component", () => {
        render(<Contact />);
        // Querying
        const inputName = screen.getByPlaceholderText("name")
        expect(inputName).toBeInTheDocument();
    })
})