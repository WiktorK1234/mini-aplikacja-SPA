<template>
  <div class="app-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container">
        <router-link to="/" class="navbar-brand">Budopol S.A.</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
                active-class="active"
                exact-active-class=""
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link" active-class="active"
                >Kariera</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link" active-class="active"
                >Galeria</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.app-container {
  min-height: 100vh;
}

.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  font-weight: 500;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
