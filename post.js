Vue.component('post', {
  template: /*html*/`
    <div class="post">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  `,
  // 接收進來元件的資料
  props: {
    // 資料名稱
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
})