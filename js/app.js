(()=>{
    let quotes = [
        {
            quote:"YOLO",
            author:"Soul"
        },
        {
            quote:"Bora uhai",
            author:"Reke"
        },
        {
            quote:"Usijidai",
            author:"Booze"
        },
        {
            quote:"Baraka tele",
            author:"Pstr"
        },
        {
            quote:"Jikaze",
            author:"Bro"
        }
    ]

    let range = quotes.length;
    let rand = Math.floor( Math.random() * range )
    let quote=quotes[rand].quote
    let author = quotes[rand].author
    document.getElementById("quote").innerText=`${quote}`
    document.getElementById("author").innerText=`By: ${author}`
})()
let Refresh = ()=>window.location.reload()