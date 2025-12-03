const products=[{
    img:"",
    name:"laptop",
    price:"59,999"
},
{
    img:"",
    name:"mobile",
    price:"59,999"
},{
    img:"",
    name:"harddisk",
    price:"59,999"
}
];

const container = document.getElementById("container");
for(let i=0;i<products.length;i++)
{
let card=`<div>
            <h2>${products[i].img}</h2>
            <h4>${products[i].name}</h4>
            <p>${products[i].price}</p>
          </div>`;

container.innerHTML+=card          
};