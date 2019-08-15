// The core app code
var myApp = (function() {
  "use strict";

  var cards = $("#cards");

  // Create a public methods object
  var methods = {};

  // 1. display cards from data first
  // display all cards from the data
  var CARD = `<div id="unit4801" class="availability-cards__card">
                <div class="availability-cards__title">Apartment #<span class="availability-cards__unit-number">4801</span></div>
                <div class="availability-cards__img">
                  <div class="availability-cards__no-img">
                    <i class="iconm-images darker-gray"></i>
                    <p class="darker-gray">No Image Available</p>
                  </div>
                  <img src="https://cdn.rentcafe.com/dmslivecafe/3/19998/homegallery.jpg" alt="">
                </div>
                <div class="availability-cards__details">
                  <p class="darker-gray">Floorplan <span class="availability-cards__floorplan">B1</span></p>
                  <div class="availability-cards__blocks m-t-sm m-b-sm">
                    <p class="bigger-text"><span class="availability-cards__beds">2 Bed</span>, <span class="availability-cards__baths">2</span> Bath</p>
                    <p class="darker-gray"><span class="availability-cards__sqft">1119</span> Sq Ft</p>
                  </div>
                  <div class="availability-cards__blocks block-right">
                    <p class="darker-gray">From <span class="bigger-text">$</span><span class="availability-cards__price bigger-text">7225</span></p>
                    <p class="darker-gray">$<span class="availability-cards__sqft">12,000</span> Deposit</p>
                  </div>
                  <p class="bigger-text">Available <span class="availability-cards__date-available">June 15, 2018</span></p>
                  <button class="availability-cards__btn m-t-md">UNIT DETAILS</button>
                </div>
              </div>`;

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
