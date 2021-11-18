fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    .then(response => response.json())
    .then(data => data.data)
    .then(loc => {
        renderTable(loc)
        sum(loc)
    })

function sum(locs) {
  let positifEl = document.getElementById("Positif")
  let SembuhEl = document.getElementById("Sembuh")
  let meninggalEl = document.getElementById("Meninggal")
  let sum = 0
  let summeninggal = 0
  let sumsembuh = 0
  locs.forEach(user => {
   let positif = user.kasusPosi
   sum += Number(positif);

   let meninggal = user.kasusMeni
   summeninggal += Number(meninggal);

   let sembuh = user.kasusSemb
   sumsembuh+= Number(sembuh)
  });
  positifEl.innerHTML += `<p>Positif: ${sum}</p>`
  SembuhEl.innerHTML += `<p>Sembuh: ${sumsembuh}</p>`
  meninggalEl.innerHTML += `<p>Meninggal: ${summeninggal}</p>`
}

function renderTable(locs) {
    let usersTableEl = document.getElementById("usersTable")
    locs.forEach(loc => {
      let province = loc.provinsi
      let positif = loc.kasusPosi
      let sembuh = loc.kasusSemb
      let meninggal = loc.kasusMeni
      usersTableEl.innerHTML += `
        <tr>
          <td>${province}</td>
          <td>${positif}</td>
          <td>${sembuh}</td>
          <td>${meninggal}</td>
        </tr>
      `
    });
  }