<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <KTCard ref="preview" v-bind:title="title" v-if="true">
                    <template v-slot:title>

                    </template>
                    <template v-slot:toolbar>
                        <div class="example-tools justify-content-center">
<!--                            <router-link to="/account/create" class="btn btn-dark btn-sm">Create</router-link>-->
                        </div>
                    </template>
                    <template v-slot:body>
                        <b-row>

                            <b-col md="8">
                                <v-jstree :data="asyncData"
                                          :async="loadData"
                                          show-checkbox allow-batch whole-row
                                          @item-click="itemClick">
                                </v-jstree>
                            </b-col>
                            <b-col md="4">
                                <b-form v-if="formShow">

                                    <b-form-group
                                        id="input-group-1"
                                        label="Code:"
                                        label-for="input-1"
                                    >
                                        <b-form-input
                                            id="input-1"
                                            v-model="form.code"
                                            type="email"
                                            placeholder="Code"
                                            disabled
                                        ></b-form-input>
                                    </b-form-group>

                                    <b-form-group id="input-group-2" label="Parent Account" label-for="input-2">
                                        <b-form-input
                                            id="input-2"
                                            v-model="parent_account"
                                            placeholder="Parent Account"
                                            required
                                        ></b-form-input>
                                    </b-form-group>
                                    <b-form-group id="input-group-2" label="Account Name:" label-for="input-2">
                                        <b-form-input
                                            id="input-2"
                                            v-model="form.name"
                                            placeholder="Enter name"
                                            required
                                        ></b-form-input>
                                    </b-form-group>


                                    <b-form-group id="input-group-2" label="Account Description:" label-for="input-2">
                                        <b-form-input
                                            id="input-2"
                                            v-model="form.desc"
                                            placeholder="Enter Description"
                                            required
                                        ></b-form-input>
                                    </b-form-group>


                                    <b-button type="button" @click="updateAccount" variant="primary">Update</b-button>
                                    <b-button type="button" @click="newaccount" variant="primary">Create Account</b-button>
                                    <b-button type="reset" variant="danger">Reset</b-button>
                                    <b-button type="button" :disabled='!deleteBtn' @click="deleteAccount" variant="danger">Delete</b-button>
                                </b-form>
                            </b-col>


                        </b-row>

                    </template>
                </KTCard>
            </div>
        </div>

    </div>
</template>

<script>

import 'vuetify/dist/vuetify.min.css'
import KTCard from "@/view/content/Card.vue";
import ApiService from "@/core/services/api.service";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";

import Select2MultipleControl from 'v-select2-multiple-component';
import VJstree from 'vue-jstree'

export default {
    components: {
        KTCard,
        Select2MultipleControl,
        VJstree
    },
    data() {
        return {
            titleRight:'Chart of Account',
            title: 'Chart of Account',
            is_update: false,
            submit_text: 'Submit',
            loading:false,
            isisnewAccount:false,
            formShow:false,
            codeData:0,
            parent_account:'',
            form: {
                code:'',
                name:'',
                desc:'',
                id:'',
                parent_id:'',
                account_id:'',
                is_edit:false,
                type:''
            },
            checkbox: false,
            show: true,
            search: '',
            asyncData: [],
            desserts: [],
            dessertsTotal: 0,
            errors:{},
            data: [],
            currentNode:{}
        }
    },

    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [{title: "Account"}]);
    },
    computed: {
        deleteBtn() {
            if (this.form.account_id != undefined || this.form.account_id != null) {
            return true;
            }
        },
    },
    methods: {
        getLast() {
                ApiService.get('/api/chart-of-account/last').then((res) => {
                    this.codeData = res.data;
                });
        },
        newaccount(){
            if(this.isisnewAccount==false){
                this.isisnewAccount=true;
                this.form.name='';
                this.form.desc='';
                this.form.code=this.codeData;
                this.parent_account=this.currentNode.data.text;
            }else {
                this.isisnewAccount=false;
                ApiService.post('/api/chart-of-account/store',this.form).then((res) => {
                    this.$bvToast.toast(res.data.message, {
                        title: `Success...`,
                        solid: true

                    });

                    this.currentNode.model.addChild({
                        "disabled": false,code:res.data.dt.code,desc:res.data.dt.desc,account_id:res.data.dt.account_id,type:'account',parent_id:res.data.dt.parent_id,text:res.data.dt.name,"opened": false,id:res.data.dt.id
                    });
                });
            }
        },
        updateAccount(){
            ApiService.post('/api/chart-of-account/update',this.form).then((res) => {
                this.$bvToast.toast(res.data.message, {
                    title: `Success...`,
                    solid: true

                });
               this.currentNode.data.text=this.form.name;
            });
        },
        deleteAccount () {
            // VJstree.delete_node(this.currentNode)
            // this.currentNode.delete();
            // this.currentNode.model={};
            // this.currentNode={};
            // delete this.currentNode;
            this.currentNode.addChild({});
            // console.log('Node: ', this.currentNode.model.delete());
            if (this.form.parent_id != undefined || this.form.parent_id != null)
            {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        ApiService.post('/api/chart-of-account/delete',this.form).then((res) => {
                            this.$bvToast.toast(res.data.message, {
                                // this.currentNode=this.form;
                                title: `Account Deleted Successfully...`,
                                solid: true,

                            });
                        });
                    }
                })
            }
        },
        itemClick (node,item) {
            // console.log('Item Id',item.id);
            // console.log(node);
            // node.data.text='Helllo World';
            this.currentNode=node;
            // nodeid.data.text='Hello World 222';
            // console.log(item);
            // console.log(node);
            this.formShow=true;
            this.form.account_id=item.account_id;
            this.form.parent_id=item.parent_id;
            this.form.name=item.text;
            this.form.id=item.id;
            this.form.desc=item.desc;
            this.form.code=item.code;
            this.form.type=item.type;
        },

        loadData(oriNode, resolve) {
            var id = oriNode.data.id ? oriNode.data.id : 0
            console.log('Node ID',id);
            console.log('Node',oriNode);
            console.log('Node Data',oriNode.data);
            // setTimeout(() => {
            //     let data = []
            //     if (id > 200) {
            //         data = []
            //     }
            //     else {
            //         data = [
            //             {
            //                 "text": "New Item 1..." + id, "isLeaf": id > 100
            //             },
            //             {
            //                 "text": "New Item 2..." + id, "isLeaf": id > 100
            //             }
            //         ]
            //     }
            //     resolve(data)
            // }, 500)
            // console.log(oriNode.data.type);
            ApiService.get('/api/chart-of-account/fetch?id='+id+'&type='+oriNode.data.type+'&l=1')
                .then((res) => {
                   // var data = [
                   //      {
                   //          "text": "New Item 1..." + id, "isLeaf": id > 100
                   //      },
                   //      {
                   //          "text": "New Item 2..." + id, "isLeaf": id > 100
                   //      }
                   //  ]
                    var data=[];

                      for(var i=0;i<res.data.dt.length;i++){
                          var disb=false;
                          if(res.data.type=='main'){
                              disb=true;
                          }

                          var temp={"disabled": false,code:res.data.dt[i].code,desc:res.data.dt[i].desc,account_id:res.data.dt[i].account_id,type:res.data.type,parent_id:res.data.dt[i].parent_id,text:res.data.dt[i].name,"opened": false,id:res.data.dt[i].id};
                          // var children=[];
                          // if (res.data[i].subaccounts) {
                          //     for (var k = 0; k < res.data[i].subaccounts.length; k++) {
                          //         children.push({"opened": false,text: res.data[i].subaccounts[k].name,id:res.data[i].subaccounts[k].id})
                          //     }
                          // }
                          // temp.children=children;
                          data.push(temp);
                      }

                    resolve(data)
                }).catch(res=>{

            })
        },
        fetchApiData()
        {
            // console.dir(e);
            // ApiService.get('/api/chart-of-account/fetch')
            //     .then((res) => {
            //         console.log('Fetched Data: ', res.data);
            //         // this.data = res.data;
            //         var mainDataArr=[];
            //         for(var i=0;i<res.data.length;i++){
            //             var temp={text:res.data[i].name,"opened": true,id:res.data[i].id};
            //             // var children=[];
            //             // if (res.data[i].subaccounts) {
            //             //     for (var k = 0; k < res.data[i].subaccounts.length; k++) {
            //             //         children.push({text: res.data[i].subaccounts[k].name,id:res.data[i].subaccounts[k].id})
            //             //     }
            //             // }
            //             // temp.children=children;
            //             mainDataArr.push(temp);
            //         }
            //         console.log('Maped',mainDataArr)
            //         this.asyncData=mainDataArr;
            //     });
        },
    },
    created() {
    this.getLast();
    this.fetchApiData();
    }
}
</script>

<style>
.card-body{
    height: 100vh;
}
</style>
