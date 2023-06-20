<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>用戶管理</h1>
    </div>

    <div class="row row-cols-2 ">
      <form class="row">
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mx-1">新增公司</button>
          <button type="button" class="btn btn-secondary">修改</button>
        </div>
        <div class="col-auto">
          <input class="form-control" placeholder="請輸入帳號">
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-primary mx-3">查找</button>
        </div>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option selected>篩選</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </form>
      <div class="row">
        <nav style="--bs-breadcrumb-divider: '  |  ';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">總公司</li>
            <li class="breadcrumb-item"><a href="#">分公司</a></li>
            <li class="breadcrumb-item"><a href="#">股東</a></li>
            <li class="breadcrumb-item"><a href="#">一級代理</a></li>
            <li class="breadcrumb-item"><a href="#">二級代理</a></li>
            <li class="breadcrumb-item"><a href="#">三級代理</a></li>
            <li class="breadcrumb-item"><a href="#">新增會員列表</a></li>
            <li class="breadcrumb-item"><a href="#">會員</a></li>
            <li class="breadcrumb-item"><a href="#">補貨會員</a></li>
            <li class="breadcrumb-item"><a href="#">管理員</a></li>
            <li class="breadcrumb-item"><a href="#">群組權限</a></li>
            <li class="breadcrumb-item"><a href="#">用戶停用/刪除</a></li>
          </ol>
        </nav>
      </div>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">序號</th>
          <th scope="col">在線</th>
          <th scope="col">總公司</th>
          <th scope="col">名稱</th>
          <th scope="col">分公司</th>
          <th scope="col">股東</th>
          <th scope="col">總代</th>
          <th scope="col">一級</th>
          <th scope="col">二級</th>
          <th scope="col">三級</th>
          <th scope="col">會員</th>
          <th scope="col">信用額度</th>
          <th scope="col">可用餘額</th>
          <th scope="col">新增日期</th>
          <th scope="col">最後登入</th>
          <th scope="col">登入狀態</th>
          <th scope="col">功能</th>
          <th scope="col">總帳</th>
          <th scope="col">補貨</th>
          <th scope="col">賠率</th>
          <th scope="col">控盤</th>
          <th scope="col">開關</th>
          <th scope="col">狀態</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Order">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.online ? '上線' : '離線' }}</td>
          <td>{{ item.parentCom }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.childCom }}</td>
          <td>1</td>
          <td>2</td>
          <td>4</td>
          <td>9</td>
          <td>0</td>
          <td>4</td>
          <td>{{ item.budget }}</td>
          <td>{{ item.balance }}</td>
          <td>{{ item.creatTime }}</td>
          <td>{{ item.lastTime }}</td>
          <td>正常(0)</td>
          <td>
            <button type="button" class="btn btn-link btn-sm">退水</button>
            <button type="button" class="btn btn-link btn-sm">賠率</button>
            <button type="button" class="btn btn-link btn-sm">修改</button>
            <button type="button" class="btn btn-link btn-sm">日誌</button>
            <button type="button" class="btn btn-link btn-sm">資料</button>
            <button type="button" class="btn btn-link btn-sm">報表</button>
          </td>
          <td>
            <span v-if="item.online" class="badge rounded-pill bg-success">true</span>
            <span v-else class="badge rounded-pill bg-danger">false</span>
          </td>
          <td>
            <span v-if="item.online" class="badge rounded-pill bg-success">true</span>
            <span v-else class="badge rounded-pill bg-danger">false</span>
          </td>
          <td>
            <span v-if="item.online" class="badge rounded-pill bg-success">true</span>
            <span v-else class="badge rounded-pill bg-danger">false</span>
          </td>
          <td>
            <span v-if="item.online" class="badge rounded-pill bg-success">true</span>
            <span v-else class="badge rounded-pill bg-danger">false</span>
          </td>
          <td>
            <span v-if="item.online" class="badge rounded-pill bg-success">true</span>
            <span v-else class="badge rounded-pill bg-danger">false</span>
          </td>
          <td>{{ item.online ? '啟用' : '停用' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Order: [
        { id: 159, online: true, name: '測試用戶', parentCom: '總公司A', childCom: '分公司', budget: '80,000.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 17:00:59' },
        { id: 236, online: false, name: '測試用戶', parentCom: '總公司B', childCom: '分公司', budget: '15,123.00', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 347, online: false, name: '測試用戶', parentCom: '總公司C', childCom: '分公司', budget: '87,654.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 486, online: true, name: '測試用戶', parentCom: '總公司C', childCom: '分公司', budget: '11,111.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 516, online: true, name: '測試用戶', parentCom: '總公司B', childCom: '分公司', budget: '50,000.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 687, online: false, name: '測試用戶', parentCom: '總公司A', childCom: '分公司', budget: '55,555.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 725, online: false, name: '測試用戶', parentCom: '總公司B', childCom: '分公司', budget: '33,222.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 898, online: false, name: '測試用戶', parentCom: '總公司C', childCom: '分公司', budget: '22,111.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 932, online: true, name: '測試用戶', parentCom: '總公司A', childCom: '分公司', budget: '99,999.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 101, online: false, name: '測試用戶', parentCom: '總公司B', childCom: '分公司', budget: '80,000.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 159, online: true, name: '測試用戶', parentCom: '總公司A', childCom: '分公司', budget: '80,000.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 17:00:59' },
        { id: 236, online: false, name: '測試用戶', parentCom: '總公司B', childCom: '分公司', budget: '15,123.00', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 347, online: false, name: '測試用戶', parentCom: '總公司C', childCom: '分公司', budget: '87,654.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 486, online: true, name: '測試用戶', parentCom: '總公司C', childCom: '分公司', budget: '11,111.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 516, online: true, name: '測試用戶', parentCom: '總公司B', childCom: '分公司', budget: '50,000.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 687, online: false, name: '測試用戶', parentCom: '總公司A', childCom: '分公司', budget: '55,555.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 725, online: false, name: '測試用戶', parentCom: '總公司B', childCom: '分公司', budget: '33,222.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 101, online: false, name: '測試用戶', parentCom: '總公司B', childCom: '分公司', budget: '80,000.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 159, online: true, name: '測試用戶', parentCom: '總公司A', childCom: '分公司', budget: '80,000.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 17:00:59' },
        { id: 236, online: false, name: '測試用戶', parentCom: '總公司B', childCom: '分公司', budget: '15,123.00', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 347, online: false, name: '測試用戶', parentCom: '總公司C', childCom: '分公司', budget: '87,654.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 898, online: false, name: '測試用戶', parentCom: '總公司C', childCom: '分公司', budget: '22,111.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
        { id: 932, online: true, name: '測試用戶', parentCom: '總公司A', childCom: '分公司', budget: '99,999.99', balance: '0', creatTime: '2023-01-01', lastTime: '2023-06-30 15:00:58' },
      ],

    }
  }
}
</script>