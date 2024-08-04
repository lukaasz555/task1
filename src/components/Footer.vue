<template>
  <footer class="bg-tw-bg-gray px-4 py-6 flex column md:row-auto gap-xl">
    <FooterSection
      v-for="section in footerSections"
      :title="section.title"
      :content="section.content"
      :key="`section-${section.id}`"
    />
  </footer>
  <slot name="append">
    <div class="mt-4">
      <p class="font-tw-400 text-tw-xs text-center mb-1">
        We accept the following credit cards
      </p>
      <div>
        <v-img :src="PaymentProviders" :max-height="40" eager></v-img>
      </div>
    </div>
  </slot>
</template>

<script setup lang="ts">
import FooterSection from "./FooterSection.vue";
import PaymentProviders from "@/assets/payments/payments_providers.png";

const footerSections = [
  {
    id: 1,
    title: "How can I win?",
    content: [
      `Thanks to your membership, you also participate in our contest to win the iPhone15. We sellect a winner among every 600 participants. The next winner will be selected on 06.10.2023, and will be notified directly by e-mail. If the reward is out of stock, the winner will receive a similar product of equal or greater value instead.`,
    ],
  },
  {
    id: 2,
    title: "No hidden fees?",
    content: [
      `We ensure that our members are provided with a detailed history of transactions so that they know exactly what they are paying for. Credit card information is only required to facilitate future purchases. There will be no charges on your credit card statement if you do not upgrade to PREMIUM membership and do not make a purchase.`,
    ],
  },
  {
    id: 3,
    title: "Why do we need your billing information?",
    content: [
      `By joining this service, you will receive a 5-day trial of our partner's program. If you continue with a subscription beyond the 5-day trial period, you will be charged an amount on your credit card which varies depending on the choice of the tariff. When your contribution is deducted from your credit card or other payment method, you will have access to these services which are reserved exclusively for members of our partner's website.`,
    ],
  },
];
</script>
