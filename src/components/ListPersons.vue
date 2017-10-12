<template>
    <v-container fuild>
        <v-flex xs12>
            <v-card color="green" dark>
                <v-card-text v-text="lorem">
                </v-card-text>
            </v-card>
        </v-flex>
        <v-card>
            <!-- <v-card-title>
                Person
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title> -->
            <v-data-table 
            v-bind:headers="headers" 
            v-bind:items="items" 
            
            v-bind:search="search"
            hide-actions 
            >
                <template slot="items" scope="props">
                    <td class="text-xs-right">{{ props.item.id }}</td>
                    <td>
                        <v-edit-dialog lazy> {{ props.item.username }}
                            <v-text-field slot="input" label="Edit" v-model="props.item.name" single-line counter :rules="[max25chars]"></v-text-field>
                        </v-edit-dialog>
                    </td>
                    
                    <td class="text-xs-right">{{ props.item.firstname }}</td>
                    <td class="text-xs-right">{{ props.item.lastname }}</td>
                    <td class="text-xs-right">{{ props.item.email }}</td>
                    <td class="text-xs-right">{{ props.item.language }}</td>
                    <td class="text-xs-right">{{ props.item.phone }}</td>
                    <td class="text-xs-right">{{ props.item.gender }}</td>
                    <td class="text-xs-right">{{ props.item.location }}</td>
                    <td class="text-xs-right">
                        <!-- <v-edit-dialog @open="tmp = props.item.iron" @save="props.item.iron = tmp || props.item.iron" large lazy>
                                <div>{{ props.item.iron }}</div>
                                <div slot="input" class="mt-3 title">Update Iron</div>
                                <v-text-field slot="input" label="Edit" v-model="tmp" single-line counter autofocus :rules="[max25chars]"></v-text-field>
                            </v-edit-dialog> -->
                    </td>
                </template>
                <!-- <template slot="pageText" scope="{ pageStart, pageStop }">
                        From {{ pageStart }} to {{ pageStop }}
                    </template> -->
            </v-data-table>
            <div class="text-xs-center pt-2" @click="openpage(3,pagination.page)">
                <v-pagination v-model="pagination.page" :length="this.pages"></v-pagination>
            </div>
        </v-card>
        <!-- </v-layout> -->
    </v-container>
</template>
<script>
import { HTTP } from '@/router/index'

export default {
    data: () => ({
        lorem: `List persons Non-Protected Endpoint(s)`,
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {
        },
        pages:0,
        headers: [
            { text: 'ID', value: 'id' },
            {
                text: 'Username',
                align: 'left',
                sortable: false,
                value: 'name'
            },
            { text: 'First Name', value: 'calories' },
            { text: 'Last Name', value: 'fat' },
            { text: 'Email', value: 'carbs' },
            { text: 'Language', value: 'protein' },
            { text: 'Phone', value: 'sodium' },
            { text: 'Gender', value: 'calcium' },
            { text: 'Location', value: 'iron' }
        ],
        items: []
    }),
    computed: {
    //   pages () {
    //       //jumlah halaman
    //     return 
    //   }
    },
    methods: {
        openpage: function(limit, offset) {
            console.log(this.pagination.page)
            HTTP.get(`/getpersons`, {
            withCredentials: false,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                limit: limit,
                offset: offset
            }
        })
            .then(response => {
                // JSON responses are automatically parsed.
                console.log(response)
                this.items = response.data
            })
            .catch(e => {
                console.log(e)
            })
        }
    },
    created: function() {
        HTTP.get(`/getpersons`, {
            withCredentials: false,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                limit: 3,
                offset: 1
            }
        })
            .then(response => {
                // JSON responses are automatically parsed.
                console.log(response)
                this.items = response.data
                this.pagination.page = 1
            })
            .catch(e => {
                console.log(e)
            })

            HTTP.get(`/getnumpages`, {
            withCredentials: false,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                limit: 3
            }
        })
            .then(response => {
                // JSON responses are automatically parsed.
                console.log(response)
                this.pages = response.data
            })
            .catch(e => {
                console.log(e)
            })
    }
}
</script>