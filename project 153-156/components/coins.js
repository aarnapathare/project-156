AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
       
        const id = `coin${i}`;
  
     
        const posX = Math.floor(Math.random() * 100 + -50);
        const posY = Math.floor(Math.random() * 5 + -5);
        const posZ = Math.floor(Math.random() * 60 + -40);
  
        const position = { x: posX, y: posY, z: posZ };
        this.createCoins(id, position)
  
      }
    }, 
    createCoins: function(id, position)
    var treasureEntity=document.querySelector("#treasureCoins");
    var coinEl=document.createElement("a-entity");

    coinEl.setAttribute("id", id)
    coinEl.setAttribute("position", position)
    coinEl.setAttribute("material", material)

    coinEl.setAttribute("geometry", {primitive:"circle", radius:1});
    coinEl.setAttribute("animation", {
        property:"rotation",to:"0 360 0", loop:"true", dur:1000
    });

    coinEl.setAttribute("static-body", {
      shape: "sphere", 
      sphereRadius:2
    })

    treasureEntity.appendChild(coinEl)