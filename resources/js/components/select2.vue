<template>
    <select style="width: 100%">
    </select>
</template>

<script>
    export default {
        name: 'select2',
        props: ['options', 'value'],
        mounted: function() {
            var vm = this;
            $(this.$el)
                // init select2
                .select2({ data: this.options })
                .val(this.value)
                .trigger('change')
                // emit event on change.
                .on('change', function() {
                    vm.$emit('input', this.value);
                }).on('select2:close',function (e){
                    vm.$emit('close',e);
            });
        },
        watch: {
            value: function(value) {
                // update value
                $(this.$el).val(value);
            },
            options: function(options) {
                // update options
                $(this.$el)
                    .empty()
                    .select2({ data: options }).trigger('change');
            }
        },
        destroyed: function() {
            $(this.$el)
                .off()
                .select2('destroy');
        }
    };
</script>

<style>
    .select2-container--default .select2-selection--single .select2-selection__rendered {
        color: #444;
        line-height: 22px;
    }
    .select2-container .select2-selection--single {

        height: calc(1.5em + 1.3rem + 2px) !important;
    }
</style>
