var num1 = document.getElementById("txt-num1");
        var num2 = document.getElementById("txt-num2");
        function sum() {
            // var num1=document.getElementById("txt-num1").value;
            // var num2=document.getElementById("txt-num2").value;
            var total = parseFloat(num1.value) + parseFloat(num2.value);
            document.getElementById("txt-total").value = total;
        }

        function minu() {
            // var num1 = document.getElementById("txt-num1").value;
            // var num2 = document.getElementById("txt-num2").value;
            var total = parseFloat(num1.value) - parseFloat(num2.value);
            document.getElementById("txt-total").value = total;
        }

        function prod() {
            // var num1 = document.getElementById("txt-num1").value;
            // var num2 = document.getElementById("txt-num2").value;
            var total = parseFloat(num1.value) * parseFloat(num2.value);
            document.getElementById("txt-total").value = total;
        }

        function div() {
            // var num1 = document.getElementById("txt-num1").value;
            // var num2 = document.getElementById("txt-num2").value;
            var total = parseFloat(num1.value) / parseFloat(num2.value);
            document.getElementById("txt-total").value = total;
        }