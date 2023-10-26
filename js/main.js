{
    function addmenubutton(name, link) {
        let button = "<li class='menubutton'>"
        button = button + "<a href="+link +" class='menubutton'>"+ "<div> <p class='menubutton'>" + name +"</p> </div>" +"</a>"
        return button
    }

    function genmenu() {
        let menuelement = document.getElementById("menu-div")
        let menu = "<ul class='menu'>"
        menu = menu + addmenubutton("Home", "index.html")
        menu = menu + addmenubutton("1. Keynotes", "00_keynotes.html")
        menu = menu + addmenubutton("2. Machine format", "01_machine_format.html")
        menu = menu + addmenubutton("3. Custom Machines: Variables", "02_variables.html")
        menu = menu + addmenubutton("4. Custom Machines: Machine Recipes", "03_machine_recipes.html")
        menu = menu + addmenubutton("5. Custom Machines: Recipe Adapters", "04_recipe_adapters.html")
        menu = menu + addmenubutton("6. Custom Machines: NBT Checking & Setting [Advanced]", "05_nbt_checking_setting.html")
        menu = menu + addmenubutton("7. Custom Machines: Recipe Sorting", "06_recipe_sorting.html")
        menu = menu + addmenubutton("8. Custom Machines: Machine Format Position Permutations [Advanced]", "07_machine_format_postition_permutations.html")
        menu = menu + addmenubutton("9. Custom Machines: Machine Colors", "08_machine_colors.html")
        menu = menu + addmenubutton("10. Custom Machines: Structure To JSON Tool [Advanced]", "09_structure_to_json_tool.html")
        menu = menu + addmenubutton("11. Custom Machines: Furnace Fuel as Item Input", "010_furnace_fuel_as_item_input.html")
        menu = menu + addmenubutton("12. Crafttweaker Recipe definitions [Advanced]", "011_craftweaker_recipe_definitions.html")
        menu = menu + "</ul>"
        menuelement.innerHTML = menu
    }

    function genheader() {
        let headerelement = document.getElementById("header-div")
        let header = "<h1>Modular Machinery Offline Reference</h1>"
        headerelement.innerHTML=header
    }
}