/// <reference types="cypress" />
context('Cypher', () => { beforeEach(() => {
    cy.visit('../../app/index.html'); });
    it('.type() in cypher and in text, click on button and verif cypher encoded string', () => {
        cy.get("input[type='number']").type('6')
        cy.get("input[type='text']").type('Hello World')
        cy.get(".btn").click()

        cy.get("#Result").should("have.text" , "Nkrru Cuxrj")
    })
})