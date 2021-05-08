Vue.component('card', {
  template: /*html*/`
    <div class="card">
      <img :src="data.img">
      <p>{{ data.text }}</p>
      <button @click="toggle">
        {{ good ? '收回讚' : '讚' }}
      </button>
    </div>
  `,
  props: {
    data: {
      type: Object,
      default: {
        text: '',
        img: ''
      }
    }
  },
  data() {
    return {
      good: false
    }
  },
  methods: {
    toggle() {
      this.good = !this.good
      this.$emit('good', this.good)
    }
  } 
})
