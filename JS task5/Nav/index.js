const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");

dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        const dropdown = btn.querySelector(".dropdown");
        dropdown.classList.toggle("show");
    });
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown-btn")) 
        {
        dropdowns.forEach((drop) => {
            drop.classList.remove("show");
        });
    }
});

var indexValue = 1;
showImg(indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += 1);}
function showImg(e){
    var i;
    const img = document.querySelectorAll('img');
    const sliders = document.querySelectorAll('.btm-sliders span');
    if(e> img.length){indexValue=1}
    if(e < 1){indexValue=img.length}
    for(i=0; i<img.length; i++){
        img[i].style.display="none";
    }
    img[indexValue-1].style.display="block";

}
