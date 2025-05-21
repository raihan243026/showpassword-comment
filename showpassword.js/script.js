let passInput = document.getElementById("input");
let eye = document.getElementById("eye");
let body = document.querySelector("body");
let commentInput = document.getElementById("commentInput");
let addComment = document.getElementById("addComment");


passInput.style.height = "35px";
passInput.style.margin = "10px";
// passInput.style.alignitem = " center";
// // passInput.style.width = " 1200px" ;
// passInput.style.alignContent = "400px" ;
passInput.style.width = " 50%";
passInput.style.fontSize = "16px";
passInput.style.padding = "5px 10px";
passInput.style.marginBottom = "10px";
passInput.style.border = "1px solid grey";
passInput.style.borderRadius = "5px";
passInput.style.boxSizing = "border-box";

// eye.style.width = " 50%"
eye.style.position = "absolute";
eye.style.marginLeft = "-30px";
eye.style.marginTop = "19px";
// eye.style.cursor = "pointer";
eye.style.color = "#555";
// eye.style.alignItems= "center;"


commentInput.style.height = "40px";
commentInput.style.fontSize = "14px";
commentInput.style.padding = "10px";
commentInput.style.border = "1px solid grey";
commentInput.style.borderRadius = "5px";
commentInput.style.boxSizing = "border-box";
// commentInput.style.resize = "none";
commentInput.style.marginBottom = "10px";


addComment.style.padding = "10px 20px";
addComment.style.backgroundColor = "black";
addComment.style.color = "white";
addComment.style.border = "none";
addComment.style.borderRadius = "5px";
addComment.style.cursor = "pointer";
addComment.style.fontSize = "14px";


body.style.backgroundColor = " orange ";




eye.addEventListener("click", () => {
    if (passInput.type === "password") {
        passInput.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    } else {
        passInput.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
} );




addComment.addEventListener("click", () => {

    if (commentInput.value.trim() !== "") { 


        let comment = document.createElement("h5"); 
         
        comment.innerText = commentInput.value;  

        commentInput.value = "";
        
        body.appendChild(comment);
    }
});