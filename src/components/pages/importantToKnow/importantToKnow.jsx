import React from "react";

const ImportantToKnow = () => {
    return (
        <section className="important-to-know">
        <div className="wrapper">
          <div className="photo-big-1">
            <img src="./img/pngCard/Burana-Tower.jpg" alt="burana" />
          </div>
  
          <h1 className="title-important">Important to know</h1>
  
          <div className="accordion-wrapper">
  
          <div className="accordion-left">
            <div className="accordion-item">
              <input className="accordion-item__imput"  type="checkbox" id="accordion-1" />
              <label className="accordion-item__trigger" for="accordion-1">Visa</label>
              <div className="accordion-item__content">Visa-free regime is accepted for more than 60 countries, up to 60 days of staying in Kyrgyzstan. For those who need a visa, we have an E-visa system to get a more simple way to reach our country. An effective initiative of hospitality in the visa apply was taken by the other Central Asian countries. The new initiative of the Silk Visa will give a chance to visit Kazakhstan, Uzbekistan, and Kyrgyzstan with one visa application.</div>
            </div>
  
            <div className="accordion-item">
              <input className="accordion-item__imput" type="checkbox" id="accordion-2" />
              <label className="accordion-item__trigger" for="accordion-2">Public transport</label>
              <div className="accordion-item__content">Driving by car is the most convenient transportation in Kyrgyzstan. Public transport is popular among locals and guests. At Western and Eastern bus stations possible to take a sit on bus, minibus and shared taxi for different destinations. Some routes are scheduled, but most of them start the way when the car is full. Possible to rent a car with driver or without a driver. There is a domestic flight connection between Bishkek and Osh city. Bishkek-Balykchy train is available in the summertime in June-September.</div>
            </div>
  
            <div className="accordion-item">
              <input className="accordion-item__imput" type="checkbox" id="accordion-3" />
              <label className="accordion-item__trigger" for="accordion-3">Registration</label>
              <div className="accordion-item__content">There is an order for registration of foreign citizens arriving in the Kyrgyz Republic. The registration is made by the territorial units of passport issuing office of the State Registration Service under the government of the Kyrgyz Republic. For most of the Western countries representatives’ duration of stay without registration is 30-60 days. Please keep the registration form, it would be checked on departure. A foreign citizen who violates fixed terms of their stay in the Kyrgyz Republic will be fined.</div>
            </div>
  
          </div>
  
  
            <div className="accordion-right">
              <div className="accordion-item">
                <input className="accordion-item__imput" type="checkbox" id="accordion-4" />
                <label className="accordion-item__trigger" for="accordion-4">Accommodation</label>
                <div className="accordion-item__content">Hotels for the wide range cost could be found in Bishkek and other big cities of the country. Recently hostels became popular and found its admirers. Yurt stay is a traditional nomads dwelling, you can try to in Kyrgyzstan too. At the regions possible to stay at cozy guesthouses and homestays.</div>
              </div>
    
              <div className="accordion-item">
                <input className="accordion-item__imput" type="checkbox" id="accordion-5" />
                <label className="accordion-item__trigger" for="accordion-5">How to get?</label>
                <div className="accordion-item__content">International Airport Manas in Bishkek and Airport in Osh town receives daily international flights. Open Skies policy officially start working from January 2019. Being on the crossroad Kyrgyzstan has international highway connections with China, Kazakhstan, Uzbekistan, and Tajikistan. Possible to travel by train from Russia, Almaty, and Tashkent.</div>
              </div>
    
              <div className="accordion-item">
                <input className="accordion-item__imput" type="checkbox" id="accordion-6" />
                <label className="accordion-item__trigger" for="accordion-6">Geography and climate</label>
                <div className="accordion-item__content">The Kyrgyz Republic is located in the northeast of Central Asia in the center of the Eurasian continent. Its territory covers an area of ​​187.5 thousand km2. Length from west to east – 900 km, from north to south – 450 km. The Kyrgyz Republic has common borders with the Republic of Kazakhstan, the People’s Republic of China, the Republic of Tajikistan, and the Uzbek Republic.</div>
              </div>
    
            </div>
  
          </div>
        </div>
      </section> 
    )
}

export default ImportantToKnow;