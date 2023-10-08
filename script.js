// -------------------------MAKING PRODUCT LIST-------------------------------------------------------------------------------
let casual_t_shirt = {
  name: "Casual T-Shirt",
  price: 150,
  image_source: "images/tshirt.webp",
  number: 0,
};
let fireworks_t_shirt = {
  name: "Fireworks T-Shirt",
  price: 100,
  image_source: "images/tshirt2.jpg",
  number: 0,
};
let kids_fireworks_t_shirt = {
  name: "Kids Fireworks T-Shirt",
  price: 200,
  image_source: "images/tshirt3.jpg",
  number: 0,
};
let jurassic_park_shirt = {
  name: "Jurassic Park T-Shirt",
  price: 500,
  image_source: "images/jurassic_park.jpg",
  number: 0,
};
let iceland_tshirt = {
  name: "Iceland T-Shirt",
  price: 700,
  image_source: "images/iceland_tshirt.jpg",
  number: 0,
};
let doraemon_tshirt = {
  name: "Doraemon Tshirt",
  price: 399,
  image_source: "images/doraemon_tshirt.webp",
  number: 0,
};
//---------------------------local-storage ---------------------------------
// localStorage.setItem("doraemon", JSON.stringify(doraemon_tshirt));
// let p = localStorage.getItem("doraemon");
// console.log(JSON.parse(p));

let product_div = document.getElementsByClassName("main1")[0];
let products = [
  casual_t_shirt,
  fireworks_t_shirt,
  kids_fireworks_t_shirt,
  jurassic_park_shirt,
  iceland_tshirt,
  doraemon_tshirt,
];
let getting_item_from_localStorage = () => {
  let saved_item = localStorage.getItem("shopping_cart_version_2");
  if (saved_item == null) {
    let processed_products = JSON.stringify(products);
    localStorage.setItem("shopping_cart_version_2", processed_products);
  } else {
    let reprocessed_products = JSON.parse(saved_item);
    products = reprocessed_products;
  }
};
getting_item_from_localStorage();
//--------------------------Inserting PRoducts to Shopping List---------------------------------------
let shopping_list = document.getElementsByClassName("main1")[0];
for (let i = 0; i < products.length; i++) {
  let product = products[i];
  shopping_list.innerHTML =
    shopping_list.innerHTML +
    `<div class="card">
  <img src="${product.image_source}" alt="" />
  <div>
    <p class="card_text_1">${product.name}</p>
    <p class="card_text_2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
      maiores!
    </p>
    <span class="card_span">
      <span class="card_price_span">${product.price}</span>
      <span>
        <span class="minus_button">-</span>
        <span class="number_span">${product.number}</span>
        <span class="plus_button">+</span>
      </span>
    </span>
  </div>
</div>`;
}
//-------------------------------local_Storage---------------------------------------------------------------------------------

let updating_local_storage = () => {
  let processed_products = JSON.stringify(products);
  localStorage.setItem("shopping_cart_version_2", processed_products);
};
//-------------------------------Updating Information Shown -----------------------------------------------------------
let container = document.getElementsByClassName("container")[0];
container.addEventListener("click", () => {
  update_all_the_shown_information();
  adding_to_cart_function();
  cart_card_plus_button_function();
  cart_card_minus_button_function();
  adding_total_bill();
  adding_single_cart_card_cross_button_function();
  updating_local_storage();
});
let update_all_the_shown_information = () => {
  let update_total_number_in_shopping_list_cart = () => {
    let number_span = document.getElementsByClassName("number_span");
    number_span = Array.from(number_span);
    for (let i = 0; i < number_span.length; i++) {
      let span = number_span[i];
      let name =
        span.parentElement.parentElement.parentElement.children[0].innerHTML;
      for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (product.name == name) {
          span.innerHTML = product.number;
        }
      }
    }
  };
  update_total_number_in_shopping_list_cart();
  let update_cart_icon = () => {
    let cart_icon = document.getElementsByClassName("cart_icon_number")[0];
    let total_product_number = 0;
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      total_product_number = total_product_number + product.number;
    }
    cart_icon.innerHTML = total_product_number;
  };
  update_cart_icon();
};
update_all_the_shown_information();
let plus_button_function = () => {
  let plus_button = document.getElementsByClassName("plus_button");
  plus_button = Array.from(plus_button);
  for (let i = 0; i < plus_button.length; i++) {
    let button = plus_button[i];
    button.addEventListener("click", () => {
      let name =
        button.parentElement.parentElement.parentElement.children[0].innerHTML;
      for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (name == product.name) {
          product.number++;
        }
      }
    });
  }
};
plus_button_function();
let minus_button_function = () => {
  let minus_button = document.getElementsByClassName("minus_button");
  minus_button = Array.from(minus_button);
  for (let i = 0; i < minus_button.length; i++) {
    let button = minus_button[i];
    button.addEventListener("click", () => {
      let name =
        button.parentElement.parentElement.parentElement.children[0].innerHTML;
      for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (name == product.name) {
          if (product.number > 0) {
            product.number--;
          }
        }
      }
    });
  }
};
minus_button_function();
let cart_icon_click_function = () => {
  let cart_icon = document.getElementsByClassName("fa-cart-shopping")[0];
  let shopping_list = document.getElementsByClassName("main1")[0];
  let cart_list = document.getElementsByClassName("cart")[0];
  let cart_billing = document.getElementsByClassName("cart_billing")[0];

  cart_icon.addEventListener("click", () => {
    if (shopping_list.classList.contains("inactive")) {
      shopping_list.classList.remove("inactive");
      cart_list.classList.add("inactive");
      cart_billing.classList.add("inactive");
    } else {
      shopping_list.classList.add("inactive");
      cart_list.classList.remove("inactive");
      cart_billing.classList.remove("inactive");
    }
  });
};
cart_icon_click_function();
let adding_to_cart_function = () => {
  let cart_div = document.getElementsByClassName("cart")[0];
  cart_div.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.number > 0) {
      cart_div.innerHTML =
        cart_div.innerHTML +
        ` <div class="cart_card">
      <img src="${product.image_source}" alt="" />
      <div class="cart_card_details">
        <div class="">
          <div class="cart_card_details_row_1">
            <span class="cart_product_name">${product.name}</span>
            <span class="cart_product_price">${product.price}</span>
          </div>
          <div class="cart_card_details_row_2">
            <span class="cart_minus_button">-</span>
            <span class="cart_single_total_number">${product.number}</span>
            <span class="cart_plus_button">+</span>
          </div>
          <div class="cart_card_details_row_2 cart_single_product_total_price">${
            product.number * product.price
          }</div>
        </div>
        <span class="cross_sign">X</span>
      </div>
    </div>`;
    }
  }
};
let cart_card_plus_button_function = () => {
  let plus_button = document.getElementsByClassName("cart_plus_button");
  plus_button = Array.from(plus_button);
  for (let i = 0; i < plus_button.length; i++) {
    button = plus_button[i];
    button.addEventListener("click", (event) => {
      let product_name =
        event.currentTarget.parentElement.parentElement.children[0].children[0]
          .innerHTML;
      for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (product_name == product.name) {
          product.number++;
        }
      }
    });
  }
};
let cart_card_minus_button_function = () => {
  let minus_button = document.getElementsByClassName("cart_minus_button");
  minus_button = Array.from(minus_button);
  for (let i = 0; i < minus_button.length; i++) {
    button = minus_button[i];
    button.addEventListener("click", (event) => {
      let product_name =
        event.currentTarget.parentElement.parentElement.children[0].children[0]
          .innerHTML;
      for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (product_name == product.name) {
          if (product.number > 0) {
            product.number--;
          }
        }
      }
    });
  }
};
let adding_total_bill = () => {
  let bill_span = document.getElementsByClassName("total_bill")[0];
  let total_bill = 0;
  for (let i = 0; i < products.length; i++) {
    product = products[i];
    total_bill = total_bill + product.number * product.price;
  }
  bill_span.innerHTML = total_bill;
};
let adding_single_cart_card_cross_button_function = () => {
  let cross_button = document.getElementsByClassName("cross_sign");
  cross_button = Array.from(cross_button);
  for (let i = 0; i < cross_button.length; i++) {
    let button = cross_button[i];
    button.addEventListener("click", (event) => {
      let product_name =
        event.currentTarget.parentElement.children[0].children[0].children[0]
          .innerHTML;
      for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (product_name == product.name) {
          product.number = 0;
        }
      }
    });
  }
};
let adding_clear_cart_button_function = () => {
  let clear_cart_button = document.getElementsByClassName("clear_cart")[0];
  clear_cart_button.addEventListener("click", () => {
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      product.number = 0;
    }
  });
};
adding_clear_cart_button_function();
