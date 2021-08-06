import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const form = screen.getByText("Checkout Form");
    expect(form).toBeTruthy()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    fireEvent.click(screen.getByText('Checkout'))
    expect(screen.getByTestId('successMessage')).toBeVisible();

});
