function profilePage() {
    window.open("profile.html", "_self");
  }

// sessionCounter = 0;
// console.log("session counter value = " + sessionCounter);
function savecard(elt) {

          function mini(){

            elt.src="./assets/savedalready.png";
          console.log("CARD IS SAVED GG= " + cardid)
          var card = document.getElementById(cardid);
          var dbid = card.getElementsByClassName("tilehash")[0];
          console.log("DB ID IS =" + dbid.innerText)
          
          sessionStorage.setItem(0, dbid.innerText);
          
          }
  

          var cardid = elt.parentNode.parentNode.parentNode.id;
          var favalert = document.getElementById("favalert");
          favalert.style.display = "block";
          var favyes = document.getElementById("favyes");
          var favno = document.getElementById("favno");
          favyes.onclick = function() {
            //do stuff
            console.log("You pressed OK!");
            temp = 1;
            
            favalert.style.display = "none";
            mini();
          }
          
          favno.onclick =  function() {
            console.log("You pressed CANCLE!");
            //do stuff
            favalert.style.display = "none";
            temp = 0;
          }
          
          //sessionStorage.setItem(sessionCounter, dbid.innerText);
          //sessionStorage.setItem("sessioncounter", sessionCounter);
          // sessionCounter=sessionCounter+1;
          //PUSH DBID TO USERNAME USING FIREBASE 
        }
