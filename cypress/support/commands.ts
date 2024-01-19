/* eslint-disable @typescript-eslint/no-namespace */

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

Cypress.Commands.add("dragAndDrop", (subject, target) => {
	const BUTTON_INDEX = 0;
	const SLOPPY_CLICK_THRESHOLD = 10;

	cy.get(target)
		.first()
		.then(($target) => {
			const coordsDrop = $target[0].getBoundingClientRect();
			cy.get(subject)
				.first()
				.then((subject) => {
					const coordsDrag = subject[0].getBoundingClientRect();
					cy.wrap(subject)
						.trigger("mousedown", {
							button: BUTTON_INDEX,
							clientX: coordsDrag.x,
							clientY: coordsDrag.y,
							force: true,
						})
						.trigger("mousemove", {
							button: BUTTON_INDEX,
							clientX: coordsDrag.x + SLOPPY_CLICK_THRESHOLD,
							clientY: coordsDrag.y,
							force: true,
						});
					cy.get("body")
						.trigger("mousemove", {
							button: BUTTON_INDEX,
							clientX: coordsDrop.x,
							clientY: coordsDrop.y,
							force: true,
						})
						.trigger("mouseup");
				});
		});
});

declare namespace Cypress {
	interface Chainable {
		dragAndDrop(subject: string, target: string): Chainable<Element>;
	}
}
