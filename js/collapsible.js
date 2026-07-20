
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
    updateParents(content);
    });
}

function updateParents(element) {
    let parent = element.parentElement;

    while (parent) {
        if (parent.classList.contains("content") && parent.style.maxHeight) {
            parent.style.maxHeight = parent.scrollHeight + "px";
        }
        parent = parent.parentElement;
    }
}