
new Vue({
  el: '#root',
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    changeAge: function(amount) {
      this.age += amount
    },
    moving: function(event) {
      this.x = event.screenX
      this.y = event.screenY
    }
  }
})
