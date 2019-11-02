var fullsizePhotos = [
  "src/photo/fullsize_1.png",
  "src/photo/fullsize_2.png",
  "src/photo/fullsize_3.png",
  "src/photo/fullsize_4.png"
];

var names = ["First Name", "Second Name", "Third Name", "Fourth Name"];

var descriptions = [
  "First description.",
  "Second description.",
  "Third description.",
  "Fourth description."
];

var preview = document.querySelectorAll(".team__photo-preview");
var fullsize = document.querySelector(".team__preview-fullsize");
var memberName = document.querySelector(".team__name");
var memberDescription = document.querySelector(".team__description");

var changeTeamMember = function(previewPhoto, fullsizePhoto, newName, newDesc) {
  previewPhoto.addEventListener("click", function() {
    fullsize.src = fullsizePhoto;
    memberName.textContent = newName;
    memberDescription.textContent = newDesc;
  });
};

for (var i = 0; i < preview.length; i++) {
  changeTeamMember(preview[i], fullsizePhotos[i], names[i], descriptions[i]);
}
