
let portfolio_btn = document.querySelector("#portfolio")

portfolio_btn.addEventListener("click", () => {
    let portfolio_section = document.querySelector("#portfolio-div");
    console.log(portfolio_section);
    portfolio_section.scrollIntoView()
});



let allAnchorTag = document.querySelectorAll("a")

allAnchorTag.forEach((val) => {

    console.log(val.classList.add("achor_underline"));
})

const typed=new Typed('.profession',{
    strings:['Python developer','Frontend Developer','Blockchain Developer'],
    typeSpeed:50,
    backSpeed:100,
    backDelay:0,
    loop:true
});



