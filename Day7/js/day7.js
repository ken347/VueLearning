let data = {
  input: {
    type: '全部',
    title: '',
  },
  menu: [
    { type: 'Type1', title: 'Item1', link: 'javascript:;' },
    { type: 'Type2', title: 'Item2', link: 'javascript:;' },
    { type: 'Type3', title: 'Item3', link: 'javascript:;' },
    { type: 'Type4', title: 'Item4', link: 'javascript:;' },
    { type: 'Type5', title: 'Item5', link: 'javascript:;' },
    { type: 'Type6', title: 'Item6', link: 'javascript:;' },
    { type: 'Type7', title: 'Item7', link: 'javascript:;' },
    { type: 'Type1', title: 'Item8', link: 'javascript:;' },
    { type: 'Type2', title: 'Item9', link: 'javascript:;' },
    { type: 'Type3', title: 'Item10', link: 'javascript:;' },
    { type: 'Type4', title: 'Item11', link: 'javascript:;' },
    { type: 'Type5', title: 'Item12', link: 'javascript:;' },
    { type: 'Type6', title: 'Item13', link: 'javascript:;' },
    { type: 'Type7', title: 'Item14', link: 'javascript:;' },
  ],
}

let vm = new Vue({
  el: '#app',
  data: data,
  computed: {
    menuTypeFilter() {
      if (this.input.type !== '全部') {
        return this.menu.filter((item) => {
          return item.type === this.input.type
        })
      } else {
        return this.menu
      }
    },
    menuTitleFilter() {
      if (this.input.title) {
        return this.menuTypeFilter.filter((item) => {
          return (
            item.title.toLowerCase().indexOf(this.input.title.toLowerCase()) !==
            -1
          )
        })
      } else {
        return this.menuTypeFilter
      }
    },
  },
})
