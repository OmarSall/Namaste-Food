import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import {act} from "react-dom/test-utils";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

it("Should load Restaurant Menu Component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu/>
                </Provider>
            </BrowserRouter>
        )

    )

    const accordionHeader = screen.getByText("Biriyani (5)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
})