import React from "react";
import '../style/heart.css'

function Heart() {
    const icons = document.querySelectorAll('ion-icon');
    
    function favItem() {
      icons.forEach(icon => {
        if (icon.getAttribute('name') === 'heart-outline') {
          icon.setAttribute('name', 'heart');
        } else if (icon.getAttribute('name') === 'heart') {
          icon.setAttribute('name', 'heart-outline');
        }
      });
      const popBars = document.querySelectorAll('.pop-bars');
      popBars.forEach(bars => bars.classList.add('explosion'));
    
      setTimeout(() => {
        popBars.forEach(bars => bars.classList.remove('explosion'));
      }, 500); 
    
    }
    
    function favoriteItem() {
      setTimeout(favItem, 500)
    }
    
    

    return (
        <div class="box-favoriteItem">
            <span class="pop-bars rot45 --leftTop"></span>
            <span class="pop-bars --leftCenter"></span>
            <span class="pop-bars rot-45 --leftBottom"></span>
            <ion-icon class="heart-favoriteItem" name="heart-outline" onClick={favoriteItem} ></ion-icon>
            <span class="pop-bars rot-45 --rightTop"></span>
            <span class="pop-bars --rightCenter"></span>
            <span class="pop-bars rot45 --rightBottom"></span>
        </div>
    )
}

export default Heart;