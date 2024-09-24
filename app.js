let progressArray = Array.from(
  document.querySelectorAll(".additionalInfo .rightSide .skills .progress")
);
progressArray.forEach((span) => {
    span.style.width=span.getAttribute("data-goal");
});
let warningScreen=document.querySelector(".warning");
let profileCard=document.querySelector(".profileCard");
let screenWidth=window.innerWidth;
if(screenWidth<=500){
  warningScreen.style.display="block";
  profileCard.style.display="none";
}
else{
  warningScreen.style.display="none";
  profileCard.style.display="block";
}
