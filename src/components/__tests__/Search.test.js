import Body from "../Body";
import "@testing-library/jest-dom"
import {fireEvent, render} from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json"
import {act} from "react-dom/test-utils";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data)
        }
    })
})

it("Should Search Res List for burger text input", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ))

    const cardsBeForSearch = screen.getAllByTestId("")

    expect(cards.length).toBe(20)

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, {target: {value: "burger"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
    // expect(searchBtn).toBeInTheDocument();
})

it("Should filter Top Rated Restaurants", async () => {
    await act(async () =>
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });

    fireEvent.click(topRatedBtn);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(13);
})