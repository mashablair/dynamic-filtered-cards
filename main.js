// The core app code
var myApp = (function() {
  "use strict";

  var cards = $("#cards"),
    bedroomFilter = $("#filter-bedroom"),
    availabilityFilter = $("#filter-available-date");

  /**
   * Takes value of bedroom filter, if any, and produces the array to be used in filterData()
   * Then build and render cards based on that array
   * @param  {String}  value The data array or JSON file
   * @return  {Array} returns an array [bool, String]
   */
  var bedFilter = function checkBedroomFilter(value) {
    var value = value || bedroomFilter.val();
    var filterOn = value === "all" ? false : true;
    return [filterOn, value];
  };

  /**
   * Takes value of Timeframe filter, if any, and produces the array to be used in filterData()
   * @param  {String}  value The data array or JSON file
   * @return  {Array} returns an array [bool, String]
   */
  var timeFilter = function checkAvailabilityFilter(value) {
    var value = value || availabilityFilter.val();
    var filterOn = value === "all" ? false : true;
    return [filterOn, value];
  };

  var methods = {
    /**
     * Builds cards based on units data in filtered allUnits array
     * @param  {Array}  data The data array or JSON file
     */
    renderCards: function(data) {
      console.log("building and displaying cards");

      // first, delete all card from the container
      cards.empty();

      // if there are no units in filtered allUnits array, display the message
      if (data.length === 0) {
        cards.append("<p>There are no apartments matching your search.</p>");
      }

      // Otherwise, display the cards based on filter values
      else {
        // Loop through each item in filtered allUnits array (our data) and create a card for each unit
        $.each(data, function(unit, unitData) {
          // for each item in filtered allUnits data, create a card string and fill out the info w/ data details
          // gets html template string from view.js
          var card = View(
            unitData.unit_id,
            unitData.unit_number,
            unitData.photos_unit[0],
            unitData.bedrooms,
            unitData.bathroom,
            unitData.sq_ft,
            unitData.rent_price,
            unitData.deposit,
            unitData.available
          );

          // append a card to the DOM
          cards.append(card);
        });
      }
    },

    /**
     * Takes results of each check filter functions and filters the data array
     * @return  {Array} returns a formatted date
     */
    filterData: function(bedFilter, timeFilter) {
      console.log("filterData function is called");
      console.log(bedFilter);
      console.log(timeFilter);

      var filteredArray = allUnits;

      // filter by bedroom, if filter is active, and update the array
      if (bedFilter[0]) {
        console.log("filtering by bedrooms");
        filteredArray = filteredArray.filter(function(unit) {
          return unit.bedrooms == bedFilter[1];
        });
        console.log(filteredArray);
      }

      // filter by availability, if filter is active, and update the array
      if (timeFilter[0]) {
        console.log("filtering by availability");

        var today = new Date().setHours(0, 0, 0, 0);
        var cutoff;

        if (timeFilter[1] === "0") {
          // immediately available
          cutoff = today;
        } else if (timeFilter[1] === "30") {
          cutoff = today + 2592000000;
        } else if (timeFilter[1] === "60") {
          cutoff = today + 5184000000;
        } else if (timeFilter[1] === "90") {
          cutoff = today + 7776000000;
        }

        filteredArray = filteredArray.filter(function(unit) {
          var unitDate = new Date(unit.available).getTime();
          console.log(timeFilter[1]);
          return unitDate <= cutoff;
        });
        console.log(filteredArray);
      }
      console.log(filteredArray);

      methods.renderCards(filteredArray);
    }
  };

  methods.filterData(bedFilter(), timeFilter());

  // 3. Add event listeners for filtes
  // FILTERS EVENT LISTENERS
  bedroomFilter.on("change", function() {
    var filterInfo = bedFilter(this.value);
    console.log(filterInfo);
    methods.filterData(filterInfo, timeFilter());
  });

  availabilityFilter.on("change", function() {
    var filterInfo = timeFilter(this.value);
    console.log(filterInfo);
    methods.filterData(timeFilter(), filterInfo);
  });

  /**
   * Extend the public methods object so myApp can communicate with other files
   * @param  {String}   name The new method name
   * @param  {Function} fn   The new method
   */
  methods.extend = function(name, fn) {
    methods[name] = fn;
  };

  // Return public methods object
  return methods;
})();

// 3. try to get data from JSON w/ Fetch
