// Create Animal Load Categories
const loadAnimalsCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((response) => response.json())
    .then((data) => displayAnimalsCategories(data.categories));
  // .then((error) => error.console.log("Error"));
};
// Create Animal Card Categories
const loadAnimalsCard = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((response) => response.json())
    .then((data) => showAnimalsCard(data.pets));
  // .then((error) => error.console.log("Error"));
};

// Remove Active Class In Button
const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("active-btn");
  console.log(buttons);
  for (let button of buttons) {
    button.classList.remove("active");
  }
};

const loadCategoryCard = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((response) => response.json())
    .then((data) => {
      // Remove Active Class Call
      removeActiveClass();

      const activeButton = document.getElementById(`btn-${id}`);
      activeButton.classList.add("active");
      showAnimalsCard(data.data);
    });
  // .then((error) => error.console.log("Error"));
};


const loadDetails = async (petID) => {
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petID}`;
  const response = await fetch(uri);
  const data = await response.json();
  showDetails(data.petData);
};

const showAnimalsCard = (Animals) => {
  const AnimalsContainer = document.getElementById("animals-card");

  AnimalsContainer.innerHTML = "";
  if (Animals.length === 0) {
    AnimalsContainer.classList.remove("grid");
    AnimalsContainer.innerHTML = `
    <div class="flex flex-col justify-center items-center min-h-[400px]">
    <img src="./images/error.webp" />
    <div class="text-center">
     <h1 class="text-4xl font-bold mb-5">No Information Available</h1>
      <p>It could apply to situations where a response is expected but not yet provided, or when certain facts simply haven’t been recorded or disclosed. This message often serves as a placeholder in reports, databases, or websites, informing the reader that they may need to seek further clarification or check back later for updates. While it can be frustrating, it is typically a neutral statement meant to communicate a lack of information without assigning blame.</p>
    </div>
    </div>
    `;
    return;
  } else {
    AnimalsContainer.classList.add("grid");
  }

  Animals.forEach((Animal) => {
    const card = document.createElement("div");
    card.classList = " p-3 bg-base-100 rounded-lg border-2 border";
    card.innerHTML = `
    <figure >
    <img class="w-full h-full object-cover rounded-md"
      src="${Animal.image}"
      alt="Pets" />
  </figure>
  <div class="my-5">
    <h2 class="font-bold text-2xl">${Animal.pet_name}</h2>
    <div class="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
   </svg>
    <p> Breed: ${Animal.breed || "Not Available"} </p>
    </div>
    <div class="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
    <p> Birthday: ${Animal.date_of_birth || "Not Available"} </p>
    </div>
    <div class="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
     <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
    <p> Gender: ${Animal.gender || "Not Available"} </p>
    </div>
    <div class="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    <p1> Price: ${Animal.price || "Not Available"} </p1>
    </div>

    <div class="justify-around gap-5 mt-5 flex">
    <button onclick="addImage('${
      Animal.petId
    }')" class="btn btn-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="size-5">
     <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
   </svg>
  </button>
    <button onclick="timerFunction()" class="card-btn-color px-5 font-bold btn btn-xs">Adopt</button>
    <button onclick="loadDetails('${
      Animal.petId
    }')" class="card-btn-color px-5 font-bold btn btn-xs">Details</button>
    </div>
  </div>
    `;
    AnimalsContainer.append(card);
  });
};

const addImage = async (like) => {
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${like}`;
  const response = await fetch(uri);
  const data = await response.json();
  addImageDisplay(data.petData.image);
};

const addImageDisplay = (displayImage) => {
  const selectedImage = document.getElementById("displayAnimals");
  selectedImage.innerHTML += `
  <img class="w-44 lg:w-30 rounded-xl" src="${displayImage}" /> 
  `;
};

const showDetails = (details) => {
  console.log(details);
  const boxModal = document.getElementById("box-modal");
  boxModal.innerHTML = `
  <div class=" w-full">
        <div>
          <img src="${
            details.image
          }" alt="" class=" w-full h-full object-cover rounded-xl" />
        </div>
        <h2 class="font-bold text-3xl text-dark1 mt-6">${details.pet_name}</h2>
        <div class="grid grid-cols-2 items-center mt-4  text-slate-400 font-semibold">
          <div class="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
         <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
        </svg>
            <p>Breed:${details.breed || "Not available"}</p>
          </div>
          <div class="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
            <p>Birth:${details.date_of_birth || "Not available"}</p>
          </div>
        </div>

        <div class="grid grid-cols-2 items-center text-slate-400 font-semibold mt-2">
          <div class="flex gap-2 items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
         </svg>
            <p>Gender:${details.gender || "Not available"}</p>
          </div>
          <div class="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
            <p>Price:${details.price || "Not available"}$</p>
          </div>
        </div>
        <div class="flex gap-2 items-center pb-3  text-slate-400 font-semibold mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
         </svg>
          <p>Vaccinated status: ${
            details.vaccinated_status || "Not available"
          }</p>
        </div>
        <div class="border-t-2 border-slate-100 pt-3">
          <h4 class="font-bold text-xl text-dark1 ">Details Information</h4>
          <p class=" text-slate-500 mt-3">${details.pet_details}</p>
         
        </div>
          <div class="modal-action w-full">
          <form method="dialog" class="w-full">
           
            <button class="btn w-full bg-slate-200 text-primary font-bold text-lg">Cancel</button>
          </form>
        </div>
        </div>
  `;
  document.getElementById("my_modal_5").showModal();
};

// Create Animals Display Categories
const displayAnimalsCategories = (categories) => {
  const buttonContainer = document.getElementById("pet-categories");
  categories.forEach((item) => {
    const allButton = document.createElement("div");
    allButton.innerHTML = `
   <div class= "flex justify-center">
    <button id="btn-${item.category}" onclick="loadCategoryCard('${item.category}')" class="active-btn btn  rounded-3xl content-center py-8 px-8 lg:px-16 text-xl font-bold"> 
     <img class='w-[40px]' src="${item.category_icon}"/> <span> ${item.category}</span> </button>
   </div>
    `;

    buttonContainer.append(allButton);
  });
};

function timerFunction(button) {
  const countTimer = document.getElementById("countTimer");
  let countValue = countTimer.innerText;
  let value = parseFloat(countValue);

  timer.showModal();

  const myCount = setInterval(() => {
    value--;
    countTimer.innerText = value;
    if (value <= 0) {
      clearInterval(myCount);
      timer.close();
      countTimer.innerText = countValue;
    }
  }, 1000);
}

loadAnimalsCategories();

loadAnimalsCard();
