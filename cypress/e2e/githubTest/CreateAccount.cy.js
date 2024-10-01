/// <reference types="cypress" />

import CreateAccountPage from '../PageObjects/CreateAccount'

const CreateAccountObj = new CreateAccountPage();

describe('Basic Test Cases', () => {
    beforeEach(() => {
      cy.visit('https://github.com/')
    })
  
    it('Validate with an existing emsil',() =>{
        cy.CreateAccount()
        CreateAccountObj.createExistingUser()
    })
    it('Create Random user',() =>{
      cy.CreateAccount()
      CreateAccountObj.createRandomUser()
      
    })

})