import BlogDetails from '../Components/BlogDetails/BlogDetails';
import BreadCumb from '../Components/Common/BreadCumb';

const BlogDetailsPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Blog Details" />
      <BlogDetails />
    </div>
  );
};

export default BlogDetailsPage;
