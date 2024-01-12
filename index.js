function toggleContent(answerId, iconId) {
  var content = document.getElementById(answerId);
  var icon = document.getElementById(iconId);
  if (!content || !icon) {
    console.error("Element not found");
    return;
  }
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.classList.remove("fa-x");
    icon.classList.add("fa-plus");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-x");
  }
}
