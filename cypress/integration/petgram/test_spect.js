/* global describe, it, expect, cy */

describe("Petgram", function () {
  it("para ver la app funciona", function () {
    cy.visit("/");
  });

  it("Navegar a una categoría y ver fotos", function () {
    cy.visit("/pet/1");
    cy.get("article");
  });

  it("Si podemos navegar con la navbar a la home", function () {
    cy.visit("/pet/1");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });

  it("Los usuarios no registrados ven el formulario de registro e inicio de sesión al ir a favs", function () {
    cy.visit("/favs");
    cy.get("form").should("have.length", 2);
  });
});
