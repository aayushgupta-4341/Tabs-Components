const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const themeBtn = document.getElementById("themeBtn");

// Tabs logic
tabs.forEach(tab => {
tab.addEventListener("click", () => {
    
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
});
});

// Theme toggle
themeBtn.addEventListener("click", () => {
document.body.classList.toggle("light");

themeBtn.innerText = document.body.classList.contains("light") ? "☀️" : "🌙";
});