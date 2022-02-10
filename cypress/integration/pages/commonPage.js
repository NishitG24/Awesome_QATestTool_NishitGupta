
class common{

    navigatePage(url){
        return cy.visit(url);
    }

    validatesText(locator,value){
     return cy.get(locator,{timeout:3000}).should('have.text',value)
    }

    enterText(locator,value){
        return cy.get(locator,{timeout:3000}).type(value);
    }

    clickOnElement(locator){
      return cy.get(locator,{timeout:3000}).click();
    }

    validateList(parentLocator,childLocator,listvalue)
    {
        return cy.get(parentLocator,{timeout:3000}).find(childLocator).contains(listvalue);
    }

}

export default common;