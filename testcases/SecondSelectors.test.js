import { expect } from 'chai'
import LoginPage from '../PageObject/LoginPage'
import Selectors from '../components/Selectors'
import { Browser } from 'selenium-webdriver'

describe('Login Test', ()=> {
    it('should acces the application', () => {
        LoginPage.open()
        LoginPage.loginform.waitForExist()
        LoginPage.Token.setValue('appCdl8Fl6FFk9G5Q')
        LoginPage.Start.click()

    })

    it('should set status Visible', () => {
        Selectors.Visible.click()
        Selectors.Process.click()
    })
     
    it('should wait for Visible processed', () =>{
        browser.pause(3000)
    })

    it('should set status Hidden', () => {
        Selectors.Negative.click()
        Selectors.Process.click()
    })

    it('should wait for Hidden processed', () =>{
        browser.pause(3000)
    })
          
})
