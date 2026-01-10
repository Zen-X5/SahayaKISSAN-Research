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

const foodGrainData = [
  { year: "1950-51", value: 54 },
  { year: "1955-56", value: 65.8 },
];

const researchSystemData = [
  { name: "ICAR Institutes", value: 49 },
  { name: "National Research Centres", value: 17 },
  { name: "Project Directorates", value: 25 },
  { name: "AICRPs & AINPs", value: 79 },
  { name: "KVKs", value: 607 },
  { name: "SAUs", value: 52 },
];

const researchFocusData = [
  { name: "Crop Improvement", value: 30 },
  { name: "Irrigation & Water", value: 20 },
  { name: "Pest & Disease", value: 20 },
  { name: "Soil & Nutrition", value: 15 },
  { name: "Technology Transfer", value: 15 },
];

const COLORS = ["#166534", "#22C55E", "#4ADE80", "#86EFAC", "#BBF7D0", "#DCFCE7"];

export default function IndiaResearch() {
  return (
    <div className="home-page">
      <Reveal>
<section className="hero">
        <h1>Agricultural Research in India</h1>
        <p className="subtitle">
          Evolution from Colonial Era to Post-Independence
        </p>
      </section>

      <section className="section">
        <h2>Introduction</h2>
        <p>
          Agriculture, as the backbone of Indian economy, plays the most crucial role in the 
            socioeconomic sphere of the country. Indian agriculture is a diverse and extensive sector 
            involving a large number of actors. It has been one of the remarkable success stories of the post
            independence era through the association of Green Revolution technologies. The Green 
            Revolution contributed to the Indian economy by providing food self-sufficiency and improved 
            rural welfare. The role of national agricultural research system (the NARS) was imperative in the 
            context of Green Revolution.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India has one of the largest and institutionally most complex agricultural research systems in the 
            world. Historically, the Indian agricultural research system is the zenith of a process which 
            started in the 19th century and which resulted in the establishment of the Imperial (now Indian) 
            Council of Agricultural Research (ICAR) on the recommendation of a Royal Commission on 
            Agriculture in 1929. Since then there was a stupendous evolution of agricultural research in 
            India. 
            <br />
            <p><b>The main events in the history of agricultural research in India can be grouped into the following seven categories (Singh, 2001): <br /></b>
                1. Establishment of agriculture departments and agriculture colleges <br /> 
                2. Establishment of the imperial council of agricultural research <br />
                3. Initiation of commodity committees <br />
                4. Project for intensification of regional research on cotton, oilseeds and millets <br />
                5. Initiation of all India coordinated crop improvement projects <br />
                6. Reorganization of ICAR, and  <br />
                7. The development of agricultural universities.  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Among these, first three could be listed under the development of agriculture in the colonial era, 
                whereas the next four were prominent in the post-colonial era.
            </p>
            
        </p>
      </section>
          <section className="section">
        <h2>Background of Agricultural Research</h2>
            <p>The early development of agricultural research in India was associated with the reappearance of 
            famines. This acted as a nasty reminder of the little precedence accorded to agricultural research 
            and development in colonial India.</p>
        <h3> ESTABLISHMENT OF AGRICULTURE DEPARTMENTS & AGRICULTURAL COLLEGES </h3>
        <p>
          An elemental department of agriculture in India was started in the year 1871 in the form of 
            Department of Revenue, Agriculture and Commerce. Although the chief function of the 
            department remained revenue and there was no work on agricultural development, this did mark 
            a commencement and appreciation of the agriculture sector by the colonial government. 
            However, this initiative was not very significant. The accolade for this modest foundation goes to 
            Lord Mayo who was the fourth Viceroy of India, and to A.O. Hume who was a civilian of the 
            Bengal Civil Service and one of the founders of the Indian National Congress. Paradoxically, the 
            department was established by the Government with a view to supply cotton to the hungry textile 
            industries of Manchester, and not to feed the famine ravished India of 1877-78. Based on the 
            report of the Famine Commission, the government of India was determined to set up a central 
            Department of Agriculture controlled by the Imperial Secretariat and agriculture departments
            were to be set up in the provinces to primarily look after agricultural enquiry, agricultural 
            development and famine relief in the country. However the key duty of the agriculture 
            departments both in the centre and the provinces lingered the same that is famine relief.</p>
             <div className="image-grid">
                <img
                src="https://tse2.mm.bing.net/th/id/OIP.LH9p0SjlnrQRrEv-UxaSawHaDt?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Pusa Agricultural Research Institute, Bihar (1905)"
                />
                <img
                src="https://th.bing.com/th/id/OIP.t4lbTzON9NrMRBBR60ry_gHaEz?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Colonial agriculture practices in India"
                />
                <img
                src="https://cdn.britannica.com/69/141369-050-C293FF13/cotton-plantation-lithograph-Mississippi-Currier-Ives-1884.jpg"
                alt="Plantation research in colonial India"
                />
            </div>
            <p>
             In the 
            year 1892, an Agricultural Chemist and an Assistant Chemist were allotted to look after research 
            and teaching in India which manifested the first scientific staff in the Department of Revenue 
            and Agriculture. Eventually, an Inspector General of Agriculture was appointed to advise the 
            Imperial and the Provincial Governments on agricultural matters in 1901. An Imperial 
            Mycologist was appointed in the same year, and an Entomologist was appointed in 1903. During 
            the stern famines of 1899-1900, Lord Curzon, the then Viceroy of India, was convinced that the 
            Government of India must urgently concentrate on the agricultural sector to overcome the 
            damages caused by the famine episodes. As a consequence, an Agricultural Research Institute 
            was established in Pusa, Bihar in the year 1905. Likewise, the agriculture departments in the 
            provinces were expanded and agricultural colleges were established at Pune, Kanpur, Sabour, 
            Nagpur, Lyallpur and Coimbatore between 1901 and 1905. However, the chief function of these 
            colleges remained teaching and training and research activities could not be carried out due to 
            the lack of scientific and technical manpower and finance.  
        </p>

        <h3>ESTABLISHMENT OF THE IMPERIAL COUNCIL OF AGRICULTURAL RESEARCH (THE PRESENT DAY ICAR) </h3>
        <p>
          The Royal Commission on Agriculture, which was appointed in the year 1926, proposed that an 
            Imperial Council of Agricultural Research should be set up to endorse, direct and organize 
            agricultural research all over India. The council was supposed to guide the research activities of 
            central and provincial departments of agriculture. As per the proposal of the Royal commission 
            on Agriculture, the Government of India, Department of Education, Health and Lands set up 
            Imperial Council of Agricultural Research on 16th July, 1929. The name of the council was 
            changed from Imperial Council of Agricultural Research to Indian Council of Agricultural 
            Research in March 1947. 
        </p>
      </section>
      </Reveal>
      <Reveal>
<section className="section">
        <h2>THE COMMODITY COMMITTEE </h2>
        <p>
            Several semi-autonomous Central Commodity Committees were set up by the Ministry of Food 
            and Agriculture that were concerned with research and development activities related to specific 
            crops in British India. These committees were semi-autonomous bodies in the sense that they 
            were financed partly by the government and partly by the taxes collected on the export of the 
            concerned commodities. The Indian Central Cotton Committee was the first commodity 
            committee to be established in the year 1921 on the recommendation of the Indian Cotton 
            Committee (1917-18). The chief function of this Central Cotton Committee remained to be 
            cotton improvement with special focus on the development of improved methods of growing, 
            manufacturing and marketing of cotton. The committee achieved success in the terms that it had 
            effectively developed 70 improved varieties of cotton, and the fiber quality of Indian cotton was 
            also considerably improved. Most of the commodity committees related to specific crops had 
            their own research stations or institutes which were located in the regions where the concerned 
            crop is most widely grown. However, some other commodity committees financed research 
            schemes conducted by the State Departments of Agriculture, e.g., Spices and Cashewnut 
            Committee. The achievement by the Indian Central Cotton Committee leads to the setting up of commodity committees on crops like lac, jute, sugarcane, tobacco, coconut, oilseeds, spices and 
            cashewnut and arecanut. The Vice-President of ICAR was the President of all the commodity 
            committees. However, there was a great necessity to conduct the researches on various crops 
            within the different agroclimatic regions of the country as in the context of India, the soil and 
            climate fluctuate to a great extent from one region of the country to another. These 
            apprehensions led to the formulation of the Project for Intensification of Regional Research on 
            Cotton, Oilseeds and Millets (PIRRCOM), which was the first step in the country towards 
            coordinated approach to agricultural research. The Central Commodity Committees were later 
            abolished (beginning in 1965) and the research institutes under their control were transferred to 
            ICAR. 
        </p>

      </section>
      <section className="section">
        <h2>Agricultural Research in Colonial India</h2>

        <p>
            The provincial agricultural departments could seldom go beyond the collection of revenue data 
            and famine relief operations. No doubt, experimental farms had been established and in 1884.  
            For conducting experiments the government looked more to agricultural societies than to its own 
            agencies. The society in Calcutta (AHSI) agreed to conduct all experiments in economic 
            products. The Government of Bengal raised its grant from Rs. 2400 to Rs. 6000 per annum.  
            <br />
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The objectives of Agricultural and Horticultural Society of India (AHSI) were </b><br />
            • To obtain precise and trustworthy details as to the cost of cultivation and produce per 
            acre of fibre-bearing plants of promising character, so that the Agriculture Department 
            may be able to form a decisive conclusion as to the prospects of a profitable exploitation 
            of the plants in question. <br />
            • To secure a competitive trial of machines and processes for the extraction of the fibres.  
            <br /><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Major focus of agricultural research in colonial India was on </b> <br />
            • Cotton <br />
            • Silk <br />
            • Tea <br />
            • Indigo  <br />
            <div className="image-grid">

                <img
                    src="https://tse3.mm.bing.net/th/id/OIP.lqXrwEtvPY5UAAH-88RWZAHaJR?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Cotton cultivation during colonial India"
                />

                <img
                    src="https://img.freepik.com/premium-photo/sericulture-step-by-step-silk-production-process_810094-285.jpg?w=2000"
                    alt="Silk production and sericulture in colonial India"
                />

                <img
                    src="https://pibindia.files.wordpress.com/2017/04/05-cutting-indigo-plant-in-the-field-and-loading-carts1.jpg?w=715"
                    alt="Indigo plantation in colonial India"
                />

                <img
                    src="https://tse2.mm.bing.net/th/id/OIP.Ks0OdDyEoRk9cW6pwTirFQHaEL?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Tea plantation research in Assam during colonial era"
                />
                </div>
            The official experimental farms were obsessed with cotton. Mounting pressure from British 
            cotton tycoons had forced the Government of India to initiate a vigorous cotton improvement 
            programme. However, the earlier projects of 1840s and 1860s could not be made successful 
            mainly because of insufficient botanical knowledge or the necessary market research. Later, in 
            1890, the association of an expert botanist in cotton experiments was specifically called for. The 
            cultivation and marketing of existing varieties produced a relatively stable and acceptable return 
            to money-lenders and dealers. New and untested varieties involved different methods of 
            cultivations and great labour input, without a higher level of output or profit, and with the risk of 
            severe losses to each of these classes. <b>The last quarter of the nineteenth century saw the closure of several experimental farms.</b> But private farms patronized by cotton mills proved remunerative. 
            For example, the Government‟s Mungeli farm at Bilaspur had to be abandoned, whereas the 
            nearby Kyragarh and Nandgaon cotton farms owned by Bengal-Nagpur Cotton Mills Company 
            produced 6,00,000 lbs. The reason behind this could be perhaps because mills could procure 
            cotton by advancing seeds to cultivators who employed traditional techniques, while the exercise 
            in Mungeli failed because the government was charmed by the imported technologies and ideas. 
            The dependence on traditional knowledge proved to be beneficial for the mills. 
            Same was the story with silk manufacture which was also quite remunerative and received some 
            attention. Early research work in sericulture was conducted by W.M.H. Smith in 1814. N.G. 
            Mukherjee, an eminent scholar, was commissioned by the Government of Bengal to investigate 
            silk worm diseases in Bengal. He submitted a note on the decline of silk trade in Bengal and 
            pointed out that „while European, Japanese, Chinese silk sells at 45 francs per kilo, Bengal silk 
            sells at 32 francs‟. Mukherjee emphasized on the introduction of Pasteur‟s system to increase the 
            production of cocoons and silks and advised government to establish a sericulture laboratory. 
            However, government did not pay attention to his advice and sericulture remained a purely 
            private concern for a long period of time. At the turn of the century Ms. Tata and Sons 
            successfully started a silk firm in Bangalore for the introduction of Japanese methods of 
            agriculture.  <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tea and indigo formed major items of export. In the 1870s, A.W.Blyth established a process by 
            which it could easily be known whether the merest fragment of a plant belonged to the „theine‟ 
            class or not. However, no experiment was conducted to control the scourge of blight. Although 
            the AHSI made an attempt in this direction, it failed because of lack of funds and skilled 
            entomologists. In 1891, M.K.K. Bamber, a chemist appointed by the joint committee of the 
            Indian Tea Association and the AHSI, performed analysis of the soil and tea leaves, gave advice 
            on manures, drainage, insecticides, etc., and produced a book called “The Chemistry and 
            Agriculture of Tea”.  The establishment of a permanent tea research station at Toclai, Assam 
            highlights the progress of tea research in colonial India. Almost the same thing happened in the 
            case of indigo. Indian indigo remained unrivalled till the end of the nineteenth century when 
            Germany perfected its synthetic counterpart. In early 1899, the Government of India deputed its 
            agricultural chemist J.W.Leather, to tour the indigo districts of north Bihar. An indigo 
            experimental farm was started at Dalsinghsarai in July the same year. The interests of the indigo 
            lobby were at work behind the creation of the Pusa Agricultural Research Institute. Pusa was 
            selected as the site because of its proximity to the plantations of north Bihar. 
            Botanical experiments were vital for plantation work. A horde of both amateur and professional 
            botanists had been active since the early colonial period in India. However, the early history of 
            botanical works in India shows that except for ferns, no special attempt was ever made to 
            systematically survey the cryptogamic vegetation of the country.
        </p>
      </section>
      </Reveal>
      <Reveal>
<section className="section">
        <h2>AGRICULTURAL RESEARCH IN POST-COLONIAL INDIA  </h2>
        <p>
            Since independence, there has been a substantial growth in the Indian NARS. ICAR is the chief 
            public body at the national level for synchronizing, directing, and endorsing agricultural research 
            and education in the country. Likewise, State Agricultural Universities are responsible for doing the same at the state level. After independence, agricultural research was given much emphasis 
            which in turn led to increased agricultural production and near self-sufficiency in food grains in 
            the country. <br />
            <h3>DEVELOPMENT OF AGRICULTURAL UNIVERSITIES </h3>
            <p>
                The very fact that in 1948, there were only seventeen agricultural colleges in the country shows 
                that before independence, higher education in agriculture was almost ignored. These agricultural 
                colleges were under the control of Director, Department of Agriculture of the respective states. 
                However, colleges for animal husbandry, governed by the Director, Animal Husbandry of the 
                concerned states were separate from those for agriculture. Research and extension were the 
                responsibility of the agriculture and the animal husbandry departments of the states. At that time, 
                the organization, staffing patterns, pay scales of teachers and financial support for research and 
                other activities were not appropriate for a first grade education and training in agriculture. 
                During the years 1948-49, the University Education Commission headed by Dr. S. 
                Radhakrishnan, suggested that the country should focus on the establishment of rural 
                universities. Major H.S. Singh and Mr. A.N.Jha (Chief Secretary and Development 
                Commissioner, U.P.) visited Land-Grant Universities of United States in 1950 and after coming 
                back, advised the then Chief Minister of U.P., Pandit Govind Ballabh Pant, to set up such a 
                university in U.P. The chief minister accepted their recommendation. This event may be 
                regarded as the one, which led to the initiation of agricultural universities in the country. In 1955, 
                the first Joint Indo-American Team was set up. The team suggested the founding of rural 
                universities in each of the states in India. Accordingly, the team identified U.P. (Tarai), West 
                Bengal (Haringhatta), Bihar (Patna), Orissa (Bhubaneshwar), Travancore-Cochin and Bombay 
                (Anand) states to be apposite for starting such universities. 
                In the year 1956, a blue-print for agricultural universities were prepared and this provided the 
                root for the proposal by Government of U.P. to the Central Government (in September, 1956) for 
                starting an agricultural university near Rudrapur in the tarai region of U.P. The Central 
                Government also agreed to the proposal on an experimental basis. In the year 1959, the second 
                Joint Indo-American Team was set up. The team submitted its report in 1960. The team 
                suggested that the Agricultural Universities should be autonomous; should consist of colleges of 
                agriculture like veterinary, animal husbandry, home science, technology and basic sciences under 
                them; should have inter-disciplinary teaching programmes; and should integrate teaching 
                research extension. By the year 1961, there were demands from many states for agricultural 
                universities and the Government of India accepted the organization of a few more agricultural 
                universities during the Third Five Year Plan. Accordingly, the Government of India appointed a 
                committee, headed by Dr. R.W. Cummings, for providing a model for the essential legislation by 
                the states for the establishment of agricultural universities. The committee submitted its report in 
                1962 and on the basis of this report; ICAR prepared the model act for the development of 
                agricultural universities. During the period of the Fourth Five Year Plan between the years 1960
                65, seven agricultural universities were established in U.P., Orissa, Rajasthan, Punjab, Andhra 
                Pradesh, Madhya Pradesh and Karnataka. The United States Agency for International 
                Development (USAID) contributed significantly to the development of agricultural universities 
                through the Land-Grant Universities of U.S.A. USAID provided assistance in the form of 
                training of Indian scientists in the U.S.A., stationing of the U.S. scientists for teaching and esearch in Indian agriculture universities and by providing a limited amount of equipments for 
                teaching and research. 
                One of the important schema came when the Education Commission (1964-66), headed by Dr. 
                D.S. Kothari, recommended that all aspects of agricultural research should be the function of 
                agricultural universities. Consequently, the responsibility for research was entrusted from State 
                Department of Agriculture to agricultural universities. However, this change was not consistently 
                implemented in every state. The Review Committee on Agriculture Universities (1977-78), 
                headed by Dr. M.S. Randhawa, made many useful recommendations for the development of 
                agricultural universities. It noted that the quality of leadership and the financial support from the 
                state were crucial factors in the development of agricultural universities. The committee 
                suggested, among other things, that the Director General, ICAR, and Chairman, University 
                Grants Commission, should be members of the selection committee that appoints Vice
                Chancellors for agricultural universities. Under National Agricultural Research System, State 
                Agricultural Universities (SAUs) are major cohorts in growth & development of Agricultural 
                Research and Education. The state agricultural universities are based on Land Grant pattern of 
                USA which called for the federal government to offer each state with a grant of land in order to 
                establish university/institution. Hence the name “land grant” came into being.  
                One of the original objectives of ICAR was to undertake aid, promote and coordinate agricultural 
                education in the country. But this was not put into effective practice until the reorganization of 
                ICAR in 1966. A full-fledged Division of Agricultural Education was set up within the ICAR to 
                fulfill this objective. The ICAR has been crucial in the reorganization of agricultural education in 
                the country by providing the necessary supervision, schemes for improving the quality of 
                teaching and research, e.g., centers of excellence, higher education in new areas, Professor of 
                Eminence, faculty improvement, scholarships and fellowships and financial aid. An aid of Rs. 41 
                crores during 1974-75 to 1978-79 proved the large spending by ICAR. The agricultural 
                universities have contributed to a great extent to agricultural education, research and 
                development in the country. Many improved varieties of crops, feed and animal stocks have been 
                developed in the agriculture universities. In other words, it could be concluded that the Indian 
                Council of Agricultural Research (ICAR) is identical to agricultural research and education in 
                the country. The role played by the council in the development of agricultural research and 
                education has been quite extraordinary. 
            </p>
           <b> The greater emphasis given to the agricultural research could be established by the fact that the 
            system guided by the ICAR now has </b><br />
            • 49 ICAR institutes, <br />
            • 17 national research centers,  <br />
            • 6 bureaux, <br />
            • 25 project directorates,  <br />
            • 79 All India Coordinated Research Projects (AICRPs) and AINPs <br />
            •  607 Krishi Vigyan Kendras (KVK) <br />
            • 52 State Agricultural Universities (SAUs), <br />
            • 1 Central Agricultural University, <br />
            • 4 Central Universities having faculty of Agriculture.  <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The National Academy of Agricultural Research Management is yet another exclusive institution 
            under ICAR to conduct research and training in agricultural research management.
        </p>
        <h2>OTHER ORGANIZATIONS INVOLVED IN AGRICULTURAL RESEARCH </h2>
        <p>
            • General universities, about 23 of which are involved in agricultural research,<br /> 
            • Scientific organizations such as the Council of Scientific and Industrial Research, the 
            Bhabha Atomic Research Centre,<br />
            • Government departments such as the Department of Science and Technology, the 
            Department of Biotechnology, <br />
            • Private and voluntary organizations, <br />
            • Scientific Societies <br />
        </p>
      </section>
      </Reveal>
      <Reveal>
<section className="section">
        <h2>Major Agricultural Research Institutions</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Institution Type</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ICAR Institutes</td><td>49</td></tr>
              <tr><td>National Research Centres</td><td>17</td></tr>
              <tr><td>Project Directorates</td><td>25</td></tr>
              <tr><td>AICRPs / AINPs</td><td>79</td></tr>
              <tr><td>Krishi Vigyan Kendras</td><td>607</td></tr>
              <tr><td>State Agricultural Universities</td><td>52</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="section">
        <h2> INITIATION OF ALL INDIA COORDINATED RESEARCH PROJECTS </h2>
        <p>
            The conception of coordinated projects was first instigated in relation to hybrid maize 
            improvement as ICAR was fascinated in maize improvement following the successful approach 
            by the USA and several other countries. Rockefeller Foundation was the organization who was 
            actively involved in crop improvement programmes in Mexico, Central America and the 
            Caribbean. This organization was invited to assist the maize improvement programme in India. <br />
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Ministry of Food and Agriculture under the Government of India, signed an agreement with 
            the Rockefeller Foundation in 1956 and according to the agreement, Rockefeller Foundation was 
            to assist in the development of  </b><br />
            (1) The postgraduate school of Indian Agricultural Research Institute (IARI), New Delhi, and  <br />
            (2) Research programmes on the improvement of some crops (maize, jowar and bajra, initially).  <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Two leading scientists who were associated with Rockefeller Foundation‟s Maize Improvement 
            Programmes in Mexico and Columbia visited India to study the position of maize crop and 
            prepared a report based on their findings. This report was scrutinized by the Botany Committee 
            of ICAR and by the Advisory Board of the Council. This provided the basis for the coordinated 
            maize project. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The coordinated maize project in India had proven to be the defining moment in research 
            planning in agriculture in the country. As a result of the coordinated project, new high yielding 
            maize hybrids became available by the year 1961. Encouraged by the success of the maize 
            project, ICAR decided to initiate coordinated projects on other crops as well as in other areas of 
            research e.g., animal husbandry, soil sciences, etc in the year 1965. Seventy coordinated projects 
            on various subjects were launched within 3 years of this decision and the coordinated projects 
            accounted for 40 per cent of the total expenditure for agriculture in the Fourth Five Year Plan. 
            However, the advancement of the coordinated projects was critically analysised in the Fifth Five 
            Year Plan. Accordingly, some projects were terminated, some were merged with other projects, 
            some projects were elevated to the level of Project Directorates and some were changed to 
            Coordinated Programmes. As a result, the number of coordinated projects decreased to forty nine 
            in the Fifth Five Year Plan. In addition to the coordinated projects, there were some coordinated 
            programmes running during that course of time.
        </p>
      </section>
      </Reveal>
      <Reveal>
<section className="section">
        <h2>Research Impact and Focus Areas</h2>

        <h3>Growth of Food Grain Production</h3>
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={foodGrainData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line dataKey="value" stroke="#166534" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <h3>Distribution of Agricultural Research Institutions</h3>
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={researchSystemData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#22C55E" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <h3>Major Focus Areas of Agricultural Research(%)</h3>
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie data={researchFocusData} dataKey="value" nameKey="name" outerRadius={110} label>
                {researchFocusData.map((_, i) => (
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
<section className="section">
        <h2>Indian Agriculture under the Five-Year Plans (Post-Colonial India)</h2>

        <h3>First Five-Year Plan (1951–56)</h3>
        <p>
            Agriculture received the highest priority due to acute food shortages after independence.
            Emphasis was placed on increasing food grain production and strengthening irrigation,
            power, and transport infrastructure. Food grain production increased from
            <b> 54 million tonnes (1950–51)</b> to <b>65.8 million tonnes</b> by the end of the Plan,
            supported by favourable monsoon conditions.
        </p>

        <h3>Second Five-Year Plan (1956–61)</h3>
        <p>
            The focus shifted towards industrial development, and only about <b>21%</b> of total plan
            expenditure was allocated to agriculture. Agricultural production declined across most crops,
            except sugarcane, leading to food grain imports and rising inflationary pressures.
        </p>

        <h3>Third Five-Year Plan (1961–66)</h3>
        <p>
            This Plan aimed at achieving self-sufficiency in food grains and targeted a 30% increase
            in agricultural production. However, food production increased by only 10%, resulting
            in imports worth approximately <b>₹1,100 crores</b>.
        </p>

        <h3>Three Annual Plans (1966–69)</h3>
        <p>
            Priority was given to minor irrigation and the adoption of High Yielding Variety (HYV)
            programmes. This period marked the beginning of the Green Revolution, along with
            the establishment of the Agricultural Prices Commission and the Food Corporation of India
            to ensure price stability and buffer stock maintenance.
        </p>

        <h3>Fourth Five-Year Plan (1969–74)</h3>
        <p>
            The Plan aimed at sustaining food production growth at about 5% per annum and ensuring
            inclusive participation of small and marginal farmers. Despite Green Revolution gains,
            food grain production reached only <b>104.7 million tonnes</b> in 1973–74 against a target
            of 129 million tonnes.
        </p>

        <h3>Fifth Five-Year Plan (1974–79)</h3>
        <p>
            Nearly <b>₹8,080 crores</b> (about 21% of total outlay) were allocated to agriculture and
            irrigation. The Plan emphasized HYV cultivation, fertilizer and pesticide use, and
            special support for small and marginal farmers, dry farming, and soil conservation.
            Food grain production increased, though pulses and oilseeds remained stagnant.
        </p>

        <h3>Sixth Five-Year Plan (1980–85)</h3>
        <p>
            Recognizing agriculture as central to economic growth, the Plan focused on increasing
            production, generating rural employment, and strengthening modernization efforts.
            It is considered a success due to strong agricultural performance.
        </p>

        <h3>Seventh Five-Year Plan (1985–90)</h3>
        <p>
            Targeting an annual agricultural growth rate of 4%, the Plan allocated
            <b> ₹39,770 crores</b> (22% of total outlay) to agriculture. Key programmes included
            special rice production in eastern India, watershed development, oilseed development,
            and social forestry. Poor monsoons affected early years, but later recovery led to
            an average growth of 4.1%.
        </p>

        <h3>Eighth Five-Year Plan (1992–97)</h3>
        <p>
            The Plan aimed to consolidate past gains, increase farmer income, generate employment,
            and promote agricultural exports. About <b>₹93,680 crores</b> (22% of total outlay)
            were allocated to agriculture and irrigation, targeting a 4.1% annual growth rate.
        </p>

        <h3>Ninth Five-Year Plan (1997–2002)</h3>
        <p>
            Emphasis was placed on science and technology to ensure food security and global
            competitiveness. The Plan recognized opportunities in biotechnology, GIS, remote sensing,
            and informatics, and introduced the concept of a second Green Revolution focusing on
            rainfed and underperforming regions.
        </p>

        <h3>Tenth Five-Year Plan (2002–07)</h3>
        <p>
            Agricultural development was identified as essential for inclusive growth. The Plan
            highlighted weaknesses in research quality and extension systems and stressed the need
            for biotechnology, improved technology dissemination, and revitalization of extension
            services.
        </p>

        <h3>Eleventh Five-Year Plan (2007–12)</h3>
        <p>
            The Plan identified technological change, public investment, and diversification as key
            drivers of growth. Critical research gaps included integrated pest management, efficient
            water and nutrient use, hybrid crop development, biodiversity-based crop improvement,
            livestock genetic research, and value addition in agricultural products.
        </p>
        </section>
      </Reveal>
      <Reveal>
<section className="section">
        <h2>Identified Research Gaps</h2>

        <h3>Water Management and Irrigation</h3>
        <p>
            Despite decades of investment in irrigation infrastructure, efficient water
            management remains a major research gap in Indian agriculture. There is a
            need for site-specific irrigation strategies, real-time soil moisture
            monitoring, and optimized water-use practices, particularly in rainfed and
            drought-prone regions.
        </p>

        <h3>Pest and Disease Management</h3>
        <p>
            Crop losses due to pests and diseases continue to pose serious challenges.
            Research efforts in Integrated Pest Management (IPM), early disease
            detection, and reduction of excessive pesticide usage have not sufficiently
            translated into field-level adoption, resulting in environmental and
            economic losses.
        </p>

        <h3>Technology Transfer and Adoption</h3>
        <p>
            Although agricultural research institutions generate valuable innovations,
            a significant gap exists between laboratory research and on-field adoption.
            Weak extension systems, lack of digital awareness, and limited access to
            modern tools restrict farmers from fully benefiting from scientific
            advancements.
        </p>

        <div className="image-grid">
            <img
            src="https://ameyawdebrah.com/wp-content/uploads/2023/03/12118323784_80a9b2ec92_b.jpg"
            alt="Irrigation and water management challenges in Indian agriculture"
            />
            <img
            src="https://www.preventionweb.net/sites/default/files/styles/landscape_16_9/public/2022-09/Damaged%20corn%20leaves%20pest.jpg?h=2cf907fb&itok=8ofk7b4n"
            alt="Crop pest and disease affecting agricultural productivity"
            />
            <img
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
            alt="Gap between agricultural research and farmer-level technology adoption"
            />
        </div>
        </section>

      <section className="section conclusion">
        <h2>Conclusion</h2>
        <p>
          Agricultural research in India has an interesting history regarding its growth and development. It 
            started during the colonial era and today the agricultural research system in India includes some 
            27,500 scientists and more than 100000 supporting staff actively engaged in agricultural 
            research, which makes it probably the largest research system in the world. They are distributed 
            in the ICAR system, Agricultural Universities, General Universities and other organizations. In 
            the present research system, the Indian Council of Agricultural Research (ICAR) at the National 
            level mainly aids, promotes and coordinates research and education activities throughout the 
            country. The research and education responsibilities at the state level rest with the State 
            Agricultural Universities. In addition to these main streams of research, some general 
            universities and other agencies like scientific organizations related to agriculture, Government Departments, voluntary organizations, private institutions etc. participate in the nation‟s research 
            efforts. Hence, the role of National Agricultural Research System in the development of 
            agricultural research is of great importance within which all these organizations come. Five year 
            plans play a major role regarding investment, technology transfer and other aspects related to 
            agricultural development in India. Although agriculture has been playing the most vital role in 
            Indian economy, during the course of the study, it has been found that  not much emphasis has 
            been given to the history of evolution of agricultural research in India. 
        </p>
      </section>

      </Reveal>
      <Reveal>
<section className="reference-section">
        <h2>References</h2>

        <ol className="reference-list">
            <li>
            Douglas Horton & Ronald Mackay (2005). <em>Using evaluation to enhance institutional
            learning and change: Recent experiences with agricultural research and development</em>.
            Agricultural Systems, 78, 127–142.{" "}
            <a
                href="https://scholar.google.com/scholar?q=Using+evaluation+to+enhance+institutional+learning+and+change+Horton+Mackay+2005"
                target="_blank"
                rel="noopener noreferrer"
            >
                View source
            </a>
            </li>

            <li>
            Deepak Kumar (2000). <em>Science and the Raj</em>. Oxford University Press.{" "}
            <a
                href="https://scholar.google.com/scholar?q=Science+and+the+Raj+Deepak+Kumar+2000"
                target="_blank"
                rel="noopener noreferrer"
            >
                View source
            </a>
            </li>

            <li>
            Mruthyunjaya & Ranjitha P. (1998). <em>The Indian Agricultural Research System:
            Structure, Current Policy Issues, and Future Orientation</em>.
            World Development, 26(6), 1089–1101.{" "}
            <a
                href="https://scholar.google.com/scholar?q=The+Indian+Agricultural+Research+System+Mruthyunjaya+Ranjitha"
                target="_blank"
                rel="noopener noreferrer"
            >
                View source
            </a>
            </li>

            <li>
            Mywish K. Maredia & David A. Raitzer (2012). <em>Review and analysis of documented
            patterns of agricultural research impacts in Southeast Asia</em>.
            Agricultural Systems, 106, 46–58.{" "}
            <a
                href="https://scholar.google.com/scholar?q=agricultural+research+impacts+Southeast+Asia+Maredia+Raitzer"
                target="_blank"
                rel="noopener noreferrer"
            >
                View source
            </a>
            </li>

            <li>
            Rajeswari, S. (1995). <em>Agricultural Research Effort: Conceptual Clarity and Measurement</em>.
            World Development, 23(4), 617–635.{" "}
            <a
                href="https://scholar.google.com/scholar?q=Agricultural+Research+Effort+Conceptual+Clarity+and+Measurement+Rajeswari"
                target="_blank"
                rel="noopener noreferrer"
            >
                View source
            </a>
            </li>

            <li>
            Roy MacLeod & Deepak Kumar (1995). <em>Technology and the Raj</em>.
            Sage Publications India.{" "}
            <a
                href="https://scholar.google.com/scholar?q=Technology+and+the+Raj+MacLeod+Deepak+Kumar"
                target="_blank"
                rel="noopener noreferrer"
            >
                View source
            </a>
            </li>

            <li>
            Singh, B. D. (2001). <em>Organisation for Crop Improvement in India</em>.
            In <em>Plant Breeding: Principles and Methods</em>. Kalyani Publishers, Ludhiana (pp. 801–830).{" "}
            <a
                href="https://scholar.google.com/scholar?q=Organisation+for+Crop+Improvement+in+India+Singh+2001"
                target="_blank"
                rel="noopener noreferrer"
            >
                View source
            </a>
            </li>

            <li>
            Indian Council of Agricultural Research (ICAR).{" "}
            <a
                href="https://icar.org.in"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://icar.org.in
            </a>
            </li>

            <li>
            Planning Commission of India – Five Year Plans.{" "}
            <a
                href="https://planningcommission.nic.in/plans/planrel/fiveyr/welcome.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                Official archive
            </a>
            </li>
        </ol>
        </section>

      </Reveal>
    </div>
  );
}
