<template>
    <v-container fuild>
        <!-- <v-layout justify-center align-content-center>
                        <img src='../assets/guest.png' />
                </v-layout> -->
        <!-- <v-layout justify-center> -->
        <v-flex xs12>
            <v-card color="green" dark>
                <v-card-text v-text="lorem">
                </v-card-text>
            </v-card>
        </v-flex>
        <v-card>
            <v-card-title>
                Person
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title>
            <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">
                <template slot="items" scope="props">
                    <td>
                        <v-edit-dialog lazy> {{ props.item.name }}
                            <v-text-field slot="input" label="Edit" v-model="props.item.name" single-line counter :rules="[max25chars]"></v-text-field>
                        </v-edit-dialog>
                    </td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.sodium }}</td>
                    <td class="text-xs-right">{{ props.item.calcium }}</td>
                    <td class="text-xs-right">
                        <v-edit-dialog @open="tmp = props.item.iron" @save="props.item.iron = tmp || props.item.iron" large lazy>
                            <div>{{ props.item.iron }}</div>
                            <div slot="input" class="mt-3 title">Update Iron</div>
                            <v-text-field slot="input" label="Edit" v-model="tmp" single-line counter autofocus :rules="[max25chars]"></v-text-field>
                        </v-edit-dialog>
                    </td>
                </template>
                <template slot="pageText" scope="{ pageStart, pageStop }">
                    From {{ pageStart }} to {{ pageStop }}
                </template>
            </v-data-table>
        </v-card>
        <!-- </v-layout> -->
    </v-container>
</template>
<script>
export default {
    data: () => ({
        lorem: `List persons Non-Protected Endpoint(s)`,
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {},
        headers: [
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
    })
}
</script>