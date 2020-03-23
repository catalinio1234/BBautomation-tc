class Selectors{
    get Process() {
        return $('//*[@id="sapper"]/main/div/div[2]/article/div[3]/button')
    }

    get LogOut() {
        return $('//*[@id="sapper"]/main/div/div[1]/div/div[2]/button')
    }
    
    get Positive() {
        return $('//*[@id="sapper"]/main/div/div[2]/article/div[2]/div/div/div[1]/label[1]/input')
    }

    get Negative() {
        return $('//*[@id="sapper"]/main/div/div[2]/article/div[2]/div/div/div[1]/label[2]/input')
    }
    get Neutral() {
        return $('//*[@id="sapper"]/main/div/div[2]/article/div[2]/div/div/div[1]/label[3]/input')
    }

    get Visible() {
        return $('//*[@id="sapper"]/main/div/div[3]/article/div[2]/div/div/div[2]/label[1]/input')
    }

    get Hidden() {
        return $('//*[@id="sapper"]/main/div/div[4]/article/div[2]/div/div/div[2]/label[2]/input')
    }

    
}

export default new Selectors()

