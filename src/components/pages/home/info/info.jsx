import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Info = () => {
    const dispatch = useDispatch();

    return (
        <section className="section-info">
      <div className="wrapper">
        <div className="info-container">
        <div className="section-info__all">
          <div className="section-info__right">
            <div className="title-2"><h2 className="title-2-2"></h2></div>

            <div className="tottori-card-1">
            <div className="subtitle-2">
              <p className="subtitle-2-2">
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this if i had the energy but under the bed, for
                attack the child, open the door,
              </p>
            </div>

            <div><a href="#" className="card-link">VIEW NEIGHBORHOOD</a></div>
          </div>
        </div>

          <div className="section-info__left">
            <div className="title-2">
              <h2 className="title-2-2">Our guests says</h2>
            </div>

            <div className="slick-wrap">
                <div>
                    <div className="tottori-card-2">
                    <div className="ava"><img src="./img/pngCard/avatar-1.jpg" alt="ava"/></div>
                    <div className="ava-info">
                        <p className="ava-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, molestiae tempore eum, sed vero doloremque explicabo earum iure, a aspernatur perspiciatis autem adipisci? Provident hic assumenda labore nobis obcaecati delectus!</p>
                        {/* <p className="ava-name">Denis Green</p>
                        <span>Guest from London</span> */}
                    </div>
                  </div>
                </div>
                {/* <div>
                    <div className="tottori-card-2">
                    <div className="ava"><img src="./img/pngCard/avatar-1.jpg" alt="ava" /></div>
                    <div className="ava-info">
                        <p className="ava-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, molestiae tempore eum, sed vero doloremque explicabo earum iure, a aspernatur perspiciatis autem adipisci? Provident hic assumenda labore nobis obcaecati delectus!</p>
                        <p className="ava-name">Denis Green</p>
                        <span>Guest from London</span>
                    </div>
                  </div>
                </div>
                <div>
                    <div className="tottori-card-2">
                    <div className="ava"><img src="./img/pngCard/avatar-1.jpg" alt="ava" /></div>
                    <div className="ava-info">
                        <p className="ava-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, molestiae tempore eum, sed vero doloremque explicabo earum iure, a aspernatur perspiciatis autem adipisci? Provident hic assumenda labore nobis obcaecati delectus!</p>
                        <p className="ava-name">Denis Green</p>
                        <span>Guest from London</span>
                    </div>
                  </div>
                </div>
                <div>
                    <div className="tottori-card-2">
                    <div className="ava"><img src="./img/pngCard/avatar-1.jpg" alt="ava" /></div>
                    <div className="ava-info">
                        <p className="ava-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, molestiae tempore eum, sed vero doloremque explicabo earum iure, a aspernatur perspiciatis autem adipisci? Provident hic assumenda labore nobis obcaecati delectus!</p>
                        <p className="ava-name">Denis Green</p>
                        <span>Guest from London</span>
                    </div>
                  </div>
                </div> */}
            </div> 
        </div>
          </div>
        </div>
      </div>
      
    </section>
    )
}

export default Info;
