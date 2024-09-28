import React from 'react';
import mercuryImg from './mercury.png';
import venusImg from './venus.png';
import earthImg from './earth.png';
import marsImg from './mars.png';
import jupiterImg from './jupiter.png';
import saturnImg from './saturn.png';
import uranusImg from './uranus.png';
import neptuneImg from './neptune.png';
import plutoImg from './pluto.png';

import type { StaticImageData } from 'next/image';

const planetSections = [
    {
        imageSrc: mercuryImg,
        description: '水星：水星は太陽に最も近い惑星で、表面温度の変化が激しいです。昼間は400°C、夜間は-180°Cに達します。',
        isImageOnLeft: true,
    },
    {
        imageSrc: venusImg,
        description: '金星：金星は地球の“姉妹星”で、濃厚な二酸化炭素の大気があり、表面温度は460°Cに達します。',
        isImageOnLeft: false,
    },
    {
        imageSrc: earthImg,
        description: '地球：地球は私たちが住んでいる星で、生命が存在する唯一の惑星です。表面の約71%は水で覆われています。',
        isImageOnLeft: true,
    },
    {
        imageSrc: marsImg,
        description: '火星：火星は“赤い惑星”と呼ばれ、表面には酸化鉄が含まれ、赤色を呈しています。多くの峡谷や極冠があります。',
        isImageOnLeft: false,
    },
    {
        imageSrc: jupiterImg,
        description: '木星：木星は太陽系で最も大きな惑星で、巨大なガスの外層を持ち、著名な“大赤斑”という巨大な嵐があります。',
        isImageOnLeft: true,
    },
    {
        imageSrc: saturnImg,
        description: '土星：土星は壮大な環で知られており、環は氷と岩の粒子で構成されています。太陽系で最も顕著な特徴です。',
        isImageOnLeft: false,
    },
    {
        imageSrc: uranusImg,
        description: '天王星：天王星は氷の巨大惑星で、独特の横転軸を持ち、メタンガスにより美しい青色を呈しています。',
        isImageOnLeft: true,
    },
    {
        imageSrc: neptuneImg,
        description: '海王星：海王星は太陽から最も遠い惑星で、表面の風速は時速2000キロに達し、強い青色を持っています。',
        isImageOnLeft: false,
    },
    {
        imageSrc: plutoImg,
        description: '冥王星：冥王星はかつて第9惑星とされていましたが、現在は矮惑星に再分類されています。複雑な表面と窒素氷で覆われた極地があります。',
        isImageOnLeft: true,
    },
];

const DescriptionSection: React.FC<{ imageSrc: string | StaticImageData; description: string; isImageOnLeft: boolean }> = ({ imageSrc, description, isImageOnLeft }) => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: isImageOnLeft ? 'row' : 'row-reverse', 
            alignItems: 'center', 
            marginBottom: '40px', 
            opacity: 0, 
            animation: 'fadeIn 0.5s forwards',
            animationDelay: '0.3s',
            flexWrap: 'wrap'
        }}>
            <img 
                src={typeof imageSrc === 'string' ? imageSrc : imageSrc.src} 
                alt="惑星" 
                style={{ 
                    width: '100%', 
                    maxWidth: '300px', 
                    height: 'auto', 
                    margin: '0 20px', 
                    border: '2px solid #ccc', 
                    borderRadius: '10px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                    transition: 'transform 0.3s',
                    animation: 'move 5s linear infinite',
                    cursor: 'pointer'
                }} 
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.animation = 'shake 0.2s forwards';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.animation = 'none';
                }}
            />
            <div style={{ 
                maxWidth: '100%', 
                flex: 1,
                padding: '10px', 
                backgroundColor: '#fff', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                margin: '10px 0' 
            }}>
                <p style={{ lineHeight: '1.6', color: '#333' }}>{description}</p>
                <button 
                    style={{ 
                        marginTop: '10px', 
                        padding: '10px 15px', 
                        backgroundColor: '#28a745', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer', 
                        transition: 'background-color 0.3s' 
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
                >
                    詳細
                </button>
            </div>
        </div>
    );
};

const SolarSystemPage: React.FC = () => {
    return (
        <>
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    @keyframes move {
                        0% { transform: translateX(-10px); }
                        50% { transform: translateX(10px); }
                        100% { transform: translateX(-10px); }
                    }
                    @keyframes shake {
                        0% { transform: translateX(0); }
                        25% { transform: translateX(-3px); }
                        50% { transform: translateX(3px); }
                        75% { transform: translateX(-3px); }
                        100% { transform: translateX(0); }
                    }
                `}
            </style>
            <div style={{ padding: '20px', fontFamily: 'Roboto, sans-serif', background: '#f4f6f9' }}>
                <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#007bff', marginBottom: '20px', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
                    太陽系の九大惑星
                </h1>
                {planetSections.map((section, index) => (
                    <DescriptionSection 
                        key={index} 
                        imageSrc={section.imageSrc} 
                        description={section.description} 
                        isImageOnLeft={section.isImageOnLeft} 
                    />
                ))}
            </div>
        </>
    );
};

export default SolarSystemPage;
