let data = {
  input: {
    type: 'Day1',
    title: '',
  },
  menu: [
    { type: 'Day1', title: '第一天', link: 'javascript:;' },
    { type: 'Day2', title: '第二天', link: 'javascript:;' },
    { type: 'Day3', title: '第三天', link: 'javascript:;' },
    { type: 'Day4', title: '第四天', link: 'javascript:;' },
    { type: 'Day5', title: '第五天', link: 'javascript:;' },
    { type: 'Day6', title: '第六天', link: 'javascript:;' },
    { type: 'Day7', title: '第七天', link: 'javascript:;' },
  ],
}

let vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    AddNewItem() {
      if (this.input.title) {
        let { type, title } = this.input
        this.menu.push({ type, title, link: 'javascript:;' })
      }
      this.input.title = ''
    },
  },
})
