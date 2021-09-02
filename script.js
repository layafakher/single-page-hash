window.addEventListener('hashchange',(e)=>{
    router(location.hash);
});

function router(hash) {
    let data;
    switch (hash) {
        case "":
            data = {title:'HOME',color:'red',hash:'#home'};
            render(data);
            break;
        case "#home":
            data = {title:'HOME',color:'red',hash:'#home'};
            render(data);
            break;
        case "#search":
            data = {title:'SEARCH',color:'blue',hash:'#search'};
            render(data);
            break;
        case "#likes":
            data = {title:'LIKES',color:'yellow',hash:'#likes'};
            render(data);
            break;
        case "#profile":
            data = {title:'PROFILE',color:'pink',hash:'#profile'};
            render(data);
            break;


    }

}


function render(data) {
    document.querySelector('h1').innerText = data.title;
    document.querySelector('main').style.backgroundColor = data.color;
    document.querySelectorAll('a').forEach((e)=>{
        if (e.href.includes(data.hash)){
            e.style.color = 'black';
        }else {
            e.style.color = '#666';
        }
    });
}