import React, { Fragment } from 'react'
import '../css/tableinfo.css'
import {FaPlay} from 'react-icons/fa'
import {FiPause} from 'react-icons/fi'
import {GrTable} from 'react-icons/gr'
function TableInfo(props) {

    const PlayHandler=()=>{
        
        props.setBarLength(0.7)

    }

    const PauseHandler=()=>{
        props.setPeriod(0)
    }


    return (
        <Fragment>

            <div class="form-group">
                <label for="degree">Bar Length :{props.barlength} [m]</label>
                <input
                    type="range"
                    min={0}
                    max={1.00}
                    step={0.1}
                    value={props.barlength}

                    onChange={(event) => {
                        props.setBarLength(event.target.valueAsNumber);
                    }}
                />
            </div>
            <div class="form-group">
                <label for="degree">Gravitation :{props.gravitation} [m/s²]</label>
                <input
                    type="range"
                    min={0}
                    max={20}
                    step={0.01}
                    value={props.gravitation}

                    onChange={(event) => {
                        props.setGravitation(event.target.valueAsNumber);
                    }}
                />
            </div>

            <div class="form-group">
                <label for="degree">Rotate Angel :{props.rotateangel} </label>
                <input
                    type="range"
                    min={-45}
                    max={45}
                    step={5}
                    value={props.rotateangel}

                    onChange={(event) => {
                        props.setRotateAngel(event.target.valueAsNumber);
                    }}
                />
            </div>


            <div class="form-group">
                <label for="degree">Your current Period :{parseFloat(props.period ).toFixed(4)} [s] </label>
                <label for="degree">Your current Frequenz :{parseFloat(1/props.period ).toFixed(4)} [Hertz] </label>
                
            </div>


            <div class="form-group">
                <button className='buton' onClick={(e)=>(PlayHandler(e))}>Play <FaPlay style={{color:'#4267B2'}}/></button>
                <button className='buton' onClick={ PauseHandler}>Stop <FiPause style={{color:'#ff0000',width:'15px'}}/></button>
                
                
            </div>
        </Fragment>
    )
}

export default TableInfo
