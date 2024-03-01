/// <reference types="cypress" />

context("Hello World!", () => {
  beforeEach(() => {
    cy.visit("../../ceasar/index.html");
  });

  it("test de l'encryption", () => {
    cy.get("#shift").type("6");
    cy.get("#text").type("hello world!");

    cy.get("#submit").click();

    cy.get("#result-title").should("have.text", "nkrru cuxrj!");
  });
});
