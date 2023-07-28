import classes from "./Marathon.module.css";
import { Chrono } from "react-chrono";

import pic from "../assets/marathon/cme/pic.jpg";
function Marathon() {
  const items = [
    {
      title: "April 2018",
      cardTitle: "H2O Run",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "5K",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.dropbox.com/scl/fi/81tlg1i9wtsir7xruueeu/H2O_Run3-edited.jpg?rlkey=eej6k78u46f5eclsbo09hldgb&raw=1",
        },
      },
    },
    {
      title: "July 2018",
      cardTitle: "NIO Vision Marathon Run",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "10K",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.dropbox.com/scl/fi/26uyl25rbytkdrt3wrx7p/IMG_20180722_082639.jpg?rlkey=h2db7j8w9ek8q803ralpfk6tb&raw=1",
        },
      },
    },
    {
      title: "Sept 2018",
      cardTitle: "Lake Marathon CME, Pune",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "10K",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.dropbox.com/scl/fi/z0qw28eukbjkww3z3o0yq/IMG_20180902_063133.jpg?rlkey=kfk28wx3zt0v4ogw182wado2n&raw=1",
        },
      },
    },
    {
      title: "November 2018",
      cardTitle: "Poonawalla Clean City Marathon",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "10K",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.dropbox.com/scl/fi/xb6t25u1njm7x7yhwkzr7/PRBD00980.jpg?rlkey=n6wopsiriczql2pzeqoejlawn&raw=1",
        },
      },
    },
  ];

  return (
    <div className={classes.container}>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        scrollable="true"
        // textOverlay="true"
        cardHeight="300"
      />
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
