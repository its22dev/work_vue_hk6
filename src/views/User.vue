<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>個人設定</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
      </div>
    </div>

    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
          role="tab" aria-controls="nav-home" aria-selected="true">管理日誌</button>
        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button"
          role="tab" aria-controls="nav-profile" aria-selected="false">變更密碼</button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

        <form class="row gy-2 gx-3 my-3 align-items-center">
          <div class="col-auto">
            <select class="form-select" id="autoSizingSelect">
              <option selected>群組選擇</option>
              <option value="1">群組 1</option>
              <option value="2">群組 2</option>
              <option value="3">群組 3</option>
            </select>
          </div>
          <div class="col-auto">
            <select class="form-select" id="autoSizingSelect">
              <option selected>類別選擇</option>
              <option value="1">類別 1</option>
              <option value="2">類別 2</option>
              <option value="3">類別 3</option>
            </select>
          </div>
          <div class="col-auto">
            <select class="form-select" id="autoSizingSelect">
              <option selected>時間選擇</option>
              <option value="1">七天</option>
              <option value="2">一個月</option>
              <option value="3">一季</option>
            </select>
          </div>
          <div class="col-auto">
            <input type="text" class="form-control" id="autoSizingInput" placeholder="明細 (英數字)">
          </div>
          <div class="col-auto">
            <input type="text" class="form-control" id="autoSizingInput" placeholder="IP">
          </div>
          <div class="col-auto">
            <input type="text" class="form-control" id="autoSizingInput" placeholder="帳號">
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">查找</button>
          </div>
        </form>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">登入明細</th>
              <th scope="col">登入時間</th>
              <th scope="col">IP</th>
              <th scope="col">IP歸屬</th>
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
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <form class="container">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">舊密碼</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">請輸入現有密碼</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">新密碼</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">請輸入欲變更的新密碼</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">確認新密碼</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">請再次輸入欲變更的新密碼</div>
          </div>
          <button type="submit" class="btn btn-danger">變更密碼</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  margin: 50px 0;
  text-align: left;
}
</style>
