<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Dashboard</h1>
    </div>
    <h3 class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
      Overview
    </h3>
    <div class="row row-cols-4">
      <div class="col">
        <div class="card text-white bg-secondary mb-3">
          <div class="card-body">
            <h5 class="card-title">99</h5>
            <p class="card-text">訂單生成</p>
          </div>
          <div class="card-footer">查看</div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white bg-success mb-3">
          <div class="card-body">
            <h5 class="card-title">17</h5>
            <p class="card-text">付款成功</p>
          </div>
          <div class="card-footer">查看</div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white bg-danger mb-3">
          <div class="card-body">
            <h5 class="card-title">3</h5>
            <p class="card-text">付款失敗</p>
          </div>
          <div class="card-footer">查看</div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white bg-primary mb-3">
          <div class="card-body">
            <h5 class="card-title">5</h5>
            <p class="card-text">新會員加入</p>
          </div>
          <div class="card-footer">查看</div>
        </div>
      </div>
    </div>
    <h3 class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
      Order
    </h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">訂單號</th>
          <th scope="col">訂購人</th>
          <th scope="col">金額</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Order">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td><button type="button" class="btn btn-light btn-sm">View</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.card-title {
  font-size: 36px;
}
</style>

<script>
export default {
  data() {
    return {
      Order: [
        { id: '76542', price: '100', name: '測試用戶' },
        { id: '76542', price: '100', name: '測試用戶' },
        { id: '76542', price: '100', name: '測試用戶' },
        { id: '76542', price: '100', name: '測試用戶' },
        { id: '76542', price: '100', name: '測試用戶' },
        { id: '76542', price: '100', name: '測試用戶' },
        { id: '76542', price: '100', name: '測試用戶' },
        { id: '76542', price: '100', name: '測試用戶' },
        { id: '76542', price: '100', name: '測試用戶' },
        { id: '176542', price: '100', name: '測試用戶' },
        { id: '176542', price: '100', name: '測試用戶' },
        { id: '176542', price: '100', name: '測試用戶' },
        { id: '176542', price: '100', name: '測試用戶' },
        { id: '176542', price: '100', name: '測試用戶' },
        { id: '176542', price: '100', name: '測試用戶' },
      ],

    }
  }
}
</script>