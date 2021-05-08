Vue.component('out', {
  template: /*html*/`
    <div>
      {{ text }}
      <input type="button" value="改 props" @click="change">
      <input type="button" value="1" @click="out(1)">
      <input type="button" value="2" @click="out(2)">
      <input type="button" value="3" @click="out(3)">
    </div>
  `,
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    out(value) {
      // 觸發一個自訂事件，將值傳出
      this.$emit('apple', value)
    },
    change() {
      // 不能直接改 props 的值
      // 雖然裡面改了但是外面沒有改
      this.text = 'bbb'
    }
  }
})