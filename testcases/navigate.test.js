import { expect } from 'chai'
import Navbar from '../components/Navbar'

describe('Login Testcase', () => {
    it('should navigate to homepage', () => {
    const url = ('http://bbtestassignment.now.sh')
    browser.url(url)
    })

    it('should navigate to About', () => {
        Navbar.about.click()
    })

    it('should navigate to Blog', () => {
        Navbar.blog.click()
    })
})