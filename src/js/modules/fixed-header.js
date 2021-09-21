// Появление меню при прокрутке 
function pagescroll(){ 
   let pscroll = 0;
   window.addEventListener('scroll', function() { 
      if (pscroll < window.pageYOffset && window.pageYOffset > header.offsetHeight && !header.classList.contains('nav-open')){
         header.style.transform="translateY(-100%)"; //прячем хедер при прокрутке вниз            
      } else { 
         header.style.transform="none"; //показываем хедер при прокрутке вверх        
      }  
      pscroll = window.pageYOffset;
   });
}