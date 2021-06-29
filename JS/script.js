Vue.config.devtools = true;

// new Vue({
//     el: '#app',
//     data: {
//         onnList:[
//             'valigia grande di 23kg',
//             `vestiti d'inverno`,
//             'asciugamani',
//             'trucchi',
//             'shampoo'
//         ],
//         newtask: '',
//     },
   
   

// })

let parameters = []
function removeElement(event, position) {
    event.target.parentElement.remove()
    delete parameters[position]
}

const addJsonElement = list2 => {
    parameters.push(list2)
    return parameters.length - 1
}

(function load(){
    const $form = document.getElementById("frmUsers")
    const $divElements = document.getElementById("divElements")
    const $btnAdd = document.getElementById("btnAdd")

    const templateElement = (data, position) => {
        return (`
            <button class="button-2" class="delete" onclick="removeElement(event, ${position})">x</button>
            <strong> </strong> ${data}
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        if($form.name.value != "" &&  $form.name.value!= ""){
            let index = addJsonElement({
                name: $form.name.value,   
            })
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-link", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.name.value}`, index)

            $divElements.insertBefore($div, $divElements.firstChild)

            $form.reset()
        }
    })

   
})()