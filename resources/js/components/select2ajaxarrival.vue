<template>
    <select id="select2ajax-arrival" class="form-control select2ajax-arrival" style="width: 100%">
    </select>
</template>

<script>
    export default {
        name: 'select2ajax',
        props: ['options', 'value','input'],
        template: '#select2ajax-arrival',
        mounted: function() {
            var vm = this;
            $(this.$el)
                // init select2
                .select2({
                    ajax: {
                        url: "/api/arrival/fetch-deals",
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
                .on('change', function() {
                    vm.$emit('input', this.value);
                    vm.$emit('selectMyEvent',this.value);
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

<style scoped>
    .select2-container--default.select2-container--focus .select2-selection--multiple {
        border: 1px solid #E4E6EF !important;
        border-radius: 7px;
    }

    .select2-container--default .select2-selection--multiple{
        border: 1px solid #E4E6EF !important;
        min-height: 36px;
    }
    .select2-selection {
        border-radius: 0px !important;
        text-align: left !important;
    }
    .select2-dropdown {
        border-radius: 0px !important;
    }
    /*.select2-container--default .select2-selection--single {*/
    /*    background-color: #fff;*/
    /*    border: 1px solid #8f1ab5;*/
    /*    border-radius: 10px !important;*/
    /*    height: 38px;*/
    /*}*/
</style>
