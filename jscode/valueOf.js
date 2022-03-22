function Book(){
    this.type='English'
}
Book.prototype.getType=function(){
    console.log(this.type);
}
const book=new Book();
book.getType();//English
book.type='Math';
book.valueOf();//Book { type: 'Math' }