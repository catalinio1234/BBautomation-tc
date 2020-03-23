import BasePage from './BasePage'

class LoginPage extends BasePage{
get loginform(){
    return $('//*[@id="sapper"]/main/div/div/div[1]')
}

get Token(){
    return $('//*[@id="sapper"]/main/div/div/div[1]/div/input')
}

get Start(){
    return $('//*[@id="sapper"]/main/div/div/div[2]/p/button')
}

open(){
    super.open('http://bbtestassignment.now.sh')
}
}

export default new LoginPage()