const html = items.results
.map(item => {
return `
<div class="product">
    <img src="${item.Images[0].url_fullxfull}">
    <h3>${item.title}</h3>
    <div class="desc">
        <p>Views: ${item.views}</p>
        <p class="price">$${item.price}</p>
    </div>
</div>
`

})
.join("")

document.querySelector("#whiskeyitems").innerHTML = html

console.log (html)
