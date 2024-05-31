function aboutPage(content){
    const title = document.createElement("div");
    title.textContent = 'ABOUT!!';
    content.firstChild.remove()
    content.appendChild(title);
};

export default aboutPage;