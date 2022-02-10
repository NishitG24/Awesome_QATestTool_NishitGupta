 
 ///<reference types="cypress" />
import common from "../pages/commonPage.js";

const page = new common();

describe('validates the addition and deletion of question in The awesome Q/A tool',()=>{

   let automationData;
   let automationLocator;

    beforeEach(()=>{

       cy.fixture('element').then((data)=>{
        automationLocator =data;     
      })

      cy.fixture('example').then((data)=>{
          automationData =data;
          page.navigatePage(automationData.config.url);
          page.validatesText(automationLocator.pageHeaderLocator,automationData.config.pageHeader)
      })
       
    })

    it('user should be able to add the questions',()=>{
        page.enterText(automationLocator.questionBoxLocator,automationData.AddRemoveQuestions.questions)      
        page.enterText(automationLocator.answerBoxLocator,automationData.AddRemoveQuestions.answer) 
        page.clickOnElement(automationLocator.createButtonLocator)
        page.validateList(automationLocator.listGroupLocator,automationLocator.listQuestionLocator,automationData.AddRemoveQuestions.questions)
        page.validateList(automationLocator.listGroupLocator,automationLocator.listAnswerLocator,automationData.AddRemoveQuestions.answer)         
    })

    it('user should be able to remove questions',()=>{
        page.clickOnElement(automationLocator.removeButtonLocator)
        page.validatesText(automationLocator.clearMessageLocator,automationData.AddRemoveQuestions.alertMessage)
    })
})
