function menuPage(content){
    const title = document.createElement("div");
    title.textContent = 'MENU!!';
    content.firstChild.remove()
    content.appendChild(title);
};

export default menuPage;