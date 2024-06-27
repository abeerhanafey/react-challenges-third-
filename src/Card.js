export default function Card() {
    return (
        <div style={{width: "16%", border: "5px solid #fff", borderRadius: "20px", textAlign: "center", padding: "20px", marginBottom: "70px"}}>
            <img src="./logo512.png" alt="reactLogo" width={"80%"} />
            <div>
                <p style={{fontSize: "25px"}}>welcome to react</p>
                <button style={{padding: '5px 10px', color: "blue", backgroundColor: "#fff" , borderRadius: "10px", fontSize: "25px"}}>click</button>
            </div>
        </div>
    )
}