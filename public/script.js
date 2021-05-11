// When the user scrolls the page, execute onScrollGhazaal
window.onscroll = function () { onScrollGhazaal() };

// Get the header
var header = document.getElementById("myHeader");
var navbar = document.getElementById("ghazaal-navbar");
var shop_list = document.getElementById('shop-list-box');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function onScrollGhazaal() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    navbar.classList.add("user-specific-container-withlogo");
  } else {
    header.classList.remove("sticky");
    navbar.classList.remove("user-specific-container-withlogo");
  }
}

function bascket_clicked() {
  if (shop_list.style.display != 'block'){
    shop_list.style.display = 'block';
    setTimeout(function(){ shop_list.style.opacity = 1; }, 10);
  }
  else{
    
    shop_list.style.opacity = 0;
    setTimeout(function(){ shop_list.style.display = 'none'; }, 150);
  }
}

function body_clicked() {
  console.log("body clicked!")
}

var exclude_class_name = ['shop-bascket','shop-list'];

document.getElementsByTagName("body")[0].onclick = function (element) {
  let exclude = true;
  element.path.forEach(item => {
    if (item.classList) {
      item.classList.forEach(classname => {
        if (exclude_class_name.includes(classname)) {
          exclude = false;
        }
      }
      );
    }
  });

  if (exclude) {
      shop_list.style.opacity = 0;
      setTimeout(function(){ shop_list.style.display = 'none'; }, 150);
  }
};

