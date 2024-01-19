import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "../test-utils";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "../../components/LoginForm";

test("on initial render, login is disabled", () => {
	render(<LoginForm />);

	expect(screen.getByRole("button")).toBeDisabled();
});

test("if form is filled correctly the login is enabled", async () => {
	render(<LoginForm />);

	await userEvent.type(
		screen.getByLabelText(/e-mail adresse/i),
		"test@gmail.com"
	);
	await userEvent.type(screen.getByLabelText(/passwort/i), "Test123");

	await waitFor(() => {
		expect(screen.getByRole("button")).toBeEnabled();
	});
});

test("if email is invalid the error shows and login is disabled", async () => {
	render(<LoginForm />);

	await userEvent.type(screen.getByLabelText(/e-mail adresse/i), "test email");
	await userEvent.click(screen.getByLabelText(/passwort/i));

	await waitFor(() => {
		expect(screen.getByText(/Ungültige E-Mail Adresse./i)).toBeInTheDocument();
		expect(screen.getByRole("button")).toBeDisabled();
	});
});

test("if email is missing the error shows and login is disabled", async () => {
	render(<LoginForm />);

	await userEvent.type(screen.getByLabelText(/e-mail adresse/i), " ");
	await userEvent.clear(screen.getByLabelText(/e-mail adresse/i));
	await userEvent.click(screen.getByLabelText(/passwort/i));

	await waitFor(() => {
		expect(
			screen.getByText(/E-Mail wird für Login benötigt./i)
		).toBeInTheDocument();
		expect(screen.getByRole("button")).toBeDisabled();
	});
});

test("if password is missing the error shows and login is disabled", async () => {
	render(<LoginForm />);

	await userEvent.type(screen.getByLabelText(/passwort/i), " ");
	await userEvent.clear(screen.getByLabelText(/passwort/i));
	await userEvent.click(screen.getByLabelText(/e-mail adresse/i));

	await waitFor(() => {
		expect(
			screen.getByText(/Passwort wird für die Authentifizierung benötigt./i)
		).toBeInTheDocument();
		expect(screen.getByRole("button")).toBeDisabled();
	});
});
