describe("Search a product and add it to cart", () => {
  it("check a product and add it to cart", () => {
    cy.visit("https://www.fullh4rd.com.ar/");
    cy.get("#searchid").type("monitor{enter}").wait(2000);
    cy.get(":nth-child(1) > a > .info > .cta > .btn-accent-md").should(
      "have.text",
      "\nComprar\n"
    );
    cy.get(":nth-child(1) > a > .info > .cta > .btn-outline-md").should(
      "have.text",
      "\n Agregar\n"
    );
    cy.get("footer > .cont").scrollIntoView().wait(3000);
    cy.get(".filter > h2").scrollIntoView().wait(3000);
    cy.get("#gallery-list > :nth-child(1) > a").click().wait(2000);
    cy.get("h1").scrollIntoView().wait(4000);
    cy.get('[style="width:100%; margin-bottom:10px;"] > .btn-accent').should(
      "have.text",
      "Comprar ahora"
    );
    cy.get(":nth-child(2) > .btn-outline").should(
      "have.text",
      "Calcular envío"
    );
    cy.get(":nth-child(10) > :nth-child(3) > .btn-outline").should(
      "have.text",
      " Agregar"
    );
    cy.get(":nth-child(10) > :nth-child(3) > .btn-outline")
      .click({ force: true })
      .wait(3000);
    cy.get("#success")
      .should("have.text", " Producto agregado al carrito")
      .scrollIntoView()
      .wait(4000);
    cy.get(".dropdown-opener > img").click().wait(4000);
    cy.contains("Productos relacionados").scrollIntoView().wait(4000);
    cy.get(":nth-child(1) > a > .info > .cta > .btn")
      .click({ force: true })
      .wait(3000);
    cy.get(".dropdown-opener > img").click().wait(4000);
  });
});
