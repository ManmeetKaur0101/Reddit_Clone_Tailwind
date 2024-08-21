const sharebtns = document.getElementsByClassName("sharebtn");

const datashare = {
  text: "hello World"
}

for (let i = 0; i < sharebtns.length; i++) {
sharebtns[i].addEventListener("click", async () => {
  try{
    await navigator.share(datashare);
    console.log("shared text ");
  }
  catch(err){
    console.log(err);
  }

})
}