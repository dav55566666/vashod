import React, { useRef, useState, uploadFile } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
import SwiperCore, {
    Pagination
} from 'swiper';
SwiperCore.use([Pagination]);
var swiperarray = [];
import Addcrashmodal from "../crashmodal"
import axios from "axios";
import api from '../../uikit/api'
import Back from "../../uikit/back"

class Addcrash extends React.Component {
    state = {
        posts: []
    }
    
    componentDidMount() {
    axios.get(api.addcrashapi)
        .then(res => {
        const posts = res.data.car;
        this.setState({posts});
        });
    }
    render(){
        let swipers = 0;
        function openmodal(){
            document.querySelector(".addcrashmodal").style.display = "flex"
        }
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
        function sendform(){
            let car=[];
            var crasharray = document.querySelectorAll(".crash");
            for(var i = 0; i < crasharray.length; i++){
                let crashn={
                    crashname: ""+crasharray[i].value+"",
                    crashinfo: ""+crasharray[i].getAttribute("data-name")+"",
                    img:[crasharray[i].getAttribute("data-src")]
                }
                car.push(crashn)
                console.log(car.i.crashname)
            }
            
            var addcrashed = car.map((post, index) =>
                <div key={index} className='summary_item_info info_crashed'>
                    <div className='info_crashed_title'>
                    <p>{post.crashn.crashname}</p>
                    <span>{post.crashn.crashinfo}</span>
                    </div>
                    <div className='info_crashed_img' data-src={post.crashn.img}>
                    </div>
                </div>
            )
            document.getElementById("summarycrash").innerHTML = addcrashed
            var imgarray = []
            let crasharrayimg = document.querySelectorAll(".info_crashed_img")
            var helper = 0;
            for(var g = 0; g < crasharrayimg.length; g++){
                var arraymy = crasharrayimg[g].getAttribute("data-src");
                var arraymy2 = [];
                arraymy2 = arraymy.split(",")
                for(var i = 0; i < arraymy2.length; i++){
                    helper++
                    imgarray.push("<img src='"+arraymy2[i]+"' />")
                    crasharrayimg[g].innerHTML = imgarray
                    if(helper>=arraymy2.length){
                        helper=0;
                        imgarray = []
                    }
                }
            }
        }
        function editcrash(e){
            var crashname = e.target.parentElement.parentElement.textContent;
            var crashinfo = e.target.parentElement.parentElement.nextSibling.children[0].textContent;
            var crashimg = e.target.parentElement.parentElement.nextSibling.nextSibling.children
            var crashimgarray = []
            var crashimgarrayappend = []
            for(var i = 0; i < crashimg.length; i++){
                crashimgarray.push(crashimg[i].attributes.src.nodeValue)
            }
            for(var g = 0; g < crashimgarray.length; g++){
                crashimgarrayappend.push("<div class='swiper-slide'><img src="+crashimgarray[g]+" /></div>")
                document.querySelector(".imgswiper .swiper-wrapper").innerHTML = crashimgarrayappend;
            }
            document.getElementById("name").value = crashname;
            document.getElementById("name").setAttribute("data-id",e.target.parentElement.getAttribute("data-id"));
            document.getElementById("opis").value = crashinfo;
            document.querySelector(".addcrashmodal").style.display = "flex"
        }
        return (
            <div className="addcrashpage">
                <Back href={"/carview"} />
                <div className="addcrash">
                    <Addcrashmodal />
                    <div className='addcrash_left'>
                        <div className='addcrash_left_box'>
                            <div className='crashdetal'>
                                {this.state.posts.map((post, index) =>
                                    <button key={index} id={post.carash.id+index} className={""+post.carash.class+" crashedbtn"} value={post.carash.crashname} data-src={post.carash.img} data-name={post.carash.crashinfo} onClick={(e) => setcrash (e)}>{post.carash.crashname}</button>
                                )}
                            </div>
                            <button className='addnewcrashdetal' onClick={openmodal}>
                                Другое
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="18" height="18" rx="4" fill="#F5C257"/>
                                    <path d="M9 4V14" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M14 9L4 9" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='addcrash_right'>
                        <form action="/carspecifik">
                            <div className='addcrash_right_box'>
                                <div className='addcrash_right_title'>
                                    <h4 id="crashname">Левое крыло</h4>
                                    <div className='addcrash_right_title_btn'>
                                        <button type="button" onClick={(e) => editcrash (e)}>
                                        </button>
                                        <button>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5625 2.5H13.125V1.875C13.125 0.839453 12.2855 0 11.25 0H8.75C7.71445 0 6.875 0.839453 6.875 1.875V2.5H3.4375C2.57457 2.5 1.875 3.19957 1.875 4.0625V5.3125C1.875 5.6577 2.1548 5.9375 2.5 5.9375H17.5C17.8452 5.9375 18.125 5.6577 18.125 5.3125V4.0625C18.125 3.19957 17.4254 2.5 16.5625 2.5ZM8.125 1.875C8.125 1.53047 8.40547 1.25 8.75 1.25H11.25C11.5945 1.25 11.875 1.53047 11.875 1.875V2.5H8.125V1.875Z" fill="#2B334F"/>
                                                <path d="M3.06164 7.1875C2.95011 7.1875 2.86125 7.2807 2.86656 7.39211L3.38218 18.2141C3.42984 19.2156 4.2525 20 5.25484 20H14.7462C15.7486 20 16.5712 19.2156 16.6189 18.2141L17.1345 7.39211C17.1398 7.2807 17.051 7.1875 16.9394 7.1875H3.06164ZM12.5005 8.75C12.5005 8.40469 12.7802 8.125 13.1255 8.125C13.4709 8.125 13.7505 8.40469 13.7505 8.75V16.875C13.7505 17.2203 13.4709 17.5 13.1255 17.5C12.7802 17.5 12.5005 17.2203 12.5005 16.875V8.75ZM9.37554 8.75C9.37554 8.40469 9.65523 8.125 10.0005 8.125C10.3459 8.125 10.6255 8.40469 10.6255 8.75V16.875C10.6255 17.2203 10.3459 17.5 10.0005 17.5C9.65523 17.5 9.37554 17.2203 9.37554 16.875V8.75ZM6.25054 8.75C6.25054 8.40469 6.53023 8.125 6.87554 8.125C7.22086 8.125 7.50054 8.40469 7.50054 8.75V16.875C7.50054 17.2203 7.22086 17.5 6.87554 17.5C6.53023 17.5 6.25054 17.2203 6.25054 16.875V8.75Z" fill="#2B334F"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='crashedinfo'>
                                    <p id="crashinfo">Описание повреждения</p>
                                </div>
                                <div className='crashedimg'>
                                    
                                </div>
                            </div>
                            <input onClick={sendform} type="button" className='savebtn' value="Сохранить" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Addcrash;
