export const checkInputMongolianAlphabetOrNot=(value)=>{
    
   for(let i=0;i<value.length;i++){
     if((value[i].charCodeAt()>=1040&&value[i].charCodeAt()<=1103)||value[i].charCodeAt()===1199||value[i].charCodeAt()===1257){
      
     } else{
       alert('Та Монголоор бичнэ үү');
        
     }
   }
}