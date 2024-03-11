/// <reference types="cypress" />
context('nav_bar', () => { beforeEach(() => {
    cy.visit('../../navbar/index.html'); });
    it('scroll down', () => {
        cy.scrollTo("bottom", {duration : 500})
        cy.get("nav").should("not.be.visible")
        cy.scrollTo(0, 200, {duration: 500});
        cy.get("nav").should("be.visible")
    })
})