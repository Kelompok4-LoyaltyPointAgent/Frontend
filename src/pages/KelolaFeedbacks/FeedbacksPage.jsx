import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { getFeedbacks } from '../../api/getFeedbacks';
import NavbarTop from '../../components/NavbarTop'
import NewSidebar from '../../components/sidebar/NewSidebar'

const FeedbacksPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await getFeedbacks();
            setData(res.data.data);
        };
        if (loading) fetchPosts();
        setLoading(false);
    }, [loading]);
    console.log(data)
    return (
        <div className="d-flex">
            <NewSidebar />
            <div className="w-100">
                <NavbarTop />
                <div className='d-flex flex-row flex-wrap gap-3 justify-content-center mt-3'>
                    {
                        data.map((item) => (
                                <Card style={{height:"30vh",backgroundColor:"#ECECEE",color:"#01478C",width:"19rem", textAlign:"center", padding:"10px"}}>
                                    Card Feedback
                                    <Card.Body className='d-flex flex-column justify-content-between text-start'>
                                            <div>Ini review {item.review}</div>
                                            <div className=''>
                                                From :{data.user}
                                            </div>
                                    </Card.Body>
                                </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FeedbacksPage