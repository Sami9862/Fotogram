let randomImgs = [
  "boxing.jpg", "building.jpg", "camera.jpg", "cat.jpg",
  "ireland.jpg", "little-girl.jpg", "lynx.jpg", "owl.jpg",
  "painting.jpg", "paris.jpg", "peacock.jpg", "sea.jpg",
  "shack.jpg", "woman-O.jpg"
];

let randomImgsName = [
  "Boxing", "Building", "Camera", "Cat",
  "Ireland", "Little-girl", "Lynx", "Owl",
  "Painting", "Paris", "Peacock", "Sea",
  "Shack", "Woman-O"
];

const folder_url = 'img/';
let currentIndex = 0;
const newRandomImages = getFolderName(randomImgs);
// Bild-URLs zusammensetzen
function getFolderName(list) {
    return list.map((url) => `${folder_url}${url}`);
}
// Bilder in Container anzeigen
function renderThumbnails() {
    let parent = document.getElementById('myImgs');
    parent.innerHTML = "";
    newRandomImages.forEach((img_src, index) => {
        const img = document.createElement('img');
        img.setAttribute('src', img_src);
        img.setAttribute('alt', randomImgsName[index] || `Image ${index}`);
        img.style.width = '150px';
        img.style.height = '150px';
        img.style.borderRadius = '5px';
        img.style.margin = '5px';
        img.style.cursor = 'pointer';
        img.style.transition = 'transform 0.3s ease';
        img.onclick = () => overlayPicture(index);
        parent.appendChild(img);
    });
}
//  Großbild-Overlay anzeigen
function overlayPicture(index) {
    currentIndex = index;
    openOverlay();
    const overlayRef = document.getElementById("bigPicture");
    overlayRef.innerHTML = `<img id="overlayImg" src="${folder_url}${randomImgs[currentIndex]}" style="max-width:80vw; max-height:68vh;">`;
}
//  Overlay anzeigen
function openOverlay() {
    document.getElementById("overlay").classList.remove("d_none");
}
// Overlay schließen
function closeOverlay() {
    document.getElementById("overlay").classList.add("d_none");
}
// Vorheriges Bild
function previousButton(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + randomImgs.length) % randomImgs.length;
    updateOverlayImage();
}
//  Nächstes Bild
function nextButton(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % randomImgs.length;
    updateOverlayImage();
}
//  Bild im Overlay aktualisieren
function updateOverlayImage() {
    const overlayRef = document.getElementById("bigPicture");
    overlayRef.innerHTML = `<img id="overlayImg" src="${folder_url}${randomImgs[currentIndex]}" style="max-width:80vw; max-height:68vh;">`;
}
// Initialisierung
function init() {
    renderThumbnails();
}


