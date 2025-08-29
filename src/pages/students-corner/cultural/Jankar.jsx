// src/pages/cultural/JhankaarPage.jsx

import React from 'react';
import AccordionItem from '../../../components/AccordinItem';
import MediaCarousel from '../../../components/MediaCarousel';

// --- Data for the Jhankaar Page ---
const introduction = [
    "A college is marked by its several events which include its annual social gathering. Every year we celebrate annual social gathering of M.G.M’s College of Engineering in the name of Jhankaar...",
    "The Name Jhankaar was given by the first batch of the college in 1984. Every year, Jhankaar has reached to its highest level of success. Jhankaar is 3-day’s college festival which includes host of events where students are provided a platform to think, step forward and showcase their hidden skills and talent. These events have their own color and they are very splendid in their own.",

"Day-1 of Jhankaar is especially devoted to the traditional and folk stream of India called Mrudagandh. The dazzling performances in Mrudagandh represent variety of traditions of different regions and states in India and also they arouse feeling of unity in diversity among the students.",

"Day-2 includes Dance, Drama, Songs, Mr. & Ms. M. G. M. and standup comedy ‘Hum Nahi Sudharenge’ etc.",

"On Day- 3 we invite alumni of M.G.M COE as a chief guest. The chief guest addresses the students and motivates them by his/her own experiences of life which is then followed by the appreciations of the students who won different prizes and awards throughout the year.",

"Apart from 3-Day celebration different days are celebrated in college as a part of fun for students. The days include Rose day, chocolate day, sari day, tie day and jewellery day. Simultaneously other competitions such as rangoli, mehendi, painting etc are organized to encourage the artistic view of students.",

"Sports play pivotal role in improving and maintaining the health and fitness of students. Therefore in order to nurture sportsmanship among students, sports activities such as Cricket, Volleyball, Basketball, Badminton, Tug of War, Athletics, Carrom, Chess and several other fun-games are organized 1 month before the start of Jhankaar."
];

const gallerySlides = [
    { imageSrc: "/images/jhankaar/j1.jpg", title: "Group Day" },
    { imageSrc: "/images/jhankaar/j2.jpg", title: "Group Day" },
    { imageSrc: "/images/jhankaar/j01.jpg", title: "Group Day" },
    { imageSrc: "/images/jhankaar/j02.jpg", title: "Group Day" },
    { imageSrc: "/images/jhankaar/j3.jpg", title: "Tie and Saree Day" },
    { imageSrc: "/images/jhankaar/j4.jpg", title: "Tie and Saree Day" },
    { imageSrc: "/images/jhankaar/j5.jpg", title: "Traditional Day" },
    { imageSrc: "/images/jhankaar/j6.jpg", title: "Traditional Day" },
    { imageSrc: "/images/jhankaar/j7.jpg", title: "Welcome to Jhankaar-2016" },
    { imageSrc: "/images/jhankaar/j8.jpg"},
    { imageSrc: "/images/jhankaar/j9.jpg", title: "Dance Performance" },
    { imageSrc: "/images/jhankaar/j10.jpg", title: "Dance Performance" },
    { imageSrc: "/images/jhankaar/j11.png", title: "Drama Performance" },
    { imageSrc: "/images/jhankaar/j12.jpg", title: "Drama Performance" },
    { imageSrc: "/images/jhankaar/j13.jpg", title: "Mr. & Ms. M.G.M." },
    { imageSrc: "/images/jhankaar/j14.jpg", title: "Mr. & Ms. M.G.M." },
    { imageSrc: "/images/jhankaar/j15.png", title: "Prize Distribution" },      
    { imageSrc: "/images/jhankaar/j16.png", title: "Prize Distribution" },
    { imageSrc: "/images/jhankaar/j17.png", title: "Prize Distribution" },
    { imageSrc: "/images/jhankaar/j18.jpg", title: "Prize Distribution" },
    { imageSrc: "/images/jhankaar/j19.jpg", title: "Prize Distribution" },
    { imageSrc: "/images/jhankaar/j20.png", title: "Prize Distribution" },
    { imageSrc: "/images/jhankaar/j21.jpg", title: "Prize Distribution" },
    { imageSrc: "/images/jhankaar/j22.png", title: "Prize Distribution" },
    { imageSrc: "/images/jhankaar/j23.jpg", title: "Prize Distribution" },
];

const JhankaarPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Jhankaar
                    </h1>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    {/* <AccordionItem title="JHANKAAR Report 2024">
                        <iframe src="/pdfs/cultural/JHANKAAR_Report_2024.pdf" className="w-full h-[80vh] border" title="Jhankaar Report 2024"></iframe>
                    </AccordionItem>
                    <AccordionItem title="JHANKAAR Report 2023">
                        <iframe src="/pdfs/cultural/JHANKAAR_Report_2023.pdf" className="w-full h-[80vh] border" title="Jhankaar Report 2023"></iframe>
                    </AccordionItem> */}
                    <AccordionItem title="Old Archive Data" defaultOpen={true}>
                        <div className="p-4 space-y-10">
                            <section className="space-y-4 text-gray-700 leading-relaxed">
                                {introduction.map((p, i) => <p key={i}>{p}</p>)}
                            </section>
                            <section>
                                <MediaCarousel slides={gallerySlides} />
                            </section>
                        </div>
                    </AccordionItem>
                </div>
            </div>
        </div>
    );
};

export default JhankaarPage;