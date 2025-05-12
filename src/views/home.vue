<template>
  <div class="container my-5">
    <div class="text-center mb-5">
      <img
        src="/budopol.jpg"
        alt="logo"
        class="img-fluid rounded shadow"
        style="max-height: 200px"
      />
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-primary">O firmie</h2>
        <p class="card-text">
          Budopol S.A. to renomowana firma budowlana z ponad 18-letnim
          doświadczeniem na rynku. Działamy od 2005 roku, realizując prestiżowe
          projekty zarówno w Polsce, jak i za granicą. Nasza siedziba znajduje
          się w Warszawie, ale nasze realizacje obejmują kluczowe inwestycje
          mieszkaniowe, komercyjne i infrastrukturalne w całej Europie. Jesteśmy
          synonimem jakości, terminowości i nowoczesnych rozwiązań w
          budownictwie.
        </p>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-primary">Zakres usług</h2>
        <p class="card-text">
          Świadczymy kompleksowe usługi budowlane, obejmujące:
        </p>
        <ul class="list-group list-group-flush mb-3">
          <li class="list-group-item">
            <i class="bi bi-check-circle-fill text-success me-2"></i>
            Generalne wykonawstwo – od fundamentów po oddanie obiektu "pod
            klucz"
          </li>
          <li class="list-group-item">
            <i class="bi bi-check-circle-fill text-success me-2"></i>
            Projektowanie – współpracujemy z najlepszymi biurami
            architektonicznymi
          </li>
          <li class="list-group-item">
            <i class="bi bi-check-circle-fill text-success me-2"></i>
            Budownictwo mieszkaniowe – nowoczesne osiedla i domy energooszczędne
          </li>
          <li class="list-group-item">
            <i class="bi bi-check-circle-fill text-success me-2"></i>
            Inwestycje komercyjne – biurowce, centra handlowe, hotele
          </li>
          <li class="list-group-item">
            <i class="bi bi-check-circle-fill text-success me-2"></i>
            Infrastruktura – drogi, mosty, obiekty przemysłowe
          </li>
          <li class="list-group-item">
            <i class="bi bi-check-circle-fill text-success me-2"></i>
            Modernizacje i remonty – dostosowujemy istniejące budynki do
            najwyższych standardów
          </li>
        </ul>
        <p class="card-text">
          Stawiamy na zrównoważone budownictwo, wykorzystując ekologiczne
          materiały i innowacyjne technologie.
        </p>
      </div>
    </div>

    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-primary">Kultura firmy i rozwój</h2>
        <p class="card-text">
          W Budopol S.A. stawiamy na innowacyjność, bezpieczeństwo i rozwój
          pracowników. Oferujemy:
        </p>
        <ul class="list-group list-group-flush mb-3">
          <li class="list-group-item">
            <i class="bi bi-award text-primary me-2"></i>
            Regularne szkolenia (BHP, nowe technologie, zarządzanie projektami)
          </li>
          <li class="list-group-item">
            <i class="bi bi-award text-primary me-2"></i>
            Stabilne warunki pracy i atrakcyjne benefity (pakiet medyczny, karty
            sportowe)
          </li>
          <li class="list-group-item">
            <i class="bi bi-award text-primary me-2"></i>
            Współpracę z certyfikowanymi dostawcami materiałów budowlanych
          </li>
          <li class="list-group-item">
            <i class="bi bi-award text-primary me-2"></i>
            Elastyczne ścieżki kariery – wspieramy awanse i specjalizacje
            zawodowe
          </li>
        </ul>
        <p class="card-text">
          Dbamy o przyjazną atmosferę i zespołowego ducha, bo wierzymy, że
          ludzie są największą wartością firmy.
        </p>
      </div>
    </div>

    <div class="card shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-primary">Kontakt</h2>
        <p class="card-text">
          Chcesz wiedzieć więcej? Napisz do nas na
          <a href="mailto:budopolSA@gmail.com">budopolSA@gmail.com</a>, zadzwoń
          na <a href="tel:+48123456789">+48 123 456 789</a> lub śledź nas w
          mediach społecznościowych, gdzie publikujemy aktualne oferty pracy i
          relacje z budów.
        </p>
        <div class="d-flex gap-3 mt-3">
          <button class="btn btn-outline-primary">
            <i class="bi bi-facebook me-2"></i> Facebook
          </button>
          <button class="btn btn-outline-primary">
            <i class="bi bi-linkedin me-2"></i> LinkedIn
          </button>
          <button class="btn btn-outline-primary">
            <i class="bi bi-instagram me-2"></i> Instagram
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.card {
  border: none;
  border-radius: 0.5rem;
}

.card-title {
  font-weight: 600;
}

.list-group-item {
  border-left: none;
  border-right: none;
  padding: 0.75rem 1.25rem;
}
</style>
