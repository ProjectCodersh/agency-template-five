import { Link } from 'react-router-dom';
import BreadCumb from '../../Components/Common/BreadCumb';

const Work = () => {
    const teamContent = [
        {
            img: '/assets/img/work/work1.png',
        },
        {
            img: '/assets/img/work/work2.png',
        },
        {
            img: '/assets/img/work/work3.png',
        },
        {
            img: '/assets/img/work/work4.png',
        },
        {
            img: '/assets/img/work/work5.png',
        },
        {
            img: '/assets/img/work/work6.png',
        },
        {
            img: '/assets/img/work/work7.png',
        },
        {
            img: '/assets/img/work/work8.png',
        },
        {
            img: '/assets/img/work/work9.png',
        },
        {
            img: '/assets/img/work/work10.png',
        },
        {
            img: '/assets/img/work/work11.png',
        },
        {
            img: '/assets/img/work/work12.png',
        },
        {
            img: '/assets/img/work/work13.png',
        },
        {
            img: '/assets/img/work/work14.png',
        },
        {
            img: '/assets/img/work/work15.png',
        },
        {
            img: '/assets/img/work/work16.png',
        },
        {
            img: '/assets/img/work/work17.png',
        },
        {
            img: '/assets/img/work/work18.png',
        },
        {
            img: '/assets/img/work/work19.png',
        },
        {
            img: '/assets/img/work/work20.png',
        },
        {
            img: '/assets/img/work/work21.png',
        },
        {
            img: '/assets/img/work/work22.png',
        },
        {
            img: '/assets/img/work/work23.png',
        },
        {
            img: '/assets/img/work/work24.png',
        },
        {
            img: '/assets/img/work/work25.png',
        },
    ];

    return (
        <>
            {/* BREADCRUMB */}
            <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Work" />

            {/* Image section */}
            <section className="team-section-3 fix section-padding">
                <div className="container-fluid">
                    <div className="row">
                        {teamContent.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="team-card-items team-work-card">
                                    <div className="team-image-wrapper">
                                        <div className="team-image">
                                            <img src={item.img} alt="work" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
