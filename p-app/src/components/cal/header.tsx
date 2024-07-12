import "@/app/cal/calculator.css"

export default function Header(){
    return(<>
    <header id="header" className="flex justify-center flex-col items-center" >
        <img src="images/계산기로고.png" alt="계산기로고" />
        <h1>React Investment Calculator</h1>
    </header>
    </>)
}