<!-- Much of this code was taken from w3schools -->

<template>
<div class="crudStyle">
    <h1>CRUD Example</h1>
    <p>"CRUD" stands for "create, replace, update, delete" - which<br>are the major operations that databases perform.</p>
    <br>
    <div><input v-model="prefix" placeholder="Filter prefix"></div>

    <br>

    <select size="5" v-model="selected">
        <option v-for="name in filteredNames" :key="name">{{ name }}</option>
    </select>

    <br>

    <label>Name: <input v-model="first"></label>
    <br>
    <label>Surname: <input v-model="last"></label>

    <div class="buttons">
        <button @click="create">Create</button>
        <button @click="update">Update</button>
        <button @click="del">Delete</button>
    </div>
</div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

const names = reactive([])
const selected = ref('')
const prefix = ref('')
const first = ref('')
const last = ref('')

const filteredNames = computed(() =>
  names.filter((n) =>
    n.toLowerCase().startsWith(prefix.value.toLowerCase())
  )
)

watch(selected, (name) => {
  ;[last.value, first.value] = name.split(', ')
})

function create() {
  if (hasValidInput()) {
    const fullName = `${last.value}, ${first.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      first.value = last.value = ''
    }
  }
}

function update() {
  if (hasValidInput() && selected.value) {
    const i = names.indexOf(selected.value)
    names[i] = selected.value = `${last.value}, ${first.value}`
  }
}

function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value)
    names.splice(i, 1)
    selected.value = first.value = last.value = ''
  }
}

function hasValidInput() {
  return first.value.trim() && last.value.trim()
}
</script>

<style>
select {
  margin: 0 1em 1em 0;
  width: 14em;
}

.buttons {
  clear: both;
}

button + button {
  margin-left: 5px;
}

.crudStyle {
    text-align: center;
}
</style>