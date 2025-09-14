import { useState } from "react"
import "./Second.css"
import { FaMoon, FaSun } from "react-icons/fa"
export default function Second(){
    // let name="Ayush"
    // let age=19

    let [count,setCount]=useState(0)
    console.log(count)

    function IncCount(){
        setCount(count+1)
    }

    function DecCount(){
        setCount(count-1)
    }

    function reset(){
        setCount(0)
    }

    let [status,setStatus]=useState(false)

    function ShowHide(){
        setStatus(!status)
    }

    console.log(status)
    let [colorStatus,setColorStatus]=useState(false)

    function changeColor(){
        setColorStatus(!colorStatus)
    }

    let [theme,setTheme]=useState(false)
    function updateTheme(){
        setTheme(!theme)
    }
    return(
        <>
            {/* {name} */}
            {/* ternary operator // conditional formatting
            (condition) ? statement(if condition is true):Statement(if condition is false)
            */}

            {/* {
                (age>18)?<h1>Eligible</h1> : <h1>Not eligible</h1>
            } */}

            {/* What is hook ?  */}
            {/* useState() : States manage  
                let [state,setState]=useState(0)
            */}

            {/* <button onClick={IncCount} disabled={count==10}>+</button>
            {count}
            <button onClick={DecCount} disabled={count==0}>-</button>
            <button onClick={reset} disabled={count==0}>Reset</button> */}

            {/* <button onClick={ShowHide}>{(status)?"Hide":"Show"} Content</button>
            {
            status &&
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi veritatis reprehenderit nisi tempora saepe deleniti eaque repellat maiores laborum veniam vel molestiae dolor omnis esse, optio necessitatibus, aliquam temporibus harum error odio dignissimos. Quasi quam quae voluptatum quidem iste perferendis, impedit laudantium natus mollitia optio corporis nam asperiores dolore iure voluptates repellat quia neque magni odio necessitatibus. Quas ipsum, accusantium obcaecati modi enim aperiam illo, iure ratione aspernatur, adipisci voluptatum rem consequuntur ipsam. Saepe itaque voluptatibus quod ullam laudantium harum blanditiis vel necessitatibus nobis delectus nulla incidunt soluta sed voluptas, iste ea aperiam fugit voluptates, minus distinctio porro ipsam.</p>
            } */}
{/* 
            <button onClick={changeColor}>Toggle</button>
            <h1 className={(colorStatus)?"change":""}>Hii My name is Ayush</h1> */}

            {/* sun & moon */}
            {
            (theme)?
            <FaSun onClick={updateTheme} style={{fontSize:"5rem"}}/>:
            <FaMoon onClick={updateTheme} style={{fontSize:"5rem"}}/>
            }
        </>
    )
}