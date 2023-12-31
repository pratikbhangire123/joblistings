import main from "./main.js";

export default function createListings(data) {
  let listingSection = document.getElementById("listings");

  listingSection.innerHTML = data
    .map((item) =>
      item == undefined
        ? ``
        : `
      <div key=${item.id} id="listingCard">
          <img src="${item.logo}" alt="comapny-logo" height="80" />

          <div>
              <div id="newOrFeatured">
                  <h4>${item.company}</h4>
                  ${
                    item.new === true ? `<label id="labelNew">NEW!</label>` : ``
                  }
                  ${
                    item.featured === true
                      ? `<label id="labelFeatured">FEATURED</label>`
                      : ``
                  }
              </div>

              <h3 id="positionName">${item.position}</h3>

              <div id="otherInfo">
                  <h5 class="otherInfoItem">${item.postedAt}</h5>&#8226;

                  <h5 class="otherInfoItem">${item.contract}</h5>&#8226;

                  <h5 class="otherInfoItem">${item.location}</h5>
              </div>
          </div>
        
          <div>
            <button id="role" class="filterTab"}>${item.role}</button>

            <button id="level" class="filterTab">${item.level}</button>

            ${item.languages
              .map(
                (language) =>
                  `<button id="language" class="filterTab">${language}</button>`
              )
              .join(" ")}

            ${item.tools
              .map(
                (tool) => `<button id="tool" class="filterTab">${tool}</button>`
              )
              .join(" ")}
          </div>
      </div>
      `
    )
    .join("");

  main();
}
