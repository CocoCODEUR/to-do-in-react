import "./index.css";
export default Home;
//formulaire
let select_option = document.querySelector(".select_option");
let input_text = document.querySelector(".input_text");
let input_date = document.querySelector(".input_date");

//task information
let task_level = "";
let task_text = "";

//ul selection
let urgent = document.querySelector(".urgent");
let aFaire = document.querySelector(".aFaire");
let chill = document.querySelector(".chill");
//local Storage
//urgent Storage
let recoverUrgent = [];
let urgentStorage = [];
//à faire storage
let recoverAFaire = [];
let aFaireStorage = [];
// chill storage
let recoverChill = [];
let chillStorage = [];
function AddTask() {
  task_text = input_text.value;
  task_level = select_option.value;

  // Check up pour vérifier s'il a bien tout remplit
  if (task_level === "" || task_text === "" || input_date.value === "") {
    alert("gros con tu as pas tout remplis ");
  } else {
    if (task_level === "select_priority") {
      urgentStorage.push(Task(urgent, urgentStorage, "priorite"));
    }
    if (task_level === "select_ok_tiers") {
      aFaireStorage.push(Task(aFaire, aFaireStorage, "okTiers"));
    }
    if (task_level === "select_chill") {
      chillStorage.push(Task(chill, chillStorage, "chill"));
    }
  }
}

function Task(parent, parentStorage, stockageName) {
  let task = document.createElement("li");
  parent.appendChild(task);
  task.textContent = task_text + " avant le : " + date.value;

  // suppression task
  task.addEventListener("click", () => {
    task.remove();
    parentStorage.splice(parentStorage.length - 1, 1);
    localStorage.setItem(stockageName, parentStsorage);
  });
  localStorage.setItem(stockageName, parentStorage);

  return task.textContent;
}

function recoverLocalStorage(parent, parentStorage, parentName) {
  let recoverStorage = localStorage.getItem(parentName).split(",");
  console.log(recoverStorage);
  recoverStorage.forEach((task, index) => {
    let recoverTask = document.createElement("li");
    parent.appendChild(recoverTask);

    recoverTask.textContent = task;

    recoverTask.addEventListener("click", () => {
      recoverTask.remove();
      //élimine la task
      parentStorage.splice(index, 1);

      // remise dans le stockage
      localStorage.setItem(parentName, parentStorage);
    });
    parentStorage.push(task);
  });
}
function Home() {
  //let name = window.prompt("quelle ton non mon bro ");

  return (
    <div>
      <h1> Comment ça va </h1>
      <h2>Tu veux ajouter une task bg ? </h2>
      <div className="container_add_task">
        <input
          className="input_text"
          type="text"
          placeholder="rentre ta task "
        />

        <select className="select_option" name="" id="">
          <option value="select_urgent">Urgent</option>
          <option value="select_aFaire"> A Faire </option>
          <option value="select_chill">Chill </option>
        </select>

        <input type="date" className="input_date" />
        <input
          className="input_submit"
          type="submit"
          value="Ajouter la task "
        />
      </div>

      <h2>T'as ça à faire frérito :</h2>

      <ul className="urgent"> Urgent :</ul>
      <ul className="aFaire"> A faire :</ul>
      <ul className="chill"> Chill : </ul>
    </div>
  );
}
