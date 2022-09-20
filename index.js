
const getColorBtn = document.getElementById("btn")

const color1 = document.getElementById("color-1")
const color2 = document.getElementById("color-2")
const color3 = document.getElementById("color-3")
const color4 = document.getElementById("color-4")
const color5 = document.getElementById("color-5")

const colorName1 = document.getElementById("colorName-1")
const colorName2 = document.getElementById("colorName-2")
const colorName3 = document.getElementById("colorName-3")
const colorName4 = document.getElementById("colorName-4")
const colorName5 = document.getElementById("colorName-5")

let colorsObj = {}

getColorBtn.addEventListener("click", function(e){
        e.preventDefault()
        const color = document.getElementById("cPicker").value
        const hex = color.replace('#','') 
        const colorScheme = document.getElementById("sMenu").value.toLowerCase()
        const url= "https://www.thecolorapi.com/scheme?hex=" + hex + "&mode=" + colorScheme + "&count=5" 
        
        fetch(url)
        .then(res => res.json())
        .then(data => {
            color1.style.background = data.colors[0].hex.value
            color2.style.background = data.colors[1].hex.value
            color3.style.background = data.colors[2].hex.value 
            color4.style.background = data.colors[3].hex.value 
            color5.style.background = data.colors[4].hex.value  
            
            colorName1.textContent = data.colors[0].hex.value
            colorName2.textContent = data.colors[1].hex.value
            colorName3.textContent = data.colors[2].hex.value
            colorName4.textContent = data.colors[3].hex.value
            colorName5.textContent = data.colors[4].hex.value
            
        })
        
         
    
})

