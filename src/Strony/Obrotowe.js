import "./cssy/Machine.css";
import Navbar from '../compo/navbar/Navbar'
import MRT1645115 from "../compo/zdjMaszyn/MRT/MRT1645115/studio_rotating_telehandler_mrt_1645_manitou_003.png"
import MRT2145 from "../compo/zdjMaszyn/MRT/MRT2145/studio_rotating_telehandler_mrt_2145_manitou_003.png"
import MRT2260 from "../compo/zdjMaszyn/MRT/MRT2260/studio_rotating_telehandler_mrt_2260_manitou_003.png"
import MRT2660 from "../compo/zdjMaszyn/MRT/MRT2660/studio_rotating_telehandler_mrt_2660_manitou_003.png"
import MRT3060 from "../compo/zdjMaszyn/MRT/MRT3060/studio_rotating_telehandler_mrt_3060_manitou_003.png"
import MRT3570 from "../compo/zdjMaszyn/MRT/MRT3570/studio_rotating_telehandler_mrt_3570_manitou_003.png"
import React from 'react';

const Obrotowe = () =>{
  return (
    <div>
      <Navbar/>
      <div className="MachineContainer">
        <div className="maszrol">
          <img src={ MRT1645115 } alt="MRT1645115" className="MachineImageRol"/> 
            <div className="Opis">
              <p>Udźwig max.</p>
              <h5>4500 kg</h5>
              <p>Max.wysokości podnoszenia</p>
              <h5>15.80 m</h5>
              <p>Wysięg max.</p>
              <h5>13.50 m</h5>
              <p>Moc znamionowa silnika</p>
              <h5>116 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MRT2145} alt="MRT2145" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>4500 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>20.60 m</h5>
                <p>Wysięg max.</p>
                <h5>18 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>116 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MRT2260} alt="MRT2260" className="MachineImageRol"/>
            <div className="Opis">
              <p>Udźwig max.</p>
                <h5>6000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>21.80 m</h5>
                <p>Wysięg max.</p>
                <h5>18.20 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>156 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MRT2660} alt="MRT2660" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>6000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>25.90 m</h5>
                <p>Wysięg max.</p>
                <h5>21.70 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>156 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MRT3060} alt="MRT3060" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>6000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>29.90 m</h5>
                <p>Wysięg max.</p>
                <h5>25.90 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>173 HP</h5>
            </div>
        </div>
        <div className="maszrol">
          <img src={MRT3570} alt="MRT3570" className="MachineImageRol"/>
            <div className="Opis">
                <p>Udźwig max.</p>
                <h5>7000 kg</h5>
                <p>Max.wysokości podnoszenia</p>
                <h5>34.70 m</h5>
                <p>Wysięg max.</p>
                <h5>28 m</h5>
                <p>Moc znamionowa silnika</p>
                <h5>211 HP</h5>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Obrotowe 