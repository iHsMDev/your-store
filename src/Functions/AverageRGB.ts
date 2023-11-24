export const AverageColor = (imgSrc: any) => {
  var canvas: any = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = imgSrc;
  console.log(img);

  return new Promise((resolve, reject) => {
    const haha = setInterval(() => {
      if (img) {
        setTimeout(() => {
          resolve("");
          ctx.drawImage(img, 0, 0, 1, 1);
          clearInterval(haha);
        }, 500);
      }
    }, 500);
  }).then(() => {
    return ctx.getImageData(0, 0, 1, 1).data.slice(0, 3);
  });
};
