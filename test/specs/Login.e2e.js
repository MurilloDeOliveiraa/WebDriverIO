const { $ } = require('@wdio/globals')
const LoginPage = require('../pages/Login.page')

describe('Login Page Tests', () => {

    it('Successful Login', async () => {

        await browser.url('https://the-internet.herokuapp.com/login');
        await LoginPage.enterCredentialsAndLogin('tomsmith', 'SuperSecretPassword!')
        await LoginPage.checkMessage('You logged into a secure area!')

    })
})