import React, { useRef, useState, uploadFile } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
import api from '../../uikit/api'
import SwiperCore, {
    Pagination
} from 'swiper';
SwiperCore.use([Pagination]);
var swiperarray = [];

function Addcrashmodal ({swipers }) {
    function clousmodal(){
        document.querySelector(".addcrashmodal").style.display = "none";
    }
    const [newFile, SetNewFile] = useState([]); 
    let setid = 0;
    const fileChange = (event) => {
        SetNewFile( event.target.files[0] );
        console.log(event.target.files[0])
        var slide='<div class="swiper-slide" data-swiper-slide-index='+setid+'><img src="'+api.img+''+ event.target.files[0].name +'"></div>'
        swiperarray.push(event.target.files[0].name)
        document.querySelector(".imgswiper .swiper-wrapper").insertAdjacentHTML('beforeend', slide);
        setid+=1;
     };
     function sendcrash(){
        let myid = document.getElementById("name").getAttribute("data-id")
        let allcrashimgsrc = [];
        console.log(myid)
        if(myid!=null){
            let allcrashimg = document.querySelectorAll(".imgswiper .swiper-wrapper .swiper-slide img");
            let thiscrash = document.getElementById(myid);
            thiscrash.value = document.getElementById("name").value;
            thiscrash.setAttribute("data-name", document.getElementById("opis").value)
            for(var i = 0; i < allcrashimg.length; i++){
                allcrashimgsrc.push(allcrashimg[i].attributes.src.nodeValue)
                thiscrash.setAttribute("data-src", allcrashimgsrc)
            }
        }else{
            let allcrashimg = document.querySelectorAll(".imgswiper .swiper-wrapper .swiper-slide img");
            console.log(allcrashimg)
            for(var g = 0; g < allcrashimg.length; g++){
                allcrashimgsrc.push(allcrashimg[g].attributes.src.nodeValue)
            }
            var setidarray = document.querySelectorAll(".crashedbtn")
            var setid = "crashname"+setidarray.length+1 +""
            let newcrash =" <button id="+setid+" class='crashedbtn crash' value="+document.getElementById("name").value+" data-src="+allcrashimgsrc+" data-name="+document.getElementById("opis").value+" onclick='setcrash(this)'>"+document.getElementById("name").value+"</button>"
            document.querySelector(".crashdetal").insertAdjacentHTML('beforeend', newcrash)
            function setcrash(e){
                var allimages = [];
                var rightblock = document.querySelector(".addcrash_right")
                var workarray = document.getElementsByClassName("crashedbtn")
                document.querySelector(".addcrash_right_title_btn").setAttribute("data-id",e.target.id)
                for(var i = 0; i < workarray.length; i++){
                    workarray[i].classList.remove("active")
                    e.target.classList.add("active");
                }

                var arraymy = e.target.getAttribute("data-src");
                var arraymy2 = [];
                arraymy2 = arraymy.split(",")
                var crashinfo = e.target.getAttribute("data-name")
                var crashname = e.target.value
                for(var g = 0; g < arraymy2.length; g++){
                    if(g>1){
                        allimages.push("<img src="+arraymy2[g]+" />")
                        document.querySelector(".crashedimg").innerHTML = allimages
                    }
                    else{
                        document.querySelector(".crashedimg").innerHTML = ""
                    }
                }
                document.querySelector(".addcrash_right").style.display = "block"
                document.getElementById("crashname").innerHTML = crashname
                document.getElementById("crashinfo").innerHTML = crashinfo
            }
        }
        document.querySelector(".addcrashmodal").style.display = "none"
    }
    return (
        <div className="addcrashmodal">
            <div className='addcrashmodal_cont'>
                <button onClick={clousmodal} className='clousmodal'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0C13.1042 0 10.4271 0.713542 7.96875 2.14062C5.51042 3.56771 3.56771 5.51042 2.14062 7.96875C0.713542 10.4271 0 13.1042 0 16C0 18.8958 0.713542 21.5729 2.14062 24.0312C3.56771 26.4896 5.51042 28.4323 7.96875 29.8594C10.4271 31.2865 13.1042 32 16 32C18.8958 32 21.5729 31.2865 24.0312 29.8594C26.4896 28.4323 28.4323 26.4896 29.8594 24.0312C31.2865 21.5729 32 18.8958 32 16C32 13.1042 31.2865 10.4271 29.8594 7.96875C28.4323 5.51042 26.4896 3.56771 24.0312 2.14062C21.5729 0.713542 18.8958 0 16 0ZM16 30.0312C14.4792 30.0312 13.0052 29.7969 11.5781 29.3281C10.151 28.8594 8.86458 28.1875 7.71875 27.3125C6.57292 26.4375 5.56771 25.4271 4.70312 24.2812C3.83854 23.1354 3.17188 21.849 2.70312 20.4219C2.23438 18.9948 2 17.5208 2 16C2 14.1042 2.36979 12.2917 3.10938 10.5625C3.84896 8.83333 4.84375 7.34375 6.09375 6.09375C7.34375 4.84375 8.83333 3.84896 10.5625 3.10938C12.2917 2.36979 14.1042 2 16 2C17.8958 2 19.7083 2.36979 21.4375 3.10938C23.1667 3.84896 24.6562 4.84375 25.9062 6.09375C27.1562 7.34375 28.151 8.83333 28.8906 10.5625C29.6302 12.2917 30 14.1042 30 16C30 17.8958 29.6302 19.7083 28.8906 21.4375C28.151 23.1667 27.1562 24.6615 25.9062 25.9219C24.6562 27.1823 23.1667 28.1823 21.4375 28.9219C19.7083 29.6615 17.8958 30.0312 16 30.0312ZM21.6562 10.3438C21.4688 10.1562 21.2344 10.0625 20.9531 10.0625C20.6719 10.0625 20.4375 10.1562 20.25 10.3438L16 14.5938L11.75 10.3438C11.5625 10.1562 11.3281 10.0625 11.0469 10.0625C10.7656 10.0625 10.5312 10.1562 10.3438 10.3438C10.1562 10.5312 10.0625 10.7656 10.0625 11.0469C10.0625 11.3281 10.1562 11.5625 10.3438 11.75L14.5938 16L10.3438 20.25C10.2188 20.375 10.1302 20.5208 10.0781 20.6875C10.026 20.8542 10.026 21.026 10.0781 21.2031C10.1302 21.3802 10.2188 21.5312 10.3438 21.6562C10.5312 21.8438 10.7656 21.9375 11.0469 21.9375C11.3281 21.9375 11.5625 21.8438 11.75 21.6562L16 17.4062L20.25 21.6562C20.4375 21.8438 20.6719 21.9375 20.9531 21.9375C21.2344 21.9375 21.4688 21.8438 21.6562 21.6562C21.7812 21.5312 21.8698 21.3802 21.9219 21.2031C21.974 21.026 21.974 20.8542 21.9219 20.6875C21.8698 20.5208 21.7812 20.375 21.6562 20.25L17.4062 16L21.6562 11.75C21.8438 11.5625 21.9375 11.3281 21.9375 11.0469C21.9375 10.7656 21.8438 10.5312 21.6562 10.3438Z" fill="white"/>
                    </svg>
                </button>
                <form>
                    <h4>???????????????? ?????????? ??????????????????????</h4>
                    <label className="textinp" > ?????????????? ???????????????? ???????????????????????? ????????????
                        <input type="text" id="name"/>
                    </label>
                    <label className="textinp"> ?????????????? ???????????????? ??????????????????????
                        <textarea id="opis"></textarea>
                    </label>
                    <div className='swiper'>
                        <label  id="pct">
                            <input type="file" onChange={fileChange} />
                            <img src="/img/addphoto.svg" />
                        </label>
                        <Swiper slidesPerView={"auto"} spaceBetween={34} pagination={{"clickable": true}} className="imgswiper">
                            {swipers}
                        </Swiper>
                    </div>
                    <label className="subinp">
                        <input type="button" value="??????????????????" onClick={sendcrash} />
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Addcrashmodal;
