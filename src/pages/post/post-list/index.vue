<template>
  <d2-container>
    <template slot="header">文章列表</template>
    <el-select v-model="classValue" placeholder="所有分类" style="margin-right:20px">
      <el-option
        v-for="item in selectOpts"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>  
    </el-select>
     <el-select v-model="statusVal" placeholder="所有状态" style="margin-right:20px">
      <el-option
        v-for="item in statusOpts"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>  
    </el-select>
    <el-button icon="el-icon-search" circle></el-button>
    <d2-crud
      :columns="columns"
      :data="data"
      :options="options"
      :rowHandle="rowHandle"
      :pagination="pagination"/>
  </d2-container>
</template>

<script>
import doc from "./doc.md";
import code from "./code.js";

export default {
  data() {
    return {
      doc,
      code,
      selectOpts: [
        {
          value: "选项1",
          label: "科技"
        },
        {
          value: "选项2",
          label: "散文"
        },
        {
          value: "选项3",
          label: "人文"
        }
      ],

      statusOpts: [
        {
          value: "选项1",
          label: "已发布"
        },
        {
          value: "选项2",
          label: "未发布"
        },
      ],
      classValue: "",
      statusVal:"",

      columns: [
        {
          title: "标题",
          key: "title"
        },
        {
          title: "作者",
          key: "name"
        },
        {
          title: "分类",
          key: "class"
        },
        {
          title: "发表时间",
          key: "date"
        },
        {
          title: "状态",
          key: "status"
        }
      ],
      data: [
        {
          date: "2016-05-03",
          name: "王小虎",
          class: "科技",
          title: "我的文章",
          status: "已发布"
        },

        {
          date: "2016-05-03",
          name: "王小虎",
          class: "科技",
          title: "我的文章",
          status: "已发布"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          class: "科技",
          title: "我的文章",
          status: "已发布"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          class: "科技",
          title: "我的文章",
          status: "已发布"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          class: "科技",
          title: "我的文章",
          status: "已发布"
        },

        {
          date: "2016-05-03",
          name: "王小虎",
          class: "科技",
          title: "我的文章",
          status: "已发布"
        }
      ],
      options: {
        maxHeight: "250"
      },
      rowHandle: {
        remove: {
          size: "mini",
          confirm: false
        }
      },
      pagination: {
        pageSize: 5,
        layout: "prev, pager, next, total"
      }
    };
  }
};
</script>
<style scoped>
.d2-crud {
  background: #fff;
  margin-top:20px
}
</style>

