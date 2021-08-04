import React, { useEffect, useState ,useRef} from 'react'
import '../css/home.css'
import TableInfo from './TableInfo'
import Table from './Table'

import fs from 'fs'


function Home() {
    const [barlength, setBarLength] = useState(0.5);
    const [gravitation, setGravitation] = useState(9.81)
    const [rotateangel, setRotateAngel] = useState(305);
    const [period, setPeriod]=useState(0)
    var [labx, setLabX]=useState([0])
    var [laby, setLabY]=useState([0])
   

   
   
    //transform: 'rotate(305deg)',
    const refBall =useRef(null)

   var trag_lis=[]

   useEffect(() => {

    let frequenz=1/period
    let position=[]
    let time=[]
    let starter=0
    let step=0.1

    while(starter<period){
        time= time.concat(Math.ceil(starter))
        let costheta=Math.cos(Math.PI*frequenz*2*starter)
        position=position.concat(costheta)
        starter+=step
	}
    setLabY(position)
    setLabX(time)


       
       return () => {
        
       }
   }, [period])


    useEffect(() => {
        
        let p=2*Math.PI*Math.sqrt(barlength/gravitation)
            setPeriod(p)
        
        return () => {
            
        }
    }, [gravitation,barlength])

  

    const ruf = (labx, laby)=>{
       
        return (<Table labx={labx} laby={laby}/>)
    }
 
    return (
        <div className='home'>
            <div className='home-left'>
                <div className="home-left-bar-helper"></div>
                <div className="home-left-bar" className={'animm'} style={{ ...styles.home_left_bar,transform: `rotate(${rotateangel}deg)`, height: `${barlength * 300}px`, animationDuration:'infinite', MozAnimationTimingFunction:'linear', animationDuration:`${period}s`}}>
                    <div className="home-left-bar-ball" ref={refBall}></div>
                

                </div>

            </div>
            <div className='home-right'>
                <TableInfo setLabX={setLabX}setLabY={setLabY} period={period} setPeriod={setPeriod} barlength={barlength} setBarLength={setBarLength} gravitation={gravitation} setGravitation={setGravitation} rotateangel={rotateangel} setRotateAngel={setRotateAngel} />

            </div>
            <div className='home-end'>
            { ruf(labx, laby)}
                
            </div>
        </div>
    )
}



const styles = {


        home_left_bar: {
        position: 'relative',
        height: '300px',
        top: '25px',
        width: '3px',
        backgroundColor: '#ff0000',
        left: '50%',
        
        transformOrigin: 'top',
       

    }


}



export default Home
