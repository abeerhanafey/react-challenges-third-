import Card from "./Card"
export default function Banner() {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}