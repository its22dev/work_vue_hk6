<template>
  <header class="navbar sticky-top bg-primary text-white flex-md-nowrap">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-white" href="/">Company name</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed text-white " type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon navbar-dark"></span>
    </button>
    <ul class="navbar-nav px-3" id="topnav">
      <li class="active" v-for="(menu, i) in menuData" :key="i">
        <router-link class="nav-link" :to="menu.path">{{ menu.name }}</router-link>
      </li>
    </ul>
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
  data() {
    return {
      menuData: [
        { name: '訂單明細', path: './order' },
        { name: '用戶管理', path: './member' },
        { name: '個人設定', path: './user' },
        { name: '系統管理', path: './system' },
        { name: '未結明細', path: './detail' },
        { name: '報表查詢', path: './report' },
        { name: '歷史開獎', path: './result' },
        { name: '站內消息', path: './news' },
        { name: '遊戲規則', path: './rule' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#topnav {
  display: flex;
  flex-direction: row;
  gap: 16px;

  a {
    padding: 0 12px;
    color: #fff;
  }

  a:hover {
    color: #0d6efd;
    background-color: #fff;
  }
}
</style>
