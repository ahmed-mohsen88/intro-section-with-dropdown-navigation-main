// global var
const features_dropdown = document.getElementById("features_dropdowns");
const company_dropdowns = document.getElementById("company_dropdowns");
const features = document.getElementById("features");
const company = document.getElementById("company");
const arrow_up = document.querySelectorAll(".arrow_up");
const arrow_down = document.querySelectorAll(".arrow_down");

function drop_down(link, drop_list) {
  document.addEventListener("click", (e_doc) => {
    if (!drop_list.contains(e_doc.target) && !link.contains(e_doc.target)) {
      drop_list.style.visibility = "hidden";
      link.classList.remove("active");
      link.children[2].style.display = "none";
      link.children[1].style.display = "inline";
    }
  });

  link.addEventListener("click", (e_link) => {
    if (drop_list.style.visibility == "visible") {
      drop_list.style.visibility = "hidden";
      drop_list.classList.remove("active");
      e_link.currentTarget.children[2].style.display = "none";
      e_link.currentTarget.children[1].style.display = "inline";
    } else {
      drop_list.style.visibility = "visible";
      drop_list.classList.add("active");
      e_link.currentTarget.children[2].style.display = "inline";
      e_link.currentTarget.children[1].style.display = "none";
    }
  });
}

drop_down(features, features_dropdown);
drop_down(company, company_dropdowns);
