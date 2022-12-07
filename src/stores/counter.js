import {
  ref,// ref es una función que sirve para crear una referencia reactiva que es un objeto que contiene un valor mutable
  computed // computed es una función que sirve para crear una referencia reactiva que es un objeto que contiene un valor mutable
} from 'vue'
import {
  defineStore // defineStore es una función que sirve para crear un store que es un objeto que contiene el estado de la aplicación
} from 'pinia'

export const useCounterStore = defineStore(
  'counter',// nombre del store que es un objeto que contiene el estado de la aplicación
  () => {// función que sirve para crear un store que es un objeto que contiene el estado de la aplicación
    const count = ref(0)// crea una referencia reactiva que es un objeto que contiene un valor mutable
    const doubleCount = computed(// crea una referencia reactiva que es un objeto que contiene un valor mutable
      () =>// función que sirve para crear una referencia reactiva que es un objeto que contiene un valor mutable
        count.value * 2// devuelve el valor de la referencia reactiva que es un objeto que contiene un valor mutable
    )
    function increment() {// función que sirve para incrementar el valor de la referencia reactiva que es un objeto que contiene un valor mutable
      count.value++// incrementa el valor de la referencia reactiva que es un objeto que contiene un valor mutable
    }
    return {
      count,// devuelve la referencia reactiva que es un objeto que contiene un valor mutable
      doubleCount,// devuelve la referencia reactiva que es un objeto que contiene un valor mutable
      increment// devuelve la función que sirve para incrementar el valor de la referencia reactiva que es un objeto que contiene un valor mutable
    }
)
