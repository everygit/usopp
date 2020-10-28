//
Vue.component('templateName', {
    name: 'templateName',
    props: {
        data: {
            type: Array,
            'default': function () {
                return []
            }
        }
    },
    methods: {},
    computed: {},
    watch: {},
    created: function () { },
    beforeDestroy: function () { },
    mounted: function () { },
    render: function (h) {
        // this.$createElement
        // this.$listeners
        // this.$attrs
        return h('div', {
            'class': 'templateName'
        }, ["templateName"])
    }
});