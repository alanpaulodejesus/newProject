/// <reference types ="cypress"/>
import * as DATA from '../fixtures/dataApi/factory/dataUtils';

const buttonEntrar ='.header-sign-in > a > .br-button';
const inputCPF ='#accountId';
const btnContinuar='.button-continuar';
const btnSenha='#password';
const buttonEntrarSenha ='#submit-button';
const btnCms='.fas fa-chart-bar'

class Login{

    urlConexao(){
        //cy.visit(`${DATA.baseUrlConexao}`);
        cy.visit(" ");
        cy.clearCookies({log:true});
    }

    loginWithSucess(){
        cy.btnClick(buttonEntrar);
        cy.inputText(inputCPF, '08256687606');
        cy.btnClick(btnContinuar);
        cy.clearCookies({log:true});
        cy.inputText(btnSenha, 'Cruzeiro@1');
        cy.btnClick(buttonEntrarSenha);
        
        cy.clearCookies({log:true});
        cy.btnClick(btnCms);
        

    }

    validUserAcess(){
        cy.get(validUserAcess, {timeOut:25000}).should('exist');
    }
}

module.exports = Login;