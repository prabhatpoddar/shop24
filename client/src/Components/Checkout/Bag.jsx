import React from "react";
import styles from "./cart.module.css";

const Bag = () => {
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show Less";
      moreText.style.display = "inline";
    }
  }
  return (
    <div id={styles.container}>
      <hr />
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.address}>
            <p className={styles.p1}>
              <b>Check delivery time & services</b>
            </p>
            <button className={styles.pinBtn}>ENTER PIN CODE</button>
          </div>
          <div className={styles.accordion}>
            <h2>Available Offers</h2>
            <div>
              <li class="offersV2-base-message ">
                <span>
                  10% Instant Discount on Citi Credit and Debit Cards on a min
                  spend of Rs 3,000. TCA
                </span>
              </li>
              <span id="dots"></span>
              <span id="more">
                <li class="offersV2-base-message ">
                  <span>
                    10% Instant Discount on ICICI Bank Credit Cards on a min
                    spend of Rs 4,000. TCA
                  </span>
                </li>
                <li class="offersV2-base-message ">
                  <span>
                    5% Cashback on Paytm Wallet and Postpaid Transactions on a
                    min spend of Rs 1,500. TCA
                  </span>
                </li>
                <li class="offersV2-base-message ">
                  <span>
                    Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of
                    Rs 1,000. TCA
                  </span>
                </li>
                <span id="dots"></span>
                <span id="more"></span>
                <li class="offersV2-base-message ">
                  <span>
                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                  </span>
                </li>
                <li class="offersV2-base-message ">
                  <span>
                    10% Cashback upto Rs 150 on Freecharge Paylater transaction.
                    TCA
                  </span>
                </li>
              </span>
            </div>
            <button onClick={myFunction} id="myBtn">
              Show More
            </button>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Bag;

{
  /* <h2>Read More Read Less Button</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
<button onclick="myFunction()" id="myBtn">Read more</button> */
}
