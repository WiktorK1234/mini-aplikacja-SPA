<template>
  <div class="container my-5">
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
          Budopol S.A. to firma, która dynamicznie się rozwija, dlatego stale
          poszukujemy ambitnych specjalistów gotowych współtworzyć nasze
          projekty. Jeśli jesteś inżynierem, architektem, kierownikiem budowy,
          specjalistą BHP lub masz doświadczenie w branży budowlanej – sprawdź
          nasze aktualne oferty i aplikuj!
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
                Pracę na ciekawych projektach – od mieszkań po infrastrukturę
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
                Inżynierowie budowlani (projektanci, specjaliści ds. nadzoru)
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
                Doświadczenia w branży budowlanej (potwierdzonego referencjami)
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
                Umiejętności obsługi programów branżowych (AutoCAD, Revit, MS
                Project)
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

    <h2 class="text-primary mb-4">Formularz aplikacyjny</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <Field
          type="email"
          class="form-control"
          placeholder="Podaj e-mail..."
          name="email"
        />
        <ErrorMessage name="email" class="text-danger small d-block mt-1" />
      </div>

      <div class="mb-3">
        <label for="phoneNum" class="form-label">Numer telefonu</label>
        <Field
          type="tel"
          class="form-control"
          placeholder="Podaj numer telefonu..."
          name="phoneNum"
        />
        <ErrorMessage name="phoneNum" class="text-danger small d-block mt-1" />
      </div>

      <div class="mb-3">
        <label for="adres" class="form-label">Adres</label>
        <Field
          type="text"
          class="form-control"
          placeholder="Podaj adres..."
          name="adres"
        />
        <ErrorMessage name="adres" class="text-danger small d-block mt-1" />
      </div>

      <div class="mb-3">
        <label for="kod" class="form-label">Kod pocztowy</label>
        <Field
          type="text"
          class="form-control"
          placeholder="Podaj kod pocztowy..."
          name="kod"
        />
        <ErrorMessage name="kod" class="text-danger small d-block mt-1" />
      </div>

      <div class="mb-3">
        <label for="place" class="form-label">Miejscowość</label>
        <Field
          type="text"
          class="form-control"
          placeholder="Podaj miejscowość..."
          name="place"
        />
        <ErrorMessage name="place" class="text-danger small d-block mt-1" />
      </div>

      <div class="mb-3">
        <label for="cv" class="form-label"
          >CV (wymagane, max 5MB, .doc/.docx)</label
        >
        <Field
          type="file"
          class="form-control"
          name="cv"
          accept=".doc,.docx"
          @change="validateFile($event, 'cv')"
        />
        <ErrorMessage name="cv" class="text-danger small d-block mt-1" />
      </div>

      <div class="mb-4">
        <label for="list" class="form-label"
          >List motywacyjny (opcjonalny, max 5MB, .doc/.docx)</label
        >
        <Field
          type="file"
          class="form-control"
          name="list"
          accept=".doc,.docx"
          @change="validateFile($event, 'list')"
        />
        <ErrorMessage name="list" class="text-danger small d-block mt-1" />
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-4">
        <button
          type="button"
          class="btn btn-outline-secondary me-md-2"
          @click="cancel"
        >
          <i class="bi bi-x-circle me-2"></i> Anuluj
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="!meta.valid || isSubmitting"
        >
          <i class="bi bi-send-fill me-2"></i>
          {{ isSubmitting ? "Wysyłanie..." : "Wyślij aplikację" }}
        </button>
      </div>
    </form>

    <div v-if="showSuccessMessage" class="alert alert-success">
      Formularz został wysłany pomyślnie!
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const isSubmitting = ref(false);
const showSuccessMessage = ref(false);
const fileErrors = ref<Record<string, string>>({});

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const validateFile = (event: Event, fieldName: string) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      fileErrors.value[fieldName] =
        "Niedozwolony typ pliku. Dopuszczalne formaty: .doc, .docx";
      input.value = "";
    } else if (file.size > MAX_FILE_SIZE) {
      fileErrors.value[fieldName] =
        "Plik jest zbyt duży. Maksymalny rozmiar: 5MB";
      input.value = "";
    } else {
      delete fileErrors.value[fieldName];
    }
  }
};

const schema = yup.object({
  email: yup
    .string()
    .email("Niepoprawny adres e-mail")
    .required("E-mail jest wymagany"),
  phoneNum: yup
    .string()
    .matches(/^[0-9]{9,}$/, "Numer telefonu musi mieć co najmniej 9 cyfr")
    .required("Numer telefonu jest wymagany"),
  adres: yup.string().required("Adres jest wymagany"),
  kod: yup
    .string()
    .matches(/^[0-9]{2}-[0-9]{3}$/, "Kod pocztowy musi być w formacie XX-XXX")
    .required("Kod pocztowy jest wymagany"),
  place: yup.string().required("Miejscowość jest wymagana"),
  cv: yup
    .mixed()
    .required("CV jest wymagane")
    .test(
      "fileSize",
      "Plik jest zbyt duży. Maksymalny rozmiar: 5MB",
      (value) => {
        if (!value) return false;
        return (value as File).size <= MAX_FILE_SIZE;
      }
    )
    .test(
      "fileType",
      "Niedozwolony typ pliku. Dopuszczalne formaty: .doc, .docx",
      (value) => {
        if (!value) return false;
        return ALLOWED_FILE_TYPES.includes((value as File).type);
      }
    ),
  list: yup
    .mixed()
    .test(
      "fileSize",
      "Plik jest zbyt duży. Maksymalny rozmiar: 5MB",
      (value) => {
        if (!value) return true;
        return (value as File).size <= MAX_FILE_SIZE;
      }
    )
    .test(
      "fileType",
      "Niedozwolony typ pliku. Dopuszczalne formaty: .doc, .docx",
      (value) => {
        if (!value) return true;
        return ALLOWED_FILE_TYPES.includes((value as File).type);
      }
    ),
});

const { handleSubmit, resetForm, meta, setFieldError } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit(async (values) => {
  for (const [field, error] of Object.entries(fileErrors.value)) {
    setFieldError(field, error);
    return;
  }

  isSubmitting.value = true;
  try {
    console.log("Wysyłanie danych:", values);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    showSuccessMessage.value = true;
    resetForm();

    setTimeout(() => {
      showSuccessMessage.value = false;
    }, 5000);
  } catch (error) {
    console.error("Błąd podczas wysyłania formularza:", error);
  } finally {
    isSubmitting.value = false;
  }
});

const cancel = () => {
  resetForm();
  fileErrors.value = {};
};
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

.alert-success {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  animation: fadeInOut 5s ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
