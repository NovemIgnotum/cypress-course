describe("Test de l'accordéon", () => {
  beforeEach(() => {
    // Charge la page HTML avant chaque test
    cy.visit("../../tailwind_test/index.html");
  });

  it("Vérifie le premier bouton déroulant", () => {
    // Clic sur le premier bouton déroulant
    cy.contains("h3", "First lesson").click();

    // Vérifie que le texte est affiché
    cy.contains("p", "Lorem ipsum dolor sit amet");
  });

  it("Vérifie le deuxième bouton déroulant", () => {
    // Clic sur le deuxième bouton déroulant
    cy.contains("h3", "Second lesson").click();

    // Vérifie que le texte est affiché
    cy.contains("p", "Lorem ipsum dolor sit amet");
  });
});
