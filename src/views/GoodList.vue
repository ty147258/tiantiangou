<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>商品列表</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">排序:</span>
          <a href="javascript:void(0)" class="default cur">默认</a>
          <a href="javascript:void(0)" class="price">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop">过滤</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>价格:</dt>
              <dd><a href="javascript:void(0)">所有</a></dd>
              <dd>
                <a href="javascript:void(0)">0 - 100</a>
              </dd>
            </dl>
          </div>
          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li>
                  <div class="pic">
                    <a href="#"><img src="/static/1.jpg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">XX</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import './../assets/css/base.css'
  import './../assets/css/product.css'
  import NavHeader from './../components/NavHeader'
  import NavFooter from './../components/NavFooter'
  import NavBread from './../components/NavBread'
  export default {
    components:{
      NavHeader,
      NavFooter,
      NavBread
    },
  }
</script>
