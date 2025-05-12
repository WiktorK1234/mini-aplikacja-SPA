<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card shadow-sm mb-5">
          <div class="card-body text-center">
            <h1 class="card-title text-primary">
              Dołącz do nas! Kariera w Budopol S.A.
            </h1>
          </div>
        </div>

        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <p class="lead">
              Budopol S.A. to firma, która dynamicznie się rozwija, dlatego
              stale poszukujemy ambitnych specjalistów gotowych współtworzyć
              nasze projekty. Jeśli jesteś inżynierem, architektem, kierownikiem
              budowy, specjalistą BHP lub masz doświadczenie w branży budowlanej
              – sprawdź nasze aktualne oferty i aplikuj!
            </p>
          </div>
        </div>

        <div class="accordion mb-4" id="infoAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Oferujemy
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#infoAccordion"
            >
              <div class="accordion-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Stabilne zatrudnienie w renomowanej firmie z wieloletnią
                    tradycją
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Atrakcyjne wynagrodzenie i benefity (pakiet medyczny, karty
                    multisport)
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Możliwość rozwoju – szkolenia, certyfikacje i awanse
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Pracę na ciekawych projektach – od mieszkań po
                    infrastrukturę
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Jakie stanowiska oferujemy?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#infoAccordion"
            >
              <div class="accordion-body">
                <p>Poszukujemy pracowników na różne stanowiska, m.in.:</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Inżynierowie budowlani (projektanci, specjaliści ds.
                    nadzoru)
                  </li>
                  <li class="list-group-item">
                    Kierownicy budów (do realizacji dużych inwestycji)
                  </li>
                  <li class="list-group-item">
                    Brygadziści i wykwalifikowani robotnicy
                  </li>
                  <li class="list-group-item">
                    Specjaliści BHP i logistyki budowlanej
                  </li>
                  <li class="list-group-item">
                    Pracownicy administracji i obsługi klienta
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                Wymagania wobec kandydatów
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#infoAccordion"
            >
              <div class="accordion-body">
                <p>W zależności od stanowiska, oczekujemy:</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <i class="bi bi-check2-square text-primary me-2"></i>
                    Doświadczenia w branży budowlanej (potwierdzonego
                    referencjami)
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check2-square text-primary me-2"></i>
                    Wykształcenia kierunkowego (budownictwo, inżynieria lądowa,
                    architektura)
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check2-square text-primary me-2"></i>
                    Znajomości przepisów BHP i norm budowlanych
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check2-square text-primary me-2"></i>
                    Umiejętności obsługi programów branżowych (AutoCAD, Revit,
                    MS Project)
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check2-square text-primary me-2"></i>
                    Komunikatywności i gotowości do pracy w zespole
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="card shadow-sm mb-5">
          <div class="card-body">
            <h2 class="text-primary mb-4">Formularz aplikacyjny</h2>
            <form
              @submit.prevent="sprawdzForm"
              class="needs-validation"
              novalidate
            >
              <div class="mb-3">
                <label for="poleTekst" class="form-label">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="poleTekst"
                  v-model="tekstValue"
                  placeholder="Podaj e-mail..."
                  :class="{ 'is-invalid': errors.email }"
                  required
                />
                <div class="invalid-feedback">
                  {{ errors.email }}
                </div>
              </div>

              <div class="mb-3">
                <label for="poleNumer" class="form-label">Numer telefonu</label>
                <input
                  type="tel"
                  class="form-control"
                  id="poleNumer"
                  v-model="numerValue"
                  placeholder="Podaj numer telefonu..."
                  :class="{ 'is-invalid': errors.telefon }"
                  required
                />
                <div class="invalid-feedback">
                  {{ errors.telefon }}
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="poleAdres" class="form-label">Adres</label>
                  <input
                    type="text"
                    class="form-control"
                    id="poleAdres"
                    v-model="adresValue"
                    placeholder="Podaj adres zamieszkania..."
                    :class="{ 'is-invalid': errors.adres }"
                    required
                  />
                  <div class="invalid-feedback">
                    {{ errors.adres }}
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="poleKod" class="form-label">Kod pocztowy</label>
                  <input
                    type="text"
                    class="form-control"
                    id="poleKod"
                    v-model="kodValue"
                    placeholder="XX-XXX"
                    :class="{ 'is-invalid': errors.kod }"
                    required
                  />
                  <div class="invalid-feedback">
                    {{ errors.kod }}
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="poleMiejsc" class="form-label">Miejscowość</label>
                  <input
                    type="text"
                    class="form-control"
                    id="poleMiejsc"
                    v-model="miejscValue"
                    placeholder="Podaj miejscowość..."
                    :class="{ 'is-invalid': errors.miejscowosc }"
                    required
                  />
                  <div class="invalid-feedback">
                    {{ errors.miejscowosc }}
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="cv" class="form-label">Załącz CV (wymagane)</label>
                <input
                  type="file"
                  class="form-control"
                  id="cv"
                  @change="(e) => wyslaniePlikow(e, 'cv')"
                  accept=".pdf,.doc,.docx"
                  :class="{ 'is-invalid': errors.cv }"
                  required
                />
                <div class="invalid-feedback">
                  {{ errors.cv }}
                </div>
                <small class="text-muted" v-if="plikCV"
                  >Wybrano: {{ plikCV.name }}</small
                >
                <div class="form-text">
                  Maksymalny rozmiar pliku: 5MB. Dozwolone formaty: PDF, DOC,
                  DOCX
                </div>
              </div>

              <div class="mb-4">
                <label for="list" class="form-label"
                  >Załącz list motywacyjny (opcjonalnie)</label
                >
                <input
                  type="file"
                  class="form-control"
                  id="list"
                  @change="(e) => wyslaniePlikow(e, 'list')"
                  accept=".pdf,.doc,.docx"
                  :class="{ 'is-invalid': errors.list }"
                />
                <div class="invalid-feedback">
                  {{ errors.list }}
                </div>
                <small class="text-muted" v-if="plikList"
                  >Wybrano: {{ plikList.name }}</small
                >
              </div>

              <div class="d-grid">
                <button type="submit" class="btn btn-primary btn-lg">
                  <i class="bi bi-send-fill me-2"></i> Wyślij aplikację
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tekstValue = ref("");
const numerValue = ref("");
const adresValue = ref("");
const kodValue = ref("");
const miejscValue = ref("");
const plikCV = ref(null);
const plikList = ref(null);

const errors = ref({
  email: "",
  telefon: "",
  adres: "",
  kod: "",
  miejscowosc: "",
  cv: "",
  list: "",
});

const wyslaniePlikow = (event, field) => {
  const file = event.target.files[0];
  if (field === "cv") {
    plikCV.value = file;
  } else {
    plikList.value = file;
  }
};

function sprawdzForm() {
  errors.value = {
    email: "",
    telefon: "",
    adres: "",
    kod: "",
    miejscowosc: "",
    cv: "",
    list: "",
  };

  let isValid = true;

  if (!tekstValue.value.trim()) {
    errors.value.email = "E-mail jest wymagany";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(tekstValue.value)) {
    errors.value.email = "Podaj poprawny adres e-mail";
    isValid = false;
  }

  if (!numerValue.value.trim()) {
    errors.value.telefon = "Numer telefonu jest wymagany";
    isValid = false;
  } else if (!/^[0-9]{9,}$/.test(numerValue.value.replace(/\s/g, ""))) {
    errors.value.telefon = "Podaj poprawny numer telefonu (min. 9 cyfr)";
    isValid = false;
  }

  if (!adresValue.value.trim()) {
    errors.value.adres = "Adres jest wymagany";
    isValid = false;
  }

  if (!kodValue.value.trim()) {
    errors.value.kod = "Kod pocztowy jest wymagany";
    isValid = false;
  } else if (!/^[0-9]{2}-[0-9]{3}$/.test(kodValue.value)) {
    errors.value.kod = "Podaj kod w formacie XX-XXX";
    isValid = false;
  }

  if (!miejscValue.value.trim()) {
    errors.value.miejscowosc = "Miejscowość jest wymagana";
    isValid = false;
  }

  if (!plikCV.value) {
    errors.value.cv = "CV jest wymagane";
    isValid = false;
  } else if (plikCV.value.size > 5 * 1024 * 1024) {
    errors.value.cv = "Plik przekracza limit 5MB";
    isValid = false;
  } else if (
    ![
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ].includes(plikCV.value.type)
  ) {
    errors.value.cv = "Dozwolone formaty: PDF, DOC, DOCX";
    isValid = false;
  }

  if (plikList.value && plikList.value.size > 5 * 1024 * 1024) {
    errors.value.list = "Plik przekracza limit 5MB";
    isValid = false;
  }

  if (!isValid) return;

  const dane = {
    email: tekstValue.value,
    telefon: numerValue.value,
    adres: adresValue.value,
    kod: kodValue.value,
    miejscowosc: miejscValue.value,
    cv_name: plikCV.value?.name || null,
    list_name: plikList.value?.name || null,
  };

  console.log("Dane formularza:", dane);

  const zapisaneAplikacje = JSON.parse(
    localStorage.getItem("aplikacje") || "[]"
  );
  zapisaneAplikacje.push(dane);
  localStorage.setItem("aplikacje", JSON.stringify(zapisaneAplikacje));

  alert("Dane zapisane w pamięci przeglądarki (localStorage)");
}
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

.card {
  border: none;
  border-radius: 0.5rem;
}

.form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
</style>
