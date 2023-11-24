import "./cssy/Machine.css";
import React from 'react';
import Navbar from '../compo/navbar/Navbar'
import MLT420 from "../compo/zdjMaszyn/MLT/MLT420/main_visual_agriculture_telehandler_mlt_420_60_h_manitou.png"
import MLT625 from "../compo/zdjMaszyn/MLT/MLT625/main_visual_agriculture_telehandler_mlt_x_625_75_h_manitou.png"
import MLT630 from "../compo/zdjMaszyn/MLT/MLT630/main_visual_newag_mlt_630_115.png"
import MLT630115V from "../compo/zdjMaszyn/MLT/MLT630-115V/main_visual_newag_mlt_630_115_v.png"
import MLT630115VCP from "../compo/zdjMaszyn/MLT/MLT630-115VCP/newag_mlt_630_105_v_st4.png"
import MLT635130PS from "../compo/zdjMaszyn/MLT/MLT635-130ps/studio_agriculture_telehandler_mlt_635_manitou_003.png"
import MLT635140V from "../compo/zdjMaszyn/MLT/MLT635-140/main_visual_agriculture_telehandler_mlt_635_140_v_plus_manitou.png"
import MLT730115V from "../compo/zdjMaszyn/MLT/MLT730-115V/studio_agriculture_telehandler_mlt_730_manitou_004.png"
import MLT730115VCP from "../compo/zdjMaszyn/MLT/MLT730-115VCP/main_visual_agriculture_telehandler_mlt_730_115_v_cp_manitou.png"
/*import MLT733115 from "../compo/zdjMaszyn/MLT/MLT733-115/main_visual_agriculture_telhandler_mlt_733_115_manitou.png"
import MLT733115LSU from "../compo/zdjMaszyn/MLT/MLT733-115LSU/main_visual_agriculture_telhandler_mlt_733_115_manitou (1).png"
import MLT737130PS from "../compo/zdjMaszyn/MLT/MLT737-130PS/studio_agriculture_telehandler_mlt_737_manitou_005.png"*/
const Machine = () =>{
  return (
    <div>
      <Navbar/>
      <div className="MachineContainer">
        <div className="maszrol">
          <img src={ MLT420 } alt="MLT420" className="MachineImageRol"/> 
            <div className="Opis">
              <p>Udźwig max.</p>
              <h5>2000 kg</h5>
              <p>Max.wysokości podnoszenia</p>
              <h5>4.35 m</h5>
              <p>Wysięg max.</p>
              <h5>2.65 m</h5>
              <p>Typ przekładni</p>
              <h5>Hydrostatyczny</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MLT625} alt="MLT62575H" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>2500 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>5.90 m</h5>
                <p>Wysięg max.</p>
                <h5>3.30 m</h5>
                <p>Typ przekładni</p>
                <h5>Hydrostatyczny</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MLT630} alt="MLT630" className="MachineImageRol"/>
            <div className="Opis">
              <p>Udźwig max.</p>
                <h5>3000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>6.10 m</h5>
                <p>Wysięg max.</p>
                <h5>3.34 m</h5>
                <p>Typ przekładni</p>
                <h5>Power Shuttle</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MLT630115V} alt="MLT630115V" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>3000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>6.10 m</h5>
                <p>Wysięg max.</p>
                <h5>3.34 m</h5>
                <p>Typ przekładni</p>
                <h5>M-Varioshift </h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MLT630115VCP} alt="MLT630115VCP" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>3000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>6 m</h5>
                <p>Wysięg max.</p>
                <h5>3.43 m</h5>
                <p>Typ przekładni</p>
                <h5>M-Varioshift</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MLT635130PS} alt="MLT630130PS" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>3500 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>6.08 m</h5>
                <p>Wysięg max.</p>
                <h5>3.20 m</h5>
                <p>Typ przekładni</p>
                <h5>Power Shuttle</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MLT635140V} alt="MLT635140V" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>3500 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>6.08 m</h5>
                <p>Wysięg max.</p>
                <h5>3.20 m</h5>
                <p>Typ przekładni</p>
                <h5>CVT</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MLT730115V} alt="MLT730115V" className="MachineImageRol"/>
            <div className="Opis">
              <p>Udźwig max.</p>
                <h5>3000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>6.90 m</h5>
                <p>Wysięg max.</p>
                <h5>4.25 m</h5>
                <p>Typ przekładni</p>
                <h5>M-Varioshift</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MLT730115VCP} alt="MLT730115VCP" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>3000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>6.75 m</h5>
                <p>Wysięg max.</p>
                <h5>4.35 m</h5>
                <p>Typ przekładni</p>
                <h5>M-Varioshift</h5>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Machine 