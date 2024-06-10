<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Ticket Support',
        items: [
            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-id-card',
                to: '/'
            },
            {
                label: 'Ticket Request',
                icon: 'pi pi-fw pi-id-card',
                to: '/'
            },
            {
                label: 'Ticket Monitor',
                icon: 'pi pi-fw pi-id-card',
                to: '/'
            },
            {
                label: 'Reports',
                icon: 'pi pi-fw pi-id-card',
                items: [
                    {
                        label: 'Ticket Report',
                        icon: 'pi pi-fw pi-id-card',
                        to: '/'
                    },
                    {
                        label: 'Rating Report',
                        icon: 'pi pi-fw pi-id-card',
                        to: '/'
                    }
                ]
            },
            {
                label: 'Maintenance',
                icon: 'pi pi-fw pi-id-card',
                items: [
                    {
                        label: 'Agents',
                        icon: 'pi pi-fw pi-id-card',
                        to: '/'
                    },
                    {
                        label: 'Group',
                        icon: 'pi pi-fw pi-id-card',
                        to: '/'
                    },
                    {
                        label: 'Tags',
                        icon: 'pi pi-fw pi-id-card',
                        to: '/'
                    },
                    {
                        label: 'Type',
                        icon: 'pi pi-fw pi-id-card',
                        to: '/'
                    }
                ]
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
