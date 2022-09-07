(() => {
  let galleryArray = [...document.getElementsByClassName("gallery mw-gallery-traditional")];
  let zeroGallery = [...document.getElementsByClassName("gallery mw-gallery-traditional")][0].children;
  let sourcemaybe = [...document.getElementsByClassName("gallery mw-gallery-traditional")][0].children[0].children[0]
    .children[0].children[0].children[0].children[0].src;

  console.log(`done`);
})();
