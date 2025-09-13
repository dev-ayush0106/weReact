import "./First.css"

export default function First() {
    // Here we will write whole JS
    let name="Ayush"
    let city="Gurgaon"

    let obj={
        lang1:"Hindi",
        lang2:"English",
        lang3:"French"
    }

    let qualities=["Brave","Punctual"]

    let style={
        color:"blue"
    }
    return (
        // here we will write all HTML
        <>
            {/* <h1>This is First Class</h1>
            <h1>Welcome to the Class</h1> */}

            <h1 style={style}>My name is {name} currently stays in {city}</h1>
            <h1>He knows three languages : {obj.lang1},{obj.lang2},{obj.lang3}</h1>
            <h1>He have qualties:
                {
                    qualities.map((el)=>(
                        <span>{el},</span>
                    ))
                }
                </h1>

        </>
    )
}

export function First1(){
    return(
        <>
            <h2>This is additional function</h2>
        </>
    )
}

