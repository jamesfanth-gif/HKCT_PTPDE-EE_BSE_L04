function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const typeLabels = {
  trace: '<span class="q-type q-type-trace">📊 Calculation & Trace</span>',
  compare: '<span class="q-type q-type-compare">⚖️ Comparative Analysis</span>',
  scenario: '<span class="q-type q-type-scenario">🎯 Scenario & Application</span>',
  concept: '<span class="q-type q-type-concept">💭 Concept & Fundamentals</span>',
  explain: '<span class="q-type q-type-explain">🔍 Engineering Synthesis</span>'
};

const lessonLabels = {
  L4: 'L4 Hydronic Systems (1)'
};

// =======================================================
// 12 TOPICS WITH HIGH-PRECISION SCADA ANIMATED SCHEMATICS
// =======================================================
const notesData = [
  {
    id: 't1', icon: '1', title: 'Hydronic System Classification by Usage',
    titleZh: '按用途分類：冷凍水、雙溫水與冷卻水系統',
    diagram: `<svg viewBox="0 0 740 290" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Central Plant Chilled Water Flow Loop (冷凍水循環溫標)</text>
        <rect x="40" y="60" width="180" height="110" fill="#1b4f72" stroke="#3498db" stroke-width="2" rx="6"/>
        <text x="130" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">Chiller Evaporator</text>
        <text x="130" y="105" text-anchor="middle" font-size="11" fill="#5dade2">冰機蒸發器</text>
        <text x="130" y="135" text-anchor="middle" font-size="10" fill="#ecf0f1">Cooling to 7 - 8 °C</text>
        <rect x="40" y="185" width="180" height="40" fill="#2c3e50" stroke="#7f8c8d" rx="4"/>
        <text x="130" y="210" text-anchor="middle" font-size="10.5" fill="#bdc3c7">Chilled Water Pump (CHWP)</text>
        <path d="M 220 95 L 480 95" fill="none" stroke="#00d2d3" stroke-width="5" class="flow-chw-supply"/>
        <text x="350" y="85" text-anchor="middle" font-size="11" fill="#00d2d3" font-weight="bold">Supply Pipe: 7 °C – 8 °C (供水管)</text>
        <rect x="480" y="55" width="180" height="120" fill="#2c3e50" stroke="#1abc9c" stroke-width="2" rx="6"/>
        <text x="570" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">Air Terminals</text>
        <text x="570" y="98" text-anchor="middle" font-size="10.5" fill="#1abc9c">AHU / PAU / FCU Coils</text>
        <text x="570" y="130" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Air Cools &amp; Dehumidifies</text>
        <text x="570" y="150" text-anchor="middle" font-size="9" fill="#feca57">Water Warms by 5.5 °C</text>
        <path d="M 480 145 L 220 145" fill="none" stroke="#2e86de" stroke-width="5" class="flow-chw-return"/>
        <text x="350" y="165" text-anchor="middle" font-size="11" fill="#2e86de" font-weight="bold">Return Pipe: 12 °C – 14 °C (回水管)</text>
        <text x="350" y="245" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">Standard Design Temperature Difference Δt = 5 °C to 6 °C (Nominal Δt = 5.5 °C)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 1: Standard Chilled Water Circuit: Water chilled to 7–8°C in evaporator, pumped to AHU/FCU coils, and returned at 12–14°C (Δt = 5.5°C)',
    sections: [
      {
        title: 'Definition of Hydronic Systems / 水力系統定義',
        zh: '<p><strong>水力系統 (Hydronic systems)</strong> 是指利用熱水或冷凍水作為介質，在建築空間或工藝設備之間輸送熱量或冷量的管網循環系統[cite: 4]。主要將中央主機（冷凍機 Chiller 或鍋爐 Boiler）與室內各換熱末端（AHU, PAU, FCU）緊密連接[cite: 4]。</p>',
        en: '<p><strong>Hydronic systems</strong> are water systems that convey thermal energy to or from a conditioned space or process using hot or chilled water piped between central plants and terminal units[cite: 4].</p>'
      },
      {
        title: 'Classification According to Use / 按使用功能三大分類',
        zh: '<ol><li><strong>冷凍水系統 (Chilled water system)</strong>：冷凍水在冷凍機蒸發器中冷卻至 <strong>7–8 °C</strong>，由冷凍水泵輸送至各空調末端（AHU/PAU/FCU）進行空氣冷卻與除濕[cite: 4]。吸熱後水溫升至 <strong>12–14 °C</strong>，再返回蒸發器重新冷卻（標準溫差約 <strong>5–6 °C</strong>）[cite: 4]。</li><li><strong>雙溫水系統 (Dual-temperature water system)</strong>：同套管網按季節靈活切換，夏送冷凍水（由冷水機提供）、冬送熱水（由鍋爐提供）[cite: 4]。</li><li><strong>冷卻水系統 (Condenser water system)</strong>：專門負責將冷凍機冷凝器中製冷劑的冷凝熱帶走，冷卻水可循環流經<strong>冷卻塔 (Cooling tower)</strong>，或取自湖泊、河流、地下水井或海水[cite: 4]。</li></ol>',
        en: '<ol><li><strong>Chilled water system</strong>: Chilled in the chiller evaporator to <strong>7–8 °C</strong>, pumped to terminals (AHU/PAU/FCU) for cooling/dehumidification, warmed to <strong>12–14 °C</strong>, and returned to the evaporator[cite: 4].</li><li><strong>Dual-temperature water system</strong>: Supplies either chilled water (from chiller) or hot water (from boiler) depending on seasonal demands[cite: 4].</li><li><strong>Condenser water system</strong>: Removes condensation heat from refrigerant in the condenser to a cooling tower, lake, river, well, or sea[cite: 4].</li></ol>'
      }
    ]
  },
  {
    id: 't2', icon: '2', title: 'Operating Characteristics: Closed, Open & Once-Through',
    titleZh: '閉式、開式循環與海水直流冷卻系統',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="225" height="225" fill="#243342" stroke="#3498db" stroke-width="2" rx="6"/>
        <text x="112" y="16" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#3498db">Closed-Circuit (閉式循環)</text>
        <rect x="25" y="50" width="175" height="55" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="112" y="75" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Cooling Coil (AHU)</text>
        <text x="112" y="93" text-anchor="middle" font-size="8.5" fill="#abebc6">No direct contact with air</text>
        <path d="M 50 105 L 50 160 L 175 160 L 175 105" fill="none" stroke="#00d2d3" stroke-width="3" class="flow-chw-supply"/>
        <circle cx="112" cy="160" r="16" fill="#16a085"/>
        <text x="112" y="164" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Pump</text>
        <text x="112" y="200" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Fluid permanently sealed</text>
        <text x="112" y="220" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Low water treatment required</text>
      </g>
      <g class="scada-unit" transform="translate(255, 20)">
        <rect x="0" y="25" width="230" height="225" fill="#243342" stroke="#f39c12" stroke-width="2" rx="6"/>
        <text x="115" y="16" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#f39c12">Open-Circuit (開式循環)</text>
        <rect x="25" y="50" width="180" height="60" fill="#1a252f" stroke="#f39c12" rx="4"/>
        <text x="115" y="73" text-anchor="middle" font-size="10" font-weight="bold" fill="#feca57">Air Washer / Tower</text>
        <text x="115" y="90" text-anchor="middle" font-size="8.5" fill="#f5b7b1">Water in DIRECT contact with air</text>
        <text x="115" y="103" text-anchor="middle" font-size="8" fill="#e74c3c">Dust, O₂ &amp; bacteria ingress</text>
        <path d="M 60 110 L 60 160 L 170 160 L 170 110" fill="none" stroke="#10ac84" stroke-width="3" class="flow-cw"/>
        <circle cx="115" cy="160" r="16" fill="#16a085"/>
        <text x="115" y="164" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Pump</text>
        <text x="115" y="200" text-anchor="middle" font-size="9.5" fill="#feca57">Make-up Water Required</text>
        <text x="115" y="220" text-anchor="middle" font-size="8" fill="#bdc3c7">Compensates evap, drift &amp; blow-down</text>
      </g>
      <g class="scada-unit" transform="translate(500, 20)">
        <rect x="0" y="25" width="225" height="225" fill="#243342" stroke="#0984e3" stroke-width="2" rx="6"/>
        <text x="112" y="16" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0984e3">Once-Through (直流式)</text>
        <rect x="20" y="50" width="185" height="60" fill="#1a252f" stroke="#0984e3" rx="4"/>
        <text x="112" y="75" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#5dade2">Chiller Condenser</text>
        <text x="112" y="95" text-anchor="middle" font-size="8.5" fill="#d4e6f1">Seawater absorbs heat once</text>
        <path d="M 30 145 L 75 145 M 105 145 L 195 145" stroke="#0984e3" stroke-width="4" class="flow-seawater"/>
        <circle cx="90" cy="145" r="15" fill="#2980b9"/>
        <text x="90" y="149" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Pump</text>
        <text x="112" y="180" text-anchor="middle" font-size="9.5" fill="#fff">Sea / River Intake</text>
        <text x="112" y="200" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Fixed Screen in Pump House</text>
        <text x="112" y="225" text-anchor="middle" font-size="8.5" fill="#00d2d3">Discharged without recirculation</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 2: Three fundamental hydronic operating characteristics: Closed-circuit (sealed coil), Open-circuit (air washer/cooling tower), and Once-through seawater cooling',
    sections: [
      {
        title: 'Three Operating Characteristics / 運作特性三大體系',
        zh: '<ul><li><strong>閉式循環系統 (Closed-circuit recirculating)</strong>：水在完全封閉的管路與換熱器（如 AHU 盤管與冰機蒸發器）中流動，冷熱流體<strong>互不直接接觸</strong>[cite: 4]。水質穩定、雜質少、防腐性高[cite: 4]。</li><li><strong>開式循環系統 (Open-circuit recirculating)</strong>：水與外界大氣<strong>直接接觸</strong>，例如洗滌器 (Air washer) 或冷卻水塔[cite: 4]。空氣中的粉塵、氧氣及雜質極易溶入水中，結垢與腐蝕風險高，需要嚴格水處理；且必須設補水管以補償<strong>蒸發 (evaporation)、飄水 (drift) 及排污 (blow-down)</strong> 損失[cite: 4]。</li><li><strong>直流系統 (Once-through system)</strong>：冷卻水流經換熱器吸收冷凝熱後<strong>直接排放，不作循環</strong>[cite: 4]。典型應用為沿海建築抽取海水冷卻（經泵房濾網過濾後泵入冷凝器，再排回大海）[cite: 4]。</li></ul>',
        en: '<ul><li><strong>Closed-circuit</strong>: Fluid is not in direct contact with air, recirculating in a sealed piping loop between coil and chiller[cite: 4]. Requires less water treatment[cite: 4].</li><li><strong>Open-circuit</strong>: Water is in direct contact with air (air washer or cooling tower)[cite: 4]. Absorbs atmospheric dust and oxygen; requires extensive chemical water treatment and make-up water for evaporation, drift, and blow-down[cite: 4].</li><li><strong>Once-through</strong>: Water passes through the heat exchanger only once and is discharged without recirculation (e.g. seawater cooling with intake screens and pump house)[cite: 4].</li></ul>'
      }
    ]
  },
  {
    id: 't3', icon: '3', title: 'Chilled Water Flow Rate vs Temperature Difference',
    titleZh: '蒸發器製冷量、溫差與水流量熱力學平衡',
    diagram: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="215" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Thermal Energy Balance in Chiller Evaporator (水力熱力學平衡計算)</text>
        <rect x="40" y="55" width="280" height="60" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="180" y="80" text-anchor="middle" font-size="14" fill="#f1c40f" font-family="Consolas" font-weight="bold">Q_ev = m_e · C_pw · (t_ee - t_el)</text>
        <text x="180" y="102" text-anchor="middle" font-size="10" fill="#bdc3c7">Q_ev = Evaporator capacity (kW) | C_pw = 4.185 kJ/kg·K</text>
        <rect x="350" y="55" width="310" height="60" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="505" y="80" text-anchor="middle" font-size="14" fill="#2ecc71" font-family="Consolas" font-weight="bold">m_w = 1 / (C_pw · Δt)</text>
        <text x="505" y="102" text-anchor="middle" font-size="10" fill="#abebc6">For Δt = 5.5 °C ➔ m_w = 0.04345 kg/s per kW</text>
        <rect x="40" y="135" width="620" height="85" fill="#111" stroke="#e74c3c" rx="4"/>
        <text x="350" y="160" text-anchor="middle" font-size="12" fill="#fff" font-weight="bold">Step-by-step Rule of Thumb (工程經驗換算):</text>
        <text x="350" y="185" text-anchor="middle" font-size="11" fill="#f1c40f" font-family="Consolas">1 kW Refrigeration @ 5.5 °C Δt ➔ 0.04345 kg/s = 0.04345 L/s = 0.1564 m³/h</text>
        <text x="350" y="205" text-anchor="middle" font-size="10" fill="#bdc3c7">For a 1000 kW chiller: Total flow = 43.45 kg/s ≈ 156.4 m³/h (Assuming water density = 1000 kg/m³)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 3: Heat balance equation: Derivation of unit chilled water flow rate (0.04345 kg/s per kW) at standard 5.5°C temperature difference',
    sections: [
      {
        title: 'Governing Heat Equation / 熱力平衡基本公式',
        zh: '<p>冷凍機蒸發器的製冷量 $Q_{ev}$（或終端冷盤管負荷）由下式確定[cite: 4]：</p><div class="formula-block">Q_{ev} = \dot{m}_e \cdot C_{pw} \cdot (t_{ee} - t_{el}) \quad \text{(kW)}</div><p>其中 $\dot{m}_e$ 為冷凍水質量流量 ($kg/s$)；$C_{pw}$ 為水的比熱容（取 <strong>4.185 kJ/kg·K</strong>）[cite: 4]；$t_{ee}$ 為進蒸發器水溫（約 12.5–14 °C）[cite: 4]；$t_{el}$ 為出蒸發器水溫（標準為 7–8 °C）[cite: 4]。</p>',
        en: '<p>The refrigeration capacity $Q_{ev}$ in the evaporator is given by[cite: 4]:</p><div class="formula-block">Q_{ev} = \dot{m}_e \cdot C_{pw} \cdot (t_{ee} - t_{el}) \quad \text{(kW)}</div><p>where $\dot{m}_e$ is mass flow (kg/s), $C_{pw} = 4.185\text{ kJ/kg K}$[cite: 4], $t_{ee}$ is entering water temp, and $t_{el}$ is leaving water temp (7–8 °C)[cite: 4].</p>'
      },
      {
        title: 'Unit Flow Rate Calculation / 單位冷負荷水流量推導',
        zh: '<p>當進出水設計溫差 $\Delta t = 5.5\text{ }^\circ\text{C}$ 時，每提供 <strong>1 kW</strong> 製冷量所需之冷凍水流量為[cite: 4]：</p><div class="formula-block">m_w = \frac{1}{C_{pw} \cdot \Delta t} = \frac{1}{4.185 \times 5.5} = 0.04345 \text{ kg/s per kW}</div><p>換算為體積流量約為 <strong>0.04345 L/s per kW</strong> 或 <strong>0.1564 m³/h per kW</strong>[cite: 4]。</p>',
        en: '<p>For a standard $\Delta t = 5.5\text{ }^\circ\text{C}$ and $C_{pw} = 4.185\text{ kJ/kg K}$, the chilled water mass flow rate required per 1 kW of load is[cite: 4]:</p><div class="formula-block">m_w = \frac{1}{C_{pw} \Delta t} = \frac{1}{4.185 \times 5.5} = 0.04345\text{ kg/s per kW}</div>'
      }
    ]
  },
  {
    id: 't4', icon: '4', title: 'Water Velocity, Sizing & Pressure Drop Limits',
    titleZh: '水流速度控制、管徑選擇與 250 Pa/m 水力準則',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Pipe Sizing Engineering Criteria (水管設計水力限值)</text>
        <rect x="35" y="50" width="190" height="110" fill="#1a252f" stroke="#e74c3c" stroke-width="2" rx="4"/>
        <text x="130" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#e74c3c">Acoustic Noise Limit</text>
        <text x="130" y="95" text-anchor="middle" font-size="10" fill="#fff">For Pipe Dia ≤ 50 mm:</text>
        <text x="130" y="120" text-anchor="middle" font-size="14" fill="#f1c40f" font-family="Consolas" font-weight="bold">Velocity &lt; 1.2 m/s</text>
        <text x="130" y="145" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Prevents erosion &amp; noise in occupied areas</text>
        <rect x="255" y="50" width="190" height="110" fill="#1a252f" stroke="#1abc9c" stroke-width="2" rx="4"/>
        <text x="350" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#1abc9c">Design Friction Loss</text>
        <text x="350" y="95" text-anchor="middle" font-size="10" fill="#fff">Target Economic Range:</text>
        <text x="350" y="120" text-anchor="middle" font-size="14" fill="#f1c40f" font-family="Consolas" font-weight="bold">100 to 400 Pa/m</text>
        <text x="350" y="145" text-anchor="middle" font-size="9" fill="#2ecc71" font-weight="bold">Mean Figure = 250 Pa/m</text>
        <rect x="475" y="50" width="190" height="110" fill="#1a252f" stroke="#3498db" stroke-width="2" rx="4"/>
        <text x="570" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#3498db">Air Entrainment Limit</text>
        <text x="570" y="95" text-anchor="middle" font-size="10" fill="#fff">Minimum Water Velocity:</text>
        <text x="570" y="120" text-anchor="middle" font-size="14" fill="#f1c40f" font-family="Consolas" font-weight="bold">Velocity &gt; 0.6 m/s</text>
        <text x="570" y="145" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Ensures air bubbles are carried to air vents</text>
        <rect x="35" y="175" width="630" height="70" fill="#111" stroke="#f39c12" rx="4"/>
        <text x="350" y="198" text-anchor="middle" font-size="11" fill="#fff">For Pipe Diameter &gt; 50 mm: Maximum pressure drop should be <strong>&lt; 400 Pa/m</strong>.</text>
        <text x="350" y="222" text-anchor="middle" font-size="10" fill="#bdc3c7">Economic Trade-off: Higher velocity/Δp reduces initial pipe capital cost but dramatically escalates lifetime pump power cost.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 4: Three fundamental pipe sizing boundaries: Noise threshold (1.2 m/s), Air entrainment floor (0.6 m/s), and Economic sizing band (100–400 Pa/m with 250 Pa/m mean)',
    sections: [
      {
        title: 'Economic Trade-off / 經濟平衡原則',
        zh: '<p>管內流速 $V_w$ 與每米直管阻力損失 $\Delta p_1$ 的選定取決於<strong>初投資成本</strong>與<strong>運行電費成本</strong>之綜合經濟平衡[cite: 4]：選定較高的阻力損失 $\Delta p_1$ 時，管徑較小（初投資省），但流速高導致水泵揚程與耗電大（運行費用貴）[cite: 4]。行業通常將每米阻力控制在 <strong>100 Pa/m 至 400 Pa/m</strong> 之間，<strong>標準設計平均基準值取 250 Pa/m</strong>[cite: 4]。</p>',
        en: '<p>Sizing represents an economic balance between capital and running costs: Higher pressure drops allow smaller pipes but demand larger pump head and energy[cite: 4]. Common practice maintains pressure drop in the range of <strong>100 to 400 Pa/m</strong>, with a design mean of <strong>250 Pa/m</strong>[cite: 4].</p>'
      },
      {
        title: 'Critical Velocity Constraints / 關鍵流速限制',
        zh: '<ul><li><strong>噪聲抑制上限</strong>：管徑<strong>小於等於 50 mm</strong> 的管道，流速必須<strong>小於 1.2 m/s</strong> 以免引起管道噪音[cite: 4]。對於管徑<strong>大於 50 mm</strong> 的管道，壓力降必須<strong>小於 400 Pa/m</strong>[cite: 4]。</li><li><strong>排氣攜帶下限</strong>：管內水流速度必須維持在 <strong>0.6 m/s 以上</strong>，確保水中游離氣泡能被水流攜帶至系統高位排氣閥 (Air vent) 順利排出，防止氣塞[cite: 4]。</li></ul>',
        en: '<ul><li><strong>Noise limit</strong>: Velocity must be <strong>&lt; 1.2 m/s</strong> in pipes with diameter &le; 50 mm[cite: 4]. For pipes &gt; 50 mm, pressure drop must be <strong>&lt; 400 Pa/m</strong>[cite: 4].</li><li><strong>Air entrainment limit</strong>: Velocity must stay <strong>&gt; 0.6 m/s</strong> so entrained air bubbles are carried to high-point air vents rather than lodging in pipes[cite: 4].</li></ul>'
      }
    ]
  },
  {
    id: 't5', icon: '5', title: 'Piping Materials & Corrosion Resistance',
    titleZh: '管網材質選用與耐腐蝕特性對比',
    diagram: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="215" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Hydronic Piping Material Application Matrix (管網材質工程選用)</text>
        <rect x="30" y="45" width="150" height="135" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="105" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Chilled Water</text>
        <text x="105" y="95" text-anchor="middle" font-size="10" fill="#fff">• Black Steel</text>
        <text x="105" y="115" text-anchor="middle" font-size="10" fill="#fff">• Galvanized Steel</text>
        <text x="105" y="145" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Schedule 40 Carbon Steel</text>
        <rect x="195" y="45" width="150" height="135" fill="#1a252f" stroke="#e67e22" rx="4"/>
        <text x="270" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#f39c12">Hot Water</text>
        <text x="270" y="95" text-anchor="middle" font-size="10" fill="#fff">• Black Steel</text>
        <text x="270" y="115" text-anchor="middle" font-size="10" fill="#fff">• Hard Copper</text>
        <text x="270" y="145" text-anchor="middle" font-size="8.5" fill="#bdc3c7">High thermal stability</text>
        <rect x="360" y="45" width="150" height="135" fill="#1a252f" stroke="#2ecc71" rx="4"/>
        <text x="435" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#2ecc71">Cooling Water</text>
        <text x="435" y="95" text-anchor="middle" font-size="10" fill="#fff">• Black Steel</text>
        <text x="435" y="115" text-anchor="middle" font-size="10" fill="#fff">• Galv. Ductile Iron</text>
        <text x="435" y="135" text-anchor="middle" font-size="10" fill="#fff">• PVC Piping</text>
        <text x="435" y="155" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Corrosion resistance</text>
        <rect x="525" y="45" width="150" height="135" fill="#1a252f" stroke="#9b59b6" rx="4"/>
        <text x="600" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#bb86fc">Condensate Drain</text>
        <text x="600" y="100" text-anchor="middle" font-size="10" fill="#fff">• Galvanized Steel</text>
        <text x="600" y="125" text-anchor="middle" font-size="10" fill="#f1c40f">Min Fall: 1:100</text>
        <text x="600" y="150" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Must be insulated</text>
        <rect x="30" y="195" width="645" height="35" fill="#111" stroke="#1abc9c" rx="3"/>
        <text x="350" y="217" text-anchor="middle" font-size="10" fill="#ecf0f1">Corrosion Ranking: Copper, PVC, Galv. Ductile Iron &amp; Galv. Steel &gt; Plain Black Steel</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 5: Material selection matrix across HVAC applications and relative corrosion resistance hierarchy',
    sections: [
      {
        title: 'Material Selection Matrix / 各類管網管材選用',
        zh: '<ul><li><strong>冷凍水管 (Chilled water)</strong>：黑鐵無縫鋼管 (Black steel)、熱浸鍍鋅鋼管 (Galvanized steel)[cite: 4]。</li><li><strong>冷凝水排水管 (Condensate drain)</strong>：鍍鋅鋼管（必須包保溫以防外表面結露，<strong>坡度至少 1:100</strong>）[cite: 4]。</li><li><strong>熱水管 (Hot water)</strong>：黑鐵鋼管、硬銅管 (Hard copper)[cite: 4]。</li><li><strong>冷卻水與排水管 (Cooling water & drains)</strong>：黑鋼管、鍍鋅球墨鑄鐵管 (Galvanized ductile iron)、PVC 塑料管[cite: 4]。</li></ul>',
        en: '<ul><li><strong>Chilled water</strong>: Black steel, galvanized steel[cite: 4].</li><li><strong>Condensate drain</strong>: Galvanized steel (insulated, minimum fall of 1:100)[cite: 4].</li><li><strong>Hot water</strong>: Black steel, hard copper[cite: 4].</li><li><strong>Cooling water</strong>: Black steel, galvanized ductile iron, PVC[cite: 4].</li></ul>'
      },
      {
        title: 'Corrosion Resistance Hierarchy / 耐腐蝕性排序',
        zh: '<p>銅管、鍍鋅鋼管、鍍鋅球墨鑄鐵管及 PVC 管的耐腐蝕性能均顯著優於黑鋼管[cite: 4]。設計選型需結合系統水溫、工作壓力、防腐要求及當地施工習慣[cite: 4]。</p>',
        en: '<p>Copper, galvanized steel, ductile iron, and PVC exhibit superior corrosion resistance compared to plain black steel[cite: 4]. Selection depends on technical pressure/temperature ratings and local practice[cite: 4].</p>'
      }
    ]
  },
  {
    id: 't6', icon: '6', title: 'Centrifugal Pumps: Construction & Sizing',
    titleZh: '雙吸中開泵、端吸泵結構與最不利環路揚程',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Centrifugal Pump Engineering Sizing (離心泵型式與水力定壓)</text>
        <g transform="translate(40, 50)">
          <rect x="0" y="0" width="280" height="110" fill="#1a252f" stroke="#3498db" rx="4"/>
          <text x="140" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Horizontal Split-Case Pump</text>
          <text x="140" y="45" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Double-suction, Single-stage</text>
          <text x="140" y="70" text-anchor="middle" font-size="9" fill="#bdc3c7">• Hydraulic axial thrust balanced</text>
          <text x="140" y="90" text-anchor="middle" font-size="9" fill="#bdc3c7">• Widely used in large chilled water plants</text>
        </g>
        <g transform="translate(380, 50)">
          <rect x="0" y="0" width="280" height="110" fill="#1a252f" stroke="#2ecc71" rx="4"/>
          <text x="140" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#2ecc71">End-Suction Centrifugal Pump</text>
          <text x="140" y="45" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Axial inlet at shaft end</text>
          <text x="140" y="70" text-anchor="middle" font-size="9" fill="#bdc3c7">• Compact footprint</text>
          <text x="140" y="90" text-anchor="middle" font-size="9" fill="#bdc3c7">• Used for low-to-medium flow rate systems</text>
        </g>
        <rect x="40" y="175" width="620" height="70" fill="#111" stroke="#e74c3c" rx="4"/>
        <text x="350" y="198" text-anchor="middle" font-size="11" fill="#fff"><strong>Index Run Rule:</strong> Pump head must overcome the total resistance of the <em>critical path / index circuit</em>.</text>
        <text x="350" y="222" text-anchor="middle" font-size="10" fill="#f1c40f">System Location Rule: Water pressure at ANY point in the system must be kept ABOVE atmospheric to prevent air in-leakage.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 6: Pump configurations: Double-suction horizontal split-case vs End-suction pumps, with critical index run sizing and anti-leakage positive pressure rules',
    sections: [
      {
        title: 'Centrifugal Pump Categories / 離心水泵兩大類型',
        zh: '<ol><li><strong>臥式中開雙吸單級泵 (Horizontal split case, double suction, single-stage)</strong>：葉輪兩側同時進水，軸向水推力自然平衡，流量大、維修無需拆卸進出水管，<strong>廣泛用於大型中央冷凍水系統</strong>[cite: 4]；</li><li><strong>端吸泵 (End suction pump)</strong>：吸水口位於泵軸端部，結構緊湊，常用於中小型系統或低流量支路[cite: 4]。</li></ol>',
        en: '<ol><li><strong>Horizontal split-case, double-suction, single-stage</strong>: Hydraulically balanced axial thrust, easy maintenance; <strong>most widely used in large chilled water systems</strong>[cite: 4].</li><li><strong>End suction</strong>: Suction chamber located axially at the shaft end; suited for low water flow rate systems[cite: 4].</li></ol>'
      },
      {
        title: 'Sizing & Positioning Criteria / 水泵定揚程與定壓安裝準則',
        zh: '<ul><li><strong>最不利環路揚程 (Index Run Head)</strong>：水泵揚程必須克服管網中阻力最大之最長環路（最不利路徑 Index run / Critical path）的所有設備及管閥阻力[cite: 4]。備用水泵（Stand-by pump）必須按 100% 備用配置[cite: 4]。</li><li><strong>防負壓吸氣原則</strong>：水泵在水系統中的位置佈置，必須保證<strong>全系統任何一點的水壓均高於大氣壓力 ($P > P_{atm}$)</strong>，徹底防止外界空氣滲入系統造成氣塞與腐蝕[cite: 4]。</li></ul>',
        en: '<ul><li><strong>Index run head</strong>: Head must satisfy the pressure loss requirement of the index circuit (critical path with the greatest pressure loss)[cite: 4]. A standby pump is provided[cite: 4].</li><li><strong>Positive pressure rule</strong>: The pump must be positioned so that the pressure at every point in the piping remains higher than atmospheric pressure, preventing air in-leakage[cite: 4].</li></ul>'
      }
    ]
  },
  {
    id: 't7', icon: '7', title: 'Pump Curves, System Curves & Operating Point',
    titleZh: '水泵特性曲線、管網阻力曲線與工況點分析',
    diagram: `<svg viewBox="0 0 740 290" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="245" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Pump Head-Flow (H-V) vs System Curve Interaction (水泵-管網工況點)</text>
        <line x1="60" y1="210" x2="640" y2="210" stroke="#ecf0f1" stroke-width="2"/>
        <line x1="60" y1="210" x2="60" y2="40" stroke="#ecf0f1" stroke-width="2"/>
        <text x="645" y="215" font-size="10" fill="#ecf0f1">Flow V (L/s)</text>
        <text x="55" y="35" font-size="10" fill="#ecf0f1">Head H (m)</text>
        <line x1="60" y1="170" x2="640" y2="170" stroke="#7f8c8d" stroke-width="1.5" stroke-dasharray="4 2"/>
        <text x="550" y="165" font-size="9" fill="#bdc3c7">Independent Static Head (靜壓水頭)</text>
        <path d="M 60 170 Q 250 165, 420 120 T 600 50" fill="none" stroke="#e74c3c" stroke-width="3"/>
        <text x="570" y="42" font-size="10.5" fill="#e74c3c" font-weight="bold">System Curve ΔPt = R·V²</text>
        <path d="M 60 70 Q 250 80, 420 120 T 600 180" fill="none" stroke="#3498db" stroke-width="3"/>
        <text x="210" y="70" font-size="10.5" fill="#3498db" font-weight="bold">Pump H-V Curve (Flat)</text>
        <circle cx="420" cy="120" r="7" fill="#f1c40f"/>
        <text x="435" y="115" font-size="11" fill="#f1c40f" font-weight="bold">Operating Point O (工況點)</text>
        <text x="435" y="130" font-size="8.5" fill="#ecf0f1">H_pump = H_system at 80% Efficiency</text>
        <text x="350" y="248" text-anchor="middle" font-size="10" fill="#bdc3c7">Total Head = Flow Head (friction/equipment losses varying with V²) + Independent Head (static elevation difference)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 7: Intersection of Pump H-V curve and System Resistance Curve (ΔPt = R·V²). Flow head varies quadratically with flow; independent head remains static',
    sections: [
      {
        title: 'System Total Head Components / 系統總揚程兩大構成',
        zh: '<ul><li><strong>流動水頭 (Flow head)</strong>：由管段摩擦阻力、管件局部阻力及蒸發器/冷凝器/盤管設備阻力組成，數值隨流量平方劇烈變化（$H_{flow} \propto V^2$）[cite: 4]；</li><li><strong>獨立水頭 (Independent head / Static head)</strong>：由系統高低水位落差引起的靜壓差，數值完全<strong>不受系統水流速度或流量影響</strong>[cite: 4]。</li></ul>',
        en: '<ul><li><strong>Flow head</strong>: Sum of pipe friction, fitting dynamics, and equipment pressure losses; varies with flow rate squared ($H_{flow} \propto V^2$)[cite: 4].</li><li><strong>Independent head</strong>: Static elevation head caused by height difference in water levels; unaffected by flow rate[cite: 4].</li></ul>'
      },
      {
        title: 'Flat vs Steep Pump Curves / 平坦型 vs 陡降型水泵曲線',
        zh: '<p>水泵揚程-流量曲線 (H-V curve) 分為兩類[cite: 4]：</p><ul><li><strong>平坦型曲線 (Flat curve)</strong>：最大關閥揚程僅為最佳效率點 (BEP) 揚程的 <strong>1.1 至 1.2 倍</strong>[cite: 4]。<strong>安裝於採用二通閥的閉式變流量系統</strong>，流量大幅變化時系統壓差相對穩定[cite: 4]。</li><li><strong>陡降型曲線 (Steep curve)</strong>：揚程隨流量變化急遽下降，通常安裝於<strong>冷卻塔等開式定流量系統</strong>[cite: 4]。</li><li><strong>管網曲線與工況點</strong>：管網阻力特性方程為 $\Delta P_t = R \cdot V^2$[cite: 4]。水泵 H-V 曲線與管網阻力曲線的交點即為系統的實際<strong>運行工況點 (Operating Point)</strong>[cite: 4]。</li></ul>',
        en: '<p>H-V curve classification[cite: 4]:</p><ul><li><strong>Flat curve</strong>: Maximum head is <strong>1.1 to 1.2 times</strong> the head at maximum efficiency point[cite: 4]. Ideal for <strong>closed circuits with two-way modulating valves</strong>[cite: 4].</li><li><strong>Steep curve</strong>: Suited for <strong>open systems (cooling towers)</strong> requiring constant flow against high static heads[cite: 4].</li><li><strong>Operating Point</strong>: The intersection of the pump H-V curve and the system curve ($\Delta P_t = R \cdot V^2$)[cite: 4].</li></ul>'
      }
    ]
  },
  {
    id: 't8', icon: '8', title: 'Pump Power & Cavitation Prevention (NPSH)',
    titleZh: '水泵軸功率計算與淨正吸入水頭防氣蝕原理',
    diagram: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="215" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Pump Power Formulation &amp; Cavitation Prevention (水泵功率與防氣蝕條件)</text>
        <rect x="40" y="55" width="290" height="85" fill="#1a252f" stroke="#3498db" rx="4"/>
        <text x="185" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#5dade2">Shaft Power Input Formula</text>
        <text x="185" y="110" text-anchor="middle" font-size="15" fill="#f1c40f" font-family="Consolas" font-weight="bold">Pin = (ΔPt · V) / (1000 · η)</text>
        <text x="185" y="130" text-anchor="middle" font-size="9" fill="#ecf0f1">Pin = Power (kW) | ΔPt = Total lift (kPa) | V = L/s | η = Efficiency</text>
        <rect x="360" y="55" width="300" height="85" fill="#1a252f" stroke="#e74c3c" rx="4"/>
        <text x="510" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#e74c3c">Anti-Cavitation Golden Rule</text>
        <text x="510" y="110" text-anchor="middle" font-size="16" fill="#2ecc71" font-family="Consolas" font-weight="bold">NPSHA &gt; NPSHR  ➔  No Cavitation</text>
        <text x="510" y="130" text-anchor="middle" font-size="9" fill="#ecf0f1">Available Head &gt; Required Head (避免葉輪汽蝕剝蝕損壞)</text>
        <rect x="40" y="155" width="620" height="65" fill="#111" stroke="#f39c12" rx="4"/>
        <text x="350" y="178" text-anchor="middle" font-size="10.5" fill="#fff">Cavitation occurs when suction pressure drops below water vapour pressure, creating boiling bubbles.</text>
        <text x="350" y="200" text-anchor="middle" font-size="10" fill="#feca57">Bubbles collapse violently upon entering high-pressure impeller zones, causing severe pitting erosion, noise, and vibration.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 8: Pump input power formulation and the thermodynamic cavitation criteria (NPSHA > NPSHR)',
    sections: [
      {
        title: 'Pump Power Input Calculation / 水泵輸入功率計算',
        zh: '<p>水泵運行輸入電功率由下式精確計算[cite: 4]：</p><div class="formula-block">P_{in} = \frac{\Delta P_t \cdot \dot{V}}{1000 \cdot \eta} \quad \text{(kW)}</div><p>其中 $P_{in}$ 為輸入軸功率 (kW)；$\Delta P_t$ 為水泵全壓升 (kPa)；$\dot{V}$ 為體積流量 ($L/s$)；$\eta$ 為水泵效率[cite: 4]。</p>',
        en: '<p>Pump power is calculated as[cite: 4]:</p><div class="formula-block">P_{in} = \frac{\Delta P_t \cdot \dot{V}}{1000 \cdot \eta} \quad \text{(kW)}</div><p>where $P_{in}$ = power input (kW), $\Delta P_t$ = total pressure rise (kPa), $\dot{V}$ = volume flow rate (L/s), and $\eta$ = pump efficiency[cite: 4].</p>'
      },
      {
        title: 'Cavitation & NPSH Requirements / 氣蝕危害與淨正吸入水頭',
        zh: '<p>當水泵入口壓力低於該溫度下水的飽和蒸氣壓時，局部液體汽化產生氣泡；氣泡流至高壓區瞬間潰滅破裂，引發高速微射流衝擊金屬表面，造成<strong>氣蝕 (Cavitation effect)</strong>，損壞葉輪並伴隨強烈震動與噪音[cite: 4]。</p><div class="key-point"><strong>防氣蝕準則：</strong> 系統有效淨正吸入水頭必須高於水泵必需淨正吸入水頭：<br><strong>NPSHA &gt; NPSHR $\implies$ 無氣蝕 (No cavitation)</strong>[cite: 4]。</div>',
        en: '<p>When suction pressure falls below fluid vapour pressure, vapour bubbles form and implode upon reaching higher pressures, pitting the impeller and inducing severe noise and vibration[cite: 4].</p><div class="key-point"><strong>Golden Rule:</strong> Net Positive Suction Head Available must exceed Required: <strong>NPSHA &gt; NPSHR $\implies$ No Cavitation</strong>[cite: 4].</div>'
      }
    ]
  },
  {
    id: 't9', icon: '9', title: 'Feed & Expansion (F&E) Tanks',
    titleZh: '開式高位膨脹水箱與閉式隔膜壓縮水箱',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="230" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">(a) Open Expansion Tank (開式高位膨脹水箱)</text>
        <rect x="40" y="45" width="120" height="60" fill="#1a252f" stroke="#3498db" rx="3"/>
        <text x="100" y="70" text-anchor="middle" font-size="9.5" fill="#fff" font-weight="bold">Open Tank</text>
        <line x1="80" y1="45" x2="80" y2="35" stroke="#ecf0f1" stroke-width="2"/>
        <text x="80" y="32" text-anchor="middle" font-size="8" fill="#bdc3c7">Vent</text>
        <circle cx="135" cy="75" r="7" fill="#f1c40f"/>
        <text x="135" y="60" font-size="8" fill="#f1c40f">Float valve</text>
        <path d="M 100 105 L 100 170 L 280 170" fill="none" stroke="#3498db" stroke-width="3" class="flow-chw-return"/>
        <text x="180" y="160" font-size="8.5" fill="#3498db">Connects to pump suction</text>
        <rect x="20" y="190" width="300" height="50" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="210" text-anchor="middle" font-size="9" fill="#ecf0f1">• Located ≥ 1 m above highest piping point</text>
        <text x="170" y="228" text-anchor="middle" font-size="9" fill="#f1c40f">• Minimum volume ≥ 6% of system water volume</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="230" fill="#243342" stroke="#2ecc71" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">(b) Closed Diaphragm Tank (閉式隔膜定壓罐)</text>
        <circle cx="120" cy="90" r="45" fill="#1a252f" stroke="#2ecc71" stroke-width="2"/>
        <path d="M 75 90 Q 120 70, 165 90" stroke="#f1c40f" stroke-width="3" stroke-dasharray="4 2"/>
        <text x="120" y="70" text-anchor="middle" font-size="8.5" fill="#f1c40f">Compressed Air/N₂</text>
        <text x="120" y="115" text-anchor="middle" font-size="9" fill="#5dade2">Water Chamber</text>
        <path d="M 120 135 L 120 170 L 280 170" fill="none" stroke="#2ecc71" stroke-width="3" class="flow-cw"/>
        <text x="180" y="160" font-size="8.5" fill="#2ecc71">Connects to pump suction</text>
        <rect x="20" y="190" width="300" height="50" fill="#111" stroke="#2ecc71" rx="4"/>
        <text x="170" y="210" text-anchor="middle" font-size="9" fill="#ecf0f1">• Flexible diaphragm isolates air from water</text>
        <text x="170" y="228" text-anchor="middle" font-size="9" fill="#abebc6">• Prevents oxygen dissolution &amp; eliminates corrosion</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 9: Open expansion tank (vented, ≥1m above top, ≥6% volume) vs Closed diaphragm compression tank (sealed nitrogen buffer prevents oxygen corrosion)',
    sections: [
      {
        title: 'Five Functions of F&E Tanks / 膨脹水箱五大核心功能',
        zh: '<ol><li><strong>水容積熱脹冷縮容納</strong>：在冷熱水溫度交替時吸納膨脹水或補償收縮[cite: 4]；</li><li><strong>定壓保護</strong>：限制管網運行壓力低於管件容許工作壓力[cite: 4]；</li><li><strong>防氣蝕定壓</strong>：保證水泵吸入口具有充足淨正吸入水頭（NPSHA > NPSHR）[cite: 4]；</li><li><strong>系統已知基準參考壓力點</strong>[cite: 4]；</li><li><strong>補水補償</strong>：及時補充系統微量漏失水量[cite: 4]。</li></ol>',
        en: '<ol><li>Accommodates thermal expansion and contraction of system water[cite: 4];</li><li>Controls pressure below maximum allowable working limits[cite: 4];</li><li>Maintains NPSHA &gt; NPSHR at pump suction to prevent cavitation[cite: 4];</li><li>Provides a reference point of known pressure[cite: 4];</li><li>Replenishes system water losses[cite: 4].</li></ol>'
      },
      {
        title: 'Open vs Closed Tank Comparison / 開式水箱 vs 閉式隔膜罐',
        zh: '<ul><li><strong>開式水箱 (Open tank)</strong>：向大氣敞開，安裝位置必須<strong>至少高出系統最高點 1 m</strong>，並接於水泵吸入端[cite: 4]。容積<strong>至少為系統總水容量的 6%</strong>[cite: 4]。缺點是空氣中氧氣易溶於水導致管網氧化腐蝕[cite: 4]。</li><li><strong>閉式隔膜水箱 (Closed diaphragm tank)</strong>：密閉容器內設柔性橡膠隔膜，將氮氣/空氣與管網水分開，<strong>徹底杜絕氧腐蝕</strong>，安裝位置靈活，直接置於冷凍機房泵前[cite: 4]。</li></ul>',
        en: '<ul><li><strong>Open Tank</strong>: Vented to atmosphere, placed <strong>at least 1 m above highest point</strong>, connects to pump suction, volume &ge; <strong>6% of system volume</strong>[cite: 4]. Oxygen dissolves easily, increasing corrosion[cite: 4].</li><li><strong>Closed Diaphragm Tank</strong>: A flexible diaphragm isolates water from pressurized gas, completely preventing oxygen corrosion[cite: 4].</li></ul>'
      }
    ]
  },
  {
    id: 't10', icon: '10', title: 'Two-Way Modulating Valves & Energy Savings',
    titleZh: '二通調節閥、單座/雙座閥與變流量節能機制',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">(a) Single-Seated 2-Way Valve (單座二通閥)</text>
        <rect x="90" y="50" width="160" height="90" fill="#1a252f" stroke="#3498db" stroke-width="1.5" rx="4"/>
        <line x1="170" y1="50" x2="170" y2="105" stroke="#ecf0f1" stroke-width="4"/>
        <polygon points="150,110 190,110 170,125" fill="#e74c3c"/>
        <rect x="155" y="125" width="30" height="6" fill="#bdc3c7"/>
        <path d="M 40 100 L 90 100" stroke="#00d2d3" stroke-width="4" class="flow-chw-supply"/>
        <path d="M 250 100 L 300 100" stroke="#00d2d3" stroke-width="4" class="flow-chw-supply"/>
        <rect x="20" y="155" width="300" height="85" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="178" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Tight Shut-off (關斷嚴密)</text>
        <text x="170" y="198" text-anchor="middle" font-size="9" fill="#bdc3c7">• One plug and one valve seat</text>
        <text x="170" y="215" text-anchor="middle" font-size="9" fill="#bdc3c7">• Higher actuator force required to counter fluid pressure</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">(b) Double-Seated 2-Way Valve (雙座二通閥)</text>
        <rect x="90" y="50" width="160" height="90" fill="#1a252f" stroke="#2ecc71" stroke-width="1.5" rx="4"/>
        <line x1="170" y1="50" x2="170" y2="135" stroke="#ecf0f1" stroke-width="4"/>
        <polygon points="152,85 188,85 170,98" fill="#e74c3c"/>
        <polygon points="152,118 188,118 170,131" fill="#e74c3c"/>
        <path d="M 40 100 L 90 100" stroke="#00d2d3" stroke-width="4" class="flow-chw-supply"/>
        <path d="M 250 100 L 300 100" stroke="#00d2d3" stroke-width="4" class="flow-chw-supply"/>
        <rect x="20" y="155" width="300" height="85" fill="#111" stroke="#2ecc71" rx="4"/>
        <text x="170" y="178" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Pressure Balanced (液力平衡)</text>
        <text x="170" y="198" text-anchor="middle" font-size="9" fill="#bdc3c7">• Two discs balance out opposing forces</text>
        <text x="170" y="215" text-anchor="middle" font-size="9" fill="#abebc6">• Less actuator thrust required (Ideal for large pipe bores)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 10: Two-way control valves: Single-seated (tight shut-off) vs Double-seated (pressure balanced, lower actuator force)',
    sections: [
      {
        title: 'Two-Way Valve Characteristics / 二通調節閥特性',
        zh: '<p>二通閥只有一個進水口與一個出水口[cite: 4]。</p><ul><li><strong>單座閥 (Single-seated)</strong>：一個閥塞與一個閥座，提供極度嚴密的關斷能力 (tight shut-off)，但流體單向推力需較大執行器推力克服[cite: 4]。</li><li><strong>雙座閥 (Double-seated)</strong>：閥軸上裝有兩個閥塞，流體在兩端產生的推力互相抵消平衡 (balanced force)，所需執行機構動力較小，適用於大口徑管網[cite: 4]。</li></ul>',
        en: '<p>Two-way modulating valves feature one inlet and one outlet[cite: 4]:</p><ul><li><strong>Single-seated</strong>: Provides tight shut-off of water flow[cite: 4].</li><li><strong>Double-seated</strong>: Fluid pressure exerted on the two discs is balanced, requiring less actuator force to move the stem[cite: 4].</li></ul>'
      },
      {
        title: 'Variable Flow Energy Savings / 變流量節能機制',
        zh: '<div class="key-point"><strong>空調節能硬性規範：</strong> 採用二通調節閥調節末端負荷時，系統水流量隨部分負荷下降而減小（變水流量 Variable flow），水泵能耗隨流量大幅降低，符合節能標準[cite: 4]。</div>',
        en: '<div class="key-point"><strong>Energy Efficiency Rule:</strong> Two-way modulating valves throttle terminal flow under part load, creating a variable-flow hydronic system that saves substantial pumping energy[cite: 4].</div>'
      }
    ]
  },
  {
    id: 't11', icon: '11', title: 'Three-Way Valves, Kv Factor & Valve Authority',
    titleZh: '三通混水/分流閥、流量系數 Kv 與閥權度 N',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">3-Way Mixing Valve (三通混水閥)</text>
        <rect x="110" y="55" width="120" height="100" fill="#1a252f" stroke="#3498db" rx="4"/>
        <path d="M 40 85 L 110 85" stroke="#00d2d3" stroke-width="4" class="flow-chw-supply"/>
        <text x="75" y="75" font-size="8.5" fill="#00d2d3">Inlet A</text>
        <path d="M 170 200 L 170 155" stroke="#2e86de" stroke-width="4" class="flow-chw-return"/>
        <text x="180" y="185" font-size="8.5" fill="#2e86de">Inlet B</text>
        <path d="M 230 85 L 300 85" stroke="#16a085" stroke-width="4" class="flow-cw"/>
        <text x="265" y="75" font-size="8.5" fill="#1abc9c">Outlet</text>
        <rect x="20" y="175" width="300" height="65" fill="#111" stroke="#3498db" rx="4"/>
        <text x="170" y="198" text-anchor="middle" font-size="10" fill="#fff">2 Inlets + 1 Common Outlet</text>
        <text x="170" y="220" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Combines two streams into one; constant main flow</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="340" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">Valve Authority N &amp; Kv Formula</text>
        <rect x="25" y="50" width="290" height="50" fill="#1a252f" stroke="#f1c40f" rx="4"/>
        <text x="170" y="72" text-anchor="middle" font-size="13" fill="#f1c40f" font-family="Consolas" font-weight="bold">Vmax = Kv · (ΔPv)^0.5</text>
        <text x="170" y="90" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Kv = Flow rate (m³/h) at 1 bar pressure drop</text>
        <rect x="25" y="115" width="290" height="50" fill="#1a252f" stroke="#e74c3c" rx="4"/>
        <text x="170" y="137" text-anchor="middle" font-size="13" fill="#e74c3c" font-family="Consolas" font-weight="bold">N = ΔPv / (ΔPv + ΔPL)</text>
        <text x="170" y="155" text-anchor="middle" font-size="8.5" fill="#f5b7b1">ΔPv = Valve drop | ΔPL = Branch circuit drop</text>
        <rect x="25" y="175" width="290" height="65" fill="#111" stroke="#1abc9c" rx="4"/>
        <text x="170" y="198" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Authority Rule (閥權度準則):</text>
        <text x="170" y="220" text-anchor="middle" font-size="9" fill="#1abc9c">Higher N ➔ Valve characteristic approaches true linearity</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 11: Three-way mixing configuration alongside Kv sizing formula and Valve Authority (N) relationship',
    sections: [
      {
        title: 'Three-Way Modulating Valves / 三通調節閥',
        zh: '<ul><li><strong>三通混水閥 (Mixing valve)</strong>：<strong>兩進一出</strong>，兩股不同溫度的水流進入閥體混合後由公共出口流出[cite: 4]；</li><li><strong>三通分流閥 (Diverting valve)</strong>：<strong>一進兩出</strong>，一股水流進入閥體後按比例分流為兩股支流[cite: 4]；</li><li>三通閥使主管路維持<strong>近乎恆定的總水流量 (constant flow)</strong>[cite: 4]。</li></ul>',
        en: '<ul><li><strong>Mixing valve</strong>: Two inlets and one common outlet to blend two streams[cite: 4].</li><li><strong>Diverting valve</strong>: One inlet and two outlets to split one stream into two[cite: 4].</li><li>Maintains a nearly <strong>constant flow rate</strong> in the main circuit[cite: 4].</li></ul>'
      },
      {
        title: 'Flow Equation & Valve Authority / 流量方程與閥權度',
        zh: '<p>調節閥全開時的最大體積流量與壓降關係式為[cite: 4]：</p><div class="formula-block">V_{max} = K_v \sqrt{\Delta P_v} \quad (m^3/h)</div><p>其中 $K_v$ 為流量系數（壓降為 1 bar 時的流量 $m^3/h$）；$\Delta P_v$ 為全開壓降 (bar)[cite: 4]。</p><p><strong>閥權度 (Valve Authority, $N$)</strong> 定義為全開閥門壓降與支路總壓降之比[cite: 4]：</p><div class="formula-block">N = \frac{\Delta P_v}{\Delta P_v + \Delta P_L}</div><p>其中 $\Delta P_L$ 為支路其餘部分（盤管、配管、平衡閥）的阻力[cite: 4]。<strong>閥權度 $N$ 越大，調節閥在實際工作時的流量特性越接近線性理想狀態</strong>[cite: 4]。</p>',
        en: '<p>The maximum flow rate is determined by[cite: 4]:</p><div class="formula-block">V_{max} = K_v (\Delta P_v)^{0.5} \quad (m^3/h)</div><p><strong>Valve Authority ($N$)</strong> is defined as[cite: 4]:</p><div class="formula-block">N = \frac{\Delta P_v}{\Delta P_v + \Delta P_L}</div><p>The greater the authority $N$, the nearer the in-service valve characteristic approaches linearity[cite: 4].</p>'
      }
    ]
  },
  {
    id: 't12', icon: '12', title: 'System Accessories & Chemical Water Treatment',
    titleZh: '管網必備附件、換熱器結垢與化學加藥裝置',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="255" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Fouling Effect on Compressor Lift &amp; Packaged Dosing System (結垢影響與加藥機組)</text>
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="300" height="115" fill="#1a252f" stroke="#e74c3c" rx="4"/>
          <text x="150" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#e74c3c">Impact of Scale on Chiller Work</text>
          <text x="15" y="45" font-size="10" fill="#ecf0f1">• Evaporator Fouling ➔ Drops Suction Temp</text>
          <text x="15" y="68" font-size="10" fill="#ecf0f1">• Condenser Fouling ➔ Increases Condensing Temp</text>
          <text x="15" y="93" font-size="10.5" fill="#f1c40f" font-weight="bold">Lift = T_condensing - T_suction (劇增)</text>
          <text x="15" y="108" font-size="8.5" fill="#bdc3c7">Every mm of scale significantly increases compressor kW</text>
        </g>
        <g transform="translate(360, 45)">
          <rect x="0" y="0" width="310" height="115" fill="#1a252f" stroke="#1abc9c" rx="4"/>
          <text x="155" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#1abc9c">Packaged Chemical Dosing Skid</text>
          <text x="15" y="45" font-size="9.5" fill="#ecf0f1">① Polyethylene Tank with lid</text>
          <text x="15" y="65" font-size="9.5" fill="#ecf0f1">② Diaphragm Metering Pump (2 to 90 L/h)</text>
          <text x="15" y="85" font-size="9.5" fill="#ecf0f1">③ Electric Liquid Agitator (攪拌機)</text>
          <text x="15" y="105" font-size="9.5" fill="#ecf0f1">④ Low Level Float Switch &amp; 10 mm PVC Tube</text>
        </g>
        <rect x="30" y="175" width="640" height="85" fill="#111" stroke="#3498db" rx="4"/>
        <text x="350" y="198" text-anchor="middle" font-size="10.5" fill="#fff"><strong>Mandatory Piping Accessories (管網五大附件):</strong></text>
        <text x="350" y="218" text-anchor="middle" font-size="9.5" fill="#bdc3c7">Air Vents (at high points) | Drains (at low points) | Condensate Drains (fall ≥ 1:100)</text>
        <text x="350" y="238" text-anchor="middle" font-size="9.5" fill="#5dade2">Strainers (Y型過濾器 before pumps/valves) | Thermometers, Pressure Gauges &amp; Flowmeters</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 12: Heat exchanger fouling penalties on compressor lift and schematic of a packaged chemical dosing skid',
    sections: [
      {
        title: 'System Accessories / 水系統五大關鍵附件',
        zh: '<ol><li><strong>排氣閥 (Air vents)</strong>：空氣會導致換熱面積折減、水壓波動、水泵氣蝕及管網噪音，必須於<strong>系統最高點</strong>安裝手動 (MAV) 或自動 (AAV) 排氣閥[cite: 4]；</li><li><strong>洩水閥 (Drains)</strong>：安裝於所有系統低點，方便局部隔離維修[cite: 4]；</li><li><strong>冷凝水管 (Condensate drains)</strong>：鍍鋅鋼管、外包防結露保溫，<strong>坡度至少 1:100</strong>[cite: 4]；</li><li><strong>過濾器 (Strainers)</strong>：水泵及控制閥入口前必須加設 Y 型過濾器以阻隔雜質[cite: 4]；</li><li><strong>測量儀表</strong>：安裝溫度計、壓力錶與超聲波流量計[cite: 4]。</li></ol>',
        en: '<ol><li><strong>Air vents</strong>: Handled by MAV or AAV at high points to prevent airlocks and corrosion[cite: 4];</li><li><strong>Drains</strong>: Positioned at low points for sectional maintenance[cite: 4];</li><li><strong>Condensate drains</strong>: Galvanized steel, insulated, min slope 1:100[cite: 4];</li><li><strong>Strainers</strong>: Fitted ahead of pumps and control valves[cite: 4];</li><li><strong>Instruments</strong>: Thermometers, pressure gauges, and flowmeters[cite: 4].</li></ol>'
      },
      {
        title: 'Fouling Factor & Compressor Lift / 結垢對壓縮機提升力的影響',
        zh: '<p>水質結垢 (Fouling) 對冷凍機電耗有致命影響[cite: 4]：</p><ul><li><strong>蒸發器結垢</strong>：熱阻增加導致<strong>吸氣溫度下降</strong>[cite: 4]；</li><li><strong>冷凝器結垢</strong>：散熱惡化導致<strong>冷凝溫度升高</strong>[cite: 4]；</li><li><strong>壓縮機提升力 (Lift)</strong> 等於冷凝溫度減去吸氣溫度 ($T_{cond} - T_{suct}$)[cite: 4]。結垢使提升力顯著加大，壓縮機做功電耗劇增[cite: 4]。</li><li><strong>成套化學加藥系統 (Packaged feed system)</strong>：包含聚乙烯藥箱、隔膜式定量加藥泵（輸出 2 至 90 L/h）、電動攪拌器、液位開關及 10 mm 內徑 PVC 注入管，定時定量注入水處理藥劑[cite: 4]。</li></ul>',
        en: '<p>Scale formation degrades performance[cite: 4]:</p><ul><li>Evaporator fouling lowers refrigerant suction temperature[cite: 4];</li><li>Condenser fouling raises condensing temperature[cite: 4];</li><li><strong>Compressor Lift</strong> ($T_{condensing} - T_{suction}$) increases, forcing the motor to consume more power[cite: 4].</li><li><strong>Packaged chemical feed unit</strong>: Polyethylene tank, diaphragm metering pump (2–90 L/h), agitator, low-level float switch, and 10 mm PVC tube[cite: 4].</li></ul>'
      }
    ]
  }
];

// ==========================================
// 25 MULTIPLE CHOICE QUESTIONS (L04)
// ==========================================
const mcData = [
  {
    question: "In a standard commercial chilled water system, what are the typical temperatures for water leaving and entering the chiller evaporator?",
    options: [
      "Leaving at 0-2 °C, entering at 7-8 °C",
      "Leaving at 7-8 °C, entering at 12-14 °C",
      "Leaving at 12-14 °C, entering at 18-20 °C",
      "Leaving at 4-5 °C, entering at 9-10 °C"
    ],
    answer: 1,
    explanation: "Slide 3: Chilled water is cooled in the evaporator to 7-8 °C, pumped to terminals, and returned at 12-14 °C.",
    lesson: "L4"
  },
  {
    question: "What is the primary function of a CONDENSER WATER system in a chiller plant?",
    options: [
      "To supply chilled water directly to air handling unit coils",
      "To remove condensation heat from the refrigerant in the chiller condenser",
      "To cool the building potable hot water calorifier",
      "To provide freeze protection for the expansion tank"
    ],
    answer: 1,
    explanation: "Slide 5: Heat is removed from the refrigerant in the condenser of the chiller by the condenser water to a cooling tower or natural body of water.",
    lesson: "L4"
  },
  {
    question: "Which of the following is an example of an OPEN-CIRCUIT recirculating hydronic system?",
    options: [
      "A closed chilled water loop serving AHU cooling coils",
      "A cooling tower where cooling water is in direct contact with atmospheric air",
      "A seawater once-through cooling system discharging directly to sea",
      "A sealed dual-temperature hot water radiator circuit"
    ],
    answer: 1,
    explanation: "Slide 8: In open systems, water is in direct contact with air (e.g. cooling tower or air washer), necessitating make-up water for evaporation, drift, and blow-down.",
    lesson: "L4"
  },
  {
    question: "A once-through cooling system is best characterized by which feature?",
    options: [
      "Cooling water recirculates continuously in a sealed closed loop",
      "Cooling water passes only once through the heat exchanger and is discharged without recirculation",
      "Cooling water flows through an air washer with spray nozzles",
      "Cooling water passes through a diaphragm expansion tank"
    ],
    answer: 1,
    explanation: "Slide 9: In a once-through system, cooling water (such as seawater or river water) passes through the condenser only once and is discharged without any recirculation.",
    lesson: "L4"
  },
  {
    question: "For a design temperature difference Δt of 5.5 °C and Cp = 4.185 kJ/kg·K, what is the required chilled water mass flow rate per 1 kW of refrigeration load?",
    options: ["0.0245 kg/s", "0.04345 kg/s", "0.0585 kg/s", "0.1564 kg/s"],
    answer: 1,
    explanation: "Slide 10: mw = 1 / (Cpw · Δt) = 1 / (4.185 × 5.5) = 0.04345 kg/s per kW.",
    lesson: "L4"
  },
  {
    question: "What is the common design practice range for chilled water pressure drop per metre length of pipe, and what is the mean design figure?",
    options: [
      "50 to 150 Pa/m; mean of 100 Pa/m",
      "100 to 400 Pa/m; mean of 250 Pa/m",
      "300 to 600 Pa/m; mean of 450 Pa/m",
      "500 to 1000 Pa/m; mean of 750 Pa/m"
    ],
    answer: 1,
    explanation: "Slide 11: The common practice is to have a pressure drop per metre in the range of 100 Pa/m to 400 Pa/m, with 250 Pa/m as the mean design figure.",
    lesson: "L4"
  },
  {
    question: "To prevent pipe flow noise in occupied buildings, the water velocity in pipes with diameter LESS THAN 50 mm must be:",
    options: ["< 0.6 m/s", "< 1.2 m/s", "< 2.5 m/s", "< 4.0 m/s"],
    answer: 1,
    explanation: "Slide 11: To avoid noise in piping, water velocity must be less than 1.2 m/s in pipes with diameter less than 50 mm.",
    lesson: "L4"
  },
  {
    question: "Why must water velocity in hydronic piping be maintained ABOVE 0.6 m/s?",
    options: [
      "To prevent water from freezing inside the tubes",
      "So that entrained air can be carried along with water to air vents",
      "To prevent pipe thermal expansion",
      "To keep the valve authority above 0.5"
    ],
    answer: 1,
    explanation: "Slide 11: Velocity must be maintained above 0.6 m/s so that air can be entrained in water and carried to the air vents where it can be separated.",
    lesson: "L4"
  },
  {
    question: "Which piping material is explicitly designated for CONDENSATE DRAIN pipes from dehumidifying coils?",
    options: ["Black plain steel", "Galvanized steel", "Hard copper", "Cast iron"],
    answer: 1,
    explanation: "Slide 12 & 28: Condensate drain pipe is made of galvanized steel and must be insulated with a minimum fall of 1:100.",
    lesson: "L4"
  },
  {
    question: "Which type of centrifugal pump is MOST widely used in large chilled water systems?",
    options: [
      "End-suction single-stage pump",
      "Horizontal split-case, double-suction, single-stage pump",
      "Multi-stage vertical turbine pump",
      "Positive displacement gear pump"
    ],
    answer: 1,
    explanation: "Slide 13: The horizontal split case, double suction, single-stage pump is most widely used in large chilled water plants.",
    lesson: "L4"
  },
  {
    question: "The pump in a chilled water system must be located and arranged such that:",
    options: [
      "The system pressure at any point is always below atmospheric pressure",
      "The system pressure at any point is higher than atmospheric pressure",
      "The pump always pulls water directly from the open expansion tank overflow",
      "The pump runs without an index circuit"
    ],
    answer: 1,
    explanation: "Slide 13: The pump must be located so that pressure at any point of the system is higher than atmospheric pressure, preventing air in-leakage.",
    lesson: "L4"
  },
  {
    question: "In a pump head-flow performance diagram, what constitutes the INDEPENDENT HEAD?",
    options: [
      "Pipe friction loss varying with the square of flow",
      "Dynamic loss through valves and fittings",
      "Static head caused by the difference in water levels (unaffected by flow rate)",
      "The pressure drop across the index circuit"
    ],
    answer: 2,
    explanation: "Slide 16: Independent head is the static head caused by difference in water levels and is not affected by water flow rate.",
    lesson: "L4"
  },
  {
    question: "A pump curve is designated as a FLAT CURVE when the maximum pump head is within what ratio of the head at best efficiency point (0)?",
    options: ["1.0 to 1.05 times", "1.1 to 1.2 times", "1.5 to 2.0 times", "2.5 to 3.0 times"],
    answer: 1,
    explanation: "Slide 16: An H-V curve is flat if maximum pump head is 1.1 to 1.2 times the head at the operating point of maximum efficiency.",
    lesson: "L4"
  },
  {
    question: "FLAT characteristic centrifugal pumps are typically installed in:",
    options: [
      "Open cooling tower circuits with constant flow",
      "Closed hydronic systems equipped with two-way control valves",
      "Once-through seawater pumping systems",
      "High-pressure boiler feedwater injectors"
    ],
    answer: 1,
    explanation: "Slide 16: Flat characteristic pumps are usually installed in closed systems with two-way control valves.",
    lesson: "L4"
  },
  {
    question: "The mathematical relationship for a piping system curve showing head loss versus flow rate is expressed as:",
    options: ["ΔPt = R / V", "ΔPt = R · V", "ΔPt = R · V²", "ΔPt = R · (V)⁰·⁵"],
    answer: 2,
    explanation: "Slide 16: The relationship between volume flow rate V and pressure loss ΔPt is ΔPt = R·V², where R is the flow resistance.",
    lesson: "L4"
  },
  {
    question: "What is the formula for pump power input (Pin in kW) where ΔPt is total pressure rise in kPa, V is flow in L/s, and η is efficiency?",
    options: [
      "Pin = (ΔPt · V · η) / 1000",
      "Pin = (ΔPt · V) / (1000 · η)",
      "Pin = (1000 · ΔPt) / (V · η)",
      "Pin = (V · η) / (1000 · ΔPt)"
    ],
    answer: 1,
    explanation: "Slide 17: Pin = (ΔPt · V) / (1000 · η).",
    lesson: "L4"
  },
  {
    question: "To prevent pump CAVITATION damage, which condition must strictly be maintained at the pump suction?",
    options: [
      "NPSHA < NPSHR",
      "NPSHA > NPSHR",
      "NPSHA = 0",
      "Water velocity > 2.5 m/s"
    ],
    answer: 1,
    explanation: "Slide 18: NPSHA must be higher than NPSHR to prevent the formation of vapour pockets (cavitation).",
    lesson: "L4"
  },
  {
    question: "An OPEN expansion tank must be located at what minimum height above the highest point of the water system?",
    options: ["At the same elevation", "At least 1 m above", "At least 3 m above", "At least 5 m above"],
    answer: 1,
    explanation: "Slide 19: In an open tank system, the tank is located at least 1 m above the highest point of the water system.",
    lesson: "L4"
  },
  {
    question: "The minimum volume of an OPEN expansion tank should be at least what percentage of the total system water volume?",
    options: ["1%", "3%", "6%", "12%"],
    answer: 2,
    explanation: "Slide 19: The minimum tank volume should be at least 6% of the water volume of the system.",
    lesson: "L4"
  },
  {
    question: "What is the primary advantage of installing a DIAPHRAGM in a closed compression tank?",
    options: [
      "It doubles the maximum flow capacity of the pump",
      "It separates air and water to prevent the corrosive effect of dissolved oxygen",
      "It acts as an automatic air vent",
      "It eliminates the need for an expansion pipe"
    ],
    answer: 1,
    explanation: "Slide 21: A diaphragm is installed in the tank to separate air from water, preventing oxygen dissolution and corrosion.",
    lesson: "L4"
  },
  {
    question: "Compared to single-seated valves, a DOUBLE-SEATED two-way modulating valve:",
    options: [
      "Provides a 100% bubble-tight shut-off",
      "Has fluid pressure on the valve discs balanced, requiring less actuator force",
      "Has two inlets and one outlet",
      "Is used exclusively for constant-flow three-way diverting"
    ],
    answer: 1,
    explanation: "Slide 23: In a double-seated valve, fluid pressure exerted on the two discs is balanced, requiring less operating force.",
    lesson: "L4"
  },
  {
    question: "A three-way MIXING valve has:",
    options: [
      "One inlet connection and two outlet connections",
      "Two inlet connections and one common outlet connection",
      "Two inlets and two outlets",
      "Only one inlet and one outlet"
    ],
    answer: 1,
    explanation: "Slide 24: A three-way mixing valve has two inlet connections and one common outlet connection.",
    lesson: "L4"
  },
  {
    question: "The valve flow coefficient Kv represents the water flow rate in m³/h through the fully open valve at a pressure drop of:",
    options: ["0.1 bar", "0.5 bar", "1 bar (100 kPa)", "10 bar"],
    answer: 2,
    explanation: "Slide 25: Kv is the flow rate in m³/h at a pressure drop of 1 bar across the valve.",
    lesson: "L4"
  },
  {
    question: "VALVE AUTHORITY (N) is defined as the ratio of:",
    options: [
      "ΔPv / ΔPL",
      "ΔPv / (ΔPv + ΔPL)",
      "(ΔPv + ΔPL) / ΔPv",
      "ΔPL / (ΔPv + ΔPL)"
    ],
    answer: 1,
    explanation: "Slide 26: Valve authority N = ΔPv / (ΔPv + ΔPL), where ΔPv is valve pressure drop and ΔPL is the control circuit pressure drop excluding the valve.",
    lesson: "L4"
  },
  {
    question: "How does FOULING in the condenser and evaporator affect refrigeration compressor power?",
    options: [
      "It decreases condensing temperature and increases suction temperature, reducing lift",
      "It increases condensing temperature and decreases suction temperature, increasing lift and energy requirements",
      "It has no effect on compressor power",
      "It decreases the water pressure drop across the tubes"
    ],
    answer: 1,
    explanation: "Slide 30-31: Evaporator fouling lowers suction temperature, while condenser fouling raises condensing temperature. Both increase compressor lift (Tcond - Tsuct), maximizing power consumption.",
    lesson: "L4"
  }
];

// ==========================================
// 5 SHORT ANSWER QUESTIONS (L04)
// ==========================================
const shortData = [
  {
    type: "trace",
    lesson: "L4",
    question: "A commercial office building requires a chiller with a cooling capacity of Qev = 550 kW. The design chilled water supply temperature is 7.0 °C and return temperature is 12.5 °C. (a) Calculate the temperature difference Δt and the required mass flow rate me in kg/s (take Cpw = 4.185 kJ/kg·K). (b) Determine the volume flow rate in L/s. (c) If the design friction loss is selected as 250 Pa/m, use the rule-of-thumb / chart criteria to estimate the required steel pipe nominal diameter.",
    modelAnswer: "Step 1: Calculate temperature difference Δt:\nΔt = tee - tel = 12.5 °C - 7.0 °C = 5.5 °C\n\nStep 2: Calculate chilled water mass flow rate (me):\nQev = me · Cpw · Δt\nme = Qev / (Cpw · Δt) = 550 kW / (4.185 kJ/kg·K · 5.5 K)\nme = 550 / 23.0175 = 23.895 kg/s\n\nStep 3: Convert to volume flow rate:\nAssuming water density ρ ≈ 1.0 kg/L:\nVolume flow rate V = 23.895 L/s (or 86.02 m³/h)\n\nStep 4: Estimate nominal pipe diameter at mean Δp = 250 Pa/m:\nFrom the pipe sizing chart (Slide 11):\n• At V ≈ 24 L/s and Δp = 250 Pa/m:\n• An 80 mm pipe gives V ≈ 24 L/s at ~600 Pa/m with velocity ~4.0 m/s (too high, exceeds 400 Pa/m limit).\n• A 100 mm pipe gives V ≈ 24 L/s at ~200-250 Pa/m with water velocity ≈ 2.5 m/s.\nTherefore, a nominal pipe diameter of 100 mm (4 inches) is selected.",
    tips: "Remember Δt = 5.5°C, Q = m·Cp·Δt, and verify that 250 Pa/m with 24 L/s falls on a 100 mm pipe."
  },
  {
    type: "compare",
    lesson: "L4",
    question: "Compare CLOSED-CIRCUIT, OPEN-CIRCUIT, and ONCE-THROUGH hydronic cooling systems regarding: (a) contact between water and air, (b) chemical water treatment requirements, and (c) make-up water needs.",
    modelAnswer: "(a) Contact between Water and Air:\n• Closed-circuit: Chilled water is completely sealed inside pipework and coils with ZERO direct contact with ambient air.\n• Open-circuit: Cooling water is in DIRECT contact with atmospheric air (inside cooling towers or air washers).\n• Once-through: Cooling water (seawater/river) is pumped through the condenser tubes once and discharged directly; water inside the tubes has no air contact, but intake is from an open body.\n\n(b) Chemical Water Treatment Requirements:\n• Closed-circuit: Minimal treatment required after initial dosing, because no airborne dust, oxygen, or debris enter the closed loop.\n• Open-circuit: High / rigorous chemical treatment needed. Direct air contact continuously introduces dust, oxygen, bacteria (e.g. Legionella), causing severe fouling, biological growth, and scale.\n• Once-through: Heavy anti-fouling and biocide filtration (fixed screens, chlorination) to prevent marine growth, silt deposition, and corrosion.\n\n(c) Make-up Water Needs:\n• Closed-circuit: Virtually zero make-up water; only minor replenishment needed for incidental valve packing weeping.\n• Open-circuit: Substantial continuous make-up water required to compensate for evaporation loss, drift loss, and blow-down bleed.\n• Once-through: Not applicable (100% raw water flow throughput without replenishment loop).",
    tips: "Structure systematically across the 3 criteria: Air contact, Water treatment severity, and Make-up water demand."
  },
  {
    type: "concept",
    lesson: "L4",
    question: "Explain PUMP CAVITATION. (a) Describe the thermodynamic mechanism that initiates cavitation in a centrifugal pump and the physical damage it causes. (b) State the NPSH criterion required to prevent it. (c) List at least FOUR key functions of a Feed & Expansion (F&E) tank in preventing cavitation and stabilizing the system.",
    modelAnswer: "(a) Cavitation Mechanism and Physical Damage:\n• Initiation: Occurs when static pressure at the pump suction eye drops below the saturation vapour pressure of the fluid at that temperature. The liquid locally boils, creating vapor bubbles (cavities).\n• Damage: As these bubbles are carried into the high-pressure impeller vanes, they collapse violently. This micro-implosion generates shockwaves that pit and erode the metal impeller, causing severe vibration, noise, and drop in pumping capacity.\n\n(b) Anti-Cavitation Criterion:\nNPSHA > NPSHR (Net Positive Suction Head Available must exceed Net Positive Suction Head Required by the pump).\n\n(c) Functions of Feed & Expansion (F&E) Tank:\n1. Maintains positive suction pressure (NPSHA > NPSHR) at the pump inlet to eliminate cavitation.\n2. Accommodates thermal expansion and contraction of the water volume when water temperature changes.\n3. Keeps system pressure below the maximum allowable working pressure of pipes and fittings.\n4. Provides a known reference pressure point (neutral point) in the hydronic network.\n5. Automatically replenishes water losses in the system via a float valve or pressurized make-up.",
    tips: "Cover boiling at low suction P, bubble implosion erosion, NPSHA > NPSHR, and at least 4 of the 5 textbook F&E tank functions."
  },
  {
    type: "scenario",
    lesson: "L4",
    question: "A consulting engineer must choose between TWO-WAY modulating control valves and THREE-WAY modulating control valves for an office building chilled water system. (a) Compare their operational flow characteristics (variable flow vs constant flow) and their impact on pump energy consumption. (b) Differentiate between single-seated and double-seated two-way valves. (c) Define Valve Authority (N) and explain why higher authority is desirable.",
    modelAnswer: "(a) Two-Way vs Three-Way Valves:\n• Two-way valves throttle flow through the terminal coil as room load decreases. This creates a VARIABLE FLOW system where total flow drops, allowing variable-speed pumps to reduce speed and save immense electrical energy.\n• Three-way valves bypass excess water around the coil rather than throttling it. The main distribution circuit maintains a CONSTANT FLOW, wasting significant pump power even at light building loads.\n\n(b) Single-Seated vs Double-Seated Two-Way Valves:\n• Single-seated: Has one plug and one seat. Delivers tight, positive shut-off, but fluid pressure acts against the single plug face, requiring high actuator thrust.\n• Double-seated: Has two plugs and seats on one stem. Upstream pressure pushes one disc open while pushing the other closed, hydraulically balancing forces so smaller, cheaper actuators can operate the valve. However, it cannot achieve tight shut-off due to differential thermal expansion.\n\n(c) Valve Authority (N):\n• Formula: N = ΔPv / (ΔPv + ΔPL), where ΔPv is valve pressure drop at full open, and ΔPL is the control branch circuit pressure loss.\n• Significance: Higher authority (N approaching 0.5 to 1.0) ensures the control valve dominates the pressure drop, making the installed flow characteristic approach true linearity and preventing sluggish or hunt-prone control.",
    tips: "Discuss variable vs constant flow pumping energy, single vs double seated balance, and define N = ΔPv / (ΔPv + ΔPL)."
  },
  {
    type: "explain",
    lesson: "L4",
    question: "Fouling in chiller heat exchangers has a severe penalty on compressor work. (a) Explain how fouling factor in the evaporator and condenser affects refrigerant suction temperature, condensing temperature, and compressor 'lift'. (b) List the FIVE main components of a packaged chemical feed system used to combat fouling and scale.",
    modelAnswer: "(a) Fouling Penalty on Compressor Lift:\n• Evaporator Fouling: Scale on water tubes acts as a thermal insulator. To pull the same heat duty from chilled water, the refrigerant must evaporate at a lower suction temperature and pressure.\n• Condenser Fouling: Scale insulates tubes from cooling water, forcing the refrigerant to condense at a higher condensing temperature and pressure to reject heat.\n• Compressor Lift: Compressor work is directly governed by 'lift' = (Condensing Temperature - Suction Temperature). Because fouling simultaneously lowers suction temperature and raises condensing temperature, compressor lift expands substantially, demanding significantly more electrical power (kW/ton) and raising operating costs.\n\n(b) Five Main Components of a Packaged Chemical Feed System (Slide 33):\n1. Chemical Tank: Made of polyethylene (or steel) with lid to store chemical solutions.\n2. Chemical Feed Pump: Positive displacement diaphragm metering pump with fully adjustable capacity (typically 2 to 90 L/h), timer controlled for scheduled dosage.\n3. Liquid Agitator: Motorized mixer to ensure uniform dissolution and prevent settlement of chemical solids.\n4. Liquid Level Switch: Safety float switch to shut down the pump and agitator when the tank becomes empty.\n5. Discharge Tube: Chemical-resistant PVC tubing (typically 10 mm internal diameter) delivering inhibitors into the pump return header.",
    tips: "Explain lift = Tcond - Tsuct, state how evaporator fouling drops Tsuct and condenser fouling raises Tcond, and list the 5 skid components from Slide 33."
  }
];

// ==========================================
// RENDER & DOM BINDINGS
// ==========================================
function renderNotes() {
  const c = document.getElementById('notesContainer');
  c.innerHTML = '';
  notesData.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = topic.id;
    let sectionsHTML = '';
    topic.sections.forEach(sec => {
      sectionsHTML += `
        <h3 style="margin-top:18px;margin-bottom:6px;color:#34495e;font-size:16px;border-bottom:1px dashed #dce1e6;padding-bottom:4px;">${escapeHtml(sec.title)}</h3>
        <div class="lang-pair">
          <div class="lang-cell zh">
            <div class="lang-label">中文重點 / Cantonese &amp; Chinese</div>
            ${sec.zh}
          </div>
          <div class="lang-cell en">
            <div class="lang-label">English Notes</div>
            ${sec.en}
          </div>
        </div>`;
    });
    let diagramHTML = '';
    if (topic.diagram) {
      diagramHTML = `
        <div class="diagram-block">
          <div class="diagram-title">⚡ SCADA Interactive Schematic / 工業級動態水力原理圖</div>
          ${topic.diagram}
          ${topic.diagramCaption ? '<div class="diagram-caption">' + escapeHtml(topic.diagramCaption) + '</div>' : ''}
        </div>`;
    }
    card.innerHTML = `
      <div class="topic-header">
        <div class="topic-icon">${topic.icon}</div>
        <div class="topic-title">
          <h2>${escapeHtml(topic.title)} <span style="color:#7f8c8d;font-weight:normal;font-size:14px;">/ ${escapeHtml(topic.titleZh)}</span></h2>
        </div>
      </div>
      ${sectionsHTML}
      ${diagramHTML}`;
    c.appendChild(card);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledAnswers = {};
function renderMC() {
  const container = document.getElementById('mcContainer');
  container.innerHTML = '';
  mcData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = 'mc-q' + index;
    const indices = q.options.map((_, i) => i);
    shuffleArray(indices);
    const newAnswerIndex = indices.indexOf(q.answer);
    shuffledAnswers[index] = newAnswerIndex;
    let optionsHTML = '';
    indices.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const safeOpt = escapeHtml(opt);
      optionsHTML += `
        <label id="mc-q${index}-opt${displayIdx}">
          <input type="radio" name="mc${index}" value="${displayIdx}" onchange="recordAnswer(${index}, ${displayIdx})">
          ${safeOpt}
        </label>`;
    });
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">Q${index + 1}</span>
        <span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="options">${optionsHTML}</div>
      <div class="explanation" id="mc-exp${index}">
        <strong>Explanation / 詳細解釋：</strong>${escapeHtml(q.explanation)}
      </div>`;
    container.appendChild(card);
  });
}

function renderShort() {
  const c = document.getElementById('shortContainer');
  c.innerHTML = '';
  shortData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card short-q';
    card.id = 'short-q' + index;
    const typeTag = typeLabels[q.type] || '';
    const lessonTag = `<span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>`;
    const safeQuestion = escapeHtml(q.question).replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">S${index + 1}</span>
        ${typeTag}
        ${lessonTag}
      </div>
      <div class="q-text">${safeQuestion}</div>
      <textarea id="short-input${index}" placeholder="Type your calculations or engineering analysis here / 喺度輸入你的計算或工程分析答案..."></textarea>
      <div class="answer-tips">💡 Tip / 提示：${escapeHtml(q.tips || 'Key engineering concepts')}</div>
      <div class="model-answer" id="short-ans${index}">
        <strong>📝 Model Answer / 規範參考答案：</strong>
        <pre></pre>
      </div>`;
    card.querySelector('pre').textContent = q.modelAnswer;
    c.appendChild(card);
  });
}

let userAnswers = {};
let timerInterval;
let timeLeft = 90 * 60;

function recordAnswer(qIndex, optIndex) {
  userAnswers[qIndex] = optIndex;
  updateStats();
}

function updateStats() {
  const answered = Object.keys(userAnswers).length;
  const total = mcData.length;
  document.getElementById('answeredCount').textContent = answered + '/' + total;
  const percent = (answered / total) * 100;
  document.getElementById('progressBar').style.width = percent + '%';
}

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (section === 'notes') {
    document.getElementById('notesSection').classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
  } else if (section === 'part1') {
    document.getElementById('part1Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
  } else if (section === 'part2') {
    document.getElementById('part2Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function submitMC() {
  let correct = 0;
  let reviewHTML = '';
  mcData.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctDisplayAnswer = shuffledAnswers[index];
    const isCorrect = userAnswer === correctDisplayAnswer;
    const card = document.getElementById('mc-q' + index);
    const explanation = document.getElementById('mc-exp' + index);
    explanation.style.display = 'block';
    if (isCorrect) {
      correct++;
      card.classList.add('answered');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item correct">Q${index + 1} ✓ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    } else {
      card.classList.add('wrong');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('incorrect');
      document.getElementById('mc-q' + index + '-opt' + correctDisplayAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item wrong">Q${index + 1} ✗ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    }
  });
  const percent = Math.round((correct / mcData.length) * 100);
  document.getElementById('finalScore').textContent = percent + '%';
  document.getElementById('scoreCircle').style.setProperty('--percent', percent);
  let msg = '';
  if (percent >= 80) msg = '🎉 卓越！你已經徹底掌握水力系統、水泵選型與控制閥門的核心精髓！';
  else if (percent >= 60) msg = '👍 做得好！請仔細閱讀答錯題目的詳細水力計算與解釋。';
  else if (percent >= 50) msg = '✅ 及格。建議重溫管徑流速限制、水泵曲線與閥權度概念。';
  else msg = '📚 繼續努力！點擊 Notes 重新溫習水力學相應主題後再試一次。';
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('scoreDisplay').textContent = percent + '%';
  document.getElementById('reviewSection').innerHTML = `<h3>MC Result: ${correct}/${mcData.length} (${percent}%)</h3><div>${reviewHTML}</div>`;
  document.getElementById('resultPanel').style.display = 'block';
  document.getElementById('resultPanel').scrollIntoView({ behavior: 'auto' });
  clearInterval(timerInterval);
}

function showAnswers() {
  shortData.forEach((q, index) => {
    document.getElementById('short-ans' + index).style.display = 'block';
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    if (timeLeft <= 0) { clearInterval(timerInterval); alert('Time is up!'); submitMC(); }
    if (timeLeft <= 300) document.getElementById('timer').style.color = '#e74c3c';
  }, 1000);
}

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') setTimeout(() => e.target.blur(), 100);
});

window.onload = function() {
  renderNotes();
  renderMC();
  renderShort();
  startTimer();
  updateStats();
};

window.addEventListener('scroll', function() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  if (window.pageYOffset > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});
