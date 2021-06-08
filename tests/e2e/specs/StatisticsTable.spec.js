describe("Test Statistic Table", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[class=btns]").contains("Statistics").click();
  });

  it("Table Hotel per city Renders", () => {
    cy.contains("[class=tableTitle]", "Hotels per city");
  });

  it("Table Hotel per star Renders", () => {
    cy.contains("[class=tableTitle]", "Hotels per star");
  });
});
