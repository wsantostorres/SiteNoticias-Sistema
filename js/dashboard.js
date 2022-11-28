function showActivePage(){
    let url_atual = window.location.href;
    let itemTopics = document.querySelectorAll('#topics li');
    let linkTopics = document.querySelectorAll('#topics li a');
    
    for(i = 0; i < itemTopics.length; i++){
        let link = linkTopics[i].href;
        if(url_atual.indexOf(link) != -1){
            itemTopics[i].classList.toggle('active')
        }
    }
}

addEventListener('load', showActivePage);









