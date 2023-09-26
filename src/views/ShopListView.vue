<template>

    <div class="listStyle">
        <h1>Shopping List</h1>
        <p>An example of a shopping list, with options to delete<br>items and mark them as complete.</p>
        <br>
        <input type="text" v-model="item">
        <button @click ="addItem">Add Item</button>
        <ol>
            <li v-for="i in list">
                <input type="checkbox" v-model="i.status">
                <span :class="{complete: i.status}">{{ i.item }}</span>
                <button @click="removeItem(i)">X</button>
            </li>
            <h3 v-if="list.length < 1">No Items</h3>
        </ol>
    </div>
    
</template>

<script setup>
import {ref} from "vue"

const itemID = ref(0)
const item = ref("")
const list = ref([])
const checked = ref(false)

function addItem() {
    list.value.push({
        id: itemID.value++,
        item: item.value,
        status: checked.value
    })

    item.value = ""
}
function removeItem(i) {
    list.value = list.value.filter((t) => t !== i)
}
</script>

<style scoped>
.complete {
    text-decoration: line-through;
}

.listStyle {
    text-align: center;
}
</style>