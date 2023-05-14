import React, {useState} from 'react';

// @ts-ignore
function ComboBox() {
    return (
        <>
            <h1> 내가 좋아하는 패스트푸드 </h1>
            <select id="selectBox">
                <option value=""> -- 선택 --</option>
                <option value={images['피자']}> 피자</option>
                <option value={images['햄버거']}> 햄버거</option>
                <option value={images['치킨']}> 치킨</option>
                <option value={images['핫도그']}> 핫도그</option>
                <option value={images['감자튀김']}> 감자튀김</option>
            </select>
        </>
    );
}

// @ts-ignore
function ImageTable() {
    const [tableImage, settableImage] = useState(null);

    setTimeout(()=> {
        const selectBox = document.querySelector("#selectBox")

        if(selectBox) {
            // @ts-ignore
            selectBox.addEventListener("change", (e) => settableImage(e.target.value))
        }
    }, 0)

    if(!tableImage) return <></>;

    return (
        <table>
            <thead>
            <tr>
                <th>이미지</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <img src={tableImage}  alt={tableImage}/>
                </td>
            </tr>
            </tbody>
        </table>
    );
}


function App() {
    return (
        <div>
            <ComboBox />
            <ImageTable />
        </div>
    );
}

export default App;