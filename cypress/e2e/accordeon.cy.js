/// <reference types="cypress" />
context('Cypher', () => { beforeEach(() => {
    cy.visit('../../accord/index.html'); });
    
    it("Test Accordeon first element", () => {
        cy.get(".first-element").click()
        cy.get(".first-text").should("be.visible")
        cy.get(".first-element").click()
        cy.get(".first-text").should("not.be.visible")
    })

    it("Test accordeon second element", () => {
        cy.get(".second-element").click()
        cy.get(".second-text").should("be.visible")
        cy.get(".second-element").click()
        cy.get(".second-text").should("not.be.visible")
    })

    it("Test have rotate" , () => {
        cy.get(".first-element").click()
        cy.get(".svg-1").should("have.class", "rotate-90")
        cy.get(".first-element").click()
        cy.get(".svg-1").should("not.have.class", "rotate-90")
        cy.get(".second-element").click()
        cy.get(".svg-2").should("have.class", "rotate-90")
        cy.get(".second-element").click()
        cy.get(".svg-2").should("not.have.class", "rotate-90")
    })

})