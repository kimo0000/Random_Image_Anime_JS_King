const result = document.querySelector('#result');
const image = result.querySelector('img');
const artist = result.querySelector('h3 span');
const btn = document.getElementById('get_anime');

const URL_Link = `https://api.catboys.com/img`;

async function getAnimePic() {
    try {
        result.style.display = "block";
        image.src = `./imgs/Spinner-3.gif`;
        artist.textContent = "";
        btn.textContent = 'Download...';
        const data = await fetch(URL_Link)
        .then(res => res.json())
        // console.log(data);
        // console.log(data.url);
        // console.log(data.artist);
        
        // result.innerHTML = `
        //    <article>
        //       <img class="img_random" src="${data.url}" alt="${data.artist}" />
        //       <h3> Name Artist: <span class="name_random">${data.artist}<span></h3>
        //    </article>
        // `;

        btn.textContent = "Get Anime";
        image.src = `${data.url}`;
        image.alt= `${data.artist}`;
        artist.textContent = `${data.artist}`;
        artist.className = "name_random";
    } catch (error) {
        // console.log("Error");
         result.innerHTML = "Source API Is Not Conected Now, Please Try A gain !";
         btn.textContent = "Get Anime";
         btn.style.pointerEvents = "none";
    }
}

btn.addEventListener('click', getAnimePic)