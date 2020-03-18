// Get DOM Elements
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");
const modalHeader = document.querySelector(".modal-header");
const headerContent = document.querySelector(".header-content");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const projects = document.querySelector(".projects");
const projectsContent = document.querySelector(".projects-content");

// Events
// modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);
btn1.addEventListener("click", openModal1);
btn2.addEventListener("click", openModal2);
btn3.addEventListener("click", openModal3);
btn4.addEventListener("click", openModal4);
btn5.addEventListener("click", openModal5);
btn6.addEventListener("click", openModal6);
btn7.addEventListener("click", openModal7);

// Open
function openModal() {
  modal.style.display = "block";
  let p = document.createElement("p");
  p.innerHTML = "tes 123";
}

function openModal1() {
  modal.style.display = "block";
  headerContent.innerHTML = `
  <h2>DXI</h2>
  `;
  modalBody.innerHTML = `
  <p>DXI is a website which focused on extreme sports. DXI offer many features in this website
  for the users such as Marketplace, Article, Community, Destination & events.
  From the available features, user can buy or sell extreme sport products, create community, create article, destination and events.</p>
  <p>Mainly built with: PHP, Laravel, HTML, CSS, Bootstrap, Javascript, Jquery.</p>
  <h5>Main job:</h5>
  <ul>
    <li>Developing website based on requirements given by the clients</li>
    <li>Cooperating and helping the back-end team if needed</li>
    <li>Maintaining website from the start to the end of the project</li>
    <li>Testing while developing to prevent error</li>
    <li>Meeting with clients for update progress and feedback</li>
  </ul>
  `;
}

function openModal2() {
  modal.style.display = "block";
  headerContent.innerHTML = `
  <h2>Supernetwork</h2>
  `;
  modalBody.innerHTML = `
  <p>Supernetwork is a website which focused on selling health products
  while allowing users to become a member of the website by purchasing 
  some amounts of product.</p>
  <p>Mainly built with: PHP, CodeIgniter, HTML, CSS, Bootstrap, Javascript, Jquery.</p>
  <h5>Main job:</h5>
  <ul>
    <li>Developing website based on requirements given by the clients</li>
    <li>Cooperating and helping the back-end team if needed</li>
    <li>Offering some alternative design and features to the clients for better visualization and performance</li>
    <li>Maintaining website from the start to the end of the project</li>
    <li>Testing while developing to prevent error</li>
    <li>Contact with clients for update progress and feedback</li>
  </ul>
  `;
}

function openModal3() {
  modal.style.display = "block";
  headerContent.innerHTML = `
  <h2>Web Bank Dassa</h2>
  `;
  modalBody.innerHTML = `
  <p>Web Bank Dassa is a website which serve as a company profile of the Bank Dassa.
  In the website admin can manage the changeable content of the website
  and show the user many information about bank dassa itself. </p>
  <p>Mainly built with: PHP, CodeIgniter, HTML, CSS, Bootstrap, Javascript, Jquery.</p>
  <h5>Main job:</h5>
  <ul>
    <li>Developing website based on requirements given by the clients</li>
    <li>Cooperating and helping the back-end team if needed</li>
    <li>Offering some alternative design and features to the clients for better visualization and performance</li>
    <li>Maintaining website from the start to the end of the project</li>
    <li>Testing while developing to prevent error</li>
    <li>Contact with clients for update progress and feedback</li>
  </ul>
  `;
}

function openModal4() {
  modal.style.display = "block";
  headerContent.innerHTML = `
  <h2>Citraswarna</h2>
  `;
  modalBody.innerHTML = `
  <p>Citraswarna is a company profile website with information of residency
  from Citraswarna group. This website serve as one of information center about
  Citraswarna and include feature for calculation and contact information for users.</p>
  <p>Mainly built with: PHP, CodeIgniter, HTML, CSS, Bootstrap, Javascript, Jquery.</p>
  <h5>Main job:</h5>
  <ul>
    <li>Developing website based on requirements given by the clients</li>
    <li>Cooperating and helping the back-end team if needed</li>
    <li>Offering some alternative design and features to the clients for better visualization and performance</li>
    <li>Maintaining website from the start to the end of the project</li>
    <li>Testing while developing to prevent error</li>
    <li>Contact with clients for update progress and feedback</li>
  </ul>
  `;
}

function openModal5() {
  modal.style.display = "block";
  headerContent.innerHTML = `
  <h2>Fotoins</h2>
  `;
  modalBody.innerHTML = `
  <p>Fotoins is a website used for my thesis project. This website is built
  on the purpose to search photographer that is available as a freelancer, in this
  way the website can be used by the company to solve the lack of personnel inside the company.</p>
  <p>Mainly built with: PHP, Laravel, HTML, CSS, Bootstrap, Javascript, Jquery.</p>
  <h5>Main job:</h5>
  <ul>
  <li>Gathering requirements and information needed from the company</li>
    <li>Developing website based on requirements and user needs</li>
    <li>Meeting with team and supervisor for confirmation and update progress</li>
    <li>Maintaining website from the start to the end of the project</li>
    <li>Testing while developing to prevent error</li>
  </ul>
  `;
}

function openModal6() {
  modal.style.display = "block";
  headerContent.innerHTML = `
  <h2>Otocerdas</h2>
  `;
  modalBody.innerHTML = `
  <p>Otocerdas is a website which focused on automotive by providing information and event of automotive.
    In the website user will be able to see the list of event and information that is currently available.</p>
    <p>Mainly built with: PHP, CodeIgniter, HTML, CSS, Bootstrap, Javascript, Jquery.</p>
  <h5>Main job:</h5>
  <ul>
    <li>Developing website based on requirements and client needs</li>
    <li>Meeting with team and supervisor for confirmation and update progress</li>
    <li>Maintaining website from the start to the end of the project</li>
    <li>Testing while developing to prevent error</li>
  </ul>
  `;
}

function openModal7() {
  modal.style.display = "block";
  headerContent.innerHTML = `
  <h2>MGS</h2>
  `;
  modalBody.innerHTML = `
  <p>MGS is a website which focused on workplace and safety equipments. 
  In the website users will be able to view each product information from many categories that is available.</p>
  <p>Mainly built with: Wordpress.</p>
  <h5>Main job:</h5>
  <ul>
    <li>Developing website based on requirements and client needs</li>
    <li>Sorting data and assets that is being given by the client</li>
    <li>Optimization of the assets given such as image to give a better visualization in the website</li>
    <li>Maintaining website from the start to the end of the project</li>
    <li>Testing while developing to prevent error</li>
    <li>Contact with the client for update progress and feedback</li>
  </ul>
  `;
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// $(
//   (window.onload = function() {
//     var scroll = $(this).scrollTop();

//     $(".banner").animate(
//       { opacity: "1", transition: "opacity 0.5s ease-in-out" },
//       1000
//     );
//   })
// );

const toggleSwitch = document.querySelector(
  '.theme-change input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  }
}

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "light") {
    toggleSwitch.checked = true;
  }
}
