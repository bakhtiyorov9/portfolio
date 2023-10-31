        var tabLinks = document.getElementsByClassName('tab-links');
        var tabContents = document.getElementsByClassName('tab-contents');

        function openTab(tabName) {
            for (tabLink of tabLinks) {
                tabLink.classList.remove('active-link');
            }
            for (tabContent of tabContents) {
                tabContent.classList.remove('active-tab');
            }
            event.currentTarget.classList.add('active-link');
            document.getElementById(tabName).classList.add('active-tab');
        }

     


        // let headerTextP= document.querySelector("header__text-p");
        // let fullText = headerTextP.innerHTML;
        // let stop = 0;
        
        // headerTextP.innerHTML = "";
        
        // function runText(x = 0) {
        //     headerTextP.innerHTML += fullText[x];
        //   x++;
        
        //   stop = setTimeout(() => {
        //     runText(x);
        //   }, 200);
        
        //   if (x == 13) {
        //     clearTimeout(stop);
        //     headerTextP.classList.add("active");
        //   }
        // }
        
        // runText();


        let headerTextP = document.querySelector(".header__text-p");
let fullText = headerTextP.innerHTML;
let stop = 0;

headerTextP.innerHTML = "";

function runText(x = 0) {
    headerTextP.innerHTML += fullText[x];
  x++;

  stop = setTimeout(() => {
    runText(x);
  }, 200);

  if (x == 13) {
    clearTimeout(stop);
    headerTextP.classList.add("active");
  }
}

runText();


let worksList = document.querySelector(".works-list")



window.addEventListener("scroll", () => {
    // console.log(this.scrollY);
    fadeRight(worksList, 2)
  
})

function fadeRight(section, coordinate) {
    let fadeRight = section.querySelectorAll(".fade-right")

    for (let i = 0; i < fadeRight.length; i++) {

        const speed = fadeRight[i].getAttribute("data-speed")

        fadeRight[i].style.transition = speed + "ms"

        if (this.scrollY >= section.offsetTop - section.offsetHeight * coordinate) {
            fadeRight[i].classList.add("active")
        } else {
            fadeRight[i].classList.remove("active")
        }
    }
}

let headerMenu = document.querySelector(".header__menu")
let headerMenuLine = document.querySelector(".header__menu-line")
let headerBurger = document.querySelector(".header__burger")

headerMenu.addEventListener("click", function () {
    headerMenuLine.classList.toggle("active")
    headerBurger.classList.toggle("active")
    // if (headerMenuLine.classList.contains("active")) {
    //     headerMenuLine.classList.remove("active")
    // } else {
    //     headerMenuLine.classList.add("active")
    // }
})


let aboutCardOne = document.querySelectorAll(".about__card-one")

for (let i = 0; i < aboutCardOne.length; i++) {
    aboutCardOne[i].addEventListener("mousemove", rotate)
    aboutCardOne[i].addEventListener("mouseout", rotateNone)
}

function rotate(e) {
    const X = (this.offsetHeight / 2 - e.offsetY) / 10
    const Y = (e.offsetX - this.offsetWidth / 2) / 10
    this.style.transform = `perspective(400px) rotateX(${X}deg) rotateY(${Y}deg)`
}

function rotateNone() {
    this.style.transform = `rotate(0)`
}
