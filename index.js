let velocidade = 80 
while(velocidade>0){
    alert(` o carro está a  ${velocidade} km por hr` )
    velocidade-=20
    alert(`diminuindo 20km`)
    if(velocidade==20){
        alert(`o carro está quase parando`)
    }
}
alert(` o carro parou `)