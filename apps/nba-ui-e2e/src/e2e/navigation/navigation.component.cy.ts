describe('nba-ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=navigationcomponent--primary&args=navOptions;')
  );
  it('should render the component', () => {
    cy.get('nba-navigation').should('exist');
  });
});
