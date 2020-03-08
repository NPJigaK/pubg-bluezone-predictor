window.addEventListener("DOMContentLoaded", function() {
  // add Event Listener
  document.getElementById("file_upload").addEventListener("change",
    async function(e) {
      // Can use File API?
      if (window.File) {
        try {
          let inputJson = document.getElementById("file_upload").files[0];
          document.getElementById("LoadInput").value = inputJson.name;

          readMatchJson(inputJson);
        } catch (error) {
          // Failed to load JSON.

          alert("Failed to load JSON.");

          removeAllMatches();
        }
      }
    },
    true
  );
});

async function readMatchJson(inputJson) {
  let reader = new FileReader();

  // add Load Event Listener.
  reader.addEventListener("load", () => {
    try {
      let matchJsons = JSON.parse(reader.result);

      for (var i = 0; i < matchJsons.length; i++) {
        insertRow(
          matchJsons[i].createdAt,
          matchJsons[i].mapName,
          matchJsons[i].matchType,
          matchJsons[i].flightPath,
          matchJsons[i].gameStates
        );
      }

      // Reload matchesList for List.js.
      matchesList.reIndex();
    } catch (error) {
      // JSON is invalid format.
      console.log(error)
      alert("JSON is invalid format.");

      removeAllMatches();
    }
  });
  // reset list
  await removeAllMatches();

  // start reading as Text.
  reader.readAsText(inputJson);
}

/*table
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function insertRow(createdAt, mapName, matchType, flightPath, gameStates) {
  // Insert row at end of line
  let row = document.getElementById("matchesBody").insertRow(-1);
  // Insert cell
  let cell1 = row.insertCell(-1);
  let cell2 = row.insertCell(-1);
  let cell3 = row.insertCell(-1);
  let cell4 = row.insertCell(-1);
  let cell5 = row.insertCell(-1);
  cell4.style.display = "none";
  cell5.style.display = "none";

  // add class for List.js
  cell1.classList.add("createdAt");
  cell2.classList.add("mapName");
  cell3.classList.add("matchType");

  // Enter cell contents
  cell1.innerHTML = `<span class="trigger" onclick="clickMatchLoading(this)">${createdAt}</span>`
  cell2.innerHTML = mapName;
  cell3.innerHTML = matchType;
  cell4.innerHTML = JSON.stringify(flightPath);
  cell5.innerHTML = JSON.stringify(gameStates);
}

async function removeAllMatches() {
  let matchesBody = document.getElementById("matchesBody");
  while (matchesBody.rows[0]) {
    // remove list for html.
    await matchesBody.deleteRow(0);
  }
  // remove all Listjs list.
  matchesList.clear();
}
