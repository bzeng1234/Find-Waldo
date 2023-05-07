import React, { useEffect, useState } from "react";
import '../Styles/main.css'
import Mark from "./Mark";
import { useContext } from "react";
import { firebase } from "../index";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


function Main() {
    const [isClicked, setisClicked] = useState(false);
    const [markX, setmarkX] = useState(0);
    const [markY, setmarkY] = useState(0);
    const [img, setImg] = useState('');

    const app = useContext(firebase);
    const storage = getStorage(app);

    useEffect(() => {
        const imageRef = ref(storage, 'gs://find-waldo-50d73.appspot.com/find-waldo-img-one.png');
        getDownloadURL(imageRef).then((url) => {
            setImg(url.toString());
        });
    },[]);
    

    function leaveMark(event) {
        setisClicked((prevState) => !prevState);
        setmarkX(event.pageX);
        setmarkY(event.pageY);
    }

    return (
        <div style={{ backgroundImage: `url(${img})` }} className="main-container" onClick={leaveMark}>
            {isClicked ? <Mark top={markY} left={markX}/> : null};
        </div>
    );
};

export default Main;