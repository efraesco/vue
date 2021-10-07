let contador = 0;
setInterval(() => {
    const spanNumero = document.getElementById("numero");
    spanNumero.innerHTML = contador++;
}, 1000);


const Counter = {
    data() {
        return {
            counter: 0,
            message: "Contador Vue"
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    }
}

Vue.createApp(Counter).mount("#contadorvue");