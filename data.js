// all data for units
var allUnits = [
  // region 1, stack 1
  {
    unit_id: 1,
    unit_number: "101",
    region_trail: [1000, 1001, 1004],
    floor_name: "1",
    bedrooms: 0,
    bathroom: 1,
    rent_price: 1600,
    sq_ft: 536,
    available: "01/03/2019",
    specials: ["First month free for 13+ month leases", "Free movie passes"],
    deposit: 500,
    amenities: [],
    photos_unit: [],
    photos_floorplan: []
  },
  {
    unit_id: 2,
    unit_number: "102",
    region_trail: [1000, 1001, 1004],
    floor_name: "1",
    bedrooms: 1,
    bathroom: 1,
    rent_price: 2100,
    sq_ft: 779,
    available: "01/17/2019",
    specials: [],
    deposit: 1000,
    amenities: ["Granite Kitchen counters", "Walk-in Closet"],
    photos_unit: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/open%20floor%20plan%20(1).jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/xp0573772_A15a_2_FloorPlan.jpg,qp=1,amaxwidth=800,aquality=85,a.pagespeed.ic.OfD5ddjpJA.jpg"]
  },
  {
    unit_id: 3,
    unit_number: "103",
    region_trail: [1000, 1001, 1004],
    floor_name: "1",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 2500,
    sq_ft: 952,
    available: "02/15/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 1500,
    amenities: ["Pool View", "Vaulted Ceiling", "Tiled Entry"],
    photos_unit: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen(1).jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/bathrooms.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 4,
    unit_number: "104",
    region_trail: [1000, 1001, 1004],
    floor_name: "1",
    bedrooms: 0,
    bathroom: 1,
    rent_price: 1600,
    sq_ft: 536,
    available: "03/20/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 500,
    amenities: ["Balcony Facing Pool", "Stainless Steel"],
    photos_unit: [],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S2.jpg"]
  },
  {
    unit_id: 5,
    unit_number: "105",
    region_trail: [1000, 1001, 1004],
    floor_name: "1",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 2500,
    sq_ft: 952,
    available: "05/15/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 1500,
    amenities: ["Vertical Blinds", "Pool View"],
    photos_unit: ["https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg", "https://sitemanager.rentcafe.com/dmslivecafe/3/19998/bedroom.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 6,
    unit_number: "106",
    region_trail: [1000, 1001, 1004],
    floor_name: "1",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 2500,
    sq_ft: 960,
    available: "02/16/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 1500,
    amenities: ["Hardwood Floors"],
    photos_unit: [
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/DSC_6503%20Resized(1).png",
      "https://cdngeneral.rentcafe.com//dmslivecafe/3/564325/kitchen%20aid.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/open%20floor%20plan%20(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/bathrooms.jpg"
    ],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 7,
    unit_number: "107",
    region_trail: [1000, 1001, 1004],
    floor_name: "1",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 2500,
    sq_ft: 945,
    available: "03/05/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 1500,
    amenities: ["Fireplace"],
    photos_unit: ["https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg", "https://sitemanager.rentcafe.com/dmslivecafe/3/19998/bedroom.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 8,
    unit_number: "201",
    region_trail: [1000, 1001, 1004],
    floor_name: "2",
    bedrooms: 0,
    bathroom: 1,
    rent_price: 1700,
    sq_ft: 536,
    available: "03/15/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 500,
    amenities: ["Track Lighting"],
    photos_unit: [],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S2.jpg"]
  },
  {
    unit_id: 9,
    unit_number: "202",
    region_trail: [1000, 1001, 1004],
    floor_name: "2",
    bedrooms: 1,
    bathroom: 1,
    rent_price: 2200,
    sq_ft: 779,
    available: "04/15/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 1000,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/DSC_6503%20Resized(1).png",
      "https://cdngeneral.rentcafe.com//dmslivecafe/3/564325/kitchen%20aid.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/open%20floor%20plan%20(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/bathrooms.jpg"
    ],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/xp0573772_A15a_2_FloorPlan.jpg,qp=1,amaxwidth=800,aquality=85,a.pagespeed.ic.OfD5ddjpJA.jpg"]
  },
  {
    unit_id: 10,
    unit_number: "203",
    region_trail: [1000, 1001, 1004],
    floor_name: "2",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 2600,
    sq_ft: 952,
    available: "04/06/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 1500,
    amenities: ["Roman Tub"],
    photos_unit: ["https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg", "https://sitemanager.rentcafe.com/dmslivecafe/3/19998/bedroom.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 11,
    unit_number: "204",
    region_trail: [1000, 1001, 1004],
    floor_name: "2",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 2600,
    sq_ft: 960,
    available: "01/15/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 1500,
    amenities: ["Breakfast Bar"],
    photos_unit: [],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 12,
    unit_number: "205",
    region_trail: [1000, 1001, 1004],
    floor_name: "2",
    bedrooms: 1,
    bathroom: 1,
    rent_price: 2100,
    sq_ft: 780,
    available: "01/15/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 1000,
    amenities: ["Balcony Facing Pool"],
    photos_unit: [
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/DSC_6503%20Resized(1).png",
      "https://cdngeneral.rentcafe.com//dmslivecafe/3/564325/kitchen%20aid.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/open%20floor%20plan%20(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/bathrooms.jpg"
    ],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/xp0573772_A15a_2_FloorPlan.jpg,qp=1,amaxwidth=800,aquality=85,a.pagespeed.ic.OfD5ddjpJA.jpg"]
  },
  {
    unit_id: 13,
    unit_number: "301",
    region_trail: [1000, 1001, 1004],
    floor_name: "3",
    bedrooms: 0,
    bathroom: 1,
    rent_price: 1700,
    sq_ft: 536,
    available: "01/15/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 500,
    amenities: ["Parking", "Pool View", "Track Lighting"],
    photos_unit: ["https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg", "https://sitemanager.rentcafe.com/dmslivecafe/3/19998/bedroom.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S2.jpg"]
  },
  {
    unit_id: 14,
    unit_number: "302",
    region_trail: [1000, 1001, 1004],
    floor_name: "3",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 2600,
    sq_ft: 952,
    available: "01/15/2019",
    specials: ["First month free for 13+ month leases"],
    deposit: 1500,
    amenities: ["Parking", "Pool View", "Track Lighting"],
    photos_unit: [],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 15,
    unit_number: "303",
    region_trail: [1000, 1001, 1004],
    floor_name: "3",
    bedrooms: 1,
    bathroom: 1,
    rent_price: 2200,
    sq_ft: 779,
    available: "01/15/2019",
    specials: [],
    deposit: 1000,
    amenities: ["Parking", "Pool View", "Track Lighting"],
    photos_unit: [
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/DSC_6503%20Resized(1).png",
      "https://cdngeneral.rentcafe.com//dmslivecafe/3/564325/kitchen%20aid.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/open%20floor%20plan%20(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/bathrooms.jpg"
    ],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/xp0573772_A15a_2_FloorPlan.jpg,qp=1,amaxwidth=800,aquality=85,a.pagespeed.ic.OfD5ddjpJA.jpg"]
  },
  {
    unit_id: 16,
    unit_number: "304",
    region_trail: [1000, 1001, 1004],
    floor_name: "3",
    bedrooms: 1,
    bathroom: 1,
    rent_price: 1700,
    sq_ft: 780,
    available: "01/15/2019",
    specials: [],
    deposit: 1000,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: ["https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg", "https://sitemanager.rentcafe.com/dmslivecafe/3/19998/bedroom.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/xp0573772_A15a_2_FloorPlan.jpg,qp=1,amaxwidth=800,aquality=85,a.pagespeed.ic.OfD5ddjpJA.jpg"]
  },
  {
    unit_id: 17,
    unit_number: "401",
    region_trail: [1000, 1001, 1004],
    floor_name: "4",
    bedrooms: 0,
    bathroom: 1,
    rent_price: 1700,
    sq_ft: 536,
    available: "01/15/2019",
    specials: [],
    deposit: 500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S2.jpg"]
  },
  {
    unit_id: 18,
    unit_number: "402",
    region_trail: [1000, 1001, 1004],
    floor_name: "4",
    bedrooms: 1,
    bathroom: 1,
    rent_price: 2200,
    sq_ft: 780,
    available: "01/15/2019",
    specials: [],
    deposit: 1000,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/DSC_6503%20Resized(1).png",
      "https://cdngeneral.rentcafe.com//dmslivecafe/3/564325/kitchen%20aid.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/open%20floor%20plan%20(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/bathrooms.jpg"
    ],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/xp0573772_A15a_2_FloorPlan.jpg,qp=1,amaxwidth=800,aquality=85,a.pagespeed.ic.OfD5ddjpJA.jpg"]
  },

  // region 1, stack 2
  {
    unit_id: 19,
    unit_number: "501",
    region_trail: [1000, 1001, 1003],
    floor_name: "5",
    bedrooms: 0,
    bathroom: 1,
    rent_price: 1800,
    sq_ft: 536,
    available: "01/15/2019",
    specials: [],
    deposit: 500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/image1%20amenities.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/8 photo gallery.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S2.jpg"]
  },
  {
    unit_id: 20,
    unit_number: "502",
    region_trail: [1000, 1001, 1003],
    floor_name: "5",
    bedrooms: 0,
    bathroom: 1,
    rent_price: 4200,
    sq_ft: 536,
    available: "01/15/2019",
    specials: [],
    deposit: 500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S2.jpg"]
  },
  {
    unit_id: 21,
    unit_number: "503",
    region_trail: [1000, 1001, 1003],
    floor_name: "5",
    bedrooms: 1,
    bathroom: 1,
    rent_price: 4200,
    sq_ft: 779,
    available: "01/15/2019",
    specials: [],
    deposit: 1000,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/image1%20amenities.jpg",
      "https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg",
      "https://sitemanager.rentcafe.com/dmslivecafe/3/19998/bedroom.jpg"
    ],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/xp0573772_A15a_2_FloorPlan.jpg,qp=1,amaxwidth=800,aquality=85,a.pagespeed.ic.OfD5ddjpJA.jpg"]
  },
  {
    unit_id: 22,
    unit_number: "701",
    region_trail: [1000, 1001, 1003],
    floor_name: "7",
    bedrooms: 3,
    bathroom: 2,
    rent_price: 3900,
    sq_ft: 952,
    available: "01/15/2019",
    specials: [],
    deposit: 1500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/DSC_6503%20Resized(1).png",
      "https://cdngeneral.rentcafe.com//dmslivecafe/3/564325/kitchen%20aid.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/open%20floor%20plan%20(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/bathrooms.jpg"
    ],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 23,
    unit_number: "702",
    region_trail: [1000, 1001, 1003],
    floor_name: "7",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 3900,
    sq_ft: 952,
    available: "01/15/2019",
    specials: [],
    deposit: 1500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: ["https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg", "https://sitemanager.rentcafe.com/dmslivecafe/3/19998/bedroom.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 24,
    unit_number: "703",
    region_trail: [1000, 1001, 1003],
    floor_name: "7",
    bedrooms: 1,
    bathroom: 1,
    rent_price: 2900,
    sq_ft: 779,
    available: "01/15/2019",
    specials: [],
    deposit: 1000,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/xp0573772_A15a_2_FloorPlan.jpg,qp=1,amaxwidth=800,aquality=85,a.pagespeed.ic.OfD5ddjpJA.jpg"]
  },
  {
    unit_id: 25,
    unit_number: "704",
    region_trail: [1000, 1001, 1003],
    floor_name: "7",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 4025,
    sq_ft: 952,
    available: "01/15/2019",
    specials: [],
    deposit: 1500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/DSC_6503%20Resized(1).png",
      "https://cdngeneral.rentcafe.com//dmslivecafe/3/564325/kitchen%20aid.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/open%20floor%20plan%20(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/bathrooms.jpg"
    ],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 26,
    unit_number: "801",
    region_trail: [1000, 1001, 1003],
    floor_name: "8",
    bedrooms: 0,
    bathroom: 1,
    rent_price: 2500,
    sq_ft: 779,
    available: "01/15/2019",
    specials: [],
    deposit: 1500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: ["https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg", "https://sitemanager.rentcafe.com/dmslivecafe/3/19998/bedroom.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S2.jpg"]
  },
  {
    unit_id: 27,
    unit_number: "802",
    region_trail: [1000, 1001, 1003],
    floor_name: "8",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 3025,
    sq_ft: 952,
    available: "01/15/2019",
    specials: [],
    deposit: 1500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 28,
    unit_number: "803",
    region_trail: [1000, 1001, 1003],
    floor_name: "8",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 4025,
    sq_ft: 952,
    available: "01/15/2019",
    specials: [],
    deposit: 1000,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/DSC_6503%20Resized(1).png",
      "https://cdngeneral.rentcafe.com//dmslivecafe/3/564325/kitchen%20aid.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/open%20floor%20plan%20(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/bathrooms.jpg"
    ],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 29,
    unit_number: "804",
    region_trail: [1000, 1001, 1003],
    floor_name: "8",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 4025,
    sq_ft: 952,
    available: "01/15/2019",
    specials: [],
    deposit: 1500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: ["https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg", "https://sitemanager.rentcafe.com/dmslivecafe/3/19998/bedroom.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 30,
    unit_number: "805",
    region_trail: [1000, 1001, 1003],
    floor_name: "8",
    bedrooms: 1,
    bathroom: 1,
    rent_price: 3025,
    sq_ft: 779,
    available: "01/15/2019",
    specials: [],
    deposit: 1500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/xp0573772_A15a_2_FloorPlan.jpg,qp=1,amaxwidth=800,aquality=85,a.pagespeed.ic.OfD5ddjpJA.jpg"]
  },

  // region 2, stack 2
  {
    unit_id: 31,
    unit_number: "1001",
    region_trail: [1000, 1002, 1006],
    floor_name: "14",
    bedrooms: 2,
    bathroom: 2,
    rent_price: 3500,
    sq_ft: 955,
    available: "01/15/2019",
    specials: [],
    deposit: 1500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/DSC_6503%20Resized(1).png",
      "https://cdngeneral.rentcafe.com//dmslivecafe/3/564325/kitchen%20aid.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/wine%20fridge%20kitchen.jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/open%20floor%20plan%20(1).jpg",
      "https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/bathrooms.jpg"
    ],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/B2.jpg"]
  },
  {
    unit_id: 32,
    unit_number: "1002",
    region_trail: [1000, 1002, 1006],
    floor_name: "14",
    bedrooms: 0,
    bathroom: 1,
    rent_price: 1700,
    sq_ft: 536,
    available: "01/15/2019",
    specials: [],
    deposit: 500,
    amenities: ["Parking", "Pool View", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: ["https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg", "https://sitemanager.rentcafe.com/dmslivecafe/3/19998/bedroom.jpg"],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S1.jpg", "https://cdngeneral.rentcafe.com/dmslivecafe/3/874015/S2.jpg"]
  },
  {
    unit_id: 33,
    unit_number: "1003",
    region_trail: [1000, 1002, 1006],
    floor_name: "14",
    bedrooms: 1,
    bathroom: 1,
    rent_price: 2500,
    sq_ft: 779,
    available: "01/15/2019",
    specials: [],
    deposit: 1000,
    amenities: ["Parking", "Vaulted Ceiling", "Track Lighting"],
    photos_unit: [],
    photos_floorplan: ["https://cdngeneral.rentcafe.com/dmslivecafe/3/564325/xp0573772_A15a_2_FloorPlan.jpg,qp=1,amaxwidth=800,aquality=85,a.pagespeed.ic.OfD5ddjpJA.jpg"]
  }
];
