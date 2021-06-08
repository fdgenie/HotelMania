describe("Test Hotels Table", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Table Renders", () => {
    cy.contains("[class=tableTitle]", "Hotels");
  });

  it("Test if filter by star is working", () => {
    cy.get("[class=tableContainer]").find("tr").should("have.length", 6);
    cy.get("[class=filterInput]").type("3");
    cy.get("[class=tableContainer]").find("tr").should("have.length", 3);
    cy.get("[class=filterInput]").clear();
    cy.get("[class=tableContainer]").find("tr").should("have.length", 6);
  });

  it("Test if delete button is working", () => {
    cy.get("[class=tableContainer]").find("tr").should("have.length", 6);
    cy.get("table [class=btns]").click({ multiple: true });
    cy.get("[class=tableContainer]").find("tr").should("have.length", 1);
  });

  it("Test if click on row get selected", () => {
    cy.get("table > :nth-child(2)")
      .click()
      .should("have.css", "background", "rgb(136, 70, 70)");
  });
});
