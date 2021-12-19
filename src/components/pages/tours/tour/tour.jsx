import s from './tour.module.css'

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setCurrentTour } from "../../../../redux/tours/actions";
import { getTourById } from "../../../../API/tours";


const Tour = () => {
  const router = useParams();
  const tour = useSelector(({tours})=> tours.currentTour);
  console.log(router)
  const dispatch = useDispatch();

  const fetchTourDetail = async () => {
    try {
      const { data } = await getTourById(router.id)
      dispatch(setCurrentTour(data));
    } catch (e) {
      console.log(e);
    }
  };

  console.log(tour, 'tour')


  useEffect(() => {
    if (router.id) fetchTourDetail();
    return () => {
      dispatch(setCurrentTour(null))
    };
  }, [router]);

    return (
        <div className={s.wrapper}>
            
      <div className={s.containerrr}>
        <div className={s.main__info}>
          <h1></h1>
          <div class="photo"><img   src="./img/pngCard/Kyirgyizstan-nature.jpg" alt="nature" class="nature-photo" />test</div>
          <h3>Lake Issyk-Kul and Song-Kul must see in Kyrgyzstan.</h3>
          <p>
          <strong>Lake Issyk-Kull </strong> offers various of options activities like “Hiking, Trekking, Off-road adventures. Culture entertainments: Eagle show, Folklor show, Workshops”.
            <br />
            <br />
          <strong>Lake Song-Kul.</strong>  If you are looking for the unique culture of nomads, sleep in real local yurts and explore the high mountain valleys up to 3000m, welcome to Song-Kul valley.
          </p>

          <div >
             
              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-1" />
                <label className={s.accordionItemTrigger} for="accordion-1">Day1: Bishkek</label>
                <div className={s.accordionItemContent}>The Kyrgyz Republic is located in the northeast of Central Asia in the center of the Eurasian continent. Its territory covers an area of ​​187.5 thousand km2. Length from west to east – 900 km, from north to south – 450 km. The Kyrgyz Republic has common borders with the Republic of Kazakhstan, the People’s Republic of China, the Republic of Tajikistan, and the Uzbek Republic.</div>
              </div>
              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-2" />
                <label className={s.accordionItemTrigger} for="accordion-2">Day 2: Bishkek - Burana tower - ChongKemin</label>
                <div className={s.accordionItemContent}>The Kyrgyz Republic is located in the northeast of Central Asia in the center of the Eurasian continent. Its territory covers an area of ​​187.5 thousand km2. Length from west to east – 900 km, from north to south – 450 km. The Kyrgyz Republic has common borders with the Republic of Kazakhstan, the People’s Republic of China, the Republic of Tajikistan, and the Uzbek Republic.</div>
              </div>
              <div className={s.accordionItem}> 
                <input className={s.accordionItemImput} type="checkbox" id="accordion-3" />
                <label className={s.accordionItemTrigger} for="accordion-3">Day 3: ChongKemin - Karakol.</label>
                <div className={s.accordionItemContent}>The Kyrgyz Republic is located in the northeast of Central Asia in the center of the Eurasian continent. Its territory covers an area of ​​187.5 thousand km2. Length from west to east – 900 km, from north to south – 450 km. The Kyrgyz Republic has common borders with the Republic of Kazakhstan, the People’s Republic of China, the Republic of Tajikistan, and the Uzbek Republic.</div>
              </div>
              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-4" />
                <label className={s.accordionItemTrigger} for="accordion-4">Day 4: Karakol - AltynArashan - Karakol.</label>
                <div className={s.accordionItemContent}>The Kyrgyz Republic is located in the northeast of Central Asia in the center of the Eurasian continent. Its territory covers an area of ​​187.5 thousand km2. Length from west to east – 900 km, from north to south – 450 km. The Kyrgyz Republic has common borders with the Republic of Kazakhstan, the People’s Republic of China, the Republic of Tajikistan, and the Uzbek Republic.</div>
              </div>
              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-5" />
                <label className={s.accordionItemTrigger} for="accordion-5">Day 5: Karakol - JetiOguz - Bokonbaevo</label>
                <div className={s.accordionItemContent}>The Kyrgyz Republic is located in the northeast of Central Asia in the center of the Eurasian continent. Its territory covers an area of ​​187.5 thousand km2. Length from west to east – 900 km, from north to south – 450 km. The Kyrgyz Republic has common borders with the Republic of Kazakhstan, the People’s Republic of China, the Republic of Tajikistan, and the Uzbek Republic.</div>
              </div>

              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-6" />
                <label className={s.accordionItemTrigger} for="accordion-6">Day 6: Bokonbaevo - Kochkor</label>
                <div className={s.accordionItemContent}>The Kyrgyz Republic is located in the northeast of Central Asia in the center of the Eurasian continent. Its territory covers an area of ​​187.5 thousand km2. Length from west to east – 900 km, from north to south – 450 km. The Kyrgyz Republic has common borders with the Republic of Kazakhstan, the People’s Republic of China, the Republic of Tajikistan, and the Uzbek Republic.</div>
              </div>
              <div className={s.accordionItem}>
                <input className={s.accordionItemImput} type="checkbox" id="accordion-7" />
                <label className={s.accordionItemTrigger} for="accordion-7">Day 7: Kochkor - SongKul, horse trek.</label>
                <div className={s.accordionItemContent}>The Kyrgyz Republic is located in the northeast of Central Asia in the center of the Eurasian continent. Its territory covers an area of ​​187.5 thousand km2. Length from west to east – 900 km, from north to south – 450 km. The Kyrgyz Republic has common borders with the Republic of Kazakhstan, the People’s Republic of China, the Republic of Tajikistan, and the Uzbek Republic.</div>
              </div>
    
            </div>
        </div>
        <div class="sidebar">
          <div className={s.form}>
            <h2 className={s.formTitle}>Вход</h2>
            <div className={s.inputForm}>
              <input type="text"  placeholder="Login"/>
            </div>
            <div className={s.inputForm}>
              <input type="password"  placeholder="Password"/>
            </div>
            <div className={s.inputForm}>
              <input type="submit" value="Войти" />
            </div>
           <a href="#" className={s.fomrForget}> Забыли пароль?</a>
          </div>
        </div>
      </div>
    

        </div>
    )
}

export default Tour;
