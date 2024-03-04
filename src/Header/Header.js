import imageTwo from './../images/imageTwo.png';
import imageThree from './../images/imageThree.png';


// const layerOneStyle={
//     marginLeft: "80%",
// }
// const layerTwoStyle={
    
//     marginTop: "10%",
//     textAlign:"center",   
// }

const Header = () => {
    return (
        <div style={{width: "100%", height: "30%", color: "#00000"}}>
            <div id="layerOne" ><img src={imageThree} alt="logo3"/></div>

             <div id="layerTwo" ><img src={imageTwo} alt="logo2"/></div>

        </div>

    )
}

export default Header;