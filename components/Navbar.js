class Navbar{
    get home() {
        return $('//*[@id="sapper"]/nav/ul/li[1]/a')
    }

    get about() {
        return $('//*[@id="sapper"]/nav/ul/li[2]/a')
    }
    
    get blog() {
        return $('//*[@id="sapper"]/nav/ul/li[3]/a')
    }
}

export default new Navbar()