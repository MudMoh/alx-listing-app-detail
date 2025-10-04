import Layout from "../components/layout/Layout";
import Image from "next/image";
import backgroundImage from "../public/assets/window.svg"; // Replace with your image import
import Pill from "../components/common/Pill";
import { PROPERTYLISTINGSAMPLE } from "../constants";
import PropertyCard from "../components/common/Card";

const filterLabels = ["Top Villa", "Self Checkin", "Pet Friendly", "Pool"];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Find your favorite place here!
          </h1>
          <p className="text-lg text-center">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-4">
        <div className="flex space-x-2 overflow-x-auto">
          {filterLabels.map((label) => (
            <Pill key={label} label={label} onClick={() => console.log(label)} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </section>
    </Layout>
  );
};

export default Home;
