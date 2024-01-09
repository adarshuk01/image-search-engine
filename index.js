const accessKey = "zvCWFKdmP9PNVdUQwXALe8V_tXm2V0Osg1GY2PyltJ0";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMorebtn = document.getElementById("show-more");

let keyword = "";
let page = 1;
async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }
  const result = data.results;
  result.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);
  });
  showMorebtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMorebtn.addEventListener("click", () => {
  page++;
  searchImages();
});
