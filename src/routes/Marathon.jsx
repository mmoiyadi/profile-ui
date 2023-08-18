import classes from "./Marathon.module.css";
import { Chrono } from "react-chrono";

import pic from "../assets/marathon/cme/pic.jpg";
import img5k from "../assets/marathon/5K.png";
import img10k from "../assets/marathon/10K.png";
function Marathon() {

  function itemSelectHandler(data){
    console.log("item selected", data);
  }

  const items = [
    {
      title: "April 2018",
      cardTitle: "H2O Run",
      url: "http://www.history.com",
      cardSubtitle:
        "My first ever marathon.",
      // media: {
      //   type: "IMAGE",
      //   source: {
      //     // url: "https://www.dropbox.com/scl/fi/81tlg1i9wtsir7xruueeu/H2O_Run3-edited.jpg?rlkey=eej6k78u46f5eclsbo09hldgb&raw=1",
      //     //url: pic,
      //   },
      // },
    },
    {
      title: "July 2018",
      cardTitle: "NIO Vision Marathon Run",
      url: "http://www.history.com",
      cardSubtitle:
        "Second marathon, first 10K run",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.dropbox.com/scl/fi/twro75oiyplomncp6vg96/Bib_2212_certificate-edited.png?rlkey=z2ehxxudgqqnv0jommde6veyb&raw=1",
        },
      },
    },
    {
      title: "Sept 2018",
      cardTitle: "Lake Marathon CME, Pune",
      url: "http://www.history.com",
      cardSubtitle:
        "Another 10K run! This time inside the serene campus of CME, Pune",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.dropbox.com/scl/fi/ajt9pz0lthwwp0qgzie29/TimingCertificate.png?rlkey=a02s5j9sf8f9actis8h06ytb1&raw=1",
        },
      },
    },
    {
      title: "November 2018",
      cardTitle: "Poonawalla Clean City Marathon",
      url: "http://www.history.com",
      cardSubtitle:
        "Best timing for 10K",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.dropbox.com/scl/fi/fwa1a4o82qeav3i8udq4p/1097_PoonawallaCleanCityMarathon.png?rlkey=6raijf1a21n9rut1hnsr18jh2&raw=1",
        },
      },
    },
  ];

  return (
    <div className={classes.container} style={{fontFamily: "'Poppins', sans-serif"}}>
      <Chrono
        items={items} 
        theme={{
          primary: '#FC5200',
          secondary: '#FC5200',
          cardBgColor: '#bfbfbf',
          titleColor: '#FC5200',
          titleColorActive: '#2a2630',
        }}
        mode="VERTICAL_ALTERNATING"
        fontSizes={{
          cardSubtitle: '0.8rem',
          cardText: '1rem',
          cardTitle: '1rem',
          title: '1rem',
        }}
        scrollable="true"
        // textOverlay="true"
        cardHeight="300"
        cardWidth="500" 
        borderLessCards="false"
        lineWidth = "1"
        onItemSelected = {itemSelectHandler}
      >
        <div className="chrono-icons">
          <img width={100} src={img5k} alt="5k" />
          <img src={img10k} alt="5k" />
          <img src={img10k} alt="5k" />
          <img src={img10k} alt="5k" />
        </div>
        {/* <div>
          <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
        </div> */}
      </Chrono>
    </div>

    // <div className={classes.container}>
    //   <object
    //     data={certificate}
    //     type="application/pdf"
    //     width="100%"
    //     height="100%"
    //   >
    //     <p>
    //       Alternative text - include a link{" "}
    //       <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
    //     </p>
    //   </object>
    // </div>

    // <Document file={certificate}>
    //   <Page pageNumber={1} />
    // </Document>
  );
}

export default Marathon;
