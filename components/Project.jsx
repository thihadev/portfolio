'use client'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProjectSlider from './ProjectSlider'
import Cta from '@/components/Cta'
import { css } from "@emotion/react";
import { ScaleLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;
const items = [
    {
      "id" : 1,
      "title": "Aung Myin",
      "image": "/projects/am.png",
      "message": "Online Learning Application For Business",
      "description" : "Work Closely and Learn with the Project Manager and Senior. I gain lots of experience in REST APIs, MPU Payment Integration. Using third-party streaming service.",
      "languages" : [
        "Laravel",
        "AWS",
        "DigitalOcean S3",
        "Vimeo",
        "RESTful APIs"
      ]
    },
    {
      "id" : 2,
      "title": "abcPay",
      "image": "/projects/abcpay.png",
      "message": "Wallet Application",
      "description" : "Solved Concurreny & Security issues. Train, manage & provide guidance to junior staff. Work directly with the client to implement features & understand use cases.",
      "languages" : [
        "Laravel",
        "Huawei cloud",
        "SOAP",
        "RESTful APIs",
        "DigitalOcean S3",
        "Redis",
        "Payment Service",
        "Crons"
      ]
    },
    {
      "id" : 3,
      "title": "Zay2Go",
      "image": "/projects/zay2go.png",
      "message": "Purchasing Flower D2D",
      "description" : "Supported Reporting & Google Map APIs for biker. Describe and management using user location with the routing system in Admin Dashboard.",
      "languages" : [
        "Laravel",
        "RESTful APIs",
        "Google Maps APIs",
        "AWS"
      ]
    },
    {
      "id" : 4,
      "title": "POS Dashboard",
      "image": "/projects/abccop.png",
      "message": "Convenience Store Dashboard",
      "description" : "Supported Convenience store for Billing, Topup and QR payment. Developed Store, Employee and Transaction Management.",
      "languages" : [
        "Laravel",
        "Huawei cloud",
        "RESTful APIs"
      ]
    },
    {
      "id" : 5,
      "title": "Tech Ace",
      "image": "/projects/techace.png",
      "message": "IT & Electronic E-commerce",
      "description" : "Developed Synchronize data from the Odoo system. Supported and Maintained APIs for mobile Application & Odoo vendors.",
      "languages" : [
        "Laravel",
        "Digital Ocean",
        "RESTful APIs",
        "Redis",
        "Odoo Service"
      ]
    },
    {
      "id" : 6,
      "title": "Gita Ywar",
      "image": "/projects/gitaywar.png",
      "message": "Music Streaming & Monetization",
      "description" : "Integrate local payment services for mobile applications, such as MPU, KBZPay, Wave Pay, MAB Bank, AYA PAY, Apple InApp purchase.",
      "languages" : [
        "Laravel",
        "Vimeo",
        "Payment Service",
        "Byteplus Live",
        "RESTful APIs",
        "Apex Chartjs"
      ]
    },
    {
      "id" : 7,
      "title": "Zega",
      "image": "/projects/zega.png",
      "message": "Digital Finicial Services to Consumer",
      "description" : "Research, suggest and implement new solutions in performance and scalability improvement of backend services.",
      "languages" : [
        "Laravel",
        "Laravel Forge",
        "eKyc",
        "Musoni System",
        "Redis",
        "Spatie activitylog",
        "RESTful APIs"
      ]
    },
    {
      "id" : 8,
      "title": "Shwe Note",
      "image": "/projects/shwenote.png",
      "message": "30 min book summary, Ebook & Audio",
      "description" : "Supported & maintained APIs. Added new features to the existing system.",
      "languages" : [
        "Laravel",
        "Digital Ocean",
        "Redis",
        "RESTful APIs"
      ]
    },
    {
      "id" : 9,
      "title": "HeyPlay",
      "image": "/projects/heyplay.png",
      "message": "Watch movies & TV shows online",
      "description" : "Managing millions of daily requests, the project incorporated bunny.net for video streaming services, Redis for queuing file uploads, and Memcached for efficient content caching.",
      "languages" : [
        "Laravel",
        "Digital Ocean",
        "Bunny.net",
        "Redis",
        "RESTful APIs"
      ]
    },
    {
      "id" : 10,
      "title": "MyanAnts",
      "image": "/projects/myan-ants.png",
      "message": "Home Service",
      "description" : "Maid, Admin, Customer Management in dashboard. SMS setup to notify main when admin assign an order for them.",
      "languages" : [
        "Laravel",
        "AWS",
        "Websocket",
        "RESTful APIs",
        "Crons"
      ]
    }
]

const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots :false
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots :false
            }
        }
    ]
};

export default function Project () {

  const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate an API call or data fetching
      const fetchData = async () => {
        try {
          // Simulate a delay
          await new Promise(resolve => setTimeout(resolve, 1000)); // 2 seconds delay
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);


    return (
        <section className='pt-9 pb-3 min-h-[82vh]'>
        {/* <section id='projects' className='xl:py-36'> */}
            <div className='container max-w-6xl mx-auto'>
                <h2 className='section-title mb-12 text-center mx-auto'>Projects</h2>
                
                  <div className="carousel">
                  {
                    loading ? 
                    <div className='items-center flex justify-center'>
                      <ScaleLoader 
                          color={"#5fa5f8"}
                          size={50} 
                          css={override}
                          aria-label="Circle Loader"
                          data-testid="loader"
                        />
                      </div> :
                      <Slider {...settings}>
                          {items.map((workItem) => (
                              <ProjectSlider key={workItem.id} item={workItem} />
                          ))}
                      </Slider>
                  }
                  </div>
            </div>

            <div className=' mt-20'>
                <Cta/>
            </div>
        </section>
    )
};

