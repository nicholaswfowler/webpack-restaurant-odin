function homePage(content){
    const title = document.createElement("div");
    title.textContent = 'HOMEPAGE!!';
    if(content.firstChild != null){
        content.firstChild.remove()
    }
    content.appendChild(title);
};

export default homePage;