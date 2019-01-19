function displaybox() {
  document.getElementById("content2").style.display ="flex";
}


let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    if (toggleNavStatus === false) {
        getSidebar.style.visibility ="visible";

        toggleNavStatus = true;

    }
    else if (toggleNavStatus === true) {
        getSidebar.style.visibility ="hidden";

        toggleNavStatus = false;

    }
}
