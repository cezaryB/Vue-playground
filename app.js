
new Vue({
  el: '#root',
  data: {
    message: 'Hello from Vue'
  },
  methods: {
    greet: function(name) {
      const msg = this.message
      return `${msg} ${name}!`
    }
  }
})
