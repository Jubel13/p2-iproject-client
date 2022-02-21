<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid row justify-content-between">
          <a class="navbar-brand col-2" href="#">DiagnosTool</a>
          <button
            class="navbar-toggler col-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse col-6 justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/diagnose"
                  >Symptom Checker</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/location"
                  >Hospitals</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
#app {
  width: 80%;
  margin: 0 auto;
}

.card {
  padding: 20px;
  width: 60%;
  margin: 0 auto;
}

body {
  background-color: #fff;
}

.navbar {
  background-color: #9e9ea7 !important;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
