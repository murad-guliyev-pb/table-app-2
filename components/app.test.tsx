import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { IEmployee } from "../helpers/models";
import App from "./app";

const mockEmployees: IEmployee[] = [
    {
        id: "1",
        name: "Name One",
        surname: "Surname One",
        dateOfBirth: "01-01-1991",
        position: "Position One",
        phoneNumber: "+994511111",
    },
    {
        id: "2",
        name: "Name Two",
        surname: "Surname Two",
        dateOfBirth: "02-02-1992",
        position: "Position Two",
        phoneNumber: "+994511112",
    },
];

test("search works right", () => {
    render(<App employeesList={mockEmployees} />);
    const searchInput = screen.getByRole("textbox");
    expect(screen.getByText(/surname one/i)).toBeInTheDocument();
    expect(screen.getByText(/surname two/i)).toBeInTheDocument();
    userEvent.type(searchInput, "surname one");
    expect(screen.getByText(/surname one/i)).toBeInTheDocument();
    expect(screen.queryByText(/surname two/i)).not.toBeInTheDocument();
});
