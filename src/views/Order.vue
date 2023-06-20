<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>訂單明細</h1>
    </div>
    <div></div>
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
          role="tab" aria-controls="nav-home" aria-selected="true">香港六合彩</button>
        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button"
          role="tab" aria-controls="nav-profile" aria-selected="false">台灣六合彩</button>
        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button"
          role="tab" aria-controls="nav-contact" aria-selected="false">大陸六合彩</button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-hk" role="tabpanel" aria-labelledby="nav-home-tab">
        
        <div class="card" v-for="item in Lottery">
          <div class="card-body">
            <div class="card-title">{{ item.number }}</div>
            <div class="card-subtitle mb-2 text-muted">{{ item.price }}</div>
            <button class="minus">-</button>
            <input type="text" value="0" />
            <button class="plus">+</button>
          </div>
        </div>
        
        <table class="table">
          <thead>
            <tr>
              <th scope="col">序號</th>
              <th scope="col">號碼</th>
              <th scope="col">賠率</th>
              <th scope="col">金額</th>
              <th scope="col">勝出/補貨</th>
              <th scope="col">成本</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Lottery">
              <th scope="row">{{ item.number }}</th>
              <td>{{ item.number }}</td>
              <td class="priceBtn">
                <button class="minus">-</button>
                <input type="text" :value="item.price" />
                <button class="plus">+</button>
              </td>
              <td>0</td>
              <td>0 / 0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab-pane fade" id="nav-tw" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="card" v-for="item in Lottery">
          <div class="card-body">
            <div class="card-title">{{ item.number }}</div>
            <div class="card-subtitle mb-2 text-muted">{{ item.price }}</div>
            <button class="minus">-</button>
            <input type="text" value="1" />
            <button class="plus">+</button>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">序號</th>
              <th scope="col">號碼</th>
              <th scope="col">賠率</th>
              <th scope="col">金額</th>
              <th scope="col">勝出/補貨</th>
              <th scope="col">成本</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Lottery">
              <th scope="row">{{ item.number }}</th>
              <td>{{ item.number }}</td>
              <td class="priceBtn">
                <button class="minus">-</button>
                <input type="text" :value="item.price" />
                <button class="plus">+</button>
              </td>
              <td>0</td>
              <td>0 / 0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab-pane fade" id="nav-cn" role="tabpanel" aria-labelledby="nav-contact-tab">
        <div class="card" v-for="item in Lottery">
          <div class="card-body">
            <div class="card-title">{{ item.number }}</div>
            <div class="card-subtitle mb-2 text-muted">{{ item.price }}</div>
            <button class="minus">-</button>
            <input type="text" value="1" />
            <button class="plus">+</button>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">序號</th>
              <th scope="col">號碼</th>
              <th scope="col">賠率</th>
              <th scope="col">金額</th>
              <th scope="col">勝出/補貨</th>
              <th scope="col">成本</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Lottery">
              <th scope="row">{{ item.number }}</th>
              <td>{{ item.number }}</td>
              <td class="priceBtn">
                <button class="minus">-</button>
                <input type="text" :value="item.price" />
                <button class="plus">+</button>
              </td>
              <td>0</td>
              <td>0 / 0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Lottery: [
        { number: '1', price: '47.25' },
        { number: '2', price: '50.00' },
        { number: '3', price: '48.50' },
        { number: '4', price: '47.25' },
        { number: '5', price: '52.25' },
        { number: '6', price: '35.50' },
        { number: '7', price: '40.50' },
        { number: '8', price: '36.50' },
        { number: '9', price: '36.50' },
        { number: '10', price: '36.50' },
        { number: '11', price: '49.50' },
        { number: '12', price: '36.50' },
        { number: '13', price: '40.95' },
        { number: '14', price: '31.95' },
        { number: '15', price: '31.95' },
        { number: '16', price: '31.95' },
        { number: '17', price: '31.95' },
        { number: '18', price: '31.95' },
      ],

    }
  }
}
</script>

<style>
#nav-hk,
#nav-tw,
#nav-cn {
  padding: 15px;

  &.active {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: space-around;
  }


.card {
  .card-title {
    margin: 15px auto;
    width: 36px;
    height: 36px;
    font-size: 18px;
    padding: 6px;
    background-color: #1976d2;
    background: linear-gradient(145deg, #178ae8, #42a5f5);
    color: #fff;
    border-radius: 100%;
  }
}

.minus,
.plus {
  width: 36px;
  height: 36px;
  background: #f2f2f2;
  border-radius: 4px;
  padding: 0px;
  margin: 3px;
  border: 1px solid #ddd;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
}
input {
  height: 36px;
  width: 80px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
}

table {
  margin: 30px 0;
  border-top: 1px solid #ccc;
}
</style>
