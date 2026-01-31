import Reveal from "../components/Reveal";
import "./Home.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

// Real data on irrigation coverage in India
const irrigationCoverageData = [
  { year: "1950-51", percentage: 17.4, area: 22.6 },
  { year: "1990-91", percentage: 34.5, area: 48.2 },
  { year: "2000-01", percentage: 40.2, area: 57.0 },
  { year: "2010-11", percentage: 45.3, area: 63.5 },
  { year: "2015-16", percentage: 48.2, area: 68.4 },
  { year: "2020-21", percentage: 52.6, area: 73.5 },
];

// Water sources for irrigation in India (percentage)
const waterSourcesData = [
  { name: "Canals", value: 24.5 },
  { name: "Tube Wells", value: 45.2 },
  { name: "Tanks", value: 3.8 },
  { name: "Open Wells", value: 11.5 },
  { name: "Other Sources", value: 15.0 },
];

// State-wise irrigation potential (million hectares)
const stateIrrigationData = [
  { state: "UP", potential: 14.6, utilized: 13.2 },
  { state: "MP", potential: 8.2, utilized: 6.5 },
  { state: "Maharashtra", potential: 7.5, utilized: 6.3 },
  { state: "Bihar", potential: 6.4, utilized: 5.8 },
  { state: "Gujarat", potential: 6.4, utilized: 5.9 },
  { state: "Rajasthan", potential: 4.5, utilized: 3.8 },
  { state: "Assam", potential: 2.8, utilized: 1.4 },
];

// Water use efficiency data
const waterEfficiencyData = [
  { method: "Flood Irrigation", efficiency: 30, waterUse: 12000 },
  { method: "Sprinkler", efficiency: 60, waterUse: 7500 },
  { method: "Drip Irrigation", efficiency: 90, waterUse: 4500 },
  { method: "Micro Sprinkler", efficiency: 80, waterUse: 5500 },
];

// Assam specific water management data
const assamWaterData = [
  { year: "2010", rainfall: 2818, irrigated: 1.2, floods: 15 },
  { year: "2012", rainfall: 2654, irrigated: 1.25, floods: 12 },
  { year: "2014", rainfall: 2891, irrigated: 1.3, floods: 18 },
  { year: "2016", rainfall: 2723, irrigated: 1.35, floods: 14 },
  { year: "2018", rainfall: 2956, irrigated: 1.38, floods: 20 },
  { year: "2020", rainfall: 2845, irrigated: 1.42, floods: 16 },
];

const COLORS = [
  "#166534",
  "#22C55E",
  "#4ADE80",
  "#86EFAC",
  "#BBF7D0",
  "#DCFCE7",
];

export default function WaterManagement() {
  return (
    <div className="home-page">
      <Reveal>
        <section className="hero">
          <h1>Water Management and Irrigation in India</h1>
          <p className="subtitle">
            Challenges, Innovations, and the Path to Sustainable Agriculture
          </p>
        </section>

        <section className="section">
          <h2>Introduction</h2>
          <p>
            Water is the lifeline of agriculture, and effective water management
            is crucial for ensuring food security and sustainable agricultural
            development in India. Despite being endowed with significant water
            resources, India faces severe challenges in water management and
            irrigation due to uneven distribution, climate variability,
            inefficient water use practices, and increasing demand from
            competing sectors.
            <br />
            <br />
            <b>
              India has approximately 4% of the world's freshwater resources but
              supports nearly 18% of the global population.
            </b>{" "}
            The agricultural sector consumes about 80% of the country's
            available freshwater, making efficient irrigation and water
            management critical for sustainable development. The irrigation
            infrastructure has expanded significantly since independence, yet
            challenges persist in terms of equity, efficiency, and
            sustainability.
            <br />
            <br />
            In the context of Assam, water management presents unique
            challenges. Despite receiving abundant rainfall (averaging 2,818 mm
            annually), the state paradoxically faces irrigation deficits due to
            the temporal and spatial variation in rainfall distribution.{" "}
            <b>
              About 50% of Assam's cultivable area remains rain-fed, making
              agriculture vulnerable to monsoon variability.
            </b>{" "}
            Additionally, recurring floods affect approximately 40 lakh hectares
            annually, causing massive losses to crops and infrastructure while
            also depositing fertile silt.
          </p>
        </section>

        <section className="section">
          <h2>Evolution of Irrigation in India</h2>
          <p>
            The history of irrigation in India dates back to ancient
            civilizations. The Indus Valley Civilization had sophisticated water
            management systems. During the medieval period, rulers constructed
            numerous tanks, canals, and step wells. The colonial era saw the
            construction of major canal systems, particularly in Punjab and
            Uttar Pradesh.
            <br />
            <br />
            <b>
              Post-independence, irrigation development received high priority
              in India's Five Year Plans.
            </b>{" "}
            The ultimate irrigation potential of the country was assessed at
            139.89 million hectares (113.5 Mha from surface water and 26.39 Mha
            from groundwater). As of 2020-21, about 73.5 million hectares of
            irrigation potential has been created, covering approximately 52.6%
            of the total cultivated area.
          </p>

          <div className="chart-container">
            <h3>Irrigation Coverage in India (1950-2021)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={irrigationCoverageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis
                  yAxisId="left"
                  label={{
                    value: "Percentage (%)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  label={{
                    value: "Area (M Ha)",
                    angle: 90,
                    position: "insideRight",
                  }}
                />
                <Tooltip />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="percentage"
                  stroke="#166534"
                  fill="#4ADE80"
                  name="% Coverage"
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="area"
                  stroke="#0369a1"
                  fill="#38bdf8"
                  name="Irrigated Area (M Ha)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <h2>Sources of Irrigation Water</h2>
          <p>
            India's irrigation system relies on diverse water sources, each with
            its own advantages and challenges. The dependence on groundwater has
            increased dramatically over the past few decades, leading to
            over-exploitation in many regions.
            <br />
            <br />
            <b>
              Tube wells and bore wells now constitute the largest source of
              irrigation in India (45.2%), followed by canals (24.5%).
            </b>{" "}
            This shift towards groundwater has resulted in declining water
            tables in several states. According to the Central Ground Water
            Board, about 17% of India's administrative blocks are classified as
            over-exploited or critical in terms of groundwater extraction.
          </p>

          <div className="chart-container">
            <h3>Distribution of Irrigation Water Sources in India</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={waterSourcesData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {waterSourcesData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="section">
          <h2>State-wise Irrigation Potential and Utilization</h2>
          <p>
            There exists significant variation across states in terms of
            irrigation potential creation and utilization. Several states have
            created substantial irrigation infrastructure but face challenges in
            its effective utilization due to incomplete distribution networks,
            poor maintenance, and institutional issues.
            <br />
            <br />
            <b>
              The gap between created potential and utilized potential averages
              around 15-20% at the national level.
            </b>{" "}
            This represents a massive opportunity for improving agricultural
            productivity without additional infrastructure investment, simply
            through better management and completion of distribution systems.
          </p>

          <div className="chart-container">
            <h3>Irrigation Potential Created vs Utilized (Selected States)</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={stateIrrigationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="state" />
                <YAxis
                  label={{
                    value: "Area (Million Hectares)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Bar
                  dataKey="potential"
                  fill="#22C55E"
                  name="Potential Created"
                />
                <Bar
                  dataKey="utilized"
                  fill="#166534"
                  name="Potential Utilized"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <h2>Water Use Efficiency and Modern Irrigation Methods</h2>
          <p>
            Traditional flood irrigation methods, still prevalent in many parts
            of India, have very low water use efficiency (30-35%). This results
            in massive water wastage, waterlogging, soil salinity, and reduced
            crop productivity.{" "}
            <b>
              Adoption of micro-irrigation technologies like drip and sprinkler
              systems can save 40-60% of water while increasing crop yields by
              20-50%.
            </b>
            <br />
            <br />
            The Government of India launched the Pradhan Mantri Krishi Sinchayee
            Yojana (PMKSY) in 2015 with the motto "Har Khet Ko Pani" (water to
            every field) and the tagline "Per Drop More Crop". The scheme
            focuses on expanding irrigation coverage, improving water use
            efficiency, and promoting micro-irrigation. As of 2021,
            micro-irrigation has been adopted in about 10 million hectares,
            covering roughly 13% of the irrigated area.
            <br />
            <br />
            <b>Key benefits of modern irrigation methods include:</b>
            <ul>
              <li>
                <b>Drip Irrigation:</b> 90% water use efficiency, ideal for
                water-scarce regions, reduces fertilizer use through
                fertigation, prevents weed growth
              </li>
              <li>
                <b>Sprinkler Irrigation:</b> 60-70% efficiency, suitable for
                various soil types, protects against frost, efficient for
                undulating terrain
              </li>
              <li>
                <b>Micro Sprinkler:</b> 80% efficiency, suitable for tree crops
                and horticulture, creates favorable microclimate
              </li>
            </ul>
          </p>

          <div className="chart-container">
            <h3>Irrigation Method Comparison: Efficiency vs Water Use</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={waterEfficiencyData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="method" width={120} />
                <Tooltip />
                <Bar
                  dataKey="efficiency"
                  fill="#22C55E"
                  name="Efficiency (%)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="section">
          <h2>Water Management Challenges in Assam</h2>
          <p>
            Assam presents a paradoxical situation in water management - it is
            both water-abundant and water-stressed. The state receives one of
            the highest rainfalls in the country, yet faces significant
            irrigation challenges.{" "}
            <b>
              Only about 50% of Assam's net sown area (approximately 1.4 million
              hectares out of 2.8 million hectares) is irrigated.
            </b>
            <br />
            <br />
            <b>Key challenges include:</b>
          </p>
          <ul>
            <li>
              <b>Flood-Drought Cycle:</b> Devastating floods during monsoon
              followed by moisture stress in rabi season. The Brahmaputra and
              its tributaries flood approximately 40 lakh hectares annually,
              causing losses exceeding ₹200 crore.
            </li>

            <li>
              <b>Underdeveloped Infrastructure:</b> Limited canal systems,
              inadequate water harvesting structures, and poor maintenance of
              existing infrastructure. The irrigation potential utilization gap
              in Assam is nearly 50%.
            </li>

            <li>
              <b>Topographical Constraints:</b> Hilly terrain in many parts
              makes canal irrigation difficult and expensive. Conventional
              irrigation methods are not suitable for tea gardens and hill
              agriculture.
            </li>

            <li>
              <b>Soil Erosion:</b> Severe bank erosion along the Brahmaputra and
              its tributaries leads to loss of agricultural land (approximately
              8,000 hectares annually) and disrupts irrigation infrastructure.
            </li>

            <li>
              <b>Limited Groundwater Use:</b> Despite having groundwater
              potential, only 8-10% is utilized due to lack of exploration, high
              iron content in groundwater, and poor rural electrification in
              some areas.
            </li>

            <li>
              <b>Single Cropping Dominance:</b> Due to irrigation constraints,
              nearly 60% of the cultivated area is under single crop
              (predominantly Sali paddy), limiting agricultural income and food
              diversity.
            </li>
          </ul>

          <div className="chart-container">
            <h3>
              Assam: Rainfall, Irrigation Coverage & Flood Incidents (2010-2020)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={assamWaterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis
                  yAxisId="left"
                  label={{
                    value: "Rainfall (mm)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  label={{
                    value: "Irrigated Area (M Ha)",
                    angle: 90,
                    position: "insideRight",
                  }}
                />
                <Tooltip />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="rainfall"
                  stroke="#0369a1"
                  name="Annual Rainfall (mm)"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="irrigated"
                  stroke="#166534"
                  name="Irrigated Area (M Ha)"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="floods"
                  stroke="#dc2626"
                  name="Major Flood Events"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <h2>Innovative Water Management Solutions</h2>
          <p>
            Addressing India's water management challenges requires a
            multi-pronged approach combining traditional wisdom with modern
            technology. Several innovative solutions are being implemented
            across the country:
          </p>

          <h3>1. Community-Based Water Management</h3>
          <p>
            <b>Participatory Irrigation Management (PIM):</b> Transfer of
            irrigation management from government agencies to Water Users'
            Associations (WUAs) has shown promising results in several states.
            WUAs in Andhra Pradesh and Maharashtra have improved water
            distribution equity and reduced conflicts.
            <br />
            <br />
            <b>Traditional Water Harvesting Revival:</b> Rejuvenation of
            traditional water bodies like tanks, ponds, and step wells (baoris).
            Rajasthan's Jal Sanchay Abhiyan has revived thousands of traditional
            water structures.
          </p>

          <h3>2. Technological Interventions</h3>
          <p>
            <b>Precision Irrigation:</b> Use of soil moisture sensors,
            weather-based irrigation scheduling, and automated drip systems.
            Israel's collaboration with Indian states has introduced advanced
            precision farming techniques.
            <br />
            <br />
            <b>Remote Sensing and GIS:</b> Satellite imagery for monitoring crop
            water stress, identifying waterlogging, and planning irrigation
            infrastructure. The National Remote Sensing Centre provides valuable
            data for water resource management.
            <br />
            <br />
            <b>Mobile-based Advisory:</b> Farmers receive real-time information
            on weather, irrigation scheduling, and water-saving practices
            through SMS and mobile apps like Kisan Suvidha and Meghdoot.
          </p>

          <h3>3. Policy and Institutional Reforms</h3>
          <p>
            <b>Water Pricing and Regulation:</b> Introducing volumetric water
            pricing to discourage wasteful use while ensuring affordability for
            small farmers. Several states have enacted groundwater regulation
            acts to prevent over-exploitation.
            <br />
            <br />
            <b>Crop Planning:</b> Encouraging water-efficient crops and
            discouraging water-intensive crops in water-stressed regions. Punjab
            and Haryana are promoting maize and pulses instead of paddy.
            <br />
            <br />
            <b>Inter-State Water Sharing:</b> Tribunals and agreements for
            equitable sharing of river waters, though implementation remains
            challenging due to political and social complexities.
          </p>
        </section>

        <section className="section">
          <h2>Recommendations for Assam</h2>
          <p>
            Given Assam's unique water management challenges, the following
            recommendations are proposed:
          </p>
          <ol>
            <li>
              <b>Flood Water Harvesting:</b> Develop infrastructure to capture
              and store flood waters in large reservoirs for use during lean
              periods. Construction of check dams and water harvesting
              structures in upper catchment areas.
            </li>

            <li>
              <b>Micro-Irrigation Expansion:</b> Promote drip and sprinkler
              irrigation especially for horticulture, vegetables, and rabi
              crops. Provide enhanced subsidies for small and marginal farmers.
            </li>

            <li>
              <b>Groundwater Development:</b> Systematic exploration and
              exploitation of groundwater potential through community tube wells
              and shallow wells. Address water quality issues through
              appropriate treatment technologies.
            </li>

            <li>
              <b>Lift Irrigation Systems:</b> Install solar-powered lift
              irrigation systems to utilize water from rivers and streams during
              lean seasons. This is particularly relevant for areas where
              gravity-flow irrigation is not feasible.
            </li>

            <li>
              <b>Command Area Development:</b> Complete ongoing irrigation
              projects and improve water use efficiency in existing command
              areas through canal lining, maintenance, and modern water
              distribution systems.
            </li>

            <li>
              <b>Farmer Education:</b> Extensive training programs on water
              management, soil moisture conservation, mulching, and efficient
              irrigation practices. Demonstration plots showing benefits of
              modern irrigation methods.
            </li>

            <li>
              <b>Watershed Development:</b> Integrated watershed management
              programs focusing on soil and water conservation, afforestation,
              and creating water harvesting structures.
            </li>

            <li>
              <b>Climate Resilience:</b> Develop early warning systems for
              floods and droughts, promote climate-resilient crops, and create
              contingency plans for water stress situations.
            </li>
          </ol>
        </section>

        <section className="section">
          <h2>Conclusion</h2>
          <p>
            Water management and irrigation are critical determinants of
            agricultural sustainability and food security in India. While
            significant progress has been made in expanding irrigation
            infrastructure, challenges remain in terms of efficiency, equity,
            and sustainability.
            <b>
              The future of Indian agriculture depends on moving from
              expansion-focused to efficiency-focused water management.
            </b>
            <br />
            <br />
            For Assam, the paradox of plenty (abundant water resources but
            inadequate irrigation) needs to be addressed through innovative
            solutions that harness flood waters, develop groundwater
            sustainably, and promote water-use efficient technologies.{" "}
            <b>
              With only 50% of the cultivable area under irrigation, doubling
              farm income and achieving food security require urgent attention
              to water management challenges.
            </b>
            <br />
            <br />
            The integration of traditional knowledge with modern technology,
            institutional reforms promoting participatory management, and policy
            support for water-efficient agriculture can transform India's water
            landscape. Climate change adds urgency to these efforts, as changing
            rainfall patterns and increasing temperature extremes threaten water
            availability and agricultural productivity. Sustainable water
            management is not just an agricultural imperative but a
            civilizational necessity for India's future.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
