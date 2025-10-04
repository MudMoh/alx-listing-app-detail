import { PropertyProps } from "../../interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-600 text-sm">{property.address.city}, {property.address.state}, {property.address.country}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-blue-500 font-medium">${property.price}</span>
          <span className="text-gray-500 text-sm">⭐ {property.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
