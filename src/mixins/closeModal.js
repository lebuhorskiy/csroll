const closeModal = {
    methods: {
        subscribe (event) {
            const el = this.$refs.body
            if (!el.contains(event.target)) {
                this.close()
                this.$emit('close')
            }
        }
    },
    beforeDestroy() {
        document.removeEventListener('click', this.subscribe)
    },
    mounted () {
        document.addEventListener('click', this.subscribe)
    }

}

export default closeModal;