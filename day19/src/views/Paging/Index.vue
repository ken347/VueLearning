<script>
export default {
  data() {
    return {
      page: 0,
      day: 0,
      list: [
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
  },
  methods: {
    ChangeHandler(e) {
      let day = this.day
      //39:%, 37:'
      if (e.keyCode === 39) {
        day = day < 20 ? day + 1 : day
      } else if (e.keyCode === 37) {
        day = day > 0 ? day - 1 : day
      }
      this.day = day
    },
  },
  mounted() {
    document.addEventListener('keyup', this.ChangeHandler)
    //let day = parseInt(this.$route.query.day ?? this.day)
    let day = parseInt(this.$route.params.day ?? this.day)
    this.day = day
  },
  watch: {
    $route() {
      //let day = parseInt(this.$route.query.day)
      let day = parseInt(this.$route.params.day)
      this.day = day
    },
  },
}
</script>

<template src="./template.html"></template>
<style scoped src="./style.css"></style>
