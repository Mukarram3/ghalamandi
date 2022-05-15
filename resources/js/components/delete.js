import Vue from "vue";

export default Vue.extend({
    template: `
        <span>
            <button class="btn btn-sm btn-danger" @click="btnClickedHandler()">Delete</button>
        </span>
    `,
    methods: {
        btnClickedHandler() {
            this.params.clicked(this.params);
        }
    }
});
