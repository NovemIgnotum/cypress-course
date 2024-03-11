/// <reference types="cypress" />

describe("Lightbox", () => {
  beforeEach(() => {
    cy.visit("../../lightbox/index.html");
  });

  it("verfier l'ouverture de la lightbox", () => {
    cy.get(["x-show=isLightboxVisible"]).should("not.be.visible");
    cy.get("img").first().click();
    cy.get("#lightbox").should("be.visible");
  });

  it("verifier la fermeture de la lightbox", () => {
    cy.get(["x-show=isLightboxVisible"]).should("not.be.visible");
    cy.get("img").first().click();
    cy.get("#lightbox").should("be.visible");
    cy.get("#closeCross").should("be.visible");
    cy.get("#closeCross").click();
    cy.get("#lightbox").should("not.be.visible");
  });

  it("verifier la fermeture de la lightbox si l'on clique en dehors de la lightbox", () => {
    cy.get(["x-show=isLightboxVisible"]).should("not.be.visible");
    cy.get("img").first().click();
    cy.get("#lightbox").should("be.visible");
    cy.get("#lightboxBG").click("topRight");
    cy.get("#lightbox").should("not.be.visible");
  });

  it("verifier l'ajout d'un like", () => {
    cy.get("img").first().click();
    cy.get("#like").click();
    cy.get("#liked");
  });

  it("verifier la suppression d'un like", () => {
    cy.get("img").first().click();
    cy.get("#like").click();
    cy.get("#liked").click();
    cy.get("#like");
  });

  it("verifier l'ajout d'un commentaire", () => {
    cy.get("img").first().click();
    cy.get("input").type("test");
    cy.get("#submitComment").click();
  });

  it("tester l'ajout d'un commentaire vide", () => {
    cy.get("img").first().click();
    cy.get("input").type(" ");
    cy.get("#submitComment").should("be.disabled");
  });
});
