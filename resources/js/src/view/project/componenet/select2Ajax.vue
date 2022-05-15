<template>
    <select  class="select2ajaxinvoice" style="width: 100%">
    </select>
</template>

<script>
    export default {
        name: 'select2ajax',
        props: ['options', 'value','input','url'],
        mounted: function() {
            var vm = this;
            $(this.$el)
                // init select2
                .select2({
                    ajax: {
                        url: this.url,
                        dataType: 'json',
                        delay: 500,
                        cache: true,
                        data: function(params) {
                            var query = {
                                search: params.term,
                                _type: 'query',
                                q: params.term
                            };
                            // Query parameters will be ?search=[search]&_type=query&q=q
                            return query;
                        },
                        // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
                        processResults: function(data) {
                            // Tranforms the top-level key of the response object from 'items' to 'results'
                            var result_data = $.map(data.items, function(obj) {
                                obj.text = obj.name;
                                return obj;
                            });
                            return {
                                results: result_data
                            };
                        }
                    },
                    placeholder: 'Select an option',
                    templateResult: function(repo) {
                        // if (repo.id) {
                        //     return repo.id + ' : ' + repo.text;
                        // }
                        return repo.text;
                    },
                    templateSelection: function(repo) {
                        // if (repo.id) {
                        //     return repo.id + ' : ' + repo.text;
                        // }
                        return repo.text;
                    }
                })
                .val(this.value)
                .trigger('change')
                .on('change', function(e) {
                    vm.$emit('input', this.value);
                    vm.$emit('selectInvoiceEvent',this.value);
                    vm.$emit('onChange',e)
                });
        },
        watch: {
            value: function(value) {
                // update value
                // console.log($(this.$el).val(value));
                $(this.$el).val(value);

            },
            options: function(options) {
                // update options
                // console.log($(this.$el).empty().select2({ data: options }));
                console.log(options)
                $(this.$el)
                    .empty()
                    .select2({ data: options });
            },

        },
        destroyed: function() {
            $(this.$el)
                .off()
                .select2('destroy');
        }
    };
</script>

<style>
    .select2-container--default .select2-selection--single {
        background-color: #fff;
        border: 1px solid #E4E6EF;
        border-radius: 0.675rem;
        min-height: 38px;
    }
    .select2-container--default .select2-selection--single .select2-selection__arrow {
        height: 36px;
        position: absolute;
        top: 1px;
        right: 1px;
        width: 20px;
    }
    .select2-container--default .select2-selection--single .select2-selection__rendered {
        color: #444;
        line-height: 0px;
    }
</style>
