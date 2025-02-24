async function fetchData(){
    let response= await fetch('https://fakestoreapi.com/products')
    let data= await response.json()
    console.log(response)
    console.log(data)
    data.forEach(element =>{
        let section =document.createElement('section')
        let p=document.createElement('p')
        let image=document.createElement('img')
        let price=document.createElement('p')
        let addToCart=document.createElement('button')
        p.innerHTML=`Title:${element.title}`
        image.src=element.image
        price.innerHTML=`Price:${element.price}`
        addToCart.innerHTML="Add To Cart"
        section.append(image,p,p,addToCart)
        document.body.append(section)
    })
}
fetchData()