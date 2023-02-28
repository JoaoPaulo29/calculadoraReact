import { useState } from 'react'
import './style.css'

export default function Calculator() {
  const [num,setNum] =useState(0);
  const [resultado,setResultado] = useState(num);
  const [operador,setOperador] = useState(0);
  const [igualdade,setIgualdade] = useState(0);
  function inputValue(e){
    if(num==0){
      setNum(e.target.value);
    }else{
      setNum(num + e.target.value);
    }
  }
  function lerOperador(e){
    if(num=="0"){
      setOperador(e.target.value);
      setNum(operador);
      console.log(num)
    }else{
      setOperador(e.target.value);
      setResultado(num);
      setNum(0);
    }
    
  }
  function maisOumenos(){
    if(num>0){
      setResultado(-num)
    }else{
      setResultado(num)
    }
  }

  function percentagem(e){
    setResultado(num/100)
  }
  function limpatela(){
    setNum(0);
    setResultado(0);
    setIgualdade(0);
  }
  function limpatelaCE(){
    setNum(0);
  }
  function resultadoDaOperacao(){
    if(operador==="+"){
      setResultado(Math.abs(num) +Math.abs(resultado))
    }
    if(operador==="-"){
      console.log(Math.abs(resultado));
      setResultado(Math.abs(resultado) - Math.abs(num))
    }
    if(operador==="*"){
      setResultado(Math.abs(resultado)*Math.abs(num))
    }
    if(operador==="/"){
      if(Math.abs(num)==0){
        setResultado("Error")
      }else{
        setResultado(Math.abs(resultado)/Math.abs(num));
      }
    }
    setNum(0);
    setOperador("");
  }
  function mostrarResultado(){
    resultadoDaOperacao();
    setIgualdade(resultado);
  }
  return (
    <section className='container'>
      <div id="calculator-section">
        <div className='IO-section'>
            <input type="text" id="operation" class="input__operation" placeholder="0" value={num}  disabled/>
            <p> =</p>
            <input type="text" id="resulted-operation" class="input__resulted" value={resultado} disabled/>
        </div>

      <div className='linhaButton'>
        <button className='botao' id="ce" onClick={limpatelaCE}> CE </button>
        <button className='botao' id="btn" onClick={limpatela}> C </button>
        <button className='botao' id="btn" onClick={percentagem}> % </button>
        <button className='botao' id="divisao"  onClick={lerOperador} value="/"> ÷ </button>
      </div>

      <div className='linhaButton'>
        <button className='botao' id="btn" onClick={inputValue} value={7}> 7 </button>
        <button className='botao' id="btn"onClick={inputValue} value={8}> 8 </button>
        <button className='botao' id="btn" onClick={inputValue} value={9}> 9 </button>
        <button className='botao' id="vezes"  onClick={lerOperador} value="*"> x </button>
      </div>

      <div className='linhaButton'>
        <button className='botao' id="btn" onClick={inputValue} value={4}> 4 </button>
        <button className='botao' id="btn" onClick={inputValue} value={5}> 5 </button>
        <button className='botao' id="btn" onClick={inputValue} value={6}> 6 </button>
        <button className='botao' id="menos"  onClick={lerOperador} value="-"> - </button>
      </div>

      <div className='linhaButton'>
        <button className='botao' id="btn" onClick={inputValue} value={1}> 1 </button>
        <button className='botao' id="btn" onClick={inputValue} value={2}> 2 </button>
        <button className='botao' id="btn" onClick={inputValue} value={3}> 3 </button>
        <button className='botao' id="mais" onClick={lerOperador} value="+"> + </button>
      </div>

      <div className='linhaButton'>
        <button className='botao' id="btn" onClick={maisOumenos} > +/- </button>
        <button className='botao' id="btn" onClick={inputValue} value={0}> 0 </button>
        <button className='botao' id="btn" onClick={inputValue} value={"."}> , </button>
        <button className='botao' id="igual" onClick={resultadoDaOperacao}> = </button>
      </div>
      </div>
    </section>
  )
}

