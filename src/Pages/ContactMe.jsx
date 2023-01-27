import React from "react";
import BaseText from "../components/BaseText";
import Codefont from "../components/Codefont";
import mapSm from "../media/mapSM.png";
import { arrayToCrash } from "../functions/crashTextFuncs";
import ContactForm from "../components/ContactForm";

const ContactMe = () => {
  const mainText = ["Contact me"];
  const crashTextStyle =
    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-brandGreen";
  const crashText = arrayToCrash(mainText, crashTextStyle);
  return (
    <section className="w-full lg:h-screen mt-16 px-1 sm:px-3 md:px-6 lg:pl-8 lg:pr-0 relative flex flex-col  lg:flex-row lg:items-center justify-center">
      {/* Contact me and form side div */}
      <div className="lg:w-1/2 lg:mr-5">
        <Codefont text="h2" className="tab-1" />
        <div className="tab-2">{crashText}</div>
        <Codefont text="/h2" className="tab-1" />
        <Codefont text="p" className="tab-1" />
        <BaseText className="tab-3">
          I'm interested in freelance opportunities - especially ambitious or
          large projects. However, if you have other request or question, don't
          hesitate to use the form.
        </BaseText>
        <Codefont text="/p" className="tab-1" />
        
        <Codefont text="form" className="tab-2" />
        <ContactForm className='tab-3'/>
        <Codefont text="/form" className="tab-2" />
      </div>

      {/* Map Side div */}
      <div
        className="border-none lg:w-1/2 m-4 lg:ml-5 h-[300px] sm:h-[400px] md:h-[500px] lg:h-full
      overflow-hidden flex justify-center items-center relative"
      >
        <div className="absolute bg-black bg-opacity-90 p-5 m-5 lg:m-12 top-0 left-0 text-white font-franklin text-xs md:text-base ">
          <p>
            Mayank Jain, <br />
            Somewhere in <br />
            Ludhiana, Punjab, India
            <br />
            <br />
            <span className="text-brandGreen">@</span>
            :
            <br />
            mayankjainx404@gmail.com
          </p>
        </div>

        <iframe
          src="https://snazzymaps.com/embed/457201"
          width="100%"
          height="100%"
          className="hidden lg:block  max-h-[1200px] max-w-[1000px]"
        ></iframe>

        <img
          src={mapSm}
          width="1000px"
          height="100%"
          alt=""
          className="max-w-none object-cover lg:hidden"
        />
      </div>
    </section>
  );
};

export default ContactMe;

const mapConfig = [
  {
    featureType: "administrative",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "all",
    stylers: [
      {
        color: "#ff0000",
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "all",
    stylers: [
      {
        color: "#fb2b2b",
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#06c5a9",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#05b79d",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [
      {
        color: "#05b79d",
      },
    ],
  },
  {
    featureType: "poi.attraction",
    elementType: "all",
    stylers: [
      {
        color: "#ff0000",
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.government",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.medical",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "all",
    stylers: [
      {
        color: "#05b79d",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
      {
        color: "#ff0000",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#037061",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#05a890",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        color: "#06dabb",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#1d1d1d",
      },
    ],
  },
];
