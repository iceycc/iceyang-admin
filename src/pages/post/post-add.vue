<template>
  <d2-container>
    <template slot="header">写文章</template>
    <section style="display:flex">
          <section style="flex:1">
            <d2-quill
            style="min-height: 200px;"
            v-model="value"
            @text-change="textChangeHandler"
            @selection-change="selectionChangeHandler"
            @editor-change="editorChangeHandler"/>
          </section>
            <section style="flex:1">
              <input type="text">
            </section>
    </section>
    <!-- <el-card shadow="never" class="d2-card d2-mt">
      <d2-highlight :code="value" format-html/>
    </el-card> -->
  </d2-container>
</template>

<script>
// import value from './value'
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    textChangeHandler(delta, oldDelta, source) {
      // console.group('QuillEditor textChangeHandler')
      // console.log(delta, oldDelta, source)
      // console.groupEnd()
    },
    selectionChangeHandler(range, oldRange, source) {
      // console.group('QuillEditor selectionChangeHandler')
      // console.log(range, oldRange, source)
      // console.groupEnd()
    },
    editorChangeHandler(eventName, ...args) {
      // console.group('QuillEditor editorChangeHandler')
      // console.log(eventName, args)
      // console.groupEnd()
    }
  }
};
</script>
