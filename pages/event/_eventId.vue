<script>
  export default {
    data () {
      return {}
    },
    computed: {
      eventId () {
        return this.$route.params.eventId
      },
      event () {
        const event = this.$store.getters.eventById(this.eventId)
        return event
      },
    },
    async fetch ({store, params}) {
      const event = store.getters.eventById(params.eventId)
      if (event === false) {
        await store.dispatch('LOAD_EVENTS')
      }
    }
  }
</script>
