// The core app code
var myApp = (function() {
  "use strict";

  var cards = $("#cards");

  // Create a public methods object
  var methods = {};

  // 1. display cards from data first
  // display all cards from the data

  // Helper functions:
  function _aptTypeToString(bed) {
    if (bed === 0) {
      return "Studio";
    } else {
      return bed + " Bed";
    }
  }

  function _convertDateFormat(date) {
    console.log("convertDateFormat called");

    var newDate = new Date(date);
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var newDateString = monthNames[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear();

    return newDateString;
  }

  // if there are no units in allUnits array, display the message
  if (allUnits.length === 0) {
    cards.append("<p>There are no apartments matching your search.</p>");
  }

  // Otherwise, display the cards
  else {
    // Loop through each item in allUnits array (our data) and create a card for each unit
    $.each(allUnits, function(unit, unitData) {
      // for each item in allUnits data, create a card string and fill out the info w/ data details
      var CARD = `<div id="${unitData.unit_id}" class="availability-cards__card">
                <div class="availability-cards__title">Apartment #<span class="availability-cards__unit-number">${unitData.unit_number}</span></div>
                <div class="availability-cards__img">
                  <div class="availability-cards__no-img">
                    <i class="iconm-images darker-gray"></i>
                    <p class="darker-gray">No Image Available</p>
                  </div>
                  <img src="${unitData.photos_unit[0]}" alt="">
                </div>
                <div class="availability-cards__details">
                  <p class="darker-gray">Floorplan <span class="availability-cards__floorplan">B1</span></p>
                  <div class="availability-cards__blocks m-t-sm m-b-sm">
                    <p class="bigger-text"><span class="availability-cards__beds">${_aptTypeToString(unitData.bedrooms)}</span>, <span class="availability-cards__baths">${
        unitData.bathroom
      }</span> Bath</p>
                    <p class="darker-gray"><span class="availability-cards__sqft">${unitData.sq_ft}</span> Sq Ft</p>
                  </div>
                  <div class="availability-cards__blocks block-right">
                    <p class="darker-gray">From <span class="bigger-text">$</span><span class="availability-cards__price bigger-text">${unitData.rent_price}</span></p>
                    <p class="darker-gray">$<span class="availability-cards__sqft">${unitData.deposit}</span> Deposit</p>
                  </div>
                  <p class="bigger-text">Available <span class="availability-cards__date-available">${_convertDateFormat(unitData.available)}</span></p>
                  <button class="availability-cards__btn m-t-md">UNIT DETAILS</button>
                </div>
              </div>`;

      // append a card to the DOM
      cards.append(CARD);
    });
  }

  /**
   * Extend the public methods object
   * @param  {String}   name The new method name
   * @param  {Function} fn   The new method
   */
  methods.extend = function(name, fn) {
    methods[name] = fn;
  };

  // Return public methods object
  return methods;
})();

// 2. then add conditions for filtering
// 3. try to get data from JSON w/ Fetch
