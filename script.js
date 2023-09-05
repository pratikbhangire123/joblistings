import dataFile from "./data.json" assert { type: "json" };
let listingSection = document.getElementById("listings");

listingSection.innerHTML = dataFile
  .map(
    (item) => `
    <div key=${item.id} id="listingCard">
        <img id="companyProfile" src="${
          item.logo
        }" alt="comapny-logo" height="80" />
        <div>
            <div>
                <h4>${item.company}</h4>
                <label id="labelNew">NEW!</label> 
                <label id="labelFeatured">FEATURED</label>
            </div>
            <h3>${item.position}</h3>
            <div>
                <h5 class="otherInfo">${item.postedAt}</h5>&#8226;
                <h5 class="otherInfo">${item.contract}</h5>&#8226;
                <h5 class="otherInfo">${item.location}</h5>
            </div>
        </div>
        <div>
            <label class="filterTab">${item.role}</label>
            <label class="filterTab">${item.level}</label>
            ${item.languages
              .map((language) => `<label class="filterTab">${language}</label>`)
              .join(" ")}
            ${item.tools
              .map((tool) => `<label class="filterTab">${tool}</label>`)
              .join(" ")}
        </div>
    </div>
    `
  )
  .join("");
