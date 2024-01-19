/// <reference types="cypress" />

describe("authentication", () => {
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit("http://localhost:3000");
	});

	it("gets rejected for wrong credentials", () => {
		// types wrong email
		// types wrong pw
		// clicks button
		// error message appears
	});

	it("can authenticate correctly and logout after", () => {
		// types correct email
		// types correct pw
		// clicks button
		// user is set in ls
		// refresh
		// user is still set and stays logged in
		// logout
	});
});
