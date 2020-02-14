new Vue({
 el: '',
 props:[],
 data: {},
 methods: {},
 mounted{},
});

-What do you know about Vue ?
Vue adalah library javascript yang digunakan untuk membuat user interface website dengan metode data binding.

-How to define data in Vue ?
data{
  var: 'val'
}

-In Vue What lifecycle you can run after instance created ?
@vue
mounted()

-How to bind vue property to page ?
@html
<div>{{ var }}</div>
@vue -> data
var: 'val'

-How to trigger an event and handling it in Vue ?
@html
<div @click="start()"></div>
@vue -> methods
start(){}

-What usage of Computed Properties ?
Untuk melakukan proses tanpa harus ada trigger event atau action khusus lainnya

-What usage of Watch Properties ?
Biasa saya gunakan untuk suatu event yang melakukan perubahan/update secara terus menerus seperti timer, atau onkeypress dan semacamnya

-How to handling input in Vue ?
v-model dan $refs


-How to make class html tag receive property ?
@html
<div :class="var"></div>
@vue -> data
var: 'val'

-How to make conditional rendering in vue ?
@html
<div v-if="lorem">Lorem</div>
<div v-else>Not Lorem</div>
@vue -> data
lorem: true

-How we can render list in vue ?
@html
<div v-for="user in users">{{ user.name }}</div>
@vue -> data
users: [
 {name: 'ani'},
 {name: 'banu'},
 {name: 'cinda'}
]

-If we rendering list there must be bind key tag describe usage of it ?
Sebagai penanda atau id dari list tersebut, atau bisa digunakan untuk membuat conditional berdasarkan array.

-How we can handling input in vue ?
kok soalnya sama?

-What is props describe it ?
Props berfungsi sebagai tempat menyimpan/mendapatkan value yang ter-inisialisasi di dalam template/html

-What is component in vue ?
Component berfungsi untuk membuat module terpisah agar rapi dan terstruktur dan bisa dipakai dimana saja.

-How to pass property from parent component to child component ?
just import it man

-What is Vuex ?
Vuex adalah state management dalam vue, contoh yang sekarang saya gunakan. Ada satu API yang harus saya gunakan dalam 3 komponen, jadi saya membuat vuex agar setiap komponen tidak perlu membuat methods sendiri2.