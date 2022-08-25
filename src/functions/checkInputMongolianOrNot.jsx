export const checkInputMongolianAlphabetOrNot=(value)=>{
    
   for(let i=0;i<value.length;i++){
     if((value[i].charCodeAt()>=1040&&value[i].charCodeAt()<=1103)||value[i].charCodeAt()===1199||value[i].charCodeAt()===1257){
        return true
     } else{
        alert('Буруу байна');
        break
     }
   }
}