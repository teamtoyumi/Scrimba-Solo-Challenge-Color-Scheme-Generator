const getColorBtn = document.getElementById("btn")
const colorElements = []
const colorNameElements = []

for (let i = 1; i <= 5; i++) {
  const colorElement = document.getElementById(`color-${i}`)
  colorElements.push(colorElement)
}

for (let i = 1; i <= 5; i++) {
  const colorNameElement = document.getElementById(`colorName-${i}`)
  colorNameElements.push(colorNameElement)
}

getColorBtn.addEventListener("click", function (e) {
  e.preventDefault()
  const inputColor = document.getElementById("cPicker").value
  const hex = inputColor.replace("#", "")
  const colorScheme = document.getElementById("sMenu").value.toLowerCase()
  const url =
    "https://www.thecolorapi.com/scheme?hex=" +
    hex +
    "&mode=" +
    colorScheme +
    "&count=5"

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.colors.map((color, index) => {
        colorElements[index].style.background = color.hex.value
        colorNameElements[index].textContent = color.hex.value
      })
    })
    .catch((err) => {
      console.log(err)
    })
})
