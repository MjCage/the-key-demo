import { REORDER_ACTIONS } from "../../src/utils/contants";

describe("dnd persistence", () => {
	const login = () => {
		cy.get("#email").type(Cypress.env("correct_email"));
		cy.get('input[type="password"]').type(Cypress.env("correct_password"));
		cy.contains("button", "Einloggen").click();

		cy.get(".ReactVirtualized__Grid").should("be.visible");
	};

	const dragAndDropItem = () => {
		const firstItemSelector = '[data-testid="node-item"]:eq(0)';
		const fourthItemSelector = '[data-testid="node-item"]:eq(3)';

		cy.dragAndDrop(firstItemSelector, fourthItemSelector);
	};

	beforeEach(() => {
		cy.visit("http://localhost:3000");
		cy.window().then((win) => {
			win.localStorage.removeItem(REORDER_ACTIONS);
		});

		login();
	});

	it("check if drag and drop works and order is persistent on reload", () => {
		cy.window().its(`localStorage.${REORDER_ACTIONS}`).should("not.exist");

		dragAndDropItem();

		cy.window().its(`localStorage.${REORDER_ACTIONS}`).should("exist");

		let initialOrder: string[];
		cy.get('[data-testid="node-item"]').then(($items) => {
			initialOrder = $items.toArray().map((item) => item.innerText);
		});

		cy.reload();

		cy.get('[data-testid="node-item"]').each(($item, index) => {
			cy.wrap($item).should("contain", initialOrder[index]);
		});
	});

	it("check if order is persitent after logout and login", () => {
		cy.window().its(`localStorage.${REORDER_ACTIONS}`).should("not.exist");

		dragAndDropItem();

		cy.window().its(`localStorage.${REORDER_ACTIONS}`).should("exist");

		let initialOrder: string[];
		cy.get('[data-testid="node-item"]').then(($items) => {
			initialOrder = $items.toArray().map((item) => item.innerText);
		});

		cy.contains("button", "Ausloggen").click();
		login();

		cy.get('[data-testid="node-item"]').each(($item, index) => {
			cy.wrap($item).should("contain", initialOrder[index]);
		});
	});
});
