/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {

  constructor(props) {
    super(props);
    let pagenum = 1;
    if (this.props.match.params.pagenum > 1) {
         pagenum = this.props.match.params.pagenum;
    }
    console.log(`this pagenum: ${pagenum}`);
    this.state = {
      books: [],
      page_begin: 0,
      page_end: 20,
      pagenum : pagenum
    }
   
  }

 async componentDidMount()  {
  let pagenum = this.state.pagenum;
    try {
      const res = await fetch('get-books.php', { mode: 'no-cors'});
      const books = await res.json();
        this.setState({
        books: books.results,
        pagenum: this.props.match.params.pagenum
      });
      console.log(books);
    } catch (e) {
      console.log(e);
  }
  if (parseInt(this.state.pagenum) > 0) {
  const thispagenum = parseInt(this.state.pagenum);
    switch(thispagenum) {
      case 2:
        this.setPage('20', '40', 'btn2');
        document.getElementById('btn2').style.backgroundColor = '#af77f6';
        if (document.getElementById('btn2-top')) {
          document.getElementById('btn2-top').style.backgroundColor = '#af77f6';
        }
        break;
      case 3:
        this.setPage('40', '60', 'btn3');
         document.getElementById('btn3').style.backgroundColor = '#af77f6';
        if (document.getElementById('btn3-top')) {
          document.getElementById('btn3-top').style.backgroundColor = '#af77f6';
        }
        break;
      case 4:
        this.setPage('60', '80', 'btn4');
        document.getElementById('btn4').style.backgroundColor = '#af77f6';
        if (document.getElementById('btn4-top')) {
          document.getElementById('btn4-top').style.backgroundColor = '#af77f6';
        }
        break;
      case 5:
        this.setPage('80', '100', 'btn5');
        document.getElementById('btn5').style.backgroundColor = '#af77f6';
        if (document.getElementById('btn5-top')) {
          document.getElementById('btn5-top').style.backgroundColor = '#af77f6';
        }
        break;
      default:
        this.setPage('0', '20', 'btn1');
        document.getElementById('btn1').style.backgroundColor = '#af77f6';
        if (document.getElementById('btn1-top')) {
          document.getElementById('btn1-top').style.backgroundColor = '#af77f6';
        }
    }
  }
}

 setPage = (param1, param2, btnid) => {
     this.setState({
      page_begin : param1,
      page_end : param2,
    });
    this.clearButtonColor();
    let btnidtop = btnid + '-top';
    document.getElementById(btnid).style.backgroundColor = '#af77f6';
    if (document.getElementById(btnidtop)) {
      document.getElementById(btnidtop).style.backgroundColor = '#af77f6';
    }
  }

 clearButtonColor = () => {
  document.getElementById('btn1').style.backgroundColor = '#4d21b6';
  document.getElementById('btn2').style.backgroundColor = '#4d21b6';
  document.getElementById('btn3').style.backgroundColor = '#4d21b6';
  document.getElementById('btn4').style.backgroundColor = '#4d21b6';
  document.getElementById('btn5').style.backgroundColor = '#4d21b6';
  document.getElementById('btn1-top').style.backgroundColor = '#4d21b6';
  document.getElementById('btn2-top').style.backgroundColor = '#4d21b6';
  document.getElementById('btn3-top').style.backgroundColor = '#4d21b6';
  document.getElementById('btn4-top').style.backgroundColor = '#4d21b6';
  document.getElementById('btn5-top').style.backgroundColor = '#4d21b6';
}
 
  render() {
    console.log('number:' + this.state.page_begin);
    console.log('number:' + this.state.page_end);
    return (
      <div className="book-list-container" >
        <div className="book-list">
        <div className="pages-top">
          <div className ="center-pages">
          <input type="button" className="button-page" id="btn1-top" onClick={this.setPage.bind(this, '0', '20', 'btn1')}  value="1"/>
          <input type="button" className="button-page" id="btn2-top" onClick={this.setPage.bind(this, '20', '40', 'btn2')} value="2"/>
          <input type="button" className="button-page" id="btn3-top" onClick={this.setPage.bind(this, '40', '60', 'btn3')} value="3"/>
          <input type="button" className="button-page" id="btn4-top" onClick={this.setPage.bind(this, '60', '80', 'btn4')}  value="4"/>
          <input type="button" className="button-page" id="btn5-top" onClick={this.setPage.bind(this, '80', '100', 'btn5')}  value="5"/>
          <div className="small-text">(Countdown: 20 books per page)</div>
          </div>
         
       </div>
        {this.state.books.slice(this.state.page_begin, this.state.page_end).map(book => <Book key={book.id} book={book} />)}
        <div className="pages">
          <div className ="center-pages">
          <input type="button" className="button-page" id="btn1" onClick={this.setPage.bind(this, '0', '20', 'btn1')}  value="1"/>
          <input type="button" className="button-page" id="btn2" onClick={this.setPage.bind(this, '20', '40', 'btn2')} value="2"/>
          <input type="button" className="button-page" id="btn3" onClick={this.setPage.bind(this, '40', '60', 'btn3')} value="3"/>
          <input type="button" className="button-page" id="btn4" onClick={this.setPage.bind(this, '60', '80', 'btn4')}  value="4"/>
          <input type="button" className="button-page" id="btn5" onClick={this.setPage.bind(this, '80', '100', 'btn5')}  value="5"/>
          </div>
       </div>
        </div>
      </div>
    );
  }
}

export default BookList;
