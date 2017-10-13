<template>
  <v-container grid-list-md>
    <v-layout justify-center align-content-center>
      <!-- <v-layout row wrap> -->
      <v-flex lg6 xs6>
        <v-card color="green" dark>
          <v-card-text v-text="lorem">
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <v-flex lg6 xs6>
              <v-spacer></v-spacer>
            </v-flex> -->
    <v-layout justify-center align-content-center>
      <v-flex lg6 xs6>
        <!-- <v-layout justify-center> -->
        <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search" hide-actions>
          <template slot="items" scope="props">
            <td class="text-xs-right">{{ props.item.id }}</td>
            <td>
              <v-edit-dialog lazy> {{ props.item.filename }}
                <v-text-field slot="input" label="Edit" v-model="props.item.name" single-line counter :rules="[max25chars]"></v-text-field>
              </v-edit-dialog>
            </td>

            <td class="text-xs-right">{{ props.item.uploadby }}</td>
            <td class="text-xs-right">{{ props.item.datecreated }}</td>
            <td class="text-xs-right">{{ props.item.size }}</td>
            <td class="text-xs-right">{{ props.item.link }}</td>
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
        <!-- </v-layout> -->
      </v-flex>
      <!-- </v-layout> -->
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    lorem: `List download file`,
    max25chars: (v) => v.length <= 25 || 'Input too long!',
    tmp: '',
    search: '',
    pagination: {
    },
    pages: 0,
    headers: [
      { text: 'ID', value: 'id' },
      {
        text: 'Filename',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Upload By', value: 'fat' },
      { text: 'Date Create', value: 'carbs' },
      { text: 'Size', value: 'protein' },
      { text: 'Action', value: 'sodium' },
    ],
    items: []
  })
}
</script>