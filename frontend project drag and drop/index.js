let files = [],
  button = document.querySelector(".btn"),
  form = document.querySelector(".dragover"),
  container = document.querySelector(".container"),
  text = document.querySelector(".inner"),
  browse = document.querySelector(".select"),
  input = document.querySelector(".file");

//input change event
input.addEventListener("change", (e) => {
  let file = e.target.files;
  console.log(file);
  for (let i = 0; i < file.length; i++) {
    if (files.every((e) => e.name != file[i].name)) files.push(file[i]);
  }
  console.log(files);
  form?.reset();
  showImages();
});
const showImages = () => {
  let images = "";
  files?.forEach((e, i) => {
    images += `<div class="image"><img src=${URL.createObjectURL(
      e
    )} alt="image"/><span onclick=delImage(${i})>&times;</span></div>`;
  });
  container.innerHTML = images;
};
const delImage = (index) => {
  files.splice(index, 1);
  console.log(files);
  showImages();
};
// drag and drop
form.addEventListener("dragover", (e) => {
  console.log(e);
  e.preventdefault();

  form.classlist.add("dragover");
  text.innerHTML = "drop image here";
});
form.addEventListener("dragleave", (e) => {
  e.preventdefault();

  form.classlist.remove("dragover");
  text.innerHTML =
    'drag & Drop Image Here or <span class ="select">Browse</span>';
});
form.addEventListener("drop", (e) => {
  e.preventdefault();

  form.classlist.remove("dragover");
  text.innerHTML =
    'drag & Drop Image Here or <span class ="select">Browse</span>';

  let file = e.datatransfer.files;
  for (let i = 0; i < file.lenth; i++) {
    if ((files, every((e) => e.name != file[i].name))) file.push;
    let file = input.files;
    files.push(file[i]);
  }
  showImages();
});
console.log(button);
button.addEventListener("click", () => {
  console.log("yes");
  let form = new FormData();
  files.forEach((e, id) => form.append(files[id], e));
});