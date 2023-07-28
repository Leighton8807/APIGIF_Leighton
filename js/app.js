

const url ='http://api.giphy.com/v1/gifs/search';
let search ="?q=";
const key ='&api_key=3CnHx35F9su7wf8w9XIl1euwIPlXYeSK';
const limite = "&limit=20";
const portfolio = document.getElementById("portfolio");
const searchInput = document.getElementById('busqueda')

let q =" ";
let urlComplete =" ";

const btn = document.getElementById('btn');
console.log(btn)

btn.addEventListener('click', () => {
    q = searchInput.value
    urlComplete = url + search + q + key + limite
    getData(urlComplete);
})

async function getData (URL)  {
    portfolio.innerHTML="";

    await fetch(URL).then((response)=>{
        return response.json();
    }).then((giphy) =>{
        console.log(giphy);

        for (let i = 0; i < giphy.data.length; i++) {
            const gif = document.createElement('img');

            gif.src = giphy.data[i].images["original"].url;
            gif.className="mb-3";
            document.getElementById("portfolio").appendChild(gif);        
        }

    });
};
getData();