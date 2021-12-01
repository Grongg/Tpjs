const data = document.querySelectorAll(".data");
const firstname = document.querySelectorAll(".data")[0];
const lastname = document.querySelectorAll(".data")[1];
const mail = document.querySelectorAll(".data")[2];
const pp = document.querySelectorAll(".data")[3];
const age = document.querySelectorAll(".data")[4];
const op = document.querySelector(".profil");

const checkIfEmpty = (value) => {
  if (!value) {
    console.log("t lourd");
    return 0;
  } else return 1;
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  /**
   * Check if form wont do shit if one is empty
   */

  if (
    !document.querySelectorAll(".data")[0].value ||
    !document.querySelectorAll(".data")[1].value ||
    !document.querySelectorAll(".data")[2].value ||
    !document.querySelectorAll(".data")[3].value ||
    !document.querySelectorAll(".data")[4].value
  ) {
    /**
     * puts border on all input's border if one is empty
     *
     * TODO only the errors are in red => DONE
     *
     */
    for (let i = 0; i < data.length; i++) {
      if (checkIfEmpty(data[i].value) === 0)
        data[i].style.border = "1px solid red";
      else data[i].style.border = "1px solid black";
    }
    return;
  } else {
    op.innerText = "Opération réussie!";
    const newP = document.createElement("article");
    newP.innerHTML = `
    <div class="info">
    <div>
    <p>Votre nom complet: ${firstname.value} ${lastname.value}</p>
    </div>
    <div>
    <p>Votre email: ${mail.value}</p>
    </div>
    <div>
    <p>Votre age: ${age.value} ans</p>
    </div>
    <div>
    <p>Informations corrects ?</p>
    </div>
    <button class="check" type="button" id="yes" style="background-color: green; color: white; border: none; border-radius: 4px; width: 75px; height:55px; font-size: 14px">Oui</button>
    <button class="check" type="button" id="non" style="background-color: red; color: white; border: none; border-radius: 4px; width: 75px; height:55px; font-size: 14px">Non</button>
    </div>
    <div class="pic">
    <img src="${pp.value}"  />
    </div>
    `;
    op.append(newP);
    document.querySelector("main article").classList.add("tmpProfil");

    /**
     * Check if u click on the yes button and remove form, the created profile, and change back the title
     */
    document.querySelector("#yes").addEventListener("click", (e) => {
      e.preventDefault();
      console.log("test");
      const form = document.querySelector("form");
      const check = document.querySelector(".tmpProfil");
      const firstStep = document.querySelector("#firstStep");
      if (document.querySelector("#yes")) {
        firstStep.remove(firstStep);
        check.remove(check);
        form.remove(form);
        op.innerText = "Votre inscription à bien été enregistrée";
      }
    });

    /**
     * Check if u click on the no button and remove the created profile, and change back the title
     */

    document.querySelector("#non").addEventListener("click", (e) => {
      e.preventDefault();
      console.log("test2");
      const form = document.querySelector("form");
      const check = document.querySelector(".tmpProfil");
      const firstStep = document.querySelector("#firstStep");
      if (document.querySelector("#non")) {
        check.remove(check);
        for (let i = 0; i < data.length; i++) data[i].value = "";
        op.innerText = "En attente de vos informations ...";
      }
    });
  }
});

/**
 * Changes img every 3 secs
 */

let i = 1;

i = setInterval(
  () => {
    const path = "./assets/sport0" + i + ".jpg";
    document.querySelector("#simp").setAttribute("src", path);
    if (i === 3) i = 0;
    i++;
  },
  3000,
  i
);
