import { FC } from 'react'
// import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

// Todo Stats: A mi pensar este componente no tiene sentido/futuro... (Analizarlo) 
export const Stats: FC<{ equipo: any }> = (equipo) => {
  const [totalCombat, setTotalCombat] = useState(0.0);
  const [totalDurability, setTotalDurability] = useState(0.0);
  const [totalIntelligence, setTotalIntelligence] = useState(0.0);
  const [totalPower, setTotalPower] = useState(0.0);
  const [totalSpeed, setTotalSpeed] = useState(0.0);
  const [totalStrength, setTotalStrength] = useState(0.0);
  const [promedioPeso, setpromedioPeso] = useState(0.0);
  const [promedioAltura, setpromedioAltura] = useState(0.0);
  const [mayorStat, setMayorStat] = useState("");

  // useEffect(() => {
  //   let powerstats = {
  //     combat: 0,
  //     durability: 0,
  //     intelligence: 0,
  //     power: 0,
  //     speed: 0,
  //     strength: 0,
  //   }
  //   let peso = 0.0
  //   let altura = 0.0

  //   // equipo.forEach(hero => {
  //   //   if (hero.appearance.weight[1]) { //peso en kg
  //   //     const pesoHero = parseFloat(hero.appearance.weight[1].replace(" kg", ""));
  //   //     peso = peso + pesoHero;
  //   //   }
  //   //   if (hero.appearance.height[1]) { //altura en cm
  //   //     const alturaHero = parseFloat(hero.appearance.height[1].replace(" cm", ""));
  //   //     altura = altura + alturaHero;
  //   //   }
  //   //   Object.keys(hero.powerstats).forEach(key => {
  //   //     if (hero.powerstats[key] !== "null") {
  //   //       powerstats[key] = powerstats[key] + parseInt(hero.powerstats[key]);
  //   //     }
  //   //   });
  //   // });

  //   setTotalCombat((powerstats.combat));
  //   setTotalDurability((powerstats.durability));
  //   setTotalIntelligence((powerstats.intelligence));
  //   setTotalPower((powerstats.power));
  //   setTotalSpeed((powerstats.speed));
  //   setTotalStrength((powerstats.strength));

  //   //ordeno las stats de mayor a menor
  //   const statsOrdenadas = Object.entries(powerstats).sort((a, b) => b[1] - a[1]);
  //   if (statsOrdenadas[0][1] !== 0) {
  //     // seteo la primera si es distinto de 0
  //     setMayorStat(statsOrdenadas[0][0]);
  //   }

  //   if (peso !== 0) {
  //     setpromedioPeso((peso / equipo.length).toFixed(2));
  //   }
  //   if (altura !== 0) {
  //     setpromedioAltura((altura / equipo.length).toFixed(2));
  //   }
  // }, [equipo]);

  return (
    <>
    </>
    // <Row>
    //   <Col>
    //     <p>Mayor Stat: {mayorStat}</p>
    //     <p>Altura promedio: {promedioAltura} cm</p>
    //     <p>Peso promedio: {promedioPeso} kg</p>
    //     <p>Total Combat: {totalCombat}</p>
    //     <p>Total Intelligence: {totalIntelligence}</p>
    //     <p>Total Durability: {totalDurability}</p>
    //     <p>Total Power: {totalPower}</p>
    //     <p>Total Strength: {totalStrength}</p>
    //     <p>Total Speed: {totalSpeed}</p>
    //   </Col>
    // </Row>
  )
}

export default Stats
