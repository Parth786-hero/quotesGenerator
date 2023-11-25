let data = [];
async function fetchData(){
    const dataObj = await fetch("https://type.fit/api/quotes");
    data = await dataObj.json();
}
fetchData();
const btn = document.querySelector("button");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
btn.addEventListener("click" , async ()=>{
    // const data = await fetchData();
    const obj = data[Math.floor(Math.random()*data.length)];
    quote.textContent = obj.text;
    author.textContent = obj.author === "type.fit" ? "unknown" : obj.author.split(",")[0];
})

const icon = document.querySelector(".icon");
icon.addEventListener("click", ()=>{
    const qData = (quote.textContent).trim();
    const aData = (author.textContent).trim();
    const tweetPost = `https://twitter.com/intent/tweet?text=${qData} , ${aData}`;
    window.open(tweetPost);
})



