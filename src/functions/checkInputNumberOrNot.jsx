export const checkInputNumberOrNot=(value)=>{
    
    for(let i=0;i<value.length;i++){
      if((value[i].charCodeAt()>=48&&value[i].charCodeAt()<=57)){
      } else{
        alert('Та тоо оруулна үү');
      }
    }
 }