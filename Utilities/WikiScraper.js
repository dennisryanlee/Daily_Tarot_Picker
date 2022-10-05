/**
 * this scraper was created to gather the card picture link from the wikipedia page
 * the links are listed in cardlinks.json
 */

(() => {
  let galleryArray = [...document.getElementsByClassName("gallery mw-gallery-traditional")];
  let zeroGallery = [...document.getElementsByClassName("gallery mw-gallery-traditional")][0].children;
  let sourcemaybe = [...document.getElementsByClassName("gallery mw-gallery-traditional")][0].children[0].children[0]
    .children[0].children[0].children[0].children[0].src;

  let allchildrenlinks = [...document.getElementsByClassName("gallery mw-gallery-traditional")]
    .map((ul) => [...ul.children])
    .flat()
    .map((child) =>
      child.children[0].children[0].children[0].children[0].children[0].src
        .replace(/\/\d{2}px.*/g, "")
        .replace("/thumb", "")
    );

  console.log(`done`);
})();
