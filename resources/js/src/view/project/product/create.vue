<template>
    <div>
     <div class="row">
         <div class="col-md-6">
             <KTCard ref="preview" v-bind:title="title" >
                 <template v-slot:title v-if="hasTitleSlot">
                     <h3 class="card-title">
                         <slot name="title"></slot>
                     </h3>
                 </template>
                 <template v-slot:toolbar>
                     <div class="example-tools justify-content-center">

                     </div>
                 </template>
                 <template v-slot:body>
                     <div>
                         <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                             <b-form-group
                                 id="input-group-1"
                                 label="Email address:"
                                 label-for="input-1"
                                 description="We'll never share your email with anyone else."
                             >
                                 <b-form-input
                                     v-model="form.email"
                                     type="email"
                                     required
                                     placeholder="Enter email"
                                 ></b-form-input>
                             </b-form-group>

                             <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                 <b-form-input
                                     id="input-2"
                                     v-model="form.name"
                                     required
                                     placeholder="Enter name"
                                 ></b-form-input>
                             </b-form-group>

                             <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                                 <b-form-select
                                     id="input-3"
                                     v-model="form.food"
                                     :options="foods"
                                     required
                                 ></b-form-select>
                             </b-form-group>

                             <b-form-group id="input-group-4">
                                 <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                                     <b-form-checkbox value="me">Check me out</b-form-checkbox>
                                     <b-form-checkbox value="that">Check that out</b-form-checkbox>
                                 </b-form-checkbox-group>
                             </b-form-group>

                             <b-button type="submit" variant="primary">Submit</b-button>
                             <b-button type="reset" variant="danger">Reset</b-button>
                         </b-form>
                         <b-card class="mt-3" header="Form Data Result">
                             <pre class="m-0">{{ form }}</pre>
                         </b-card>
                     </div>

                 </template>
             </KTCard>
         </div>
         <div class="col-md-6">
             <KTCard ref="preview" v-bind:title="titleRight" >
                 <template v-slot:title v-if="hasTitleSlot">
                     <h3 class="card-title">
                         <slot name="title"></slot>
                     </h3>
                 </template>
                 <template v-slot:toolbar>
                     <div class="example-tools justify-content-center">

                     </div>
                 </template>
                 <template v-slot:body>
                     Hello

                 </template>
             </KTCard>
         </div>
     </div>

    </div>
</template>

<script>
    import KTCard from "@/view/content/Card.vue";
    import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
    export default {
        components:{KTCard},
        data(){
            return{
                title:'Create Commodity',
                titleRight:'List Commodities',
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true

            }
        },
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [{ title: "Create Product" }]);
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
                this.submit_text='<span aria-hidden="true" class="spinner-grow spinner-grow-sm"></span>Loading...';
                ApiService.post('/api/category/create',this.form).then((res)=>{
                    console.log(res)
                    this.$bvToast.toast('Toast body content', {
                        title: `Variant ${variant || 'default'}`,
                        variant: variant,
                        solid: true
                    })
                })
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>
