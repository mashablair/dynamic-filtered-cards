var View = (function() {
  "use strict";

  // parameters come from unit details from filtered data array from main.js
  var card = function getCardView(id, unit_number, photoUrl, bedrooms, bathrooms, sq_ft, rent_price, deposit, available) {
    console.log("getCardView function is called");

    // This is a string template for the card to be dynamically generated given the arguments of data in each loop iteration
    return `<div id="${id}" class="availability-cards__card">
              <div class="availability-cards__title">Apartment #<span class="availability-cards__unit-number">${unit_number}</span></div>
              <div class="availability-cards__img">
                <div class="availability-cards__no-img">
                  <i class="iconm-images darker-gray"></i>
                  <p class="darker-gray">No Image Available</p>
                </div>
                <img src="${photoUrl}" alt="">
              </div>
              <div class="availability-cards__details">
                <p class="darker-gray">Floorplan <span class="availability-cards__floorplan">B1</span></p>
                <div class="availability-cards__blocks m-t-sm m-b-sm">
                  <p class="bigger-text"><span class="availability-cards__beds">${_aptTypeToString(bedrooms)}</span>, <span class="availability-cards__baths">${bathrooms}</span> Bath</p>
                  <p class="darker-gray"><span class="availability-cards__sqft">${sq_ft}</span> Sq Ft</p>
                </div>
                <div class="availability-cards__blocks block-right">
                  <p class="darker-gray">From <span class="bigger-text">$</span><span class="availability-cards__price bigger-text">${rent_price}</span></p>
                  <p class="darker-gray">$<span class="availability-cards__sqft">${deposit}</span> Deposit</p>
                </div>
                <p class="bigger-text">Available <span class="availability-cards__date-available">${_convertDateFormat(available)}</span></p>
                <button class="availability-cards__btn m-t-md">UNIT DETAILS</button>
              </div>
            </div>`;
  };

  // HELPER FUNCTIONS:
  /**
   * Formats bedrooms title depending on number of beds
   * @param  {Number}  bed Numberic value from the allUnits array or JSON
   * @return  {String}
   */
  function _aptTypeToString(bed) {
    if (bed === 0) {
      return "Studio";
    } else {
      return bed + " Bed";
    }
  }

  /**
   * Formats a date
   * @param  {String}  date e.g. "01/17/2019"
   * @return  {String} returns a formatted date
   */
  function _convertDateFormat(date) {
    var newDate = new Date(date);
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var newDateString = monthNames[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear();

    return newDateString;
  }

  // Return public methods object
  return card;
})();
