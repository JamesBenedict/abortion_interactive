var jordanData = {
  // insurance: "denied_insurance",
  // insurance_status: "Denied",
  // cost_low: '400',
  // cost_high:'600',
  insurance: {
    class: 'denied_insurance',
    status: 'Denied',
    cost_low: '400',
    cost_high: '600'
  },

  clinics: {
    0: {
      name: "Clinic for Women",
      address: "3607 W 16TH ST STE 2B",
      city: "INDIANAPOLIS",
      hours: "<ul><li>00</li><li>00</li></ul>",
      distance: "aa",
      map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.8697597707032!2d-86.22263804837195!3d39.78747810148953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b9ff3fa610325%3A0xb22d4be1dc8ddfce!2sClinic+for+Women!5e0!3m2!1sen!2sus!4v1487008198168" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
      time: "aa"
      },
    1: {
      name: "Planned Parenthood of Indiana and Kentucky – Merrillville",
      address: "8645 Connecticut St",
      city: "Merrillville",
      hours: "bb hours",
      map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.5575447435713!2d-85.76656604839567!3d38.24337319273233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886972aa53f02ce1%3A0xf6a38ec661945c0!2sPlanned+Parenthood+Of+Indiana+And+Kentucky!5e0!3m2!1sen!2sus!4v1487008226317" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
      distance: "bb miles",
      time: "bb time"
    },
    2: {
     name: "PLANNED PARENTHOOD OF INDIANA AND KENTUCKY INC - Bloomington",
     address: "421 S College Ave",
     city: "Bloomington",
     hours: "cchours",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.5494044451284!2d-86.53683284838169!3d39.1622291387931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886c66e6d311e2a3%3A0xb6aa24caf06f0e2b!2sPlanned+Parenthood+-+Bloomington+Health+Center!5e0!3m2!1sen!2sus!4v1487008346745" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "ccmiles",
     time: "cctime"
    },

    3: {
     name: "PLANNED PARENTHOOD OF INDIANA AND KENTUCKY INC - INDIANAPOLIS",
     address: "8590 Georgetown Road",
     city: "Indianapolis",
     hours: "dd",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196153.73353221721!2d-86.26241834893607!3d39.80918806251593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b5545f8ad0ef1%3A0xae06b59be2e1ba1a!2sPlanned+Parenthood+-+Georgetown+Health+Center!5e0!3m2!1sen!2sus!4v1487008372730" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "",
     time: ""
    },

    4: {
     name: "Planned Parenthood of Indiana and Kentucky – Lafayette",
     address: "964 Mezzanine Drive",
     city: "Lafayette",
     hours: "",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390731.90876454033!2d-86.77604636871936!3d40.084488955340525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88131c976abb280f%3A0xeb434befc2d3d17b!2sPlanned+Parenthood+-+Lafayette+Health+Center!5e0!3m2!1sen!2sus!4v1487008385167" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "",
     time: ""
    },

    5: {
     name: "Indianapolis Women’s Center",
     address: "1201 N Arlington Ave",
     city: "Indianapolis",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390729.75179028814!2d-86.77742062648615!3d40.08486476958637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4fb1c6098cdd%3A0x8803c4ab9e7fb2b6!2sIndianapolis+Women&#39;s+Center!5e0!3m2!1sen!2sus!4v1487008409962" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },

    6: {
     name: "Women's Pavilion",
     address: "2010 Ironwood Cir.",
     city: "South Bend",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772361.0456138318!2d-86.6825933766603!3d40.871098762719825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816cd7f92da6c13%3A0x16f92bce88355908!2sWomen&#39;s+Pavilion!5e0!3m2!1sen!2sus!4v1487008426151" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },

    7: {
     name: "Indiana University Health University Hospital",
     address: "550 University Blvd. ",
     city: "Indianapolis",
     hours: "",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772368.4511087061!2d-86.68534376199443!3d40.8704639143238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b57359175515d%3A0xda6611960c49084b!2sIU+Health+University+Hospital!5e0!3m2!1sen!2sus!4v1487008440149" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "",
     time: ""
    },

    8: {
     name: "Sidney & Lois Eskenazi Hospital",
     address: "720 Eskenazi Ave. ",
     city: "Indianapolis",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.2892533678987!2d-86.18625814837212!3d39.778063602054516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b57377b5b892d%3A0x8ab8737ab2400d69!2sEskenazi+Hospital!5e0!3m2!1sen!2sus!4v1487008451363" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },

    9: {
     name: "Indiana University Health North Hospital",
     address: "11700 N. Meridian St.",
     city: "Carmel",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.2028641147695!2d-86.16404484836927!3d39.95921689115857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ac6201c4a60f%3A0x7474ff23f098bf6!2sIU+Health+North+Hospital!5e0!3m2!1sen!2sus!4v1487008471127" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },
    
  } 
}

emmaData =  {
  // insurance: "denied_insurance",
  // insurance_status: "Denied",
  // cost_low: '400',
  // cost_high:'600',
  insurance: {
    class: 'approved_insurance',
    status: 'Approved',
    cost_low: '400',
    cost_high: '600'
  },

  clinics: {
    0: {
      name: "Clinic for Women",
      address: "3607 W 16TH ST STE 2B",
      city: "INDIANAPOLIS",
      hours: "<ul><li>00</li><li>00</li></ul>",
      distance: "aa",
      map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.8697597707032!2d-86.22263804837195!3d39.78747810148953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b9ff3fa610325%3A0xb22d4be1dc8ddfce!2sClinic+for+Women!5e0!3m2!1sen!2sus!4v1487008198168" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
      time: "aa"
      },
    1: {
      name: "Planned Parenthood of Indiana and Kentucky – Merrillville",
      address: "8645 Connecticut St",
      city: "Merrillville",
      hours: "bb hours",
      map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.5575447435713!2d-85.76656604839567!3d38.24337319273233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886972aa53f02ce1%3A0xf6a38ec661945c0!2sPlanned+Parenthood+Of+Indiana+And+Kentucky!5e0!3m2!1sen!2sus!4v1487008226317" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
      distance: "bb miles",
      time: "bb time"
    },
    2: {
     name: "PLANNED PARENTHOOD OF INDIANA AND KENTUCKY INC - Bloomington",
     address: "421 S College Ave",
     city: "Bloomington",
     hours: "cchours",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.5494044451284!2d-86.53683284838169!3d39.1622291387931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886c66e6d311e2a3%3A0xb6aa24caf06f0e2b!2sPlanned+Parenthood+-+Bloomington+Health+Center!5e0!3m2!1sen!2sus!4v1487008346745" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "ccmiles",
     time: "cctime"
    },

    3: {
     name: "PLANNED PARENTHOOD OF INDIANA AND KENTUCKY INC - INDIANAPOLIS",
     address: "8590 Georgetown Road",
     city: "Indianapolis",
     hours: "dd",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196153.73353221721!2d-86.26241834893607!3d39.80918806251593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b5545f8ad0ef1%3A0xae06b59be2e1ba1a!2sPlanned+Parenthood+-+Georgetown+Health+Center!5e0!3m2!1sen!2sus!4v1487008372730" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "",
     time: ""
    },

    4: {
     name: "Planned Parenthood of Indiana and Kentucky – Lafayette",
     address: "964 Mezzanine Drive",
     city: "Lafayette",
     hours: "",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390731.90876454033!2d-86.77604636871936!3d40.084488955340525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88131c976abb280f%3A0xeb434befc2d3d17b!2sPlanned+Parenthood+-+Lafayette+Health+Center!5e0!3m2!1sen!2sus!4v1487008385167" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "",
     time: ""
    },

    5: {
     name: "Indianapolis Women’s Center",
     address: "1201 N Arlington Ave",
     city: "Indianapolis",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390729.75179028814!2d-86.77742062648615!3d40.08486476958637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4fb1c6098cdd%3A0x8803c4ab9e7fb2b6!2sIndianapolis+Women&#39;s+Center!5e0!3m2!1sen!2sus!4v1487008409962" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },

    6: {
     name: "Women's Pavilion",
     address: "2010 Ironwood Cir.",
     city: "South Bend",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772361.0456138318!2d-86.6825933766603!3d40.871098762719825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816cd7f92da6c13%3A0x16f92bce88355908!2sWomen&#39;s+Pavilion!5e0!3m2!1sen!2sus!4v1487008426151" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },

    7: {
     name: "Indiana University Health University Hospital",
     address: "550 University Blvd. ",
     city: "Indianapolis",
     hours: "",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772368.4511087061!2d-86.68534376199443!3d40.8704639143238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b57359175515d%3A0xda6611960c49084b!2sIU+Health+University+Hospital!5e0!3m2!1sen!2sus!4v1487008440149" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "",
     time: ""
    },

    8: {
     name: "Sidney & Lois Eskenazi Hospital",
     address: "720 Eskenazi Ave. ",
     city: "Indianapolis",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.2892533678987!2d-86.18625814837212!3d39.778063602054516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b57377b5b892d%3A0x8ab8737ab2400d69!2sEskenazi+Hospital!5e0!3m2!1sen!2sus!4v1487008451363" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },

    9: {
     name: "Indiana University Health North Hospital",
     address: "11700 N. Meridian St.",
     city: "Carmel",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.2028641147695!2d-86.16404484836927!3d39.95921689115857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ac6201c4a60f%3A0x7474ff23f098bf6!2sIU+Health+North+Hospital!5e0!3m2!1sen!2sus!4v1487008471127" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },
    
  } 
},
leahData =  {
  // insurance: "denied_insurance",
  // insurance_status: "Denied",
  // cost_low: '400',
  // cost_high:'600',
  insurance: {
    class: 'approved_insurance',
    status: 'Approved',
    cost_low: '400',
    cost_high: '600'
  },

  clinics: {
    0: {
      name: "Clinic for Women",
      address: "3607 W 16TH ST STE 2B",
      city: "INDIANAPOLIS",
      hours: "<ul><li>00</li><li>00</li></ul>",
      distance: "aa",
      map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.8697597707032!2d-86.22263804837195!3d39.78747810148953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b9ff3fa610325%3A0xb22d4be1dc8ddfce!2sClinic+for+Women!5e0!3m2!1sen!2sus!4v1487008198168" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
      time: "aa"
      },
    1: {
      name: "Planned Parenthood of Indiana and Kentucky – Merrillville",
      address: "8645 Connecticut St",
      city: "Merrillville",
      hours: "bb hours",
      map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.5575447435713!2d-85.76656604839567!3d38.24337319273233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886972aa53f02ce1%3A0xf6a38ec661945c0!2sPlanned+Parenthood+Of+Indiana+And+Kentucky!5e0!3m2!1sen!2sus!4v1487008226317" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
      distance: "bb miles",
      time: "bb time"
    },
    2: {
     name: "PLANNED PARENTHOOD OF INDIANA AND KENTUCKY INC - Bloomington",
     address: "421 S College Ave",
     city: "Bloomington",
     hours: "cchours",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.5494044451284!2d-86.53683284838169!3d39.1622291387931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886c66e6d311e2a3%3A0xb6aa24caf06f0e2b!2sPlanned+Parenthood+-+Bloomington+Health+Center!5e0!3m2!1sen!2sus!4v1487008346745" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "ccmiles",
     time: "cctime"
    },

    3: {
     name: "PLANNED PARENTHOOD OF INDIANA AND KENTUCKY INC - INDIANAPOLIS",
     address: "8590 Georgetown Road",
     city: "Indianapolis",
     hours: "dd",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196153.73353221721!2d-86.26241834893607!3d39.80918806251593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b5545f8ad0ef1%3A0xae06b59be2e1ba1a!2sPlanned+Parenthood+-+Georgetown+Health+Center!5e0!3m2!1sen!2sus!4v1487008372730" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "",
     time: ""
    },

    4: {
     name: "Planned Parenthood of Indiana and Kentucky – Lafayette",
     address: "964 Mezzanine Drive",
     city: "Lafayette",
     hours: "",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390731.90876454033!2d-86.77604636871936!3d40.084488955340525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88131c976abb280f%3A0xeb434befc2d3d17b!2sPlanned+Parenthood+-+Lafayette+Health+Center!5e0!3m2!1sen!2sus!4v1487008385167" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "",
     time: ""
    },

    5: {
     name: "Indianapolis Women’s Center",
     address: "1201 N Arlington Ave",
     city: "Indianapolis",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390729.75179028814!2d-86.77742062648615!3d40.08486476958637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4fb1c6098cdd%3A0x8803c4ab9e7fb2b6!2sIndianapolis+Women&#39;s+Center!5e0!3m2!1sen!2sus!4v1487008409962" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },

    6: {
     name: "Women's Pavilion",
     address: "2010 Ironwood Cir.",
     city: "South Bend",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772361.0456138318!2d-86.6825933766603!3d40.871098762719825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816cd7f92da6c13%3A0x16f92bce88355908!2sWomen&#39;s+Pavilion!5e0!3m2!1sen!2sus!4v1487008426151" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },

    7: {
     name: "Indiana University Health University Hospital",
     address: "550 University Blvd. ",
     city: "Indianapolis",
     hours: "",
     map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772368.4511087061!2d-86.68534376199443!3d40.8704639143238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b57359175515d%3A0xda6611960c49084b!2sIU+Health+University+Hospital!5e0!3m2!1sen!2sus!4v1487008440149" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
     distance: "",
     time: ""
    },

    8: {
     name: "Sidney & Lois Eskenazi Hospital",
     address: "720 Eskenazi Ave. ",
     city: "Indianapolis",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.2892533678987!2d-86.18625814837212!3d39.778063602054516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b57377b5b892d%3A0x8ab8737ab2400d69!2sEskenazi+Hospital!5e0!3m2!1sen!2sus!4v1487008451363" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },

    9: {
     name: "Indiana University Health North Hospital",
     address: "11700 N. Meridian St.",
     city: "Carmel",
     hours: "",
     map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.2028641147695!2d-86.16404484836927!3d39.95921689115857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ac6201c4a60f%3A0x7474ff23f098bf6!2sIU+Health+North+Hospital!5e0!3m2!1sen!2sus!4v1487008471127" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>' ,
     distance: "",
     time: ""
    },
    
  } 
},
context = '',
// util
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


var characterSelection = function () {
  $('.characterCard').click(function () {
    var name = $(this).attr('data');
    if (name == 'leah'){
      context = leahData;
      // console.log(context.length);
      loadData(); 
      return context;
      this.context = function () {}; 
      
    } else if (name == 'emma'){
      context = emmaData;
      // console.log(context);
      // console.log(context.length);
      loadData(); 
      return context;
      this.context = function () {};
       
    } else {
      context = jordanData;
      // console.log(context);
      // console.log(Object.size(context));
      loadData(); 
      return context;
      this.context = function () {}; 
    }
  })
}

var charCardHeight = function () {
  $('.jordan_img').css('height', $('.jordan').height() );
  $('.emma_img').css('height', $('.emma').height() );
  $('.leah_img').css('height', $('.leah').height() );
  // console.log(parseInt($('.jordan').height()))
}

var insuranceCard = function(){
  $('.insurance').click(function () {
      // var x = context;
      // console.log(x[0]);
      $('.insurance').css('transition', '2s ease-in-out').hide();
      // alert(context);
      var template = $('#insurance_hb').html();
      var templateScript = Handlebars.compile(template);
      var html = templateScript(context);
      console.log(context)
      $('#insurance_content').append(html);
  })
}

var mapCard = function () {
  // var template = $('#map_hb').html();
  // var templateScript = Handlebars.compile(template);
  // var html = templateScript(context);

  // // console.log(jordanData.insurance.class);
  // console.log('mapCard')

  // $('#map_content').append(html);
  $('.clinic_name').append(context.clinics[0].name);
  $('.clinic_distance').append(context.clinics[0].distance);
  $('.clinic_hours').append(context.clinics[0].hours);
  $('.clinic_map').append(context.clinics[0].map);

  // console.log('map')
  clinicNum = 1

  $('.map_button').click(function (){
      // console.log(context.insurance.class);
      // clinicNum = 'clinic2';
      var localClinincNum = clinicNum.toString(),
      clinicCount = Object.size(context.clinics)-1;

      clinicName = context.clinics[clinicNum].name;
      console.log(clinicName);

      // $('.clinic').text('').append(clinicName);

      $('.clinic_name').text('').append(context.clinics[clinicNum].name);
      $('.clinic_distance').text('').append(context.clinics[clinicNum].distance);
      $('.clinic_hours').text('').append(context.clinics[clinicNum].hours);
      $('.clinic_map').text('').append(context.clinics[clinicNum].map);
      
      if (clinicNum < clinicCount){
        clinicNum ++
        console.log(clinicNum)
        return clinicNum;
        this.context = function () {};
      } else{
        clinicNum = 0;
        return clinicNum;
        this.context = function () {}; 
      }
  })
}



var navbar = function () {
  $(document).ready( function() {  
    var winHeight = $(window).height(), 
        docHeight = $(document).height(),
        progressBar = $('progress'),
        value = 0,
        max;

    /* Set the max scrollable area */
    max = docHeight - winHeight;
    progressBar.attr('max', max);

    $('#next').click(function () {

    // $(document).on('scroll', function(){
       // value = $(window).scrollTop();
       newValue = parseInt($('.active').height()),
       value += newValue;
       // console.log(newValue);
       // console.log(value);
       progressBar.attr('value', value);
    });

    $('#prev').click(function () {

    // $(document).on('scroll', function(){
       // value = $(window).scrollTop();
       newValue = parseInt($('.active').height()),
       value -= newValue;
       // console.log(newValue);
       // console.log(value);
       progressBar.attr('value', value);
    });
  });
}


var loadData = function (){
  insuranceCard();
  mapCard(); 
}

$(document).ready(function () {
    charCardHeight();
    navbar();
  //   insuranceCard();
  // mapCard();
    characterSelection();
    window.onresize = function () { 
      charCardHeight();
    }    
});

