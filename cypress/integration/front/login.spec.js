/// <reference types ="cypress"/>

const Login = require('../../page-objects/login.po')

describe('Login', ()=>{

    const loginPage = new Login();

    before(()=>{
        loginPage.urlConexao();
        
    })

    it('Login With Sucess', ()=>{
        
        loginPage.loginWithSucess();
        //expect(loginPage.validUserAcess());
    })

    after(()=>{
        
    })
})

