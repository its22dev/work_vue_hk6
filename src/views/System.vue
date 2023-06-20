<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>系統管理</h1>
    </div>

    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-setting-tab" data-bs-toggle="tab" data-bs-target="#nav-setting"
          type="button"
          role="tab" aria-controls="nav-home" aria-selected="true">系統初始設定</button>
        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-search" type="button"
          role="tab" aria-controls="nav-profile" aria-selected="false">操盤記錄</button>
        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-search" type="button"
          role="tab" aria-controls="nav-profile" aria-selected="false">注單搜尋</button>
        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-search" type="button"
          role="tab" aria-controls="nav-profile" aria-selected="false">站內消息管理</button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="row row-cols-2 my-3 mx-2">
          <div class="row">
            <nav style="--bs-breadcrumb-divider: '  |  ';" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">系統設定</li>
                <li class="breadcrumb-item"><a href="#">賠率設定</a></li>
                <li class="breadcrumb-item"><a href="#">初始值設定</a></li>
                <li class="breadcrumb-item"><a href="#">成本核算</a></li>
              </ol>
            </nav>
          </div>
        </div>
        <ul class="list-group">
          <li class="list-group-item">
            <h5 class="text-start py-5 px-5"><strong>系統初始設定</strong></h5>
            <div class="row align-middle">
              <div class="col-2 text-end py-4 my-3">
                <strong>賠率差上限值(%)</strong>
              </div>
              <div class="col-10 text-start">
                <label>總公司<input type="text" class="form-control mx-1" value="10" style="max-width: 80px;"></label>
                <label>分公司<input type="text" class="form-control mx-1" value="1" style="max-width: 80px;"></label>
                <label>股東<input type="text" class="form-control mx-1" value="0" style="max-width: 80px;"></label>
                <label>總代理<input type="text" class="form-control mx-1" value="0" style="max-width: 80px;"></label>
                <label>一級代理<input type="text" class="form-control mx-1" value="0" style="max-width: 80px;"></label>
                <label>二級代理<input type="text" class="form-control mx-1" value="0" style="max-width: 80px;"></label>
                <label>三級代理<input type="text" class="form-control mx-1" value="0" style="max-width: 80px;"></label>
                <button type="submit" class="btn btn-primary mb-2">儲存</button>
              </div>
              <div class="col-2 text-end py-3 my-3">
                <strong>報表可查天數</strong>
              </div>
              <div class="col-10 text-start">
                <label class="mx-1">管理
                  <select class="form-select" aria-label="Default select example">
                    <option selected>選擇</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </label>
                <label class="mx-1">代理
                  <select class="form-select" aria-label="Default select example">
                    <option selected>選擇</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </label>
                <label class="mx-1">會員
                  <select class="form-select" aria-label="Default select example">
                    <option selected>選擇</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </label>
                <button type="submit" class="btn btn-primary mb-2">儲存</button>
              </div>
              <div class="col-2 text-end py-3 my-3">
                <strong>每天06:30自動登出</strong>
              </div>
              <div class="col-10 text-start my-4">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                    value="option1">
                  <label class="form-check-label" for="inlineRadio1">開啟</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                    value="option2">
                  <label class="form-check-label" for="inlineRadio2">關閉</label>
                </div>
                <button type="submit" class="btn btn-primary mb-2">儲存</button>
              </div>
              <div class="col-2 text-end py-3 my-3">
                <strong>線上人數</strong>
              </div>
              <div class="col-10 text-start my-2">
                上線代理：<strong>0</strong>人<br />
                上線會員：<strong>1</strong>人<br />
                共：<strong>1</strong>人<br />
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <h5 class="text-start py-5 px-5"><strong>香港六合彩</strong></h5>
            <div class="row align-middle">
              <div class="col-2 text-end py-4 my-3">
                <strong>賠率差上限值(%)</strong>
              </div>
              <div class="col-10 text-start">
                <label>總公司<input type="text" class="form-control mx-1" value="10" style="max-width: 80px;"></label>
                <label>分公司<input type="text" class="form-control mx-1" value="1" style="max-width: 80px;"></label>
                <label>股東<input type="text" class="form-control mx-1" value="0" style="max-width: 80px;"></label>
                <label>總代理<input type="text" class="form-control mx-1" value="0" style="max-width: 80px;"></label>
                <label>一級代理<input type="text" class="form-control mx-1" value="0" style="max-width: 80px;"></label>
                <label>二級代理<input type="text" class="form-control mx-1" value="0" style="max-width: 80px;"></label>
                <label>三級代理<input type="text" class="form-control mx-1" value="0" style="max-width: 80px;"></label>
                <button type="submit" class="btn btn-primary mb-2">儲存</button>
              </div>
              <div class="col-2 text-end py-3 my-3">
                <strong>報表可查天數</strong>
              </div>
              <div class="col-10 text-start">
                <label class="mx-1">管理
                  <select class="form-select" aria-label="Default select example">
                    <option selected>選擇</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </label>
                <label class="mx-1">代理
                  <select class="form-select" aria-label="Default select example">
                    <option selected>選擇</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </label>
                <label class="mx-1">會員
                  <select class="form-select" aria-label="Default select example">
                    <option selected>選擇</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </label>
                <button type="submit" class="btn btn-primary mb-2">儲存</button>
              </div>
              <div class="col-2 text-end py-3 my-3">
                <strong>每天06:30自動登出</strong>
              </div>
              <div class="col-10 text-start my-4">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                    value="option1">
                  <label class="form-check-label" for="inlineRadio1">開啟</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                    value="option2">
                  <label class="form-check-label" for="inlineRadio2">關閉</label>
                </div>
                <button type="submit" class="btn btn-primary mb-2">儲存</button>
              </div>
              <div class="col-2 text-end py-3 my-3">
                <strong>線上人數</strong>
              </div>
              <div class="col-10 text-start my-2">
                上線代理：<strong>0</strong>人<br />
                上線會員：<strong>1</strong>人<br />
                共：<strong>1</strong>人<br />
              </div>
            </div>
          </li>
        </ul>

      </div>

    </div>
  </div>
</template>
