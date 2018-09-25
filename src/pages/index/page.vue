<template>
  <d2-container class="page">
    <d2-page-cover
      title="I AM 王冰洋"
      sub-title="基于D2admin的cms">
      <d2-icon name="themeisle" style="font-size:100px"/>
      <!-- <d2-icon-svg style="width: 120px;" name="d2-admin"/> -->
      <template slot="footer">
        <div class="page__btn-group">
          <span @click="$open('https://github.com/iceycc/iceyang-admin')">github地址</span> 
          <!-- | -->
          <!-- <el-popover
            :width="172"
            trigger="hover">
            <p class="d2-mt-0 d2-mb-10">D2Projects</p>
            <img src="./image/qr@2x.png" style="width: 172px;">
            <span slot="reference">微信公众号</span>
            <p
              style="
                font-size: 12px;
                margin-top: 0px;
                margin-bottom: 0px;
              ">
              官方公众号，主要推送前端技术类文章、框架资源、学习教程，以及 D2 系列项目更新信息
            </p>
          </el-popover> -->
        </div>
        <!-- <d2-badge/>
        <d2-help-btn/> -->
      </template>
    </d2-page-cover>
  </d2-container>
</template>

<script>
import D2HelpBtn from './components/d2-help-btn'
import D2Badge from './components/d2-badge'
export default {
  components: {
    D2HelpBtn,
    D2Badge
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page {
  .page__btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 20px;
    span {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
    }
  }
}

</style>
