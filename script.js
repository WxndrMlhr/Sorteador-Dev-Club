function generateNumber() {


    var min = Math.ceil(document.querySelector(".input-min").value)

    var max = Math.floor(document.querySelector(".input-max").value)




    if (max > min) {

        var result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result)
    }
    else {

        alert("O valor minimo tem que ser Menor que o valor maximo")



    }




    console.log(min, max);




}