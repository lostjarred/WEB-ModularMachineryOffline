{
    function addmenubutton(name, link) {
        let button = "<li class='menubutton'>"
        button = button + "<a href="+link +" class='menubutton'>"+ "<div> <p class='menubutton'>" + name +"</p> </div>" +"</a>"
        return button
    }

    function genmenu() {
        let menuelement = document.getElementById("menu-div")
        let menu = "<ul class='menu'>"
        menu = menu + addmenubutton("home", "index.html")
        menu = menu + addmenubutton("1. Keynotes", "00_keynotes.html")
        menu = menu + addmenubutton("2. Machine format", "01_machine_format.html")
        menu = menu + addmenubutton("3. Custom Machines: Variables", "02_variables.html")
        menu = menu + addmenubutton("4. Custom Machines: Machine Recipes", "03_machine_recipes.html")
        menu = menu + "</ul>"
        menuelement.innerHTML = menu
    }

    function genheader() {
        let headerelement = document.getElementById("header-div")
        let header = "<h1>Modular Machinery Offline Reference</h1>"
        headerelement.innerHTML=header
    }
}