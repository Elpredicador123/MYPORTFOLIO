function selectMenuOption(clickedOption) {
    const menuOptions = document.getElementsByClassName("menu-option");
    const className = "selected";
    // console.log(menuOptions.classList)
    for (let index = 0; index < menuOptions.length; index++) {
      const option = menuOptions[index];
      option.classList.remove(className);
    }
    clickedOption.classList.add(className);
  }