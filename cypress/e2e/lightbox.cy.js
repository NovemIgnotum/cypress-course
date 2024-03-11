Cypress.Commands.add('getData', (value) => {
    cy.get(`[data-cy=${value}]`);
   });

context('Cypher', () => { beforeEach(() => {
    cy.visit('../../lightbox/index.html'); });
    
    it("Open Modal on click" , () => {
        // Ouverture de la modal
        cy.getData("image-open").click()
        cy.get("#lightbox").should("be.visible")
    })

    it("close Modal on click", () => {
        // Ouverture de la modal
        cy.getData("image-open").click()
        cy.get("#lightbox").should("be.visible")

        // Fermeture de la modal
        cy.getData("close-modal").click()
        cy.get("#lightbox").should("not.be.visible")
    })

    it("Add like on heart click", () => {
        // Ouverture de la modal
        cy.getData("image-open").click()
        cy.get("#lightbox").should("be.visible")

        // heart click
        cy.getData("like").click()
        cy.getData("like-counter-modal").should("have.text", '1')

        // Fermeture de la modal
        cy.getData("close-modal").click()
        cy.get("#lightbox").should("not.be.visible")

        // Verification nombre overlay
        cy.getData("like-counter-overlay").should("have.text", '1')

    })

    it("Suppr like on click", () => {
        // Ouverture de la modal
        cy.getData("image-open").click()
        cy.get("#lightbox").should("be.visible")

        // heart click
        cy.getData("like").click()
        cy.getData("like-counter-modal").should("have.text", '1')

        // Dislike click
        cy.getData("dislike").click()
        cy.getData("like-counter-modal").should("have.text", '0')

        // Fermeture de la modal
        cy.getData("close-modal").click()
        cy.get("#lightbox").should("not.be.visible")

        // Verification nombre overlay
        cy.getData("like-counter-overlay").should("have.text", '0')
    })

    it("add comment" , () => {
        // Ouverture de la modal
        cy.getData("image-open").click()
        cy.get("#lightbox").should("be.visible")

        // Envoie d'un commentaire
        cy.get("input[type=text]").type("Cypress is Awesome")
        cy.get("button[type=submit]").click()

        // Vérifier l'intégriter du commentaire
        cy.getData("comment-body").should("have.text", "Cypress is Awesome")
        cy.getData("comment-author").should("have.text", "johndoe")

        // Fermeture de la modal
        cy.getData("close-modal").click()
        cy.get("#lightbox").should("not.be.visible")

        // Test compteur de commentaire overlay
        cy.getData("comment-counter-overlay").should("have.text", '1')
    })

    it("Desactivate publich button with void comment" , () => {
        // Ouverture de la modal
        cy.getData("image-open").click()
        cy.get("#lightbox").should("be.visible")

        // Vérification boutton publish désactiver
        cy.get("button[type=submit]").should("be.disabled")

        // Fermeture de la modal
        cy.getData("close-modal").click()
        cy.get("#lightbox").should("not.be.visible")
    })

    it("hide comment", () => {
        // Ouverture de la modal
        cy.getData("image-open").click()
        cy.get("#lightbox").should("be.visible")

        // Envoie d'un commentaire
        cy.get("input[type=text]").type("Cypress is Awesome")
        cy.get("button[type=submit]").click()

        // Vérifier l'intégriter du commentaire
        cy.getData("comment-body").should("have.text", "Cypress is Awesome")
        cy.getData("comment-author").should("have.text", "johndoe")

        // click pour cacher les commentaire
        cy.getData("hide-comment").click()

        // Vérification commentaire cacher
        cy.getData("comment").should("not.be.visible")
    })

    it("test comment counter", () => {
        // Ouverture de la modal
        cy.getData("image-open").click()
        cy.get("#lightbox").should("be.visible")

        // Envoie d'un commentaire
        cy.get("input[type=text]").type("Cypress is Awesome")
        cy.get("button[type=submit]").click()

        // Vérifier l'intégriter du commentaire
        cy.getData("comment-body").should("have.text", "Cypress is Awesome")
        cy.getData("comment-author").should("have.text", "johndoe")

        // Vérification affichage 1 commentaire modal
        cy.getData("hide-comment").contains('1')

        // ajout d'un second commentaire
        cy.get("input[type=text]").type("Cypress is Awesome")
        cy.get("button[type=submit]").click()

        // Vérification affichage 2 commentaire modal
        cy.getData("hide-comment").contains('2')

        // Fermeture de la modal
        cy.getData("close-modal").click()
        cy.get("#lightbox").should("not.be.visible")

        // Test compteur de commentaire overlay
        cy.getData("comment-counter-overlay").should("have.text", '2')
    })

    it("test plurial with multiple comment", () => {
        // Ouverture de la modal
        cy.getData("image-open").click()
        cy.get("#lightbox").should("be.visible")

        // Envoie d'un commentaire
        cy.get("input[type=text]").type("Cypress is Awesome")
        cy.get("button[type=submit]").click()

        // Vérifier l'intégriter du commentaire
        cy.getData("comment-body").should("have.text", "Cypress is Awesome")
        cy.getData("comment-author").should("have.text", "johndoe")

        // Vérification singulier
        cy.getData("hide-comment").contains('comment')
        cy.getData("hide-comment").click()
        cy.getData("hide-comment").contains('comment')
        cy.getData("hide-comment").click()

        // ajout d'un second commentaire
        cy.get("input[type=text]").type("Cypress is Awesome")
        cy.get("button[type=submit]").click()

        //vérification pluriel
        cy.getData("hide-comment").contains('comments')
        cy.getData("hide-comment").click()
        cy.getData("hide-comment").contains('comments')
    })

    it("Test Remove comment with more than 1 comment", () => {
        // Ouverture de la modal
        cy.getData("image-open").click()
        cy.get("#lightbox").should("be.visible")

        // Envoie d'un commentaire
        cy.get("input[type=text]").type("Cypress is Awesome")
        cy.get("button[type=submit]").click()
        cy.get("input[type=text]").type("Cypress is Awesome")
        cy.get("button[type=submit]").click()
        cy.get("input[type=text]").type("Cypress is Awesome")
        cy.get("button[type=submit]").click()

        // Vérification affichage 3 commentaire modal
        cy.getData("hide-comment").contains('3')

        // Vérifier l'intégriter du commentaire
        cy.getData("delete-comment").eq(1).click()

        // Vérification affichage 2 commentaire modal
        cy.getData("hide-comment").contains('2')
    })



})