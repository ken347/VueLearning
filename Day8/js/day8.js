let data = {
  input: {
    type: null,
    title: null,
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
    { type: 'Type1', title: 'Item15', link: 'javascript:;' },
    { type: 'Type2', title: 'Item16', link: 'javascript:;' },
    { type: 'Type3', title: 'Item17', link: 'javascript:;' },
    { type: 'Type4', title: 'Item18', link: 'javascript:;' },
    { type: 'Type5', title: 'Item19', link: 'javascript:;' },
    { type: 'Type6', title: 'Item20', link: 'javascript:;' },
    { type: 'Type7', title: 'Item21', link: 'javascript:;' },
  ],
}

let vm = new Vue({
  el: '#app',
  data: data,
  computed: {
    typeList() {
      let dataSet = {
        sort: [],
        map: {},
      }
      this.menu.forEach(({ type, title, link }, index) => {
        if (!dataSet.map[type]) {
          dataSet.sort.push(type)
          dataSet.map[type] = {
            sort: [],
            map: {},
          }
        }
        dataSet.map[type].sort.push(title)
        dataSet.map[type].map[title] = { link, index }
      })

      return dataSet
    },
    titleList() {
      this.input.title = null
      if (this.input.type) {
        return this.typeList.map[this.input.type]
      } else {
        return []
      }
    },
    content() {
      if (this.input.title) {
        return this.titleList.map[this.input.title]
      } else {
        return null
      }
    },
  },
})
