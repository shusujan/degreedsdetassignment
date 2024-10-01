export default class CreateAccountPage {
    elements = {
        email : () => cy.get('#email'),
        continue : () => cy.get('#email-container > .flex-column > .js-continue-button'),
        message : () => cy.get('.js-continue-hint-container'),

      };  
    createExistingUser(){    
  
     this.elements.email().type('123@gmail.com',{force: true})
     this.elements.continue().should('be.disabled')
     this.elements.message().contains('The email you have provided is already associated with an account.')
     
    }  

    createRandomUser(){
      const randomEmail =generateRandomEmail(10)
      this.elements.email().type(randomEmail,{force: true})
      this.elements.continue().click({force: true})
    }

    
  }



function generateRandomEmail(p0?: number) {
    const randomString = generateRandomString(10);
    return `${randomString}@example.com`;
  }
  function generateRandomString(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  }

