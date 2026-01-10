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
} from "recharts";


const croppingIntensityData = [
  { year: "2017-18", intensity: 148.54 },
  { year: "2018-19", intensity: 147.04 },
  { year: "2019-20", intensity: 147.84 },
];

const gsdpContributionData = [
  { year: "1999-00", value: 32.24 },
  { year: "2010-11", value: 19.22 },
  { year: "2019-20", value: 20.56 },
  { year: "2020-21", value: 22.32 },
  { year: "2021-22", value: 22.07 },
];

const issueShareData = [
  { name: "Floods", value: 35 },
  { name: "Irrigation", value: 20 },
  { name: "Marketing", value: 18 },
  { name: "Infrastructure", value: 15 },
  { name: "Land Fragmentation", value: 12 },
];

const COLORS = ["#166534", "#22C55E", "#4ADE80", "#86EFAC", "#BBF7D0"];


export default function Home() {
  return (
    <div className="home-page">
      <Reveal>
        <section className="hero">
        <h1>Agricultural Scenario in Assam</h1>
        <p className="subtitle">Issues and Challenges in the 21st Century</p>
      </section>

      

      <section className="section">
        <h2>Introduction</h2>
        <p>
          Agriculture is the backbone of rural India and the primary livelihood
          source for the majority of Assam’s population. Despite its importance,
          the sector faces structural, environmental, and economic challenges
          that restrict productivity and farmer income.
          Without agriculture, living will be difficult 
          because agriculture is responsible for providing the most basic need in human life which is food1. In rural India 
          agriculture is the main foundation of the Indian economy. But, unfortunately, there have been many factors 
          hindering the success of agriculture in the country.<b> Agriculture is said to be the main source of income for the 
          farmers or people living in the rural India. Agriculture is the key to solve rural poverty as because the 
          development of agriculture can play direct role in rural poverty alleviation.</b> Since, the majority of rural poor 
          depend on agricultural activity for providing the main source of their income and employment. Rural 
          development allows the improvement of rural communities’ quality of life and prevents the population of 
          regions affected by rural exodus. The economic stability achieved by agriculture may be fundamental for the 
          growth of a nation 
          Being an agrarian based economy, the large number of rural people in India in general and Assam in 
          particular are mostly dependent on agriculture. It is the chief role of earning income in the economy of Assam. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Agricultural sector support more than 75 percent of the state directly or indirectly providing employment of 
          more than 53 percent of the total workforce.</b> Over a course of time, agricultural sector has been facing several 
          issues and challenges. Against this background, the present paper examine the various challenges in agricultural 
          sector in the rural economy of Assam. Among the various issues and challenges lack information on finance and 
          marketing tactics to get the best prices for their output, poor infrastructure, low use of technologies and best 
          134 | Page 
          *Corresponding Author: Dr. Phanindra Kalita                                                                                          
          Agricultural Scenario in Assam in the 21st Century: Issues and Challenges 
          farming techniques, <u><b>decrease of soil fertility</b></u> due to over fertilization and sustained pesticides used are some 
          leading contributors to low agricultural development in Assam. Again, ineffective minimum support prices 
          (MSP) system, adverse terms of trade, rural indebtness, and inefficient value in agriculture are also among those 
          challenges in the agricultural sector of Assam. Therefore, this paper is an effort to highlight some of the acute 
          agricultural problems facing in the rural Assam and will try to make some suggestions for its solution. 
        </p>
      </section>
      </Reveal>
      <Reveal>
<section className="section">
        <h2>Objectives</h2>
        <p>
          Main objectives of this study are as follows: <br />
          a&#41; To study the current agricultural scenario of rural Assam. <br />
          b&#41; To search out main problems and challenges of agriculture in Assam. <br />
        </p>
        <br />
      <section className="section">
        <h2>Methodology</h2>
        <p>
          <b>
            The methods of the study are descriptive and analytical in nature. Besides, data for this study are 
            primarily collected from the reliable secondary sources viz., web sources, Government reports, periodicals, 
            published books, articles, journals, newspapers and so on. 
          </b>
        </p>
      </section>
      </section>
      <section className="section">
        <h2>Structural Characteristics of Agriculture in Assam</h2>

        <h3>Dominance of Small and Marginal Farmers</h3>
        <p>
          One of the most prominent structural features of agriculture in Assam
          is the dominance of small and marginal farmers. More than 85 percent
          of farming households operate on land holdings smaller than 0.36
          hectares, while the average operational holding size is about 1.10
          hectares. Such fragmentation restricts mechanization and adoption of
          modern farming techniques.
        </p>

        <h3>Cropping Pattern and Agricultural Diversity</h3>
        <p>
          Agriculture in Assam is largely rice-centric. Although crops such as
          maize, pulses, oilseeds, potato, and wheat are grown, their share
          remains limited. <b> Tea plantation agriculture plays a vital role,
          contributing more than half of India’s total tea production.</b>
        </p>
      </section>
      </Reveal>
      <Reveal>
<section className="section">
        <h2>Economic Contribution of Agriculture</h2>

        <h3>Role in Employment Generation</h3>
        <p>
          Agriculture provides livelihood support to nearly 70 percent of the
          population in Assam. More than 53 percent of the total workforce is
          engaged in agriculture and allied activities, making it the largest
          employment-generating sector.
        </p>

        <h3>Contribution to State Economy</h3>
        <p>
          The contribution of agriculture to Assam’s Gross State Domestic
          Product (GSDP) declined from 32.24 percent in 1999–2000 to 19.22
          percent in 2010–11. Although there has been a marginal recovery in
          recent years, overall performance remains weak.
        </p>
      </section>
      <section className="section">
              <h2>Agricultural Landscape of Assam</h2>
              
              <div className="image-grid">
                <img src="https://tse3.mm.bing.net/th/id/OIP.iAuT9s2MELT1hfGKdZaa1QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Agriculture Assam" />
                <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b" alt="Rice fields" />
                <img src="https://tse1.explicit.bing.net/th/id/OIP.ZX28_gsAiyMGxmmsoTZ_uQHaES?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Tea garden" />
                <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae" alt="Floods in Assam" />
              </div>
      </section>
      </Reveal>
      <Reveal>
<section className="section">
        <h2>Issues and Challenges of Agriculture in Assam</h2>

        <h3>Marketing Problem</h3>
        <p>
           One of the main challenges for farmers in Assam is the issue of market. Farmers sell their 
            products to the nearest dealer, in most cases immediately after harvesting when the price is at the lowest instead 
            of trying to find the best markets for their products. It happens basically due to geographical isolation of the 
            remote rural areas where the transportation and communication system is very poor. So far as the role of the 
            government in this regard are more focused on collecting revenues (in the form of tax on daily basis from 
            weekly markets or through check-gates) than facilitating proper marketing system for agricultural products in 
            rural Assam (Bhuyan, 1990). 
        </p>

        <h3>Water Supply</h3>
        <p>
           Uncertainty, water supply is one of the main problems facing in rural agriculture. After about 
            more than 70 years of the Indian independence, there is lack of infrastructure in irrigation system in the rural 
            Assam which reflects the worse picture of the agricultural development. The Government schemes in regard to 
            irrigation system is found inadequate in most cases due to corruption and low standard of infrastructure. Again, 
            these are found inoperative in most of the times. Therefore, Agriculture in India is largely depends on monsoon 
            and Assam too. As a result production of food grains fluctuates year after year. 
        </p>

        <h3>Natural Calamities</h3>
        <p>
          Floods and drought are major challenges in Assam which are considered as the principal 
          natural disasters faced by Assamese farmers every year. The Brahmaputra and its tributaries are the principal 
          sources of flood. The loss of crops, livestock, and houses, cultivable land due to landslide and of course loss of 
          human lives are common during yearly flood which estimated losses of millions of rupees every year. The flood 
          prone area of the state by Rastriya Barh Ayog (RBA) is 31.05 lakh hectares against the total area of the state i.e. 
          78.523 lakh hectares. The average annual area affected by flood is 9.31 lakh hectares. The flood prone area of 
          the state is four times than the national mark of the flood prone area of the country.  
        </p>

        <h3>Lack of Infrastructure:</h3>
        <p>
          Infrastructure plays a very vital role in every single step right from supply of input to 
          post-harvest management. Investment in infrastructure increases the productivity in agriculture and reduced the 
          losses, which in turn increases the income generation. It includes basic infrastructure such as roads, electricity, 
          pure drinking water, irrigation facilities, hospitals and schools etc. which are lacking in the rural areas. 
          Agriculture and rural development can address the root causes of migration including rural poverty, food 
          insecurity, inequality, unemployment, lack of social protection as well as natural resource depletion due to 
          environmental degradation and climate change.
        </p>

        <h3>Population Explosion</h3>
        <p>
          As we all know that, land is limited and has reached almost the level where more 
          expansion in cultivated area is not possible. The growth in population creates immense pressure on our 
          cultivable land which affects adversely on rural agrarian society. The farm size in India is declining due to 
          population growth especially due to illegal immigration and illegal encroachments in some parts of Assam and 
          competition for land.
        </p>
        <h3>Non-Economic factors</h3>
        <p>
          Illiteracy, lack of knowledge on the challenging economic conditions, traditional 
          mindset, and prejudiced cultural values are some of the principal non-economic factors that hinder agricultural 
          development in rural Assam. These factors are mostly socio-cultural, which may take time to bring changes to 
          the society and these factors may adversely affect the agricultural sector in the region.  
        </p>
        <h3>Agricultural backwardness</h3>
        <p>
          More than half of the total populations in Assam depend on agriculture for their 
          livelihood. But the contribution of agricultural sector to Gross State Domestic Product (GSDP) has been 
          declined from 32.24% in 1999-2000 to 19.22% in 2010-11. Again, the contribution of agricultural sector to total 
          GSDP of Assam increases from 20.56% in 2019-20 to 22.32% in 2020-21. After that, its contribution was 
          decreases to 22.07% in the year 2021-22. As per the 2001 census, 74.58% population was engaged in 
          agricultural activities while in 2011 census, 72.58% population was engaged in agricultural sector (Nath et.al, 
          2022). Poor technology and lack of skills are responsible for inadequate agricultural production in rural Assam.
        </p>
        <br />
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Apart from the above issues and challenges there are again more challenges in agriculture of rural 
        Assam like, capital deficiency, lack of quality seeds, lack of research and development (R & D), lack of 
        adequate storage and processing facilities and so on. Moreover, agricultural crop productivity has been greatly 
        affected by various pests; the excessive use of chemical has led to a multitude of effects including increased 
        residues in plants, insect resistance and contamination of soil, water and air.</p>
      </section>
      </Reveal>
      <Reveal>
<section className="section">
        <h2>Land Utilization Statistics (2017–2020)</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Gross Cropped Area (Lakh ha)</th>
                <th>Net Area (Lakh ha)</th>
                <th>Cropping Intensity (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2017–18</td>
                <td>40.45</td>
                <td>27.23</td>
                <td>148.54</td>
              </tr>
              <tr>
                <td>2018–19</td>
                <td>40.04</td>
                <td>27.23</td>
                <td>147.04</td>
              </tr>
              <tr>
                <td>2019–20</td>
                <td>40.05</td>
                <td>27.09</td>
                <td>147.84</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Trends and Data Analysis</h2>
        <h3>Cropping Intensity Trends Over Time</h3>
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={croppingIntensityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[146, 149]} />
            <Tooltip />
            <Line
                type="monotone"
                dataKey="intensity"
                stroke="#166534"
                strokeWidth={3}
                dot={{ r: 5 }}
            />
            </LineChart>

          </ResponsiveContainer>
        </div>
        <br />
        <h3> Contribution of Agriculture to GSDP (Assam)</h3>
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={gsdpContributionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#22C55E" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <h3>Major Agricultural Challenges Faced by Farmers</h3>
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie data={issueShareData} dataKey="value" nameKey="name" outerRadius={110} label>
                {issueShareData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
      </Reveal>
      <Reveal>
<section className="reference-section">
        <h2>References</h2>
        <ol className="reference-list">
          <li>
            Bhuyan, S. (1990). <em>Agricultural Marketing</em>, 33(1).  
            <a
              href="https://scholar.google.com/scholar?q=Bhuyan+S+1990+Agricultural+Marketing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source
            </a>
          </li>

          <li>
            Das, M. & Chanu, A. I. (2014). <em>Global Journal of Finance and Management</em>.  
            <a
              href="https://scholar.google.com/scholar?q=Das+Chanu+2014+Global+Journal+of+Finance+and+Management"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source
            </a>
          </li>

          <li>
            Dhar, P. K. (1994). <em>The Economy of Assam</em>.  
            <a
              href="https://scholar.google.com/scholar?q=Dhar+P+K+The+Economy+of+Assam"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source
            </a>
          </li>

          <li>
            Government of Assam (2020–21). <em>Economic Survey of Assam</em>.  
            <a
              href="https://des.assam.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official website
            </a>
          </li>

          <li>
            Nath, H., Gogoi, S., & Saikia, D. (2022). <em>International Journal of Food and Nutritional Sciences</em>, 11(5).  
            <a
              href="https://scholar.google.com/scholar?q=Nath+Gogoi+Saikia+2022+IJFANS"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source
            </a>
          </li>
        </ol>
      </section>

        <br />
      <section className="section conclusion">
        <h2>Suggestions & Conclusion</h2>
        <p>
          Modernization of agriculture through improved irrigation,
          mechanization, infrastructure development, and effective market
          access is essential. Adoption of modern technology and crop
          diversification can significantly enhance rural livelihoods in
          Assam.
        </p>
      </section>
      </Reveal>
    </div>
  );
}
