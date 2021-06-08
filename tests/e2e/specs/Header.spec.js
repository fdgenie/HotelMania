describe("Test header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Header Renders", () => {
    cy.contains("p", "HotelMania");
  });

  it("Statistics get you to url: /statistics", () => {
    cy.get("[class=btns]").contains("Statistics").click();
    cy.hash().should("eq", "#/statistics");
  });

  it("Home get you back home from statistics", () => {
    cy.get("[class=btns]").contains("Statistics").click();
    cy.get("[class=btns]").contains("Home").click();
    cy.hash().should("eq", "#/");
  });

  it("Logo get you back home from statistics", () => {
    cy.get("[class=btns]").contains("Statistics").click();
    cy.get("p").contains("HotelMania").click();
    cy.hash().should("eq", "#/");
  });
});
