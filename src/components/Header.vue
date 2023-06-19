<template>
  <header class="navbar sticky-top bg-primary text-white flex-md-nowrap shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-white" href="/">Company name</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed text-white " type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon navbar-dark"></span>
    </button>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link text-white me-4" href="#">登出</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
