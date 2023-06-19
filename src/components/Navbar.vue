<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="p-1" v-for="(menu, i) in menuData" :key="i">
            <router-link class="nav-link" :to="menu.path">{{ menu.name }}</router-link>
          </li>
      </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 100px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}
a{
  color: #666;
}
a:hover{
  color:#0d6efd
}
</style>
