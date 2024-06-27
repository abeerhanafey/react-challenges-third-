const navList = [
    { key: "1", value : "Home"},
    { key: "2", value : "About"},
    { key: "3", value : "Services"},
    { key: "4", value: "Contact Us" }
]
var list = navList.map((ele) => {
    return (
        <li style = {{color: "#fff", listStyle: "none", fontSize: "20px", fontWeight: "bold", borderBottom: "3px solid #fff"}} key = {ele.key}>{ele.value}</li>
    )
})
export default function Nav() {
    return (
        <ul style={{display: "flex", justifyContent: "space-between", width: "40%"}}>
            {list}
        </ul>
    )
}