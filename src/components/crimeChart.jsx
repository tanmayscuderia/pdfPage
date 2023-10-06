import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './crimeChart.css';
import realAssistLogo from '../assets/images/logoMark.svg';
import crimeLocationLogo from '../assets/images/location-share.svg';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
        },
    },
};

export default function CrimeChart() {

    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: 'Crimes',
            data: [],
        }]
    });

    useEffect(() => {
        fetch('https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv')
            .then(response => response.json())
            .then(data => {
                const burglaryData = data.data.map(item => item.Burglary);
                const labels = data.data.map(item => item.data_year);
                setData({
                    labels,
                    datasets: [
                        {
                            label: 'Burglary Crimes',
                            data: burglaryData,
                            borderColor: '#1463FF',
                            backgroundColor: '#1463FF',
                        }
                    ],
                });
            });
    }, []);

    return (
        <div className="crime-chart-container">
            <div className="header">
                <div className="header-details">
                    <div className="header-details-logo">
                        <img src={realAssistLogo} alt="Real Assist AI"></img>
                        RealAssit.AI
                    </div>
                    <div> 123 Main Street, Dover, NH 03820-4667</div>
                </div>
                <div className="border-wrap"></div>
            </div>
            <div className='chart-container'>
                <div className='crime-bar'>
                    <img src={crimeLocationLogo} alt="Location"></img>
                    <div className='crime-bar-text'>Crime</div>
                    <div className="border-wrap crime-bar-border-wrap"></div>
                </div>
                <div className='chart-container-header'>
                    Burglary
                </div>
                <div className="chart-border-container">
                    <div className='chart-border-container-left-side-text'>Arrests</div>
                    <div className='chart'>
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="border-wrap"></div>
                <div className="footer-details">
                    <div className="report-generated"> Report Generated on </div>
                    <div> RealAssist Property Report | Page 1 of 1</div>
                </div>
            </div>
        </div>
    )
}

