describe("simulacion", () => {
  beforeEach("staging QA", () => {
    cy.visit("https://www.fullh4rd.com.ar/");
  });

  it("skroll review desk", () => {
    cy.wait(2000);
    cy.contains("Destacados").should("be.visible").scrollIntoView();
    cy.wait(2000);
    cy.contains("¿Qué estás buscando?").should("be.visible").scrollIntoView();
    cy.wait(2000);
    cy.get("footer > .cont").scrollIntoView();
    cy.wait(2000);
    cy.get("#main-header").scrollIntoView();
    cy.wait(2000);
    cy.get("footer > .cont").scrollIntoView();
    cy.wait(2000);
    cy.contains("¿Qué estás buscando?").should("be.visible").scrollIntoView();
    cy.wait(2000);
    cy.contains("Destacados").should("be.visible").scrollIntoView();
    cy.wait(2000);
    cy.get(":nth-child(1) > a > .text")
      .should("have.text", "Armá tu PC")
      .scrollIntoView();
  });
  it("skroll review mobile", () => {
    cy.viewport("iphone-x");
    cy.wait(2000);
    cy.contains("Destacados").should("be.visible").scrollIntoView();
    cy.wait(2000);
    cy.contains("¿Qué estás buscando?").should("be.visible").scrollIntoView();
    cy.wait(2000);
    cy.get("footer > .cont").scrollIntoView();
    cy.wait(2000);
    cy.get("#main-header").scrollIntoView();
    cy.wait(2000);
    cy.get("footer > .cont").scrollIntoView();
    cy.wait(2000);
    cy.contains("¿Qué estás buscando?").should("be.visible").scrollIntoView();
    cy.wait(2000);
    cy.contains("Destacados").should("be.visible").scrollIntoView();
    cy.wait(2000);
    cy.get(":nth-child(1) > a > .text")
      .should("have.text", "Armá tu PC")
      .scrollIntoView();
  });
});
