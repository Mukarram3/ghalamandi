<template>
    <div></div>
</template>
<script>
    import { PURGE_AUTH } from "@/core/services/store/auth.module";

    export default {
        mounted() {
            this.$store.dispatch(PURGE_AUTH,null,{root:true});
            this.$router.push({'name':'login'});
        }
    }
</script>
