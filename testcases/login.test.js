
import { expect } from 'chai'
import LoginPage from '../PageObject/LoginPage'

describe('Login Test', ()=> {
    it('should acces the application', () => {
        LoginPage.open()
        LoginPage.loginform.waitForExist()
        LoginPage.Token.setValue('appCdl8Fl6FFk9G5Q')
        LoginPage.Start.click()

    })
})