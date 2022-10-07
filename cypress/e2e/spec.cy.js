function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads the homepage", () => {
    cy.get("h1").should("contain", "Basic calculator");
  });

  //should pass 100% of the tim
  it("contains a link to working addition functionality", () => {
    cy.get('[href="/sums/addition"]').click();
    cy.get('[cy-id="inputOne"]').type("5");
    cy.get('[cy-id="inputTwo"]').type("10");
    cy.get('[cy-id="equalsButton"]').click();
    cy.get('[cy-id="calculationResult"]').should("have.text", 15);
  });

  //should fail aprox 50% of the time
  it("contains a link to working multiplication functionality", () => {
    const randomNum = getRandomIntInclusive(1, 2);

    cy.get('[href="/sums/multiplication"]').click();
    cy.get('[cy-id="inputOne"]').type(randomNum);
    cy.get('[cy-id="inputTwo"]').type("10");
    cy.get('[cy-id="equalsButton"]').click();
    cy.get('[cy-id="calculationResult"]').should("have.text", 20);
  });

  it("contains a link to working subtraction functionality", () => {
    cy.get('[href="/sums/subtraction"]').click();
    cy.get('[cy-id="inputOne"]').type("5");
    cy.get('[cy-id="inputTwo"]').type("10");
    cy.get('[cy-id="equalsButton"]').click();
    cy.get('[cy-id="calculationResult"]').should("have.text", -5);
  });
});
