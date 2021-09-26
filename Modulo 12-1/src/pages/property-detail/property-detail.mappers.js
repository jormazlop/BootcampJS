function formatNumber(num) {
   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export const mapPropertyFromApiToViewModel = (property, equipmentList) => {

   return {
     id: property.id,
     address: property.address,
     bathrooms: `${property.bathrooms} baños`,
     city: property.city,
     email: property.email,
     equipments: equipmentList.filter(equipment => property.equipmentIds.includes(equipment.id)).map(equipment => equipment.name),
     images: property.images,
     mainImage: property.images[0],
     locationUrl: property.locationUrl,
     mainFeatures: property.mainFeatures,
     notes: property.notes,
     phone: property.phone,
     price: `${formatNumber(property.price)} €`,
     provinceId: property.provinceId,
     rooms: `${property.rooms} habitaciones`,
     saleTypeIds: property.saleTypeIds,
     squareMeter: `${property.squareMeter}m2`,
     title: property.title
   };
};