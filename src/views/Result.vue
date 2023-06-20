<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>歷史開獎</h1>
    </div>
    <form>
      <div class="row align-items-center">
        <div class="col-1">類別</div>
        <div class="col-2 text-start">
          <select class="form-select" aria-label="Default select example">
            <option selected>香港六合彩</option>
            <option value="tw">台灣六合彩</option>
            <option value="cn">大陸六合彩</option>
          </select>
        </div>
        <div class="col-5 text-start">
          <button type="submit" class="btn btn-primary">查詢</button>
        </div>
      </div>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">期數</th>
          <th scope="col">開獎時間</th>
          <th scope="col">實佔有效額</th>
          <th scope="col">盈虧</th>
          <th scope="col">開出號碼</th>
          <th scope="col">總分總和</th>
          <th scope="col">總分大小</th>
          <th scope="col">總分單雙</th>
          <th scope="col">特碼大小</th>
          <th scope="col">特碼單雙</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Result">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.time }}</td>
          <td>0</td>
          <td>0</td>
          <td>
            <span
              class="lotteryNum"
              style="border-radius: 100%;"
              v-for="(value, i) in item.result"
              :key="i">
              {{ value }}
            </span>
          </td>
          <td>{{ item.total }}</td>
          <td>小</td>
          <td>總單</td>
          <td>合大</td>
          <td>合單雙</td>
          <td><button type="button" class="btn btn-danger btn-sm">刪除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.lotteryNum {
  padding: 3px 7px;
  margin: 0 2px;
  border-radius: 100%;
  background: rgb(253, 29, 29);
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 56%, rgba(252, 69, 162, 1) 100%);
  color: #fff;
}
</style>
<script>
export default {
  data() {
    return {
      Result: [
        { id: '2023011', time: '2023-03-02', result: [1, 2, 3, 4, 5, 6], total: '15' },
        { id: '2023010', time: '2023-02-23', result: [1, 2, 3, 4, 5, 6], total: '15' },
        { id: '2023009', time: '2023-02-16', result: [1, 2, 3, 4, 5, 6], total: '15' },
        { id: '2023008', time: '2023-02-19', result: [1, 2, 3, 4, 5, 6], total: '15' },
        { id: '2023007', time: '2023-02-12', result: [1, 2, 3, 4, 5, 6], total: '15' },
        { id: '2023006', time: '2023-02-05', result: [1, 2, 3, 4, 5, 6], total: '15' },
        { id: '2023005', time: '2023-01-29', result: [1, 2, 3, 4, 5, 6], total: '15' },
        { id: '2023004', time: '2023-01-22', result: [1, 2, 3, 4, 5, 6], total: '15' },
        { id: '2023003', time: '2023-01-15', result: [1, 2, 3, 4, 5, 6], total: '15' },
        { id: '2023002', time: '2023-01-08', result: [1, 2, 3, 4, 5, 6], total: '15' },
        { id: '2023001', time: '2023-01-01', result: [1, 2, 3, 4, 5, 6], total: '15' },
      ],

    }
  }
}
</script>