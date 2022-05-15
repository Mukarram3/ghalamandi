<template>
<div>
    <span>{{name}}</span>
</div>
</template>

<script>
export default {
name: "deduction",
    data: function () {
        return {
            name: '',
        };
    },
    beforeMount() {
        this.name = this.params.name.name;
    },
}
</script>
