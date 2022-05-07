// common sellectors
const searchForm = document.querySelector("#searchForm");
const searchText = document.querySelector("#searchText");
const err = document.querySelector("#err");
const results = document.querySelector("#results");
const errResult = document.querySelector("#errResult");
const mobiles = document.querySelector("#mobiles");
const spinner = document.querySelector("#spinner");
let defaultResultLimit = 20;

//common function
const setData = () => {
  const checkValue = validation(searchText.value);
  if (checkValue === true) {
    const searchUrl = `https://openapi.programming-hero.com/api/phones?search=${searchText.value.toLowerCase()}`;
    fetchData(searchUrl);
  }
};

//form submission function
const formSubmit = (e) => {
  e.preventDefault();
  spinner.classList.remove("hidden");
  defaultResultLimit = 20;
  setData();
};

//form submission event
searchForm.addEventListener("submit", formSubmit);

//validation
const validation = (data) => {
  if (data.length === 0) {
    err.innerText = "Please provide a phone info!";
    errResult.innerHTML = ``;
    mobiles.innerHTML = ``;
    results.classList.add("hidden");
    spinner.classList.add("hidden");
    return false;
  } else {
    err.innerHTML = ``;
    return true;
  }
};

//fetch data
const fetchData = async (url) => {
  const res = await fetch(url);
  const resData = await res.json();
  getData(resData, defaultResultLimit);
};

//show data inside the website
const getData = (g, limit) => {
  if (g.status === false) {
    results.classList.remove("hidden");
    errResult.innerHTML = `No result found on ${searchText.value}`;
    searchText.value = ``;
  } else {
    errResult.innerHTML = ``;
    results.classList.remove("hidden");
    mobiles.innerHTML = ``;
    let startPoint = 1;
    for (const key in g.data) {
      const e = g.data[key];
      if (startPoint <= limit) {
        const phoneDetaildLink = `https://openapi.programming-hero.com/api/phone/${e.slug}`;
        const parentDiv = document.createElement("div");
        parentDiv.className =
          "w-100 md:max-w-sm text-center md:text-left bg-white rounded-lg border border-gray-200 shadow-md";
        const imagelink = document.createElement("a");
        imagelink.className = "block p-5";
        imagelink.setAttribute("href", `${"javascript: void(0)"}`);
        const img = document.createElement("img");
        img.className = "block w-sm mx-auto";
        img.src = `${e.image}`;
        imagelink.appendChild(img);
        const childDiv = document.createElement("div");
        childDiv.className = "px-5 pb-5";
        const phoneNameLink = document.createElement("a");
        phoneNameLink.setAttribute("href", `${"javascript: void(0)"}`);
        const phoneNameHeading = document.createElement("h5");
        phoneNameHeading.className =
          "text-xl font-bold tracking-tight text-gray-900 dark:text-white";
        phoneNameHeading.textContent = `${e.phone_name}`;
        phoneNameLink.appendChild(phoneNameHeading);
        const brandName = document.createElement("p");
        brandName.className =
          "mb-5 font-normal text-gray-700 dark:text-gray-400";
        brandName.textContent = `Brand : ${e.brand}`;
        const readMoreLink = document.createElement("a");
        readMoreLink.setAttribute("href", `${"javascript: void(0)"}`);
        readMoreLink.setAttribute(
          "data-url",
          `https://openapi.programming-hero.com/api/phone/${e.slug}`
        );
        readMoreLink.className =
          "text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center";
        readMoreLink.innerHTML = `
      Details &nbsp;<i class="bi bi-arrow-right"></i>
      `;
        childDiv.appendChild(phoneNameLink);
        childDiv.appendChild(brandName);
        childDiv.appendChild(readMoreLink);
        parentDiv.appendChild(imagelink);
        parentDiv.appendChild(childDiv);
        mobiles.appendChild(parentDiv);
      }
      ++startPoint;
    }
    if (g.data.length > 20 && defaultResultLimit === 20) {
      const loadMore = document.createElement("button");
      loadMore.className =
        "text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center";
      loadMore.innerHTML = `
        Load More &nbsp;<i class="bi bi-box-arrow-down"></i>
      `;
      loadMore.setAttribute("onClick", "loadMore()");
      mobiles.appendChild(loadMore);
    }
  }
  spinner.classList.add("hidden");
};

// load more function
const loadMore = () => {
  defaultResultLimit = 1000;
  setData();
};

//single mobile click event
mobiles.addEventListener("click", (e) => {
  const singlePhoneUrl = e.target.getAttribute("data-url");
  if (singlePhoneUrl !== null) {
    spinner.classList.remove("hidden");
    fetchSingleProduct(singlePhoneUrl);
  }
});

//single mobile fetch data and apply
const fetchSingleProduct = async (url) => {
  const res = await fetch(url);
  const resData = await res.json();
  if (resData.status === true) {
    mobiles.innerHTML = ``;
    const singleMovileDiv = document.createElement("div");
    singleMovileDiv.className =
      "flex flex-col items-start justify-center md:justify-start bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 col-span-3 h-fit p-4 mb-2";
    const singleMobileImg = document.createElement("img");
    singleMobileImg.className = "block";
    singleMobileImg.src = resData.data.image;
    const singleMobileChildDiv = document.createElement("div");
    singleMobileChildDiv.className = "p-4 h-max";
    const childh5 = document.createElement("h5");
    childh5.className = "text-2xl font-bold tracking-tight text-gray-900";
    childh5.textContent = resData.data.name;
    const releaseDate = document.createElement("p");
    releaseDate.className = "mb-2 font-thin tracking-tight text-gray-900";
    releaseDate.innerHTML = `${
      resData.data.releaseDate.length != 0
        ? resData.data.releaseDate
        : "No release date found"
    }`;
    const mainFeaturesHeading = document.createElement("h6");
    mainFeaturesHeading.className =
      "font-bold text-xl tracking-tight text-gray-900";
    mainFeaturesHeading.textContent = "Main Features";
    const mainFeaturesDetails = document.createElement("div");
    mainFeaturesDetails.className =
      "mb-2 font-thin tracking-tight text-gray-900 h-fit";

    const sensors = resData.data.mainFeatures.sensors.join(", ");
    mainFeaturesDetails.innerHTML = `
      <article class="mb-1"><span class="block font-normal">Storage : </span>${resData.data.mainFeatures.storage}</article>
      <article class="mb-1"><span class="block font-normal">Display : </span>${resData.data.mainFeatures.displaySize}</article>
      <article class="mb-1"><span class="block font-normal">ChipSet : </span>${resData.data.mainFeatures.chipSet}</article>
      <article class="mb-1"><span class="block font-normal">Memory : </span>${resData.data.mainFeatures.memory}</article>
      <article class="mb-1"><span class="block font-bold">Sensors info: </span>${sensors}</article>
    `;
    const back = document.createElement("button");
    back.className =
      "text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center";
    back.innerHTML = `
      Back &nbsp;<i class="bi bi-arrow-left"></i>
      `;
    back.setAttribute("onClick", "backFunc()");

    singleMovileDiv.appendChild(singleMobileImg);
    singleMobileChildDiv.appendChild(childh5);
    singleMobileChildDiv.appendChild(releaseDate);
    singleMobileChildDiv.appendChild(mainFeaturesHeading);
    singleMobileChildDiv.appendChild(mainFeaturesDetails);
    const othersInfo = document.createElement("div");
    othersInfo.className = "mb-2 font-thin tracking-tight text-gray-900 h-fit";

    if (resData.data.others) {
      othersInfo.innerHTML = `
      <article class="mb-1"><span class="block font-bold">Others</span></article>
      <article class="mb-1"><span class="font-normal">WLAN : </span>${resData.data.others.WLAN}</article>
      <article class="mb-1"><span class="font-normal">Bluetooth : </span>${resData.data.others.Bluetooth}</article>
      <article class="mb-1"><span class="font-normal">GPS : </span>${resData.data.others.GPS}</article>
      <article class="mb-1"><span class="font-normal">NFC : </span>${resData.data.others.NFC}</article>
      <article class="mb-1"><span class="font-normal">Radio: </span>${resData.data.others.Radio}</article>
      <article class="mb-1"><span class="font-normal">USB: </span>${resData.data.others.USB}</article>
      `;
    } else {
      othersInfo.innerHTML = `
      <article class="mb-1"><span class="block font-bold">Others</span></article>
      <article class="mb-1"><span class="font-normal">No others info</article>`;
    }
    singleMobileChildDiv.appendChild(othersInfo);
    singleMobileChildDiv.appendChild(back);
    singleMovileDiv.appendChild(singleMobileChildDiv);
    mobiles.appendChild(singleMovileDiv);
    mobiles.appendChild(singleMovileDiv);
  }
  spinner.classList.add("hidden");
};

//single mobile back button
const backFunc = () => {
  spinner.classList.remove("hidden");
  setData();
};
