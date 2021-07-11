Vue.config.devtools = true;

new Vue({
    el: '#app',
    data: {
        oneList:[
            "preparare la valigia",
            "prendere il biglietto aereo",
            "sistemare i documenti",
            "prenotare un taxi",
            "andare in aeroporto",
            "cercare di non perdere l'aereo"
        ],
        addNewTask: ''
    },
    mounted(){
        this.autofocus();
    },
    methods: {
         autofocus: function () {
            const task = document.getElementById('list');
            task.focus();
         },
        addNewtask: function(){
          this.oneList.push(this.addNewTask);
          this.addNewTask='';
          this.autofocus();            
        },
        deletetask:function(index) {
          this.oneList.splice(index,1);
          this.autofocus();
        }    
    } 
 }
);


