var music = [
    {link:"https://www.youtube.com/embed/eRf82JFCYpQ?list=PLUqo_wHHOCaxHMOjkXhe90hQhvb2hhIxM", text:"Kooley High - All Day"},
    {link:"https://www.youtube.com/embed/2uLjj81rPXI?list=PLUqo_wHHOCaxHMOjkXhe90hQhvb2hhIxM" ,text:"BLU & EXILE - Maybe one day (f/Black Spade)"},
    {link:"https://www.youtube.com/embed/jD-2gViW1bA" ,text:"Cut Capers - 'Live Today' (Official Video)"},
    {link:"https://www.youtube.com/embed/E2Snh2NZHhk?list=PLUqo_wHHOCaxHMOjkXhe90hQhvb2hhIxM" ,text:"ODDISEE - OWN APPEAL (Official Video)"}
];

for(let i = 0;i < music.length; i++) {
    let music_text = document.createElement('p');
    music_text.textContent = music[i].text;
    document.getElementById("content").appendChild(music_text); 
    
    
    //let music_link = document.createElement('iframe');
    //music_link.textContent = music[i].link;
    //document.getElementById("content").appendChild(music_link); 
    
    
    let music_link = document.createElement('iframe');
    music_link.src = music[i].link;
    music_link.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ;
    music_link.classList.add("class");
    console.log(music_link);
    document.getElementById("sample").appendChild(music_link); 
}

//music_link.setAttribute("href");
    //music_link.setAttribute(music[i].link);
    
    //let music_link = document.createElement('a');
    //music_link.href = music[i].link;
    //console.log(music_link);
    //document.getElementById("sample").parentNode.append(music_link); 

    //<iframe width="300" height="150" src="https://www.youtube.com/embed/eRf82JFCYpQ?list=PLUqo_wHHOCaxHMOjkXhe90hQhvb2hhIxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  　//<iframe width="1280" height="720" src="https://www.youtube.com/embed/2uLjj81rPXI?list=PLUqo_wHHOCaxHMOjkXhe90hQhvb2hhIxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //<iframe width="1280" height="720" src="https://www.youtube.com/embed/jD-2gViW1bA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //<iframe width="1280" height="720" src="https://www.youtube.com/embed/E2Snh2NZHhk?list=PLUqo_wHHOCaxHMOjkXhe90hQhvb2hhIxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>