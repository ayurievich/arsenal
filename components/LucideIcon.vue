<template>
  <component
    :is="iconComponent"
    :size="size"
    color="#0b3d5c"
    :stroke-width="2"
  />
</template>

<script setup lang="ts">
import {
  Building2,
  LayoutGrid,
  Home,
  Building,
  Factory,
  DoorOpen,
  Ruler,
  Shield,
  VolumeX,
  Palette,
  Volume2,
  ShieldCheck,
  Sun,
  Phone,
  Mail,
  MapPin,
} from "lucide-vue-next";

const props = withDefaults(
  defineProps<{
    name: string;
    size?: number;
  }>(),
  { size: 24 }
);

const iconMap: Record<string, any> = {
  Building2,
  LayoutGrid,
  Home,
  Building,
  Factory,
  DoorOpen,
  Ruler,
  Shield,
  VolumeX,
  Palette,
  Volume2,
  ShieldCheck,
  Sun,
  Phone,
  Mail,
  MapPin,
};

const iconComponent = computed(() => iconMap[props.name] || null);
</script>
