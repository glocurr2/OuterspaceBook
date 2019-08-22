/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BookDetail extends Component {


  state = {
    book: [],
    theid : this.props.match.params.id
   }

  

  async componentDidMount() {
    const {id} = this.props.match.params;
    let pagenum = 1;
    const theid = this.state.theid;
    if (theid <= 20) {
      pagenum = 1;
    } else if (theid <= 41)  {
      pagenum = 2;
    } else if (theid <= 61)  {
      pagenum = 3;
    } else if (theid <= 81)  {
      pagenum = 4;
    } else if (theid <= 101)  {
      pagenum = 5;
    }
    
    try {
      const res = await fetch(`get-books.php?id=${id}`, { mode: 'no-cors'});
      const book = await res.json();
      console.log (book);
      this.setState({
        book: book.results,
        pagenum: pagenum,
        });
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    const { book } = this.state;
    const BOOK_PATH = 'https://www.outerspacebook.net/images/';
    const pagenum = this.state.pagenum;
   return (
    <div className="background-main" >
        {this.state.book.map((thisbook, thisindex) => (
       <div className="content-area" key={thisbook.id}>
       <div className="book-title">{thisbook.title}</div>
       <div className="book-image-p2 clearfix"> <img src={`${BOOK_PATH}${thisbook.image}`} alt={thisbook.title} /></div>

       <div className="author-section">
        {thisbook.author_image &&
       <p><img className="author-image" src={`${BOOK_PATH}${thisbook.author_image}`}  alt={thisbook.author}/><br/></p>
        }
        {thisbook.author}
       </div>
       
       <div className="book-description clearfix">{thisbook.description}</div>
       <Link to={`/${pagenum}`}><input type="button" title="back button" className="button-back"  value="&lt; BACK"/></Link>
       </div> 
        ))}
        <div className="spacer">&nbsp;</div>
      </div>
    );

  }

}


export default BookDetail;
