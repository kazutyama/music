var music = [
    {link:"https://www.youtube.com/embed/eRf82JFCYpQ?list=PLUqo_wHHOCaxHMOjkXhe90hQhvb2hhIxM", text:"Kooley High - All Day"},
    {link:"https://www.youtube.com/embed/2uLjj81rPXI?list=PLUqo_wHHOCaxHMOjkXhe90hQhvb2hhIxM" ,text:"BLU & EXILE - Maybe one day (f/Black Spade)"},
    {link:"https://www.youtube.com/embed/jD-2gViW1bA" ,text:"Cut Capers - 'Live Today' (Official Video)"},
    {link:"https://www.youtube.com/embed/E2Snh2NZHhk?list=PLUqo_wHHOCaxHMOjkXhe90hQhvb2hhIxM" ,text:"ODDISEE - OWN APPEAL (Official Video)"}
];

/*const links = music.map((link) => {
    return link.link;
});
links.forEach((likns) => {
    let music_link = document.createElement('iframe');
    music_link.src = likns;
    music_link.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ;
    music_link.classList.add("class");
    console.log(music_link);
    document.getElementById("sample").appendChild(music_link);
});*/


for(let i = 0;i < music.length; i++) {
   
    
    let article = document.createElement("article");
    article.setAttribute("id",i);

    let musicId = i;

    document.getElementById("content").appendChild(article); 

    let music_text = document.createElement('p');
    music_text.textContent = music[i].text;
    document.getElementById(musicId).appendChild(music_text); 
    
    //let count = music[i].link;

    /*let music_link = document.createElement('iframe');
    music_link.textContent = music[i].link;
    document.getElementById("content").appendChild(music_link); */
    
    
    //実践版その二
    
    let music_link = document.createElement('iframe');
    music_link.src = music[i].link;
    music_link.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ;
    //music_link.classList.add("class");
    document.getElementById(musicId).appendChild(music_link);
    //article.innerHTML = music_link;

    //document.getElementById("content").appendChild(article); 
}
