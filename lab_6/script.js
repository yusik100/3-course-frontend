const btnFetch = document.getElementById("fetch-users-btn");
const wrapperProfiles = document.getElementById("profiles-wrapper");

btnFetch.addEventListener("click", () => {
  fetch("https://randomuser.me/api?results=3")
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Помилка при завантаженні даних");
      }
      return resp.json();
    })
    .then((jsonData) => {
      const personList = jsonData.results;
      wrapperProfiles.innerHTML = "";

      personList.forEach((person) => {
        const imgSrc = person.picture.large;
        const cityName = person.location.city;
        const zipCode = person.location.postcode;
        const mobilePhone = person.cell;
        const personName = `${person.name.title} ${person.name.first} ${person.name.last}`;

        const profileBlock = `
                    <div class="profile-item">
                        <img src="${imgSrc}" alt="Фото користувача" class="profile-avatar">
                        <p><b>Name:</b> ${personName}</p>
                        <p><b>City:</b> ${cityName}</p>
                        <p><b>Postcode:</b> ${zipCode}</p>
                        <p><b>Cell:</b> ${mobilePhone}</p>
                    </div>
                `;
        wrapperProfiles.innerHTML += profileBlock;
      });
      wrapperProfiles.classList.remove("is-hidden");
    })
    .catch((err) => {
      console.error(err);
      wrapperProfiles.innerHTML = `<p style="color: red;">Сталася помилка: ${err.message}</p>`;
      wrapperProfiles.classList.remove("is-hidden");
    });
});
