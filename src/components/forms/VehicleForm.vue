<script setup>
import { useGlobalStore } from "@/stores/global";
import { useVehicleStore } from "@/stores/vehicles";
import { onMounted, ref } from "vue";

const globalStore = useGlobalStore();
const vehicleStore = useVehicleStore();

const file = ref(null);
const image = ref(null);
const vehicle = ref({
  ano: null,
  preco: null,
  modelo: null,
  cor: null,
  acessorios: [],
  imagem: null,
});

function onFileChange(e) {
  file.value = e.target.files[0];
}

async function addVehicle() {
  try {
    const image = await vehicleStore.uploadImageVehicle(file.value);
    vehicle.imagem = image.id;
    await vehicleStore.addVehicle(vehicle.value);

    vehicle.value = {
      ano: null,
      preco: null,
      modelo: null,
      cor: null,
      acessorios: [],
      imagem: null,
    };
    file.value = null;
    image.value = null;
  } catch (error) {
    console.error(error);
  }
}

onMounted(async () => {
  await globalStore.getGlobal("modelos");
  await globalStore.getGlobal("cores");
  await globalStore.getGlobal("acessorios");
});
</script>

<template>
  <v-container
    class="d-flex flex-column align-center justify-center pa-10 ga-4 w-75 mx-auto"
  >
    <v-row class="w-50">
      <v-col md="4">
        <v-text-field
          variant="solo-filled"
          placeholder="Ano"
          hide-details=""
          v-model="vehicle.ano"
        >
        </v-text-field>
      </v-col>
      <v-col md="4">
        <v-text-field
          variant="solo-filled"
          placeholder="Preco"
          hide-details=""
          prefix="R$"
          v-model="vehicle.preco"
        >
        </v-text-field>
      </v-col>

      <v-col md="4">
        <v-autocomplete
          variant="solo-filled"
          placeholder="Modelo"
          hide-details=""
          :items="globalStore.models"
          item-title="nome"
          item-value="id"
          v-model="vehicle.modelo"
        >
        </v-autocomplete>
      </v-col>
    </v-row>

    <v-row class="w-50">
      <v-col md="4">
        <v-autocomplete
          variant="solo-filled"
          placeholder="Cor"
          hide-details=""
          :items="globalStore.colors"
          item-title="nome"
          item-value="id"
          v-model="vehicle.cor"
        >
        </v-autocomplete>
      </v-col>

      <v-col md="4">
        <v-file-input
          variant="solo-filled"
          accept="image/*"
          label="Imagem"
          hide-details=""
          prepend-icon=""
          v-model="image"
          @change="onFileChange"
        ></v-file-input>
      </v-col>
      <v-col md="4">
        <v-autocomplete
          variant="solo-filled"
          placeholder="Acessorios"
          hide-details=""
          :items="globalStore.accessories"
          item-title="descricao"
          item-value="id"
          multiple
          chips=""
          v-model="vehicle.acessorios"
        >
        </v-autocomplete>
      </v-col>
    </v-row>

    <v-row>
      <v-btn @click="addVehicle"> Adicionar Veiculo </v-btn>
    </v-row>
  </v-container>
</template>
