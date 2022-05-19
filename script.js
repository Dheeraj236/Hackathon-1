document.body.innerHTML=`<div class="heading-container">
<h1>Ice and Fire<h1></div>

<div id="mainContainer"></div>`;

let getData=async() => {
    try{
    let data=await fetch("https://www.anapioficeandfire.com/api/books")
    let books= await data.json()
    mainContainer.innerHTML="";
    books.forEach(book => {
        displayData(book)
        
    });
    }catch(error) {
    console.log('Failed to retrieve data: ',error)
    }
};
getData();



const displayData=(obj)=> {
    mainContainer.innerHTML+=
    `<div class="container">
    <h1 class="class1">Name:<span>${obj.name}</span>, ISBN:<span> ${obj.isbn}</span></h1>
    <h2 class="class2"> Authors:<span>${obj.authors}</span></h2>
    <h3 class="class3"> Number of Pages:<span>${obj.numberOfPages}</span><h3>
    <h4 class="class4">Publisher Name:<span>${obj.publisher}</span> , Released Date:<span>${obj.released}</span></h4>
     </div>`
}