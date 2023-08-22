import data from "./data.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app");

  let html = "";

  // Generar contenido HTML utilizando la data importada
  data.forEach((item, index) => {
    html += `<div class="category-${index + 1}">
                    <div class='category--content'>
                        <img src="${item.icon}" alt="${item.category} Icon">
                        <div class='category-description'>
                        <p class='category--category-${index + 1}'>${
      item.category
    }</p>
                        <p class='category-score'> <span class='score-value' >${
                          item.score
                        } </span >/ 100</p>
                        </div>
                    </div>
                 </div>`;
  });

  // Renderizar contenido HTML en el elemento con id "app"
  appElement.innerHTML = html;
});
