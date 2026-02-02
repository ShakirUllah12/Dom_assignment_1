let para = document.getElementById("para");

/* Task 1: Add Class */
document.getElementById("addBtn").addEventListener("click", () => {
  para.classList.add("highlight");
});

/* Task 2: Remove Class */
document.getElementById("removeBtn").addEventListener("click", () => {
  para.classList.remove("highlight");
});

/* Task 3: Toggle Class */
document.getElementById("toggleBtn").addEventListener("click", () => {
  para.classList.toggle("highlight");
});

/* Task 4: Check Class Exists */
document.getElementById("checkBtn").addEventListener("click", () => {
  if (para.classList.contains("highlight")) {
    alert("Class exists");
  } else {
    alert("Class not exists");
  }
});

/* Task 5: Button Active State */
let buyBtn = document.getElementById("buyBtn");
buyBtn.addEventListener("click", () => {
  buyBtn.classList.toggle("active-btn");
});

/* Task 6: Dark Mode */
document.getElementById("darkBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
