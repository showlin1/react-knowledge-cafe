import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types';
const Bookmarks =({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 pt-4">
            <div>
                <h3 className="text-4xl text-center mb-8">Reading Time:{readingTime} </h3>
            </div>
            
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark> )
            }
        </div>
    );
};

Bookmarks.propTypes ={
bookmarks:PropTypes.array,
readingTime:PropTypes.number
}

export default Bookmarks;