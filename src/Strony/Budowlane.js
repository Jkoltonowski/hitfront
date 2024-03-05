import "./cssy/Machine.css";
import Navbar from '../compo/navbar/Navbar'
import MH790 from "../compo/zdjMaszyn/MT/MHT790/studio_construction_telehandler_mht_790_manitou_004.png"
import MT625 from "../compo/zdjMaszyn/MT/MT625/studio_construction_telehandler_mt_625_manitou_004.png"
import MT730 from "../compo/zdjMaszyn/MT/MT730/main_visual_construction_telehandler_mt_730_h_manitou.png"
import MT733 from "../compo/zdjMaszyn/MT/MT733/main_visual_construction_telehandler_mt_733_manitou.png"
import MT930H from "../compo/zdjMaszyn/MT/MT930H/studio_construction_telehandler_mt_930h_manitou_005.png"
import MT933Easy from "../compo/zdjMaszyn/MT/MT933Easy/main_visual_construction_telehandler_mt_933_easy_manitou.png"
import MHT10135ST5 from "../compo/zdjMaszyn/MT/MHT10135ST5/main_visual_construction_telehandler_mht_10135_manitou.png"
import MHT10160 from "../compo/zdjMaszyn/MT/MHT10160/MHT10160.png"
import React from 'react';
const Machine = () =>{
  return (
    <div>
      <Navbar/>
      <div className="MachineContainer">
        <div className="maszrol">
          <img src={ MH790 } alt="MH790" className="MachineImageRol"/> 
            <div className="Opis">
              <p>Udźwig max.</p>
              <h5>9000 kg</h5>
              <p>Max.wysokości podnoszenia</p>
              <h5>6.80 m</h5>
              <p>Wysięg max.</p>
              <h5>3.70 m</h5>
              <p>Moc znamionowa silnika</p>
              <h5>143 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MHT10135ST5} alt="MHT10135ST5" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>13500 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>9.60 m</h5>
                <p>Wysięg max.</p>
                <h5>5.20 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>173 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MHT10160} alt="MHT10160" className="MachineImageRol"/>
            <div className="Opis">
              <p>Udźwig max.</p>
                <h5>16000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>9.60 m</h5>
                <p>Wysięg max.</p>
                <h5>5.20 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>173 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MT625} alt="MT625" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>2500 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>5.85 m</h5>
                <p>Wysięg max.</p>
                <h5>3.40 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>75 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MT730} alt="MT730" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>3000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>6.90 m</h5>
                <p>Wysięg max.</p>
                <h5>4 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>75 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MT733} alt="MT733" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>3300 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>6.90 m</h5>
                <p>Wysięg max.</p>
                <h5>3.90 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>75 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MT930H} alt="MT930H" className="MachineImageRol"/>
            <div className="Opis">
              <p>Udźwig max.</p>
                <h5>3000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>8.85 m</h5>
                <p>Wysięg max.</p>
                <h5>6.05 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>75 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MT933Easy} alt="MT933Easy" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>3300 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>9.07 m</h5>
                <p>Wysięg max.</p>
                <h5>6.35 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>75 HP</h5>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Machine 