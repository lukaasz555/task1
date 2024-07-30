<template>
  <div class="border-[1px] border-tw-border-gray rounded-tw-lg p-6">
    <h4 class="form-title mb-6">Enter details</h4>
    <v-row tag="form">
      <v-col cols="12" md="6">
        <Input v-model="formData.firstName" placeholder="First name" />
      </v-col>
      <v-col cols="12" md="6">
        <Input v-model="formData.lastName" placeholder="Last name" />
      </v-col>
      <v-col cols="12">
        <Input v-model="formData.street" placeholder="Street" />
      </v-col>
      <v-col cols="12" md="6">
        <Input v-model="formData.postalCode" placeholder="Postal code" />
      </v-col>
      <v-col cols="12" md="6">
        <Input v-model="formData.city" placeholder="City" />
      </v-col>
      <v-col cols="12">
        <Input v-model="formData.phoneNumber" placeholder="Phone number" />
      </v-col>
      <v-col cols="12">
        <Input v-model="formData.email" placeholder="E-mail" />
      </v-col>
      <v-col cols="12">
        <Button text="Proceed to payment" />
      </v-col>
      <v-col cols="12">
        <div class="flex justify-center gap-4">
          <v-img
            v-for="(img, index) in securityImages"
            :key="index"
            :src="img"
            alt=""
            :max-height="40"
            :max-width="90"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
import pic1 from "@/assets/security/1.png";
import pic2 from "@/assets/security/2.png";
import pic3 from "@/assets/security/3.png";

const formData = reactive({
  firstName: "",
  lastName: "",
  street: "",
  postalCode: "",
  city: "",
  phoneNumber: "",
  email: "",
});

const securityImages = [pic1, pic2, pic3];
</script>
