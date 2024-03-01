import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import { placeholder } from "./images";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    headingFontFamily: "'Ubuntu', sans-serif",
    mainBg: "#fff",
    header: {
      subHeading: "Environmental Sciences",
      subHeadingColor: "#039855",
      heading: "Exploring the Impact of Urban Green Spaces on Mental Health",
      headingColor: "#000",
    },
    authors: {
      title: "AUTHORS",
      titleColor: "#039855",
      info: "Dr. Jane Smith, Dr. Alex Johnson, Dr. Emily White",
      infoColor: "#000",
      bg: "#fff",
      border: "1px solid #D0D5DD",
    },
    affiliation: {
      title: "Affiliations",
      titleColor: "#039855",
      info: "Department of Environmental Sciences, University of Greenfield. Institute of Public Health, Springfield University",
      infoColor: "#000",
      bg: "#fff",
      border: "1px solid #D0D5DD",
    },
    abstract: {
      title: "ABSTRACT",
      titleColor: "#039855",
      info: "This study investigates the relationship between urban green spaces and mental health among urban residents. With rapid urbanization leading to a decline in accessible green areas, this research aims to quantify the impact of urban greenery on individuals' mental well-being. A cross-sectional analysis of 500 urban dwellers revealed a significant positive correlation between the coverage of green spaces in residential areas and the mental health scores of the inhabitants. These findings underscore the importance of integrating green spaces into urban planning as a public health strategy to enhance mental well-being in urban populations.",
      infoColor: "#000",
      bg: "#ECFDF3",
      border: "1px solid #A6F4C5",
    },
    introduction: {
      title: "INTRODUCTION",
      titleColor: "#039855",
      border: "1px solid #D0D5DD",
      bg: "#fff",
      infoColor: "#000",
      data: [
        {
          subTitle: "Problem Statement:",

          info: "Rapid urbanization has led to a decrease in accessible green spaces within cities, potentially impacting the mental health of urban residents.",
        },
        {
          subTitle: "Objective:",

          info: "To investigate the relationship between the availability of urban green spaces and the mental well-being of individuals living in urban areas.",
          infoColor: "#000",
        },
      ],
    },

    methodlogy: {
      title: "Methodology",
      titleColor: "#039855",
      border: "1px solid #D0D5DD",
      bg: "#fff",

      infoColor: "#000",
      data: [
        {
          subTitle: "Design:",
          info: "Cross-sectional study involving 500 urban residents.",
        },
        {
          subTitle: "Tools:",
          info: "Surveys measuring mental well-being, satellite imagery for green space assessment.",
        },
        {
          subTitle: "Procedure:",
          info: "Participants' mental health scores were correlated with the green space coverage in their residential area, as determined by GIS analysis.",
        },
      ],
    },

    keyFindings: {
      title: "Key Findings",
      titleColor: "#039855",
      border: "1px solid #D0D5DD",
      bg: "#fff",
      infoColor: "#000",
      findings: [
        {
          img: placeholder,
          info: "Positive correlation between green space coverage and average mental well-being scores.",
        },
        {
          img: placeholder,
          info: "Highlighting areas with high green space coverage and corresponding high well-being scores.",
        },
        {
          img: placeholder,
          info: "Statistical analysis showing significant differences in scores between high and low green space areas.",
        },
      ],
    },
    implications: {
      title: "Implications",
      titleColor: "#039855",
      bg: "#ECFDF3",
      border: "1px solid #D0D5DD",
      idBg: "#12B76A",
      idColor: "#fff",
      infoColor: "#000",
      infos: [
        "Urban green spaces are crucial for mental health, providing a buffer against different kinds of stress and promoting well-being.",

        "Policy implications suggest the integration of more green spaces in urban planning to enhance community health.",

        "Policy implications suggest the integration of more green spaces in urban planning to enhance community health.",
      ],
    },
    conclusions: {
      title: "Conclusions",
      titleColor: "#039855",
      border: "1px solid #D0D5DD",
      bg: "#fff",
      infoColor: "#000",
      infos: [
        "The presence of urban green spaces is positively associated with improved mental health among city dwellers.",

        "Enhancing urban greenery could be a cost-effective public health intervention.",
      ],
    },
    futureDirection: {
      title: "Future Directions",
      titleColor: "#039855",
      border: "1px solid #D0D5DD",
      bg: "#fff",
      infoColor: "#000",
      infos: [
        "Longitudinal studies to assess the long-term mental health benefits of regular access to green spaces.",

        "Comparative studies across different urban environments and climates.",
      ],
    },
    reference: {
      title: "References",
      titleColor: "#039855",
      border: "1px solid #D0D5DD",
      bg: "#fff",

      infos: [
        'Green, A., & Brown, B. (2023). "Urban Greenery and Well-being." Journal of Environmental Psychology, 45, 102-110.',

        'White, E., Smith, J., & Johnson, A. (2023). "The Green City Index." Urban Planning Review, 12(3), 200-215.',
      ],
      infoColor: "#000",
    },
    contact: {
      title: "CONTACT",
      titleColor: "#039855",
      border: "1px solid #D0D5DD",
      bg: "#F9FAFB",
      info: "For further inquiries, please contact Dr. Jane Smith at jsmith@greenfield.edu.",
      infoColor: "#000",
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--headingFontFamily": allData.headingFontFamily,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
