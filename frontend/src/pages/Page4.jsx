import Reveal from "../components/Reveal";
import "./Home.css";
import React from "react";
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
  Cell,
} from "recharts";
export default function Page4() {
    const riceYieldSeries = [
    { year: "2015/16", yield: 3.60 },
    { year: "2016/17", yield: 3.74 },
    { year: "2017/18", yield: 3.86 },
    { year: "2018/19", yield: 3.96 },
    { year: "2019/20", yield: 4.08 },
    { year: "2020/21", yield: 4.08 },
    { year: "2021/22", yield: 4.20 },
    { year: "2022/23", yield: 4.26 },
    { year: "2023/24", yield: 4.32 },
    { year: "2024/25", yield: 4.38 },
    ];

    const compYields = [
    { country: "India (2019/20)", yield: 4.08 },
    { country: "China (approx.)", yield: 4.7 },
    ];

    const indicators = [
    { name: "Soil degradation (% area)", value: 30 },
    { name: "Irrigation efficiency (%)", value: 38 },
    { name: "Foodgrain 1950-51 (Mt)", value: 54 },
    { name: "Foodgrain 1955-56 (Mt)", value: 65.8 },
    ];

    const COLORS = ["#166534", "#22C55E", "#4ADE80", "#86EFAC", "#BBF7D0"];
    
  return (
    <div className="home-page">
      <Reveal>
<section className="hero">
        <h1>Climate Change, Technology Gaps, and Farmer Distress in India</h1>
        <p className="subtitle">
          Real-World Challenges in Indian Agriculture and the Need for Data-Driven Systems
        </p>
      </section>
      <section className="section">
        <h2>Introduction</h2>
        <p>
          Indian agriculture is highly dependent on 
            monsoons, with about 60% of the cultivated 
            area being rain-fed. However, climate change 
            has disrupted this dependence, causing 
            erratic rainfall, extended droughts, increased 
            incidences of pest and diseases in crops and 
            severe floods. For instance, in 2022, India’s 
            agricultural sector experienced a significant 
            setback when excessive rainfall destroyed 
            over 18% of the rice crop in major producing 
            states. Similarly, heatwaves in March 2022 
            reduced wheat yields by nearly 15% in 
            northern India.
            Productivity issues further compound the 
            problem. The yield of staple crops like rice 
            and wheat in India is significantly lower 
            than global averages. For instance, rice 
            yields in India average 2.7 tons per hectare 
            compared to China’s 4.7 tons. A report by 
            the Food and Agriculture Organization 
            (FAO) highlights that soil degradation impacts nearly 30% of India’s agricultural 
            land, primarily due to overuse of chemical 
            fertilizers, unsustainable farming practices, 
            and deforestation. According to the Indian 
            Council of Agricultural Research (ICAR), 
            this degradation results in an annual loss of 
            approximately 13.4 million tons of essential 
            nutrients from the soil, further exacerbating 
            the productivity gap. 
            After engaging in numerous interactions 
            with farmers, it is evident that they do not 
            prefer using excessive quantities of pesticides 
            and fertilizers on their fields. However, 
            adverse climatic conditions often compel 
            them to resort to such measures to combat 
            unexpected infestations of pests, diseases, 
            or to support crop growth under extreme 
            weather conditions. This practice not only 
            harms the environment but also significantly 
            escalates the cost of farming. The rapid 
            growth of the Indian pesticide industry in recent years underscores the increasing dependency on such inputs, reflecting the challenging 
            circumstances faced by the farming community. 
            Farmers also employ traditional methods like crop diversification and switching to drought
            resistant varieties. Government schemes like Pradhan Mantri Fasal Bima Yojana (PMFBY) 
            provide crop insurance, and subsidies on inputs like seeds and fertilizers offer some relief 
            but seems insufficient. However, the efforts often fall short of addressing systemic challenges, 
            leaving farmers vulnerable to rising risks and financial distress. According to the National 
            Sample Survey Office (NSSO), nearly 52% of agricultural households in India are indebted, 
            with average outstanding loans exceeding ₹2.5 lakh per household. The condition is even worst 
            in some states where soil productivity is low, or farm size is small. 
            To address the uncertainties posed by climate change and empower farmers to tackle these 
            formidable challenges, it is crucial to equip them with advanced tools and technologies. 
            Artificial Intelligence (AI) has the potential to serve as a transformative force, placing powerful, 
            data-driven solutions directly into the hands of farmers. 
        </p>
      </section>

      <section className="section">
        <h2>High Dependence on Monsoon and Climate Vulnerability</h2>

        <p>
          Nearly <b>60% of India’s cultivated area is rain-fed</b>, making agricultural
          production highly dependent on monsoon rainfall. Climate change has
          severely disrupted this dependence, resulting in erratic rainfall,
          prolonged droughts, frequent floods, and rising temperatures.
        </p>

        <p>
          In <b>2022</b>, excessive and uneven rainfall destroyed over
          <b> 18% of the rice crop</b> in major producing states.
          In the same year, <b>heatwaves in March reduced wheat yields
          by nearly 15%</b> across northern India, significantly affecting
          food supply and farmer income.
        </p>

        <div className="image-grid">
          <img
            src="https://bl-i.thgim.com/public/news/c9g7k8/article65693299.ece/alternates/LANDSCAPE_1200/flood.jpg"
            alt="Flood damage to crops in India"
          />
          <img
            src="https://bfmcms.s3.ap-southeast-1.amazonaws.com/websiteimages/people-planet-profit/2023-05-30_heatwaves-2023-impact-agriculture-food-security/og_ec37e3fd-d4a4-4ee7-a042-d6ad8a5658ab.png"
            alt="Heatwave impact on agriculture"
          />
        </div>
      </section>
      </Reveal>
      <Reveal>
<section className="section">
        <h2>Low Productivity and Yield Gap</h2>

        <p>
          Productivity challenges further compound climate risks.
          The yield of staple crops such as rice and wheat in India
          remains significantly lower than global averages.
          For instance, <b>rice yields in India average 2.7 tonnes per hectare</b>,
          compared to <b>4.7 tonnes per hectare in China</b>.
        </p>

        <p>
          According to the <b>Food and Agriculture Organization (FAO)</b>,
          soil degradation affects nearly <b>30% of India’s agricultural land</b>.
          Overuse of chemical fertilizers, unsustainable farming practices,
          and deforestation have accelerated nutrient depletion.
          The <b>Indian Council of Agricultural Research (ICAR)</b> estimates
          an annual loss of <b>13.4 million tonnes of essential soil nutrients</b>.
        </p>

        <div className="image-grid">
          <img
            src="https://blog.resourcewatch.org/wp-content/uploads/2018/08/Gulleys-1.jpg"
            alt="Degraded agricultural soil in India"
          />
          <img
            src="https://www.financialexpress.com/wp-content/uploads/2018/02/farmer-pti-3.jpg"
            alt="Low productivity farming conditions"
          />
        </div>
      </section>

      <section className="section">
        <h2>Rising Dependence on Pesticides and Fertilizers</h2>

        <p>
          Field-level interactions with farmers reveal that most do not
          prefer excessive use of pesticides or fertilizers.
          However, unpredictable climate conditions often force farmers
          to rely heavily on chemical inputs to manage sudden pest outbreaks,
          crop diseases, or heat stress.
        </p>

        <p>
          This dependence has increased production costs and caused
          environmental harm. The rapid growth of India’s pesticide industry
          reflects the growing vulnerability of farmers rather than improved
          crop resilience.
        </p>

        <div className="image-grid">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
            alt="Pest infestation in crops"
          />
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            alt="Chemical pesticide usage in farming"
          />
        </div>
      </section>

      <section className="section">
        <h2>Existing Coping Mechanisms and Their Limitations</h2>

        <p>
          Farmers adopt traditional coping strategies such as crop
          diversification and drought-resistant varieties.
          Government schemes like <b>Pradhan Mantri Fasal Bima Yojana (PMFBY)</b>
          and subsidies on seeds and fertilizers provide partial relief.
          However, these measures often fail to address systemic risks.
        </p>

        <p>
          According to the <b>National Sample Survey Office (NSSO)</b>,
          nearly <b>52% of agricultural households in India are indebted</b>,
          with average outstanding loans exceeding <b>₹2.5 lakh per household</b>.
          Financial stress is particularly severe in regions with small landholdings
          and degraded soil productivity.
        </p>
      </section>

      <section className="section">
            <h2>Technology Gap in Indian Agriculture</h2>

            <p>
            Artificial Intelligence (AI) refers to the 
                simulation of human intelligence in machines 
                that are designed to think, learn, and make 
                decisions. These systems analyze vast 
                amounts of data to recognize patterns, solve 
                problems, and make predictions, enabling 
                efficiency and precision across various fields, 
                including agriculture.
            </p>

            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agriculture continues to rely heavily on manual observation,
            delayed interventions, and generalized advisories.
            India’s irrigation efficiency remains around <b>38%</b>,
            highlighting inefficiencies in water management and monitoring systems.
            W hile human minds excel at many tasks, 
                they have inherent limitations in accurately 
                assessing and predicting complex patterns. 
                In recent years, advancements in satellite 
                technology, Geographic 
                Information 
                Systems (GIS), and other innovations have 
                revolutionized fields like communication, 
                defense, and healthcare. However, the adoption of these technologies in agriculture has remained comparatively limited, despite its 
                vast potential to address critical challenges faced by farmers. <br />
                <b>Its applications span diverse sectors:</b> <br />
                ➢ Healthcare: AI enhances diagnostics, predicts patient outcomes, and streamlines treatment 
                plans. <br />
                ➢ Finance: It powers fraud detection, automated trading, and risk assessment. <br />
                ➢ Transportation: Autonomous vehicles, traffic management, and logistics optimization rely 
                heavily on AI. <br />
                ➢ Education: Personalized learning platforms and virtual tutors are transforming education 
                delivery. <br />
                AI’s versatility and ability to process vast amounts of data in real time make it particularly 
                valuable for addressing complex problems in agriculture. <br />
            </p>
        </section>
      </Reveal>

      

        <section className="section">
          <Reveal>
          <h2>Artificial Intelligence and IoT: Emerging but Underutilized Tools</h2>

              <p>
                  Artificial Intelligence (AI) refers to computational systems capable of
                  learning from data, identifying complex patterns, and making predictive
                  or prescriptive decisions without continuous human intervention.
                  In agriculture, AI is increasingly combined with the Internet of Things
                  (IoT), satellite imagery, remote sensing, and Geographic Information Systems (GIS)
                  to provide real-time, location-specific insights into farming conditions.
              </p>

              <p>
                  IoT devices such as soil moisture sensors, temperature and humidity sensors,
                  automated weather stations, and smart irrigation controllers continuously
                  collect field-level data. When integrated with AI algorithms, this data
                  enables farmers to monitor soil health, crop growth stages, water stress,
                  pest infestations, and nutrient deficiencies with unprecedented accuracy.
                  Such systems help shift agriculture from experience-based decision-making
                  to data-driven precision farming.
              </p>

              <div className="image-grid">
                  <img
                  src="https://img.freepik.com/premium-photo/closeup-iot-sensor-embedded-soil-thriving-agricultural-field-sensor-i_996093-2869.jpg?w=2000"
                  alt="IoT sensors in agriculture field"
                  />
                  <img
                  src="https://blog.dreamztech.com/wp-content/uploads/2018/09/iot-agriculture-1.jpg"
                  alt="Smart agriculture monitoring system"
                  />
                  <img
                  src="https://eos.com/wp-content/uploads/2019/02/precision-agriculture-machines-in-field.jpg"
                  alt="Precision farming technology"
                  />
              </div>
          </Reveal>
          <Reveal>
            <p>
                    Globally, the impact of AI and IoT in agriculture has been significant.
                    In the United States, precision agriculture technologies have improved
                    crop yields by approximately <b>10–15%</b> while reducing input costs.
                    Israel, a country facing extreme water scarcity, has successfully deployed
                    AI-driven drip irrigation and sensor-based water management systems,
                    improving water-use efficiency by nearly <b>25–30%</b>.
                    These successes demonstrate the potential of intelligent technologies
                    to enhance productivity while conserving natural resources.
                </p>

                <p>
                    In contrast, the adoption of AI and IoT in Indian agriculture remains limited
                    and uneven. Although pilot projects and startup-driven innovations exist,
                    widespread deployment is constrained by structural challenges.
                    Small landholdings, high initial investment costs, limited access to
                    digital infrastructure, and inadequate technical awareness among farmers
                    continue to slow adoption. According to government estimates, rural
                    broadband penetration in India is still below <b>40%</b>, restricting
                    the effectiveness of cloud-based AI solutions.
                </p>

                <div className="image-grid">
                    <img
                    src="https://th.bing.com/th/id/OIP.iUSjB4xhkFmsx42vOccwFQHaDm?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Indian farmer using mobile technology"
                    />
                    <img
                    src="https://tse3.mm.bing.net/th/id/OIP.W9VwDyFpYk3VGcSNj8usMAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Drone use in agriculture India"
                    />
                    <img
                    src="https://agentialai.com/wp-content/uploads/2024/10/1520242454652.jpeg"
                    alt="Satellite monitoring of crops"
                    />
                </div>

                <p>
                    Climate change has further amplified the relevance of AI and IoT in Indian
                    agriculture. Erratic rainfall patterns, extended droughts, heatwaves,
                    and increasing pest outbreaks demand early-warning systems and
                    predictive analytics. AI models trained on historical climate data,
                    satellite observations, and real-time sensor inputs can forecast
                    extreme weather events, disease outbreaks, and yield losses well in advance.
                    Such predictive capabilities allow farmers to take preventive measures,
                    reducing both crop loss and financial risk.
                </p>

                <p>
                    Several initiatives in India highlight the growing role of AI.
                    AI-powered advisory platforms provide localized weather forecasts,
                    pest alerts, and crop recommendations in regional languages.
                    Image-recognition tools are being used to detect leaf diseases,
                    nutrient deficiencies, and crop stress using simple smartphone photographs.
                    Drone-based imaging and AI analytics are also transforming large-scale
                    crop monitoring, especially for rice, wheat, and cotton.
                </p>

                <div className="image-grid">
                    <img
                    src="https://tse1.mm.bing.net/th/id/OIP.potDWsf8OUFVASeU4TYAxQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="AI-based crop disease detection"
                    />
                    <img
                    src="https://img.freepik.com/premium-photo/closeup-smart-irrigation-system-detailed-image-smart-irrigation-system-garden-showing-sensors-water-distribution-photography_1288204-5844.jpg"
                    alt="Smart irrigation system"
                    />
                    <img
                    src="https://img.freepik.com/premium-photo/illustration-precision-agriculture-system-that-uses-iot-sensors-monitor-soil-conditions-crop-health-large-field-data-is-displayed-digital-dashboard-foreground_996093-1867.jpg?w=1480"
                    alt="Digital agriculture dashboard"
                    />
                </div>
          </Reveal>
          <Reveal>
            <p>
                    Despite these advancements, AI and IoT technologies remain largely
                    underutilized relative to their potential. Most existing solutions
                    are fragmented, focusing on isolated problems such as weather forecasting
                    or pest detection, rather than offering an integrated end-to-end
                    decision-support system. Furthermore, affordability remains a major
                    concern for smallholder farmers, who constitute more than <b>85%</b>
                    of India’s farming population.
                </p>

                <p>
                    To unlock the full potential of AI and IoT in agriculture, a holistic
                    ecosystem approach is required. This includes affordable sensor networks,
                    robust rural internet connectivity, farmer training programs,
                    and government-backed incentives for technology adoption.
                    When implemented inclusively, AI and IoT can serve as powerful enablers
                    of climate resilience, sustainable resource use, and improved farmer incomes,
                    transforming Indian agriculture into a more adaptive and future-ready sector.
                </p>
          </Reveal>
    </section>
    <Reveal>
      <section className="section conclusion">
        <h2>Conclusion</h2>
        <p>
          AI presents a transformative opportunity to 
            address the challenges of Indian agriculture, 
            from climate resilience to market efficiency. 
            By reducing resource wastage, enhancing 
            productivity, and optimizing market 
            linkages, AI can drive long-term benefits for 
            farmers and the environment. By integrating 
            AI into farming practices, India can enhance 
            productivity, reduce resource wastage, 
            and build a more sustainable agricultural 
            ecosystem. However, realizing this potential 
            requires substantial investments in 
            infrastructure, digital literacy, and financial 
            support for smallholder farmers. Learning 
            from successful examples in countries like 
            Israel and the U.S., India can craft a roadmap 
            to empower its farmers, ensuring food 
            security and economic stability for millions. 
            Policymakers, technologists, and stakeholders must collaborate to create farmer-centric AI 
            solutions, foster public-private partnerships, 
            and ensure equitable access to technology. 
            Together, these efforts can unlock the 
            full potential of AI, transforming Indian 
            agriculture into a model of innovation and 
            resilience.
            T
            his is the time for policymakers, 
            technologists, researchers, and aggrotech 
            innovators to join forces in unlocking the 
            transformative potential of AI for agriculture. 
            T
            hrough collaborative efforts, we can design 
            inclusive, scalable, and actionable solutions 
            tailored to the needs of farmers. These 
            initiatives should aim to make AI accessible 
            and effective, fostering a resilient, productive, 
            and sustainable future for the agricultural 
            sector.
        </p>
      </section>
        <section className="section">
        <h2>Real Data & Indicators (India)</h2>
        <p>
          The charts and table below use published figures: rice yields (USDA/IPAD),
          soil degradation estimates, irrigation-efficiency assessments and
          historical foodgrain numbers. See the References section for exact sources.
        </p>

        <h3>India — Rice yield (tons / hectare)</h3>
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={riceYieldSeries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="yield" stroke="#166534" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <h3>Rice yield — India vs China (reference)</h3>
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={compYields}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" interval={0} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="yield">
                {compYields.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <h3>Key indicators & historical foodgrain (table)</h3>
        <div className="table-wrapper" style={{ maxWidth: 900 }}>
          <table>
            <thead>
              <tr>
                <th>Indicator</th>
                <th>Value</th>
                <th>Note / source</th>
              </tr>
            </thead>
            <tbody>
              {indicators.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.value}</td>
                  <td>
                    {idx === 0 && "Soil degradation ~30% (national assessments)."}
                    {idx === 1 && "Irrigation efficiency ≈ 38% (major/medium projects)."}
                    {idx >= 2 && "Foodgrain historical figures (early Five-Year Plans)."}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 12 }}>
          Notes: data are intended for research and presentation use. For drilling into the
          original tables and time series, refer to the sources in References below. The
          rice time series is from the USDA/IPAD country summary for India; China yield is
          a representative FAO figure used for regional comparison. 
        </p>
        </section>
    </Reveal>
    <Reveal>
    <section className="reference-section">
        <h2>References & Sources</h2>
        <ol className="reference-list">

            <li>
            Food and Agriculture Organization of the United Nations (FAO).  
            <a
                href="https://www.fao.org/home/en"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://www.fao.org
            </a>
            </li>

            <li>
            Indian Council of Agricultural Research (ICAR).  
            <a
                href="https://icar.org.in"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://icar.org.in
            </a>
            </li>

            <li>
            Ministry of Agriculture & Farmers Welfare, Government of India.  
            <a
                href="https://agricoop.gov.in"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://agricoop.gov.in
            </a>
            </li>

            <li>
            Department of Agriculture & Farmers Welfare (DAC&FW).  
            <a
                href="https://farmer.gov.in"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://farmer.gov.in
            </a>
            </li>

            <li>
            National Sample Survey Office (NSSO), Government of India.  
            <a
                href="https://www.mospi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://www.mospi.gov.in
            </a>
            </li>

            <li>
            United States Department of Agriculture (USDA), Foreign Agricultural Service – 
            International Production Assessment Division (IPAD).  
            <a
                href="https://ipad.fas.usda.gov"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://ipad.fas.usda.gov
            </a>
            </li>

            <li>
            Planning Commission / NITI Aayog – Five Year Plan Documents.  
            <a
                href="https://www.niti.gov.in"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://www.niti.gov.in
            </a>
            </li>

            <li>
            Government of India. <em>Economic Survey of India</em>.  
            <a
                href="https://www.indiabudget.gov.in/economicsurvey/"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://www.indiabudget.gov.in/economicsurvey/
            </a>
            </li>

            <li>
            JUST AGRICULTURE Magazine. <em>Artificial Intelligence in Indian Agriculture</em>, 
            February 2025 Issue.
            </li>

            <li>
            Horton, D. & Mackay, R. (2005). Using evaluation to enhance institutional learning and change: 
            Experiences with agricultural research and development. 
            <em>Agricultural Systems</em>, 78, 127–142.
            </li>

            <li>
            Kumar, D. (2000). <em>Science and the Raj</em>. Oxford University Press.
            </li>

            <li>
            Mruthyunjaya & Ranjitha, P. (1998). The Indian Agricultural Research System: Structure, 
            Policy Issues and Future Orientation. <em>World Development</em>, 26(6), 1089–1101.
            </li>

            <li>
            Singh, B. D. (2001). Organisation for Crop Improvement in India. In: 
            <em>Plant Breeding: Principles and Methods</em>. Kalyani Publishers, Ludhiana.
            </li>

            <li>
            National Mission for Sustainable Agriculture (NMSA), Government of India.  
            <a
                href="https://nmsa.dac.gov.in"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://nmsa.dac.gov.in
            </a>
            </li>

            <li>
            Skymet Weather Services – Agricultural Weather Advisory Platforms.  
            <a
                href="https://www.skymetweather.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://www.skymetweather.com
            </a>
            </li>

            <li>
            CropIn Technology Solutions Pvt. Ltd. – AI in Agriculture Case Studies.  
            <a
                href="https://www.cropin.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://www.cropin.com
            </a>
            </li>

            <li>
            DeHaat – AI-enabled Agri Supply Chain Platform.  
            <a
                href="https://agrevolution.in"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://agrevolution.in
            </a>
            </li>

        </ol>
        </section>
    </Reveal>
    </div>
  );
}
