function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}"/>
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <section class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </section>
  `
}

document.querySelector("#cards").innerHTML =
    createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
    createCard(
      "21/11",
      "segunda",
      createGame("england", "10:00", "iran") +
        createGame("senegal", "13:00", "netherlands") +
        createGame("unitedStates", "16:00", "wales")
    ) +
    createCard(
      "22/11",
      "terça",
      createGame("argentina", "07:00", "saudiArabia") +
        createGame("denmark", "10:00", "tunisia") +
        createGame("mexico", "13:00", "poland") +
        createGame("france", "16:00", "australia")
    ) +
    createCard(
      "23/11",
      "quarta",
      createGame("morocco", "07:00", "croatia") +
        createGame("germany", "10:00", "japan") +
        createGame("spain", "13:00", "costaRica") +
        createGame("belgium", "16:00", "canada")
    ) +
    createCard(
      "24/11",
      "quinta",
      createGame("switzerland", "07:00", "cameroon") +
        createGame("uruguay", "10:00", "southKorea") +
        createGame("portugal", "13:00", "ghana") +
        createGame("brazil", "16:00", "serbia")
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("wales", "07:00", "iran") +
        createGame("qatar", "10:00", "senegal") +
        createGame("netherlands", "13:00", "ecuador") +
        createGame("england", "16:00", "unitedStates")
    ) +
    createCard(
      "26/11",
      "sábado",
      createGame("tunisia", "07:00", "australia") +
        createGame("poland", "10:00", "saudiArabia") +
        createGame("france", "13:00", "denmark") +
        createGame("argentina", "16:00", "mexico")
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("japan", "07:00", "costaRica") +
        createGame("belgium", "10:00", "morocco") +
        createGame("croatia", "13:00", "canada") +
        createGame("spain", "16:00", "germany")
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("cameroon", "07:00", "serbia") +
        createGame("southKorea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "16:00", "uruguay")
    ) +
    createCard(
      "29/11",
      "terça",
      createGame("ecuador", "12:00", "senegal") +
        createGame("netherlands", "12:00", "qatar") +
        createGame("iran", "16:00", "unitedStates") +
        createGame("wales", "16:00", "england")
    ) +
    createCard(
      "30/11",
      "quarta",
      createGame("tunisia", "12:00", "france") +
        createGame("australia", "12:00", "denmark") +
        createGame("poland", "16:00", "argentina") +
        createGame("saudiArabia", "16:00", "mexico")
    ) +
    createCard(
      "01/12",
      "quinta",
      createGame("croatia", "12:00", "belgium") +
        createGame("canada", "12:00", "morocco") +
        createGame("japan", "16:00", "spain") +
        createGame("costaRica", "16:00", "germany")
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("southKorea", "12:00", "portugal") +
        createGame("ghana", "12:00", "uruguay") +
        createGame("serbia", "16:00", "switzerland") +
        createGame("cameroon", "16:00", "brazil")
    )

let bgBody = document.querySelector('body')
let selectTeam = document.querySelector("#choise-team")
function getSelect() {
  let optionValue = selectTeam.options[selectTeam.selectedIndex]
  let value = optionValue.value
  removeAllClass()
  bgBody.classList.add(`bg-${value}`)
}

function removeAllClass() {
  bgBody.classList.remove('bg-initial')
  bgBody.classList.remove('bg-germany')
  bgBody.classList.remove("bg-saudiArabia")
  bgBody.classList.remove("bg-argentina")
  bgBody.classList.remove("bg-australia")
  bgBody.classList.remove("bg-belgium")
  bgBody.classList.remove('bg-brazil')
  bgBody.classList.remove('bg-cameroon')
  bgBody.classList.remove('bg-canada')
  bgBody.classList.remove('bg-qatar')
  bgBody.classList.remove("bg-southKorea")
  bgBody.classList.remove("bg-costaRica")
  bgBody.classList.remove("bg-croatia")
  bgBody.classList.remove("bg-denmark")
  bgBody.classList.remove("bg-ecuador")
  bgBody.classList.remove("bg-spain")
  bgBody.classList.remove("bg-unitedStates")
  bgBody.classList.remove("bg-france")
  bgBody.classList.remove("bg-ghana")
  bgBody.classList.remove("bg-netherlands")
  bgBody.classList.remove("bg-england")
  bgBody.classList.remove("bg-iran")
  bgBody.classList.remove("bg-japan")
  bgBody.classList.remove("bg-morocco")
  bgBody.classList.remove("bg-mexico")
  bgBody.classList.remove("bg-wales")
  bgBody.classList.remove("bg-poland")
  bgBody.classList.remove("bg-portugal")
  bgBody.classList.remove("bg-senegal")
  bgBody.classList.remove("bg-serbia")
  bgBody.classList.remove("bg-switzerland")
  bgBody.classList.remove("bg-tunisia")
  bgBody.classList.remove("bg-uruguay")
}