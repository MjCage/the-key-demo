/// <reference types="cypress" />

import { AUTH_TOKEN } from "../../src/utils/contants";

describe("authentication", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("gets rejected for wrong credentials", () => {
		cy.get("#email").type("wrongemail@example.com");
		cy.get('input[type="password"]').type("wrongpassword");
		cy.contains("button", "Einloggen").click();
		cy.contains("E-Mail und/oder Passwort falsch.").should("be.visible");
	});

	it("can authenticate correctly and logout after", () => {
		cy.get("#email").type(Cypress.env("correct_email"));
		cy.get('input[type="password"]').type(Cypress.env("correct_password"));
		cy.contains("button", "Einloggen").click();

		cy.window().its(`localStorage.${AUTH_TOKEN}`).should("exist");
		cy.get(".authenticated-ui").should("be.visible");

		cy.reload();

		cy.window().its(`localStorage.${AUTH_TOKEN}`).should("exist");
		cy.get(".authenticated-ui").should("be.visible");

		cy.contains("button", "Ausloggen").click();
		cy.window().its(`localStorage.${AUTH_TOKEN}`).should("not.exist");
	});
});
