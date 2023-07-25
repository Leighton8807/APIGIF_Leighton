const API_KEY = '3CnHx35F9su7wf8w9XIl1euwIPlXYeSK';

const url ='https://api.giphy.com/v1/gifs/search';

let search = "?q=";
let limit = "&limit=30"

const urlTrending = 'https://api.giphy.com/v1/gifs/trending?api_key=3CnHx35F9su7wf8w9XIl1euwIPlXYeSK6limit=5';
let q="";
let urlComplete="";

const btn_search = document.getElementById('searchGif');

btn_search.onclick= ()=>{
    document.getElementById('containerGIFs').innerHTML="";
    q=document.getElementById('searchGifInput').value;
    urlComplete=url+search+q+API_KEY+limit
    getData();

}

const getData = async ()=>{
    document.getElementById('containerGIFs').innerHTML="";
    q = document.getElementById('searchGifInput').value;
    urlComplete=URL+search+q+API_KEY+limit

    fetch(urlComplete)
    .then((response)=>{
        return response.json();
    })
    .then((giphy)=>{
        console.log(giphy);

        for (let i = 0; i < giphy.data.length; i++) {
            const gif = document.createElement('img');
            gif.src = giphy.data[i].images["original"].url;
            gif.className = "mb-3";
            document.getElementById("containerGIFs").appendChild(gif);
            
        }
    });

}
getData();