<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>未結明細</h1>
    </div>
    <table class="table table-borderless">
      <tbody>
        <tr>
          <td class="text-end"><strong>彩票種類</strong></td>
          <td class="text-start">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox">
              <label class="form-check-label">香港六合彩</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox">
              <label class="form-check-label">台灣六合彩</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox">
              <label class="form-check-label">大陸六合彩</label>
            </div>
          </td>
        </tr>
        <tr>
          <td class="text-end"><strong>下注類別</strong></td>
          <td class="text-start">
            <select class="form-select" aria-label="Default select example" style="max-width: 400px;">
              <option selected>選擇類別</option>
              <option value="1">類別 1</option>
              <option value="2">類別 2</option>
              <option value="3">類別 3</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="text-end"><strong>總監報表類型</strong></td>
          <td class="text-start">
            <select class="form-select" aria-label="Default select example" style="max-width: 400px;">
              <option selected>選擇類別</option>
              <option value="1">類別 1</option>
              <option value="2">類別 2</option>
              <option value="3">類別 3</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="text-end"><strong>結算狀態</strong></td>
          <td class="text-start">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox">
              <label class="form-check-label">已結算</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox">
              <label class="form-check-label">未結算</label>
            </div>
          </td>
        </tr>
        <tr>
          <td class="text-end"><strong>會員帳號</strong></td>
          <td class="text-start">
            <input class="form-control" type="text" style="max-width: 400px;">
          </td>
        </tr>
        <tr>
          <td class="text-end"><strong></strong></td>
          <td class="text-start">
            <button type="button" class="btn btn-primary">查詢</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
