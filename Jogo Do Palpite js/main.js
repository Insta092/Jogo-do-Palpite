var num = Math.floor(Math.random()*100+1);
        var tentas = 0;
        function myFunction(){
            tentas++;
            var valor = document.getElementById('digitado').value;
            if(num == valor){
                alert("Parabens, acertou em "+tentas+" Tentativas!")
            }
            else{
                if(num > valor){
                    alert('Tente um numero Maior')
                }
                if(num < valor){
                    alert('tente um numero menor')
                }
            }
            document.getElementById('digitado').value="";
            document.getElementById('digitado').focus();
        }